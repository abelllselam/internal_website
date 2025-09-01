
"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  Calendar,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
const sidebarItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Send", href: "/dashboard/send", icon: BarChart3 },
  { name: "Recipients", href: "/dashboard/recipients", icon: Users },
  { name: "History", href: "/dashboard/history", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

function SidebarContent({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return null;
  return (
    <div className="flex h-full flex-col">
      {/* Sidebar Header */}
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <h2 className="text-lg font-semibold text-foreground">Dashboard</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                "hover:bg-white/10 hover:backdrop-blur-sm",
                isActive
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-foreground border border-white/20"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="flex-1 min-w-0">
            <button className="cursor-pointer text-red-600" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <div className="flex flex-col h-full bg-white/5 backdrop-blur-xl border-r border-white/10 pt-16">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 p-0 bg-white/5 backdrop-blur-xl border-white/10"
        >
          <SidebarContent onItemClick={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 pt-20 lg:pt-24">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
