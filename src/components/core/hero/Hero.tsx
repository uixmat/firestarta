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
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mb-4 text-6xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
