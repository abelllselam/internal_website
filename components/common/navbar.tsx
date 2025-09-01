"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu, Globe, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/authContext";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "am", name: "Amharic", flag: "am" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 dark:border-white/10">
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-foreground">Logo</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10 dark:hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 hover:bg-white/10 dark:hover:bg-white/10"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white/90 dark:bg-black/90 backdrop-blur-md border-white/20 dark:border-white/20"
              >
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setSelectedLanguage(language)}
                    className="hover:bg-white/10 dark:hover:bg-white/10"
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 p-0 hover:bg-white/10 dark:hover:bg-white/10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="flex items-center space-x-2">
              {loading ? (
                <span>Loading...</span>
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-white/10 dark:hover:bg-white/10"
                    >
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-5 w-5" />
                      )}
                      <span className="text-foreground">{user.firstname}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white/90 dark:bg-black/90 backdrop-blur-md border-white/20 dark:border-white/20"
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="w-full">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem color="#ffff00" onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-white/10 dark:hover:bg-white/10"
                    asChild
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-500 text-white hover:text-black border-0"
                    asChild
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 hover:bg-white/10 dark:hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white/95 dark:bg-black/95 backdrop-blur-md border-white/20 dark:border-white/20"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10 dark:hover:bg-white/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-4 pt-4 border-t border-white/20 dark:border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/80">
                        Language
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 hover:bg-white/10 dark:hover:bg-white/10"
                          >
                            <span className="mr-1">
                              {selectedLanguage.flag}
                            </span>
                            <span className="text-xs">
                              {selectedLanguage.code.toUpperCase()}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="bg-white/90 dark:bg-black/90 backdrop-blur-md border-white/20 dark:border-white/20"
                        >
                          {languages.map((language) => (
                            <DropdownMenuItem
                              key={language.code}
                              onClick={() => setSelectedLanguage(language)}
                              className="hover:bg-white/10 dark:hover:bg-white/10"
                            >
                              {language.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/80">
                        Theme
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="h-8 w-8 p-0 hover:bg-white/10 dark:hover:bg-white/10"
                      >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </div>

                    <div className="flex flex-col space-y-2 pt-2">
                      {loading ? (
                        <span>Loading...</span>
                      ) : user ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center space-x-2 hover:bg-white/10 dark:hover:bg-white/10"
                            >
                              {user.photoURL ? (
                                <img
                                  src={user.photoURL}
                                  alt="Profile"
                                  className="h-8 w-8 rounded-full object-cover"
                                />
                              ) : (
                                <User className="h-5 w-5" />
                              )}
                              <span className="text-foreground">
                                {user.firstname}
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-white/90 dark:bg-black/90 backdrop-blur-md border-white/20 dark:border-white/20"
                          >
                            <DropdownMenuItem asChild>
                              <Link href="/dashboard" className="w-full">
                                Dashboard
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={logout}>
                              Logout
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-white/10 dark:hover:bg-white/10"
                            asChild
                          >
                            <Link href="/login">Login</Link>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-500 text-white hover:text-black border-0"
                            asChild
                          >
                            <Link href="/signup">Sign Up</Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
