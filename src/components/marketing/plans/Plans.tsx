import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getUserById } from "@/lib/prisma/users";
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
import { Button } from "@/components/ui/button";

export const Plans = async () => {
  const session = await getServerSession(authOptions);
  // Get User
  const userId = session.user.id as string;
  const { user } = await getUserById(userId);
  // console.log("Firestarta User", user);
  // console.log("Lemon User", await ls.getUser());

  // Get Products (Subscriptions)
  const products = await ls.getProducts();
  const subscription = null; // TODO; get subscription data and pass it to button

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
      <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto md:flex-row md:gap-12">
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.attributes.description,
                  }}
                />
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
                {user.subscriptions.length > 0 ? (
                  <Button>Manage Subscription</Button>
                ) : (
                  <PlanButton plan={product} subscription={subscription} />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <script src="https://app.lemonsqueezy.com/js/lemon.js" defer />
    </>
  );
};

export default Plans;
