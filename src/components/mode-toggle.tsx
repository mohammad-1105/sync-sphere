"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering icons until the client is mounted
  }

  // Use system theme if no explicit theme is set
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <Sun
          className="size-5 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          className="size-5 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
