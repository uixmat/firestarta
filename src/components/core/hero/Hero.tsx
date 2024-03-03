import clsx from "clsx";
import styles from "./Hero.module.scss";

interface HeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Hero = ({ title, description, size, children }: HeroProps) => {
  const sizeClasses = clsx(
    {
      "py-32": size === "sm",
      "py-48": size === "md",
      "py-32 md:py-48 lg:py-64": size === "lg",
    },
    styles.bgGrid
  );

  return (
    <div className={`w-full relative ${sizeClasses}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/15 via-transparent" />
      <div className="container relative">
        <div className="relative flex flex-col items-center justify-center text-center text-gray-800 dark:text-indigo-50">
          <h1 className="mb-4 text-4xl font-bold leading-snug text-transparent md:leading-snug md:text-6xl text-balance bg-clip-text bg-gradient-to-b to-blue-200 from-white">
            {title}
          </h1>
          <div className="mb-10">{description}</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
