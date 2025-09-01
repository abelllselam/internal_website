"use client";

import { useAuth } from "@/context/authContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Welcome, {user.displayName}
      </h1>
      <p className="text-gray-900 dark:text-gray-100">
        This is your dashboard. Use the sidebar to navigate to your profile or
        settings.
      </p>
    </div>
  );
}
