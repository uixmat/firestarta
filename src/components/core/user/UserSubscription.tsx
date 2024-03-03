import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { formatDistanceToNow, format } from "date-fns";
// import ls from "@/lib/lemonsqueezy";

// Components
import { Section } from "@/components/core/section/Section";
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import Plans from "@/components/marketing/plans/Plans";
import { BadgeCheck } from "lucide-react";

// For testing
// import ServerSession from "@/components/ServerSession";

export default async function UserSubscription() {
  const session = await getServerSession(authOptions);

  // Subscription data from Database
  const subscription = session?.user?.subscriptions[0];

  // Customer data from Lemonsqueezy API
  // const customer_id = subscription?.customerId;
  // const customer = await ls.getCustomer({ id: customer_id });

  return (
    <>
      <Section size="sm">
        {subscription ? (
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">
                    {subscription.name}
                  </span>
                  <BadgeCheck size={26} className="text-primary" />
                </div>
              </CardTitle>
              <CardDescription>
                Status <Badge>{subscription.status}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                Your subscription will <b>auto-renew</b> in{" "}
                {formatDistanceToNow(subscription.renewsAt)}.
              </p>
              <p>
                <small>
                  Renewal date:{" "}
                  {format(subscription.renewsAt, "MM/dd/yyyy 'at' HH:mm zzzz")}
                </small>
              </p>
              {/* <ServerSession /> */}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Firestarta</CardTitle>
              <CardDescription>
                Get access to all the features Firestarta has to offer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Plans />
            </CardContent>
          </Card>
        )}
      </Section>
    </>
  );
}
