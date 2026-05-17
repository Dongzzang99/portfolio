"use client";

import { useEffect, useState } from "react";

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// 라이트 모드와 다크 모드를 전환하는 컴포넌트
export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((currentDark) => {
      const nextDark = !currentDark;
      localStorage.setItem("theme", nextDark ? "dark" : "light");
      return nextDark;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title={dark ? "라이트 모드" : "다크 모드"}
      suppressHydrationWarning
    >
      <span className="theme-toggle-text" suppressHydrationWarning>
        {dark ? "라이트모드" : "다크모드"}
      </span>
    </button>
  );
}
