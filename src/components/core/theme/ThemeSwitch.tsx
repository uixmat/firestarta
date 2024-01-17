"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const renderIcon = () => {
    // Using 'resolvedTheme' ensures we rely on next-themes for determining the current theme
    const currentTheme = mounted ? resolvedTheme : "light"; // Default to 'light' for SSR
    return currentTheme === "light" ? (
      <Moon className="h-4" />
    ) : (
      <Sun className="h-4" />
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      {renderIcon()}
    </Button>
  );
}

export default ThemeSwitcher;
