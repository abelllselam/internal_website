"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import {app} from "@/firebase";
export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const auth = getAuth(app);
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      const formattedPhoneNumber = phoneNumber.startsWith("+")
        ? phoneNumber
        : `+${phoneNumber}`;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        recaptchaVerifier
      );

      // Store confirmationResult in sessionStorage to pass to OTP verification page
      sessionStorage.setItem(
        "confirmationResult",
        JSON.stringify(confirmationResult)
      );
      router.push("/otp");
    } catch (err: any) {
      console.error("OTP send error:", err);
      setError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Forgot Password
        </h2>
        {error && <p className="text-red-700 text-center mb-4">{error}</p>}
        <form onSubmit={handleSendOTP} className="w-full">
          <div className="flex flex-col mb-4 gap-1 items-start">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="Enter your phone number (e.g., +1234567890)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 w-full"
            />
          </div>
          <div id="recaptcha-container"></div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </Button>
        </form>
      </div>
    </main>
  );
}
