"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function PlanButton({ plan, subscription }) {
  const [isMutating, setIsMutating] = useState(false); // For loading

  async function createCheckout(e, variantId) {
    setIsMutating(true);

    // Create a checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        variantId: variantId,
      }),
    });
    const checkout = await res.json();
    if (checkout.error) {
      toast.error(checkout.message);
    } else {
      console.log(checkout["url"]);
      LemonSqueezy.Url.Open(checkout["url"]);
    }

    setIsMutating(false);
  }

  return (
    <Button onClick={(e) => createCheckout(e, Number(plan.variant_id))}>
      Choose plan
    </Button>
  );
}
