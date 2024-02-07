"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import { Loader } from "lucide-react";

interface Props {
  data: any;
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  jobtitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
});

export const AccountForm = ({ data }: Props) => {
  const [name, setName] = useState(data.user.name || "");
  const [jobTitle, setJobTitle] = useState(data.user.jobTitle || "");
  const { data: session, update } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      username: name || "",
      jobtitle: jobTitle || "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/user/${data.user.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.username,
          jobTitle: values.jobtitle,
        }),
      });
      console.log("HTTP Response: ", response);
      if (response.ok) {
        // Update the session and refresh the router
        await update({ name: values.username, jobTitle: values.jobtitle });
        router.refresh();
        toast.success("Account updated.");
      } else {
        toast.error("Failed to update user.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error("Error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder={name} {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Enter your professional job title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">
          {isSubmitting ? (
            <Loader className="w-3 h-3 animate-spin text-background" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};
