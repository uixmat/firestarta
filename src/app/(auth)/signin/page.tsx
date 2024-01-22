import AuthForm from "@/components/core/forms/AuthForm";
export default function Signup() {
  return (
    <div className="container relative flex-col items-center justify-center hidden h-dvh md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex-col hidden h-full p-10 text-white bg-muted lg:flex dark:border-r">
        stuff
      </div>
      <div className="p-10">
        <AuthForm variant="signin" />
      </div>
    </div>
  );
}
