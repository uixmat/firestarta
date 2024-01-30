import clsx from "clsx";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Section = ({ size, children }: SectionProps) => {
  const sizeClasses = clsx(
    {
      "py-32": size === "sm",
      "py-48": size === "md",
      "py-32 md:py-48 lg:py-64": size === "lg",
    },
    styles.bgGrid
  );

  return (
    <section className={`my-12 ${sizeClasses}`}>
      <div className="py-12">{children}</div>
    </section>
  );
};
