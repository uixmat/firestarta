import GradientText from "@/components/core/gradient-text/GradientText";
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
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto">
      <Section size="md">
        <SectionHeader
          title={
            <>
              Many developers
              <br />
              <GradientText>love using Firestarta.</GradientText>
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
            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
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

            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
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
            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-accent">10/10/2024</p>
              </CardFooter>
            </Card>

            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
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
          </div>

          <div className="grid gap-6">
            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus blanditiis cupiditate corporis at delectus
                  dolorum.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-accent">10/10/2024</p>
              </CardFooter>
            </Card>

            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Consequuntur optio recusandae, in reiciendis?
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-accent">10/10/2024</p>
              </CardFooter>
            </Card>

            <Card className="bg-transparent bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/4294822?v=4" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-md">
                      Matt Litherland
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-accent">
                      VP Engineering @Company
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Consequuntur optio recusandae!</p>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-accent">10/10/2024</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
