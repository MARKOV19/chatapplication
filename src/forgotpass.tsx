import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the validation schema for the password reset form
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function ForgotPasswordForm() {
  // Define your form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values, e.g., send a password reset email
    console.log(values);
  }

  return (
    <div className="flex w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    autoComplete="off"
                    {...field}
                    className="bb"
                  />
                </FormControl>
                <FormMessage className="error-message">
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          /><br/>

          <Button type="submit">Send Reset Link</Button>
        </form>
      </Form>
    </div>
  );
}