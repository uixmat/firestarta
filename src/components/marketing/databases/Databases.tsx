import Pill from "@/components/core/pill/Pill";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import MongodbLogo from "@/components/logos/mongodb";
import MysqlLogo from "@/components/logos/mysql";
import PostgresLogo from "@/components/logos/postgres";
import PrismaLogo from "@/components/logos/prisma";
import SqliteLogo from "@/components/logos/sqlite";
import SupabaseLogo from "@/components/logos/supabase";

export default function Databases() {
  return (
    <Section>
      <SectionHeader
        title={
          <>
            Your favourite databases
            <br />
            powered by Prisma.
          </>
        }
      />
      <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <PrismaLogo className="h-16 text-white" fill="currentColor" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-4">
            <Pill>
              <MysqlLogo className="h-4 text-violet-400" fill="currentColor" />
              <b className="text-white font-poppins">MySQL</b>
            </Pill>
            <Pill>
              <PostgresLogo
                className="h-4 text-violet-400"
                fill="currentColor"
              />
              <b className="text-white font-poppins">PostgresQL</b>
            </Pill>
            <Pill>
              <SupabaseLogo
                className="h-4 text-violet-400"
                fill="currentColor"
                variant="symbol"
              />
              <b className="text-white font-poppins">Supabase</b>
            </Pill>
            <Pill>
              <SqliteLogo className="h-4 text-violet-400" fill="currentColor" />
              <b className="text-white font-poppins">SQLite</b>
            </Pill>
            <Pill>
              <MongodbLogo
                className="h-4 text-violet-400"
                fill="currentColor"
              />
              <b className="text-white font-poppins">MongoDB</b>
            </Pill>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-full border rounded-lg bg-gradient-to-b from-slate-800/60 to-card/20 backdrop-blur-sm border-border/20">
            <div className="relative flex justify-center w-full p-4">
              <span className="absolute w-4 h-4 transition-all rounded-full left-4 top-5 bg-indigo-400/15 hover:bg-indigo-400/20" />
              <span className="absolute w-4 h-4 transition-all rounded-full left-9 top-5 bg-indigo-400/15 hover:bg-indigo-400/20" />
              <span className="absolute w-4 h-4 transition-all rounded-full left-14 top-5 bg-indigo-400/15 hover:bg-indigo-400/20" />
              <b className="font-poppins">schema.prisma</b>
            </div>
            <code className="flex w-full p-4 pb-7">
              <pre>
                <span
                  data-number="1"
                  className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >{`datasource db {`}</span>
                <span
                  data-number="2"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >
                  {`    `}
                  <span className="text-cyan-300">provider</span>
                  {` = `}
                  <span className="text-lime-400">{`"postgresql"`}</span>
                </span>
                <span
                  data-number="3"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >
                  {`    `}
                  <span className="text-cyan-300">url</span>
                  {`      = env(`}
                  {`"DATABASE_URL"`}
                  {`)`}
                </span>
                <span
                  data-number="4"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >{`}`}</span>
                <span
                  data-number="5"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >{``}</span>
                <span
                  data-number="6"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >{`generator client {`}</span>
                <span
                  data-number="7"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >
                  {`    `}
                  <span className="text-cyan-300">provider</span>
                  {` = `}
                  <span className="text-lime-400">{`"prisma-client-js"`}</span>
                </span>
                <span
                  data-number="8"
                  className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
                >{`}`}</span>
              </pre>
            </code>
          </div>
        </div>
      </div>
    </Section>
  );
}
