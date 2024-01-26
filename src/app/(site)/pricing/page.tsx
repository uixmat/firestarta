import Plans from "@/components/marketing/plans/Plans";
import Script from "next/script";

export default function Page() {
  return (
    <div className="container py-20">
      <h1>Pricing</h1>
      <Plans />

      <Script src="https://app.lemonsqueezy.com/js/lemon.js" />
    </div>
  );
}
