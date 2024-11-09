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

// Define the validation schema for the login form
const formSchema = z.object({
  usernameOrEmail: z.string().min(2, "Username or email is required"),
  password: z.string().min(8, "Password is required"),
  rememberMe: z.boolean().optional(), // Optional checkbox for remembering the user
});

export function LoginForm() {
  // Define your form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
      rememberMe: false,
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values
    console.log(values);
  }

  return (
    <div className="flex w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="usernameOrEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username or email"
                    autoComplete="off"
                    {...field}
                    className="bb"
                  />
                </FormControl>
                <FormMessage className="error-message">
                  {form.formState.errors.usernameOrEmail?.message}
                </FormMessage>
              </FormItem>
            )}
          /><br/>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    autoComplete="off"
                    {...field}
                    className="bb"
                  />
                </FormControl>
                <FormMessage className="error-message">
                  {form.formState.errors.password?.message}
                </FormMessage>
              </FormItem>
            )}
          /><br/>

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem>
               <FormControl>
                <label className="flex items-center">
                     <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="mr-2"
                    />
                    Remember Me 
                    <div> <p className="text-sm">
            Forgot your password? <a href="#" className="text-blue-500">Click here</a>
          </p></div>
                  </label>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
}