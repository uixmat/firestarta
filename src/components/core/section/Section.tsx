interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return <section className="mb-5">{children}</section>;
};
