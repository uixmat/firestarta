import { Link } from "@/lib/intl/navigation";
import { getUsers } from "@/lib/prisma/users";
import { getInitials } from "@/lib/utils/initials";

import { Section } from "@/components/core/section/Section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function UsersList() {
  const response = await getUsers();

  if ("error" in response) {
    return (
      <Section>
        <h1>Error fetching users</h1>
        <p>{String(response.error)}</p>
      </Section>
    );
  }

  const users = response.users;
  if (users.length === 0) {
    return (
      <Section>
        <h1>No users</h1>
        <p>There are currently no users to display.</p>
      </Section>
    );
  }

  return (
    <Section>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Users fetched using SSR</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {users?.map((user: any, id: number) => (
              <Link
                key={user.id}
                href={`/users/${user.id}`}
                className="flex items-center justify-between p-2 space-x-4 transition-all rounded-md hover:bg-muted"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.image as string} />
                    <AvatarFallback className="uppercase">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col w-full overflow-hidden">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="block w-full overflow-hidden text-sm text-muted-foreground whitespace-nowrap text-ellipsis">
                      {user.jobTitle ? user.jobTitle : "Firestarta"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
