"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const BASE_URL =
    process.env.API_BASE_URL || "https://my-remit-app-1.onrender.com";

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const firebaseIdToken = sessionStorage.getItem("firebaseIdToken");
      if (!firebaseIdToken) throw new Error("No authentication token found");

      // Send password reset request to backend
      await axios.post(
        `https://my-remit-app-1.onrender.com/reset-password`,
        { idToken: firebaseIdToken, newPassword: password },
        { headers: { "Content-Type": "application/json" }, timeout: 10000 }
      );

      sessionStorage.removeItem("firebaseIdToken");
      router.push("/login");
    } catch (err: any) {
      console.error("Password reset error:", err);
      setError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Reset Password
        </h2>
        {error && <p className="text-red-700 text-center mb-4">{error}</p>}
        <form onSubmit={handleResetPassword} className="w-full">
          <div className="flex flex-col mb-4 gap-1 items-start">
            <Label>New Password</Label>
            <Input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full"
            />
          </div>
          <div className="flex flex-col mb-4 gap-1 items-start">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </main>
  );
}
