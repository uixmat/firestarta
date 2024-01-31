import GradientText from "@/components/core/gradient-text/GradientText";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import NextAuthLogo from "@/components/logos/auth";
import LemonSqueezyLogo from "@/components/logos/lemonsqueezy";
import NextLogo from "@/components/logos/next";
import ResendLogo from "@/components/logos/resend";
import ShadcnuiLogo from "@/components/logos/shadcnui";
import TailwindLogo from "@/components/logos/tailwind";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Integrations() {
  return (
    <div className="max-w-6xl mx-auto">
      <Section size="md">
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
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <NextAuthLogo
                  variant="symbol"
                  className="relative self-start mb-2 h-14"
                />
                <CardTitle className="text-white text-md">
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Firestarta uses NextAuth with built in support for OAuth 1.0
                  &amp; 2.0 social logins and magic links.
                </p>
              </CardContent>
              <CardFooter className="relative">
                <NextAuthLogo className="self-start h-6" />
              </CardFooter>
            </div>
          </Card>

          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <LemonSqueezyLogo
                  variant="symbol"
                  className="self-start mb-2 h-14"
                />
                <CardTitle className="text-white text-md">
                  Subscriptions
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Easy database management with automated migrations,
                  type-safety and easy relational mapping.
                </p>
              </CardContent>
              <CardFooter className="relative">
                <LemonSqueezyLogo className="self-start" variant="color" />
              </CardFooter>
            </div>
          </Card>

          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <TailwindLogo
                  variant="symbol"
                  className="self-start mb-2 h-14"
                />
                <CardTitle className="text-white text-md">
                  Beautifully themed
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  The simple to use static blog allows you to push articles
                  quickly and easily without the hastle of a CMS.
                </p>
              </CardContent>
              <CardFooter className="relative flex items-center gap-3 text-white">
                <TailwindLogo variant="color" className="self-start" />
                <ShadcnuiLogo className="self-start" fill="currentColor" />
              </CardFooter>
            </div>
          </Card>

          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <ResendLogo variant="symbol" className="self-start mb-2 h-14" />
                <CardTitle className="text-white text-md">
                  Email provider
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Firestarta is packed with custom components to get your site
                  up &amp; running and looking good, quickly.
                </p>
              </CardContent>
              <CardFooter className="relative">
                <ResendLogo className="self-start" />
              </CardFooter>
            </div>
          </Card>

          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <NextLogo variant="symbol" className="self-start mb-2 h-14" />
                <CardTitle className="text-white text-md">Next.js 14</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Quickly copy &amp; paste beautiful components that are
                  accessible and easily customisable.
                </p>
              </CardContent>
              <CardFooter className="relative">
                <NextLogo className="self-start text-white" />
              </CardFooter>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
