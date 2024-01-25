"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function PlanButton({ plan, subscription }) {
  const [loading, setLoading] = useState(false);

  async function createCheckout(variantId) {
    console.log("Variant/Plan ID", variantId);
    setLoading(true);

    // Create Lemon Squeezy Checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ variantId: variantId }),
    });

    const checkout = await res.json();
    if (checkout.error) {
      toast.error("Something went wrong.");
      setLoading(false);
      return;
    } else {
      console.log("Redirecting...");
      redirect(plan.attributes.buy_now_url);
    }

    setLoading(false);
  }

  return (
    <Button onClick={() => createCheckout(plan.id)}>
      Choose plan ({plan.id})
    </Button>
  );
}
