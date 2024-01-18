import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import { Section } from "@/components/core/section/Section";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/core/section/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero
        size="lg"
        title={
          <>
            Build faster,{" "}
            <b className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-lime-200 to-yellow-50">
              build better!
            </b>
          </>
        }
        description={
          <>
            <p>
              Bootstrap your next application with tools you&apos;re familiar
              with.
            </p>
            <p>
              Built on Next.js & Prisma for scalability with full authentication
              using NextAuth out the box.
            </p>
          </>
        }
      >
        <div className="relative flex flex-wrap items-center justify-center gap-12 p-6 mb-10">
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] top-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] bottom-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[calc(100%+100px)] w-[1px] top-50 right-0 border-1 border-r border-dashed hidden md:block" />
          <Image
            src="/logos/nextjs.svg"
            alt="Next.js"
            width={100}
            height={20}
          />
          <Image src="/logos/prisma.svg" alt="Prisma" width={120} height={47} />
          <Image
            src="/logos/shadcnui.svg"
            alt="shadcn/ui"
            width={124}
            height={20}
          />
          <Image
            src="/logos/tailwindcss.svg"
            alt="Tailwind CSS"
            width={130}
            height={21}
          />
        </div>
        <Button asChild>
          <Link href="https://github.com/mattsince87/nextauth-prisma">
            <Github className="h-4" />
            Get started now
          </Link>
        </Button>
      </Hero>

      <div className="container">
        <Section>
          <SectionHeader
            title={
              <>
                Powerful integrations <br />
                <b className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-lime-200 to-yellow-50">
                  out of the box.
                </b>
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
                  Firestarta uses NextAuth with built in support for OAuth 1.0
                  &amp; 2.0 social logins, magic links and passwordless.
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
                  Easy database management with automated migrations,
                  type-safety and easy relational mapping.
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
                  The simple to use static blog allows you to push articles
                  quickly and easily without the hastle of a CMS.
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
                  Firestarta is packed with custom components to get your site
                  up &amp; running and looking good, quickly.
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
                  Quickly copy &amp; paste beautiful components that are
                  accessible and easily customisable.
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
                  Easily theme, extended and customise the look of your site
                  with Tailwind CSS.
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
                  Take advantage of a well organised site structure by using the
                  new app router.
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
                  Support multiple languages, with your app code becoming
                  simpler instead of more complex.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section size="md">
          <SectionHeader
            title={
              <>
                Many developers
                <br />
                <b className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-lime-200 to-yellow-50">
                  love using Firestarta.
                </b>
              </>
            }
            description={
              <p>
                Firestarta is continuously updated and built to keep your
                boilerplate always up to date.
              </p>
            }
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus blanditiis cupiditate corporis at delectus
                    dolorum dolore nemo dolores dicta doloremque expedita
                    nostrum officia suscipit, unde consequuntur optio
                    recusandae, in reiciendis?
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Amet consectetur adipisicing elit. Repellendus blanditiis
                    cupiditate corporis at delectus dolorum dolore nemo dolores
                    dicta doloremque expedita nostrum officia suscipit.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Delectus dolorum dolore nemo dolores dicta doloremque
                    expedita nostrum officia suscipit.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Repellendus blanditiis cupiditate corporis at delectus
                    dolorum dolore nemo dolores dicta doloremque expedita
                    nostrum officia suscipit, unde consequuntur optio
                    recusandae, in reiciendis?
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus blanditiis cupiditate corporis at delectus
                    dolorum dolore nemo dolores dicta doloremque expedita
                    nostrum.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md">Matt Litherland</CardTitle>
                      <CardDescription className="text-sm">
                        Multi-lingual support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus blanditiis cupiditate corporis.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-accent">10/10/2024</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
