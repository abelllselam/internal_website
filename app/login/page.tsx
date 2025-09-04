"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema, SignInFormData } from "@/lib/schema";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const { signInWithGoogle, loading, onLogin, setError, error, user } =
    useAuth();
  const router = useRouter();

  // Watch values for controlled Input
  const identifier = watch("identifier");
  const password = watch("password");

  const onSubmit = async (data: SignInFormData) => {
    try {
      await onLogin(data.identifier, data.password);
      router.push("/"); // Navigate to home page on successful login
    } catch (e: any) {
      console.error("Sign-in caught error:", {
        message: e.message,
        code: e.code,
        response: e.response ? e.response.data : null,
      });
      setError("Unexpected error occurred, please try again");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push("/"); // Navigate to home page on successful Google login
    } catch (e: any) {
      console.error("Google sign-in error:", e);
      setError("Google sign-in failed, please try again");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Login to Your Account
          </h2>
          {error && <p className="text-red-700 text-center mb-4">{error}</p>}
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Phone or Email</Label>
              <Input
                type="text"
                placeholder="Enter your phone or email"
                className="mt-1 w-full"
                {...register("identifier")}
              />
              {errors.identifier && (
                <p className="text-red-700 font-base">
                  {errors.identifier.message}
                </p>
              )}
            </div>
            <div className="flex flex-col  gap-1 items-start">
              <Label>Password</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full"
              />
              {errors.password && (
                <p className="text-red-700 font-base">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-full flex items-end justify-end mb-4">
              <Link href="/forgot-password" className="text-blue-600">Forgot password?</Link>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
              <p className="text-center mt-2">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-600">
                  Sign up
                </Link>
              </p>
            </div>
            <div className="mt-4 text-center border-t pt-4">
              <p>Or</p>
              <Button
                className="w-full bg-white text-black hover:bg-gray-100 border border-gray-300 mt-4 flex items-center justify-center gap-2"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
