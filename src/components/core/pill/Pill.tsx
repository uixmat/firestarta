interface PillProps {
  children: React.ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <div className="flex items-center p-2 px-4 text-sm border rounded-md border-border/20 bg-gradient-to-r from-card via-indigo-500/20 to-card backdrop-blur-sm backdrop-brightness-0">
      <span className="flex items-center gap-2">{children}</span>
    </div>
  );
}
