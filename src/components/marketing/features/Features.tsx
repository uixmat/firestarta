import GradientText from "@/components/core/gradient-text/GradientText";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  return (
    <Section>
      <SectionHeader
        title={
          <>
            Powerful integrations <br />
            <GradientText>out of the box.</GradientText>
          </>
        }
        description={
          <p>
            Firestarta is made with integrations right out of the box.
            Authentication, payments & subscriptions, emails and more.
          </p>
        }
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Authentication</CardTitle>
            <CardDescription className="text-sm">
              Straight forward authentication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Firestarta uses NextAuth with built in support for OAuth 1.0 &amp;
              2.0 social logins and magic links.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Prisma</CardTitle>
            <CardDescription className="text-sm">
              Database management Prisma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Easy database management with automated migrations, type-safety
              and easy relational mapping.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Blog</CardTitle>
            <CardDescription className="text-sm">
              Easy to use blog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The simple to use static blog allows you to push articles quickly
              and easily without the hastle of a CMS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Components</CardTitle>
            <CardDescription className="text-sm">
              Custom components &amp; templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Firestarta is packed with custom components to get your site up
              &amp; running and looking good, quickly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">shadcn / ui</CardTitle>
            <CardDescription className="text-sm">
              Built on Radix UI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Quickly copy &amp; paste beautiful components that are accessible
              and easily customisable.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Tailwind CSS</CardTitle>
            <CardDescription className="text-sm">
              Easily theme your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Easily theme, extended and customise the look of your site with
              Tailwind CSS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Next.js 14</CardTitle>
            <CardDescription className="text-sm">
              Using the app router
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Take advantage of a well organised site structure by using the new
              app router.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Internationalisation</CardTitle>
            <CardDescription className="text-sm">
              Multi-lingual support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Support multiple languages, with your app code becoming simpler
              instead of more complex.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
