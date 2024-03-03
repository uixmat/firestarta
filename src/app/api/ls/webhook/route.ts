import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import prisma from '@/lib/prisma';

import {
  LemonsqueezyWebhookPayload,
  LemonsqueezySubscriptionAttributes,
} from '@/types/lemonsqueezy';

const verifySignature = (rawBody: string, signature: string, secret: string): boolean => {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
  const signatureBuffer = Buffer.from(signature, 'utf8');
  return digest.length === signatureBuffer.length && crypto.timingSafeEqual(digest, signatureBuffer);
};

export const POST = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-signature') as string || '';
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';

    if (!verifySignature(rawBody, signature, secret)) {
      return new Response('Invalid signature', { status: 401 });
    }

    const payload = JSON.parse(rawBody) as LemonsqueezyWebhookPayload;
    const eventName = payload.meta.event_name;
    const lemonSqueezyId = parseInt(payload.data.id);

    let variant_id, userId, customerId, subscriptionData;

    if (eventName === 'subscription_created' || eventName === 'subscription_updated' || eventName === 'subscription_cancelled' || eventName === 'order_created') {
      subscriptionData = payload.data.attributes as LemonsqueezySubscriptionAttributes;
      userId = payload.meta.custom_data ? payload.meta.custom_data.user_id.toString() : null;
      customerId = subscriptionData.customer_id;
      variant_id = subscriptionData.first_subscription_item ? subscriptionData.variant_id : null;
    }

    switch (eventName) {
      case 'subscription_created':
      case 'subscription_updated':
        await prisma.subscription.upsert({
          where: { lemonSqueezyId: lemonSqueezyId },
          update: {
            status: subscriptionData.status,
            renewsAt: subscriptionData.renews_at ? new Date(subscriptionData.renews_at) : null,
            endsAt: subscriptionData.ends_at ? new Date(subscriptionData.ends_at) : null,
            trialEndsAt: subscriptionData.trial_ends_at ? new Date(subscriptionData.trial_ends_at) : null,
            userId: userId,
            customerId: customerId,
          },
          create: {
            lemonSqueezyId: lemonSqueezyId,
            customerId: customerId,
            orderId: subscriptionData.order_id,
            name: subscriptionData.product_name,
            email: subscriptionData.user_email,
            status: subscriptionData.status,
            renewsAt: subscriptionData.renews_at ? new Date(subscriptionData.renews_at) : null,
            endsAt: subscriptionData.ends_at ? new Date(subscriptionData.ends_at) : null,
            trialEndsAt: subscriptionData.trial_ends_at ? new Date(subscriptionData.trial_ends_at) : null,
            user: {
              connect: { id: userId },
            },
          },
        });
        break;
      case 'subscription_cancelled':
        await prisma.subscription.update({
          where: { lemonSqueezyId: lemonSqueezyId },
          data: { status: 'cancelled', endsAt: new Date() }, 
          // Update with actual cancellation logic
        });
        break;
      default:
        throw new Error(`Unhandled event: ${eventName}`);
    }

    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
