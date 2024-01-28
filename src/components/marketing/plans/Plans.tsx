import ls from "@/lib/lemonsqueezy";

// shadcn components
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import PlanButton from "./PlanButton";

export const Plans = async () => {
  const products = await ls.getProducts();
  const subscription = null; // TODO

  const productsWithVariantIds = await Promise.all(
    products.data.map(async (product) => {
      const pid = parseInt(product.id, 10);
      const variantsResponse = await ls.getVariants({ productId: pid });
      const variants = variantsResponse.data;

      // First variant id
      const variantId = variants.length > 0 ? variants[0].id : null;

      return { ...product, variant_id: variantId };
    })
  );

  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-4xl gap-6 p-4 mx-auto md:flex-row md:gap-12 md:p-6">
        {productsWithVariantIds.map((product) => {
          return (
            <Card
              className="flex-1"
              key={product.id}
              data-productid={product.id}
              data-variantid={product.variant_id}
            >
              <CardHeader>
                <CardTitle>{product.attributes.name}</CardTitle>
                <CardDescription>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.attributes.description,
                    }}
                  />
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-4xl font-bold">
                  {product.attributes.price_formatted}
                </div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>1 Workspace</li>
                  <li>Unlimited Public Projects</li>
                  <li>Community Access</li>
                </ul>
                <PlanButton plan={product} subscription={subscription} />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <script src="https://app.lemonsqueezy.com/js/lemon.js" defer />

      {/* Products object for testing */}
      {/* <code className="text-xs">
        <pre>{JSON.stringify(products.data, null, 2)}</pre>
      </code> */}
    </>
  );
};

export default Plans;
