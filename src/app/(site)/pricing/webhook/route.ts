import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import prisma from '@/lib/prisma';

import {
  LemonsqueezyWebhookPayload,
  LemonsqueezySubscriptionAttributes
} from '@/types/lemonsqueezy';

const verifySignature = (rawBody: string, signature: string, secret: string): boolean => {
  const hmac = crypto.createHmac('sha256', secret);
  
  // Create the digest from the raw body using the secret.
  const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
  
  // Create the signature buffer from the signature string in the headers.
  const signatureBuffer = Buffer.from(signature, 'utf8');
  
  // Compare the buffers using crypto.timingSafeEqual.
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
    const subscriptionData = payload.data.attributes as LemonsqueezySubscriptionAttributes;
    const eventName = payload.meta.event_name;

    const lemonSqueezyId = parseInt(payload.data.id)
    let price = subscriptionData['first_subscription_item']['price']
    let variant_id = subscriptionData['first_subscription_item']['variant_id']
    


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
          },
          create: {
            lemonSqueezyId: lemonSqueezyId,
            orderId: subscriptionData.order_id,
            name: subscriptionData.product_name,
            email: subscriptionData.user_email,
            status: subscriptionData.status,
            renewsAt: subscriptionData.renews_at ? new Date(subscriptionData.renews_at) : null,
            endsAt: subscriptionData.ends_at ? new Date(subscriptionData.ends_at) : null,
            trialEndsAt: subscriptionData.trial_ends_at ? new Date(subscriptionData.trial_ends_at) : null,
            price: price,
            planId: variant_id,
            userId: payload.meta.custom_data.customer_id, // custom data
          },
        });
        break;
      case 'subscription_cancelled':
        await prisma.subscription.update({
          where: { lemonSqueezyId: parseInt(payload.data.id) },
          data: { status: 'cancelled', endsAt: new Date() }, // Update with actual cancellation logic
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