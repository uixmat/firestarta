import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Testimonials() {
  return (
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
                Repellendus blanditiis cupiditate corporis at delectus dolorum
                dolore nemo dolores dicta doloremque expedita nostrum officia
                suscipit, unde consequuntur optio recusandae, in reiciendis?
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
                Delectus dolorum dolore nemo dolores dicta doloremque expedita
                nostrum officia suscipit.
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
                Repellendus blanditiis cupiditate corporis at delectus dolorum
                dolore nemo dolores dicta doloremque expedita nostrum officia
                suscipit, unde consequuntur optio recusandae, in reiciendis?
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
                Repellendus blanditiis cupiditate corporis at delectus dolorum
                dolore nemo dolores dicta doloremque expedita nostrum.
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
  );
}
