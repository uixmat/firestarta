// Components
import { Section } from "@/components/core/section/Section";
import { Card } from "@/components/ui/card";
import Plans from "@/components/marketing/plans/Plans";

// For testing
import ServerSession from "@/components/ServerSession";

export default async function UserSubscription() {
  return (
    <>
      <Section size="sm">
        <Card>
          <ServerSession />
        </Card>
        <Plans />
      </Section>
    </>
  );
}
