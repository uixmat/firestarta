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
  const products = await ls.listAllProducts();
  const subscription = null; // TODO
  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-4xl gap-6 p-4 mx-auto md:flex-row md:gap-12 md:p-6">
        {products.data.map((product) => (
          <Card className="flex-1" key={product.id}>
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
        ))}
      </div>

      {/* Products object */}
      <code className="text-xs">
        <pre>{JSON.stringify(products.data, null, 2)}</pre>
      </code>
    </>
  );
};

export default Plans;
