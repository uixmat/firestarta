interface HeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export const SectionHeader = ({
  title,
  description,
  children,
}: HeaderProps) => {
  return (
    <header className="flex flex-col w-full gap-3 mb-12">
      <div className="relative flex flex-col items-center justify-center text-center text-yellow-50">
        <h2 className="mb-4 text-2xl font-bold md:text-5xl text-balance">
          {title}
        </h2>
        <>{description}</>
        <>{children}</>
      </div>
    </header>
  );
};
