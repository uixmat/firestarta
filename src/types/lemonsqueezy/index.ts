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
  


