import { getUserById } from "@/lib/prisma/users";
import Hero from "@/components/core/hero/Hero";
import { Section } from "@/components/core/section/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const user = await getUser(params.id);

  if (!user) {
    return {
      title: "User not found",
    };
  }
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    title: `${user.name}'s profile`,
    description: `Welcome to ${user.name}'s profile page.`,
  };
}

async function getUser(id: string) {
  const { user } = await getUserById(id);
  if (!user) {
    throw new Error("Failed to fetch data");
  }

  return user;
}

const User = async ({ params }: PageProps) => {
  const user = await getUser(params.id);

  return (
    <>
      <Hero
        size="sm"
        title={user.name as string}
        description={user?.jobTitle || "Firestarta"}
      />
      <div className="container max-w-lg pb-20">
        <Section>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">{user.name}&apos;s profile</h2>
              <p className="text-gray-500">User details and settings.</p>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quam aliquam, sit veritatis sint sed corrupti ullam
                aperiam enim quia blanditiis incidunt ex sapiente nulla velit
                iste atque explicabo animi?
              </p>
            </CardContent>
          </Card>
        </Section>
      </div>
    </>
  );
};

export default User;
