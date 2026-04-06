import "./globals.css";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "강동현 | Portfolio",
  description: "React, TypeScript, Next.js 기반 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="site-wrapper">
          {children}
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}