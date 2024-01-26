import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import LemonSqueezy from '@lemonsqueezy/lemonsqueezy.js'

const ls = new LemonSqueezy(process.env.LEMONSQUEEZY_API_KEY)

export async function POST(request) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: true, message: 'Not logged in.' }, { status: 401 })
  }

  const res = await request.json()

  if ( !res.variantId ) {
    return NextResponse.json({ error: true, message: 'No variant ID was provided.' }, { status: 400 })
  }

  // Customise the checkout experience
  // All the options: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
  const attributes = {
      'checkout_options': {
          'embed': true,
          'media': false,
      },
      'checkout_data': {
          'email': session.user.email,
          'custom': {
              'user_id': session.user.id
          }
      },
      'product_options': {
          'enabled_variants': [res.variantId],
          'redirect_url': `${process.env.NEXT_PUBLIC_APP_URL}/billing/`,
          'receipt_link_url': `${process.env.NEXT_PUBLIC_APP_URL}/billing/`,
          'receipt_button_text': 'Go to your account',
          'receipt_thank_you_note': 'Thank you for signing up to Lemonstand!'
      }
  }

  try {
    // Check data
    console.log("- - - - - -", res.variantId, process.env.LEMONSQUEEZY_STORE_ID)
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