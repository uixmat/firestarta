import React, { Suspense } from "react";
import Plans from "@/components/marketing/plans/Plans";
import Loading from "@/components/marketing/plans/loading";

export default function Page() {
  return (
    <div className="container py-20">
      <div className="w-full my-16 text-center">
        <h1 className="text-3xl font-bold text-white">Pricing</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <Plans />
      </Suspense>
    </div>
  );
}
