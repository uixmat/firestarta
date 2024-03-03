"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

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
    <Button
      onClick={(e) => createCheckout(e, Number(plan.variant_id))}
      className="gap-1"
    >
      {isMutating ? (
        <>
          <Loader size={16} className="animate animate-spin" />
          <span className="animate-pulse">Processing</span>
        </>
      ) : (
        "Choose plan"
      )}
    </Button>
  );
}
