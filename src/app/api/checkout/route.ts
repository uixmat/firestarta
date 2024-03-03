import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import ls from '@/lib/lemonsqueezy'

export async function POST(request) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: true, message: 'Not logged in.' }, { status: 401 })
  }

  const res = await request.json()

  if ( !res.variantId ) {
    return NextResponse.json({ error: true, message: 'No variant ID was provided.' }, { status: 400 })
  }

  // Checkout options: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
  const attributes = {
    "checkout_options": {
      "embed": true,
      "media": false,
    },
    "checkout_data": {
      "email": session.user.email,
      "custom": {
        "user_id": session.user.id,
      },
    },
    "product_options": {
      "enabled_variants": [res.variantId],
      "redirect_url": `${process.env.NEXT_PUBLIC_SITE_URL}`,
      "receipt_link_url": `${process.env.NEXT_PUBLIC_SITE_URL}`,
      "receipt_button_text": "Go back",
      "receipt_thank_you_note": "Thank you for signing up!"
    }
  }

  try {
    // Check data & log in console
    console.log("- - - - - -")
    console.log("storeId", process.env.LEMONSQUEEZY_STORE_ID)
    // console.log("variantId", res.variantId)
    // console.log("user id", session.user.id)
    console.log("attributes", attributes)
    console.log("- - - - - -")
    const checkout = await ls.createCheckout({
      storeId: Number(process.env.LEMONSQUEEZY_STORE_ID),
      variantId: res.variantId,
      attributes
    })
    
    return NextResponse.json({'error': false, 'url': checkout['data']['attributes']['url']}, {status: 200})
  } catch (e) {
    return NextResponse.json({'error': true, 'message': e.message}, {status: 400})
  }
}
