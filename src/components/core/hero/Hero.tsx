// import styles from "./Hero.module.scss";

import clsx from "clsx";
import Logo from "@/components/core/brand/Logo";
interface HeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  size: "sm" | "md" | "lg";
}

export const Hero = ({ title, description, size }: HeroProps) => {
  const sizeClasses = clsx({
    "py-32": size === "sm",
    "py-48": size === "md",
    "py-64": size === "lg",
  });

  return (
    <div className={`w-full ${sizeClasses}`}>
      <div className="container">
        <div className="relative flex flex-col items-center justify-center text-center text-yellow-50">
          <Logo className="h-16 mb-5" />
          <h1 className="mb-4 text-6xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
