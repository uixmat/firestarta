// Components
import { Section } from "@/components/core/section/Section";
import { Card } from "@/components/ui/card";
import Plans from "@/components/marketing/plans/Plans";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import ls from "@/lib/lemonsqueezy";

// For testing
import ServerSession from "@/components/ServerSession";

// const lemonUser = ls.getUser();
// const lemonCustomers = ls.getCustomers();
const lemonCustomer = ls.getCustomer({ id: 2428016 });

export default async function UserSubscription() {
  // console.log("LEMON USER", await lemonUser);
  console.log("LEMON CUSTOMER", await lemonCustomer);
  // console.log("LEMON CUSTOMERS", await lemonCustomers);

  return (
    <>
      <Section size="sm">
        <Button>Something</Button>
        <Card>
          <ServerSession />
        </Card>
        <Plans />
      </Section>
    </>
  );
}
