import { getUserById } from "@/lib/prisma/users";
import { BadgeCheck } from "lucide-react";

interface UserProps {
  session: any;
}

export default async function UserSubscription({ session }: UserProps) {
  const userId = session.user.id as string;
  const { user } = await getUserById(userId);
  console.log(user); // DB User object

  return (
    <>
      <div>
        <h3>{session?.user?.name}</h3>
        <p>{session?.user?.jobTitle}</p>
      </div>
      <div>
        <h3>Subscription</h3>
        {user?.subscriptions && user.subscriptions.length > 0 ? (
          <>
            {user.subscriptions.map((subscription) => (
              <p key={subscription.id}>
                <span className="inline-flex items-center">
                  <BadgeCheck className="inline w-5 h-5 mr-2 text-lime-300" />{" "}
                  {subscription.name}
                </span>
              </p>
            ))}
          </>
        ) : (
          <p>You are not subscribed</p>
        )}
      </div>
    </>
  );
}
