
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import { useState } from "react";
import "react-international-phone/style.css";

export default function page() {
const [phone, setPhone] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Create an Account
          </h2>

          <form className="w-full" action="">
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>First Name</Label>
              <Input
                type="text"
                placeholder="firstname"
                className="mt-1 w-full"
              />
            </div>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Middle Name</Label>
              <Input
                type="text"
                placeholder="middle name"
                className="mt-1 w-full"
              />
            </div>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Last Name</Label>
              <Input
                type="text"
                placeholder="lastname"
                className="mt-1 w-full"
              />
            </div>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Phone</Label>
              <PhoneInput
                className="mt-1 w-full"
                inputClassName="w-full dark:bg-black"
                defaultCountry="us"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Password</Label>
              <Input
                type="text"
                placeholder="password"
                className="mt-1 w-full"
              />
            </div>
            <div className="flex flex-col mb-4 gap-1 items-start">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="confirm password"
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Sign Up
              </Button>
              <p>
                Do you have an account?{" "}
                <Link href="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-4 text-center border-t pt-4">
              <p>Or</p>
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-4">
                Continue with Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
