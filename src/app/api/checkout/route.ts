import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import ls from "@/lib/lemonsqueezy";

export async function POST(request) {
  const session = await getSession();

  if(!session) {
    return NextResponse.json({ error: true, message: "Not logged in" }, { status: 401 });
  }

  const res = await request.json()

  if (!res.variantId) {
    return NextResponse.json({ error: true, message: "Missing variantId" }, { status: 400 });
  }

  // Customise the checkout experience
  // All the options: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
  const attributes = {
    'product_options': {
        'enabled_variants': [res.variantId], // Only show the selected variant in the checkout
        'redirect_url': `${process.env.NEXT_PUBLIC_SITE_URL}/billing/`,
        'receipt_link_url': `${process.env.NEXT_PUBLIC_SITE_URL}/billing/`,
        'receipt_button_text': 'Go to your account',
        'receipt_thank_you_note': 'Thank you for signing up to Lemonstand!'
    }
  }

  const checkout_options_attr = {
    'embed': true, // Use checkout overlay
    'media': false,
  }
  // const checkout_data_attr = {
  //   'email': session.user.email, // Displays in the checkout form
  //   'custom': {
  //       'user_id': session.user.id // Sent in the background; visible in webhooks and API calls
  //   }
  // }

  try {
    const checkout = await ls.createCheckout({
      store: process.env.LEMONSQUEEZY_STORE_ID,
      variant: res.variantId,
      custom_price: res.price,
      checkout_options: checkout_options_attr,
      // checkout_data: checkout_data_attr,
    })

    return NextResponse.json({'error': false, 'url': checkout['data']['attributes']['url']}, {status: 200})
  } catch (error) {
    return NextResponse.json({'error': true, 'message': error.message}, {status: 400})
  }
}