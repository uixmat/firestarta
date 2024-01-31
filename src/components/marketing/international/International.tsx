import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import Pill from "@/components/core/pill/Pill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NextintlLogo from "@/components/logos/nextintl";

export default function International() {
  return (
    <div className="max-w-4xl mx-auto">
      <Section>
        <SectionHeader
          title={
            <>
              Internationalisation
              <br />
              Multi-lingual made easy
            </>
          }
        />
        <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto">
          <div className="flex">
            <div className="flex flex-col w-full border rounded-lg bg-gradient-to-b from-slate-800/60 to-card/20 backdrop-blur-sm border-border/20">
              <Tabs defaultValue="one" className="w-full">
                <div className="relative flex justify-center w-full p-4">
                  <span className="absolute w-4 h-4 transition-all rounded-full left-4 top-5 bg-indigo-400/15 hover:bg-red-400" />
                  <span className="absolute w-4 h-4 transition-all rounded-full left-9 top-5 bg-indigo-400/15 hover:bg-yellow-400" />
                  <span className="absolute w-4 h-4 transition-all rounded-full left-14 top-5 bg-indigo-400/15 hover:bg-green-400" />
                  <TabsList className="h-auto p-0 mx-auto bg-transparent text-inherit -my-1.5">
                    <TabsTrigger
                      value="one"
                      className="m-0 text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>en.json</b>
                    </TabsTrigger>
                    <TabsTrigger
                      value="two"
                      className="m-0 text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>About.tsx</b>
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="one">
                  <code className="flex w-full p-4 pb-7 overflow-x:scroll">
                    <pre className="overflow-x-scroll">
                      <span
                        data-number="1"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >{`{`}</span>
                      <span
                        data-number="2"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >{`  "About": {`}</span>
                      <span
                        data-number="3"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        <span className="text-cyan-300">{`    "title"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"About us"`}</span>
                      </span>
                      <span
                        data-number="4"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >{`  }`}</span>
                      <span
                        data-number="5"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >{`}`}</span>
                    </pre>
                  </code>
                </TabsContent>
                <TabsContent value="two">
                  <code className="flex w-full p-4 pb-7">
                    <pre className="overflow-x-scroll">
                      <span
                        data-number="1"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        {`import { `}
                        <span className="text-cyan-300">useTranslations</span>
                        {` } from `}
                        <span className="text-lime-400">{`'next-intl'`}</span>
                        {`;`}
                      </span>
                      <span
                        data-number="2"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        {``}
                      </span>
                      <span
                        data-number="3"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        <span className="font-bold text-white">{`function `}</span>
                        <span className="text-yellow-400">{`About()`}</span>{" "}
                        {`{`}
                      </span>
                      <span
                        data-number="4"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        {`  const `}
                        <span className="text-cyan-300">t</span>
                        {` = `}
                        <span className="text-indigo-400">{`useTranslations('About')`}</span>
                        {`;`}
                      </span>
                      <span
                        data-number="5"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >
                        {`  return `}
                        <span className="text-lime-400">{`<h1>`}</span>
                        {`{`}
                        <span className="text-cyan-300">t</span>
                        {`('title')}`}
                        <span className="text-lime-400">{`</h1>`}</span>
                        {`;`}
                      </span>
                      <span
                        data-number="6"
                        className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                      >{`}`}</span>
                    </pre>
                  </code>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div>
              <NextintlLogo className="h-9" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 p-4">
              <Pill>
                <b className="text-white font-poppins">🇬🇧 Welcome</b>
              </Pill>
              <Pill>
                <b className="text-white font-poppins">🇩🇪 Willkommen</b>
              </Pill>
              <Pill>
                <b className="text-white font-poppins">🇪🇸 Bienvenido</b>
              </Pill>
              <Pill>
                <b className="text-white font-poppins">🇫🇷 Bienvenue</b>
              </Pill>
              <Pill>
                <b className="text-white font-poppins">🇨🇳 欢迎</b>
              </Pill>
              <Pill>
                <b className="text-white font-poppins">🇯🇵 ようこそ</b>
              </Pill>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
