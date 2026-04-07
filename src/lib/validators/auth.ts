import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one special character",
    ),
});

export const signupSchema = z.object({
  name: z.string().min(6, "Name must be at least 6 characters long"),
  email: z
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one special character",
    ),
});
