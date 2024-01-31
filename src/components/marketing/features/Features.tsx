import Logo from "@/components/core/brand/Logo";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Section } from "@/components/core/section/Section";
import Pill from "@/components/core/pill/Pill";

import {
  BadgeCheck,
  Fingerprint,
  Languages,
  LayoutTemplate,
  SunDim,
} from "lucide-react";
import TailwindLogo from "@/components/logos/tailwind";
import ShadcnuiLogo from "@/components/logos/shadcnui";

export default function Features() {
  return (
    <Section>
      <SectionHeader
        title={
          <>
            The ultimate SaaS boilerplate
            <br />
            packed with features.
          </>
        }
      />
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <Fingerprint className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Authentication</b>
          </Pill>
          <Pill>
            <BadgeCheck className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Subscriptions</b>
          </Pill>
          <Pill>
            <TailwindLogo variant="symbol" className="h-4" />
            <b className="text-white font-poppins">Tailwind CSS</b>
          </Pill>
          <Pill>
            <ShadcnuiLogo
              variant="symbol"
              className="h-3 text-violet-400"
              fill="currentColor"
            />
            <b className="text-white font-poppins">shadcn/ui</b>
          </Pill>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-[178px] h-[178px] rounded-full bg-transparent border-2 border-border/60 backdrop-blur-sm shadow-[0_0_80px_0_theme(colors.indigo.500/20%)]">
            <Logo className="h-16 mt-2 ml-1" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <LayoutTemplate className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Custom components</b>
          </Pill>
          <Pill>
            <SunDim className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Light/Dark mode</b>
          </Pill>
          <Pill>
            <Languages className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Internationalisation</b>
          </Pill>
          <Pill>
            <div className="text-violet-400">Ts</div>
            <b className="text-white font-poppins">Typescript</b>
          </Pill>
        </div>
      </div>
    </Section>
  );
}
