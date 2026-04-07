"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@/lib/validators/auth"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormData> ({
    resolver: zodResolver(signupSchema)
  })

    const onSubmit = async (data: SignupFormData) => {
    console.log("Signup data:", data)

    // later: call backend API
    // example:
    // await signupUser(data)

    // redirect after signup
    // router.push("/login")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input {...register("name")} aria-invalid={!!errors.name}/>
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} aria-invalid={!!errors.email}/>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input {...register("password")} aria-invalid={!!errors.password}/>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Create Account
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  )
}