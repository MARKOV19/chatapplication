import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import './SignUp.css'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().regex(regex),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex w-1/2">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn"
                    autoComplete="off"

                    {...field}
                    className="bb" />
                </FormControl>
                <FormDescription>
                  <p className="pp">This is your  public display name.</p>
                </FormDescription>
                <FormMessage className="error-message">
  {form.formState.errors.username?.message}
</FormMessage>
              </FormItem>
            )}
          /> 
         <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="enter your email" type="email" autoComplete="off" {...field} className="bb" />
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage className="error-message">
  {form.formState.errors.email?.message}
</FormMessage>
              </FormItem>
            )}
          /> 
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="create your pasword" type="password" autoComplete="off"{...field} className="bb" />
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage className="error-message">
  {form.formState.errors.password?.message}
</FormMessage>
              </FormItem>
            )}
          /> 
          <Button >Singup</Button>
        </form>
      </Form></div>
  )
}