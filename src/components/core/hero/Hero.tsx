// import styles from "./Hero.module.scss";

import clsx from "clsx";
interface HeroProps {
  title: string;
  description: string;
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
        <div className="flex items-center justify-center flex-col relative">
          <h1 className="font-bold text-6xl mb-4">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
