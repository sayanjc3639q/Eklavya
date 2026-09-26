"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About us", href: "/about-us" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Volunteer", href: "/about-us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all border-b border-[#89c3da]/30 shadow-[0_2px_12px_rgba(21,94,160,0.04)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo with #155ea0 Primary */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#89c3da]/60 shadow-sm group-hover:scale-105 transition-transform bg-white">
            <Image
              src="/logo.jpg"
              alt="Eklavya Logo"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#155ea0] font-sans">
              Eklavya
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#4886b2]">
              Hands That Care • HIT
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#155ea0]",
                  isActive ? "text-[#155ea0] font-bold" : "text-[#3b5368]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (#155ea0 with white text for AA contrast) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/donate">
            <button className="bg-[#155ea0] hover:bg-[#2e6ea6] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#155ea0]/25 transition-all active:scale-95 cursor-pointer">
              DONATE NOW
            </button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link href="/donate">
            <button className="bg-[#155ea0] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              DONATE
            </button>
          </Link>
          <button
            type="button"
            className="p-2 text-[#155ea0] hover:bg-[#bff1f6]/30 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#89c3da]/40 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#0f273d] hover:bg-[#bff1f6]/40 rounded"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block text-center bg-[#155ea0] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
