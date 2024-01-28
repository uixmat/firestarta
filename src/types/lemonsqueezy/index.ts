export interface Variant {
  id: string;
  name: string;
  description: any,
  status: any;
  product?: Product;
  attributes: VariantAttributes;
  sort: any;
  interval: any;
  interval_count: any;
}

interface VariantAttributes {
  name: string;
  status: any;
  sort: any;
  description: any;
  interval: string;
  interval_count: any;
  is_subscription: boolean;
  has_free_trial: boolean;
  product_id: any;
}

export interface Product {
  id: any;
  productId: any,
  name: string,
  slug: any,
  store_id: any,
}

export interface LemonsqueezySubscriptionAttributes {
  user_id: any; // Custom data
  store_id: number;
  customer_id: number;
  order_id: number;
  order_item_id: number;
  product_id: number;
  variant_id: number;
  product_name: string;
  variant_name: string;
  user_name: string;
  user_email: string;
  status: string;
  status_formatted: string;
  card_brand: string;
  card_last_four: string;
  pause: string | null;
  cancelled: boolean;
  trial_ends_at: string | null;
  billing_anchor: number;
  urls: {
    update_payment_method: string;
  };
  renews_at: string;
  ends_at: string | null;
  created_at: string;
  updated_at: string;
  test_mode: boolean;
}

export interface LemonsqueezyOrderAttributes {
  first_subscription_item: {
    id: number;
    subscription_id: number;
    price_id: number;
  };
}

export interface LemonsqueezyWebhookPayload {
  meta: {
    test_mode: boolean;
    event_name: 'subscription_created' | 'subscription_updated' | 'subscription_cancelled' | 'order_created';
    custom_data: {
      user_id: string;
    };
  };
  data: {
    id: string;
    type: string;
    attributes: LemonsqueezySubscriptionAttributes | LemonsqueezyOrderAttributes;
    relationships: any;
  };
}
