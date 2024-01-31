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
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  );
}
