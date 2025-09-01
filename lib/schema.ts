import {z} from "zod";


export const signInSchema = z.object({
  identifier: z.string()
    .min(1, { message: "Email or phone number is required" })
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+251|0)?9\d{8}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      { message: "Enter a valid email or phone number" }
    ),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
export type SignInFormData = z.infer<typeof signInSchema>;

