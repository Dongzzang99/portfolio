"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div
        className="container"
        style={{
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.05em" }}>
          Kang.
        </Link>

        <nav className="desktop-nav" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="top-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-nav-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mobile-nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}