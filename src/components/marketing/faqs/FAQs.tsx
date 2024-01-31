import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto">
      <Section>
        <SectionHeader
          title={
            <>
              Frequently asked <br />
              questions...
            </>
          }
        />
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          <AccordionItem
            value="item-1"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              What is Firestarta?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Firestarta is a boilerplate SaaS starter kit. It&apos;s built with
              Next.js from the ground up and utilises some popular packages and
              integrations. Firestarta is designed and built to give developers
              the perfect starting point for their SaaS project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              Who needs Firestarta?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Whether you&apos;re an individual developer or a small-mid sized
              agency, Firestarta provides a robust boilerplate to save you time
              when developing your next SaaS products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              Is Firestarta scalable?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes, Firestarta is built with scalability in mind and is designed
              to be flkexible enough for any SaaS project and even projects that
              aren&apos;t SaaS related.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              Is Firestarta maintained regularly?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes, Firestarta is maintained regularly and is constantly kept
              uptodate with the latest package versions to avoid legacy code and
              keep your boilerplate fresh every time you statrt a new project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              Will there be future features?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes. Features are added and planned regularly, they can be
              requested by contacting{" "}
              <a
                href="https://x.com/uixmat"
                target="_blank"
                className="text-indigo-400 hover:text-white"
              >
                Matt on X.com
              </a>
              , be sure to check Github for notes about upcoming features. .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-white">
              Is Firestarta free?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes currently Firestarta is 100% free and open-source. However
              there are plans to turn Firestarta into a premium product in the
              near future.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  );
}
