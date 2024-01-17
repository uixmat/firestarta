import { getUserById } from "@/lib/prisma/users";
import Hero from "@/components/core/hero/Hero";
import { Section } from "@/components/core/section/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PageProps {
  params: {
    userId: string;
  };
}

async function getUser(userId: string) {
  const { user } = await getUserById(userId);
  if (!user) {
    throw new Error("Failed to fetch data");
  }

  return user;
}

const Page = async ({ params }: PageProps) => {
  const user = await getUser(params.userId);

  return (
    <>
      <Hero
        size="sm"
        title={user.name as string}
        description={user?.jobTitle || "Unemployed"}
      />
      <div className="container pb-20 max-w-lg">
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

export default Page;
