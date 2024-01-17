import Link from "next/link";
import { getUsers } from "@/lib/prisma/users";
import { Section } from "@/components/core/section/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <div className="">
            {users?.map((user: any, id: number) => (
              <Link
                key={user.id}
                href={`/users/${user.id}`}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.image as string} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
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
