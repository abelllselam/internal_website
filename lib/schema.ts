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

export const signUpSchema = z
  .object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    middlename: z.string().optional(),
    email: z.string().email("Invalid email address").optional(),
    phone: z
      .string()
      .min(5, "Phone number is too short")
      .max(15, "Phone number is too long")
      .min(1, "Phone number is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    form: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export  type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

