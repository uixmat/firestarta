import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DeleteAccountButton } from "./DeleteAccountButton";
import { AccountForm } from "./AccountForm";
import { Section } from "@/components/core/section/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="container py-20">
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Your account</CardTitle>
            <CardDescription>{session?.user?.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{session?.user?.name}</p>
            <p>{session?.user?.jobTitle}</p>
            <code className="text-xs">{session?.user?.id}</code>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Edit information</CardTitle>
            <CardDescription>{session?.user?.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <AccountForm data={session} />
          </CardContent>
        </Card>

        {/* <hr />
        <h2>NextAuth Server Session</h2>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre> */}
      </Section>

      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Danger zone</CardTitle>
            <CardDescription>Be careful here</CardDescription>
          </CardHeader>
          <CardContent>
            <DeleteAccountButton email={session?.user?.email} />
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
