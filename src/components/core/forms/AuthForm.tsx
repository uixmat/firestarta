"use client";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
const formSchema = z.object({
  email: z.string().email(),
});

interface AuthFormProps {
  variant: "signin" | "signup";
}

export const AuthForm = ({ variant }: AuthFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    signIn("resend", { email: values.email, callbackUrl: "/" });
  }

  // Messaging
  let primaryMessage = "create an account";
  let secondaryMessage = "sign up";
  if (variant === "signin") {
    primaryMessage = "sign in";
    secondaryMessage = "sign in";
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-white capitalize">
          {primaryMessage}
        </h1>
        <p className="text-sm text-muted-foregroun">
          Enter your email below to {primaryMessage}
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      placeholder="name@example.com"
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="capitalize" disabled>
              {secondaryMessage} with Email
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/20"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="capitalize bg-indigo-700 hover:bg-indigo-800"
        >
          <GithubIcon className="h-4 mr-1" /> {secondaryMessage} with Github
        </Button>
        <p className="px-8 text-xs text-center text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href="/terms"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
