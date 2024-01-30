interface props {
  children: React.ReactNode;
}
export default function GradientText({ children }: props) {
  return (
    // <b className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r dark:from-lime-200 dark:to-yellow-50 from-lime-400 to-yellow-300">
    <b>{children}</b>
  );
}
