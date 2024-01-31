import clsx from "clsx";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Section = ({ size, children }: SectionProps) => {
  const sizeClasses = clsx(
    {
      "mb-6": size === "sm",
      "my-48": size === "md",
      "my-32 md:py-48 lg:py-64": size === "lg",
    },
    styles.bgGrid
  );

  return <section className={`${sizeClasses}`}>{children}</section>;
};
