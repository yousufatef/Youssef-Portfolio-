"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun
        size={18}
        strokeWidth={1.6}
        className="sun-icon"
        aria-hidden="true"
      />
      <Moon
        size={18}
        strokeWidth={1.6}
        className="moon-icon"
        aria-hidden="true"
      />
    </button>
  );
}
