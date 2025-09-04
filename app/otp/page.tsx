"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfirmationResult } from "firebase/auth";

export default function OTPVerification() {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const confirmationResult = JSON.parse(
        sessionStorage.getItem("confirmationResult") || "{}"
      );
      if (!confirmationResult) throw new Error("No OTP session found");

      const result = await (confirmationResult as ConfirmationResult).confirm(
        otp
      );
      const firebaseIdToken = await result.user.getIdToken(true);

      // Store Firebase ID token temporarily for password reset
      sessionStorage.setItem("firebaseIdToken", firebaseIdToken);
      sessionStorage.removeItem("confirmationResult");
      router.push("/reset-password");
    } catch (err: any) {
      console.error("OTP verification error:", err);
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Verify OTP
        </h2>
        {error && <p className="text-red-700 text-center mb-4">{error}</p>}
        <form onSubmit={handleVerifyOTP} className="w-full">
          <div className="flex flex-col mb-4 gap-1 items-start">
            <Label>OTP</Label>
            <Input
              type="text"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="mt-1 w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </form>
      </div>
    </main>
  );
}
