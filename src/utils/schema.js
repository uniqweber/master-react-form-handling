import { z as zod } from "zod";

export const registrationSchema = zod
   .object({
      name: zod
         .string()
         .min(3, { message: "Name must be at least 3 characters long" })
         .max(20, { message: "Name must be at most 20 characters long" }),
      email: zod.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
      password: zod
         .string({ required_error: "Password is required" })
         .min(8, { message: "Password must be at least 8 characters long" })
         .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
         .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
         .regex(/[0-9]/, { message: "Password must contain at least one number" })
         .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character" }),
      confirmPassword: zod
         .string({ required_error: "Confirm password is required" })
         .min(8, { message: "Password must be at least 8 characters long" }),
      terms: zod.boolean().refine((val) => val, {
         message: "You must agree to the terms of service",
      }),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
   });


