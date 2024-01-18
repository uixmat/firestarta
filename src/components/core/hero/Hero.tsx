// import styles from "./Hero.module.scss";
import Image from "next/image";
import clsx from "clsx";
interface HeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Hero = ({ title, description, size, children }: HeroProps) => {
  const sizeClasses = clsx({
    "py-32": size === "sm",
    "py-48": size === "md",
    "py-64": size === "lg",
  });

  return (
    <div className={`w-full relative ${sizeClasses}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-400/10 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent" />
      <div className="container relative">
        <div className="relative flex flex-col items-center justify-center text-center text-yellow-50">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{title}</h1>
          <div className="mb-10">{description}</div>
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
            <Image
              src="/logos/prisma.svg"
              alt="Prisma"
              width={120}
              height={47}
            />
            <Image
              src="/logos/shadcnui.svg"
              alt="shadcn/ui"
              width={158}
              height={26}
            />
            <Image
              src="/logos/tailwindcss.svg"
              alt="Tailwind CSS"
              width={130}
              height={21}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
