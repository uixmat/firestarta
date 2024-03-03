import { getUserById } from "@/lib/prisma/users";

// Components
import { Section } from "@/components/core/section/Section";
import { Card } from "@/components/ui/card";
import Plans from "@/components/marketing/plans/Plans";

// For testing
import ServerSession from "@/components/ServerSession";

interface UserProps {
  session: any;
}

export default async function UserSubscription({ session }: UserProps) {
  const userId = session.user.id as string;
  const { user } = await getUserById(userId);
  console.log("Firestarta User", user);

  return (
    <>
      <Section size="sm">
        <Card>
          <ServerSession />
        </Card>
        <Plans session={session} />
      </Section>
    </>
  );
}
