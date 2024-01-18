import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Section = ({ size, children }: SectionProps) => {
  const sizeClasses = clsx({
    "py-32": size === "sm",
    "py-48": size === "md",
    "py-32 md:py-48 lg:py-64": size === "lg",
  });
  return <section className={`mb-5 ${sizeClasses}`}>{children}</section>;
};
