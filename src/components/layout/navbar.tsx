"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Events & Drives", href: "/events" },
  { name: "Our Team", href: "/team" },
  { name: "Volunteer", href: "/about-us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all border-b border-[#89c3da]/30 shadow-[0_2px_12px_rgba(21,94,160,0.04)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo with #155ea0 Primary */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-[#89c3da]/60 shadow-sm group-hover:scale-105 transition-transform bg-white">
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
              <span className="text-2xl sm:text-3xl font-bold tracking-normal text-[#155ea0] font-cursive leading-tight">
                Eklavya
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#4886b2] -mt-1">
                Hands That Care • HIT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.filter(l => l.name !== "Home").map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-all relative py-1 hover:text-[#155ea0]",
                    isActive 
                      ? "text-[#155ea0] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#155ea0] after:rounded-full" 
                      : "text-[#3b5368]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/donate">
              <button className="bg-[#155ea0] hover:bg-[#2e6ea6] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#155ea0]/25 transition-all active:scale-95 cursor-pointer flex items-center gap-2">
                <Heart className="h-3.5 w-3.5 fill-current text-[#bff1f6]" />
                <span>DONATE NOW</span>
              </button>
            </Link>
          </div>

          {/* Mobile Right Action Elements */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link href="/donate">
              <button className="bg-[#155ea0] text-white px-3.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform">
                <Heart className="h-3 w-3 fill-current text-[#bff1f6]" />
                <span>DONATE</span>
              </button>
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#155ea0] hover:bg-[#bff1f6]/30 active:scale-90 rounded-xl transition-all border border-[#89c3da]/40 flex items-center justify-center cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* FULL RESPONSIVE MOBILE / TABLET SIDEBAR DRAWER OVERLAY */}
      {/* ========================================================================= */}
      
      {/* 1. Backdrop Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-[#0f273d]/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Clean, Simple Slide-In Sidebar Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-[320px] bg-white text-[#0f273d] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform lg:hidden border-l border-[#89c3da]/30",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Top Header of Sidebar */}
        <div className="p-5 border-b border-[#89c3da]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#155ea0]/30 shadow-sm bg-white">
              <Image
                src="/logo.jpg"
                alt="Eklavya Logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-[#155ea0] font-cursive leading-tight">
                Eklavya
              </div>
              <div className="text-[9px] font-semibold text-[#4886b2]">
                Hands That Care • HIT
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close Navigation Menu"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-[#3b5368] hover:text-[#155ea0] hover:bg-[#bff1f6]/30 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Clean, Simple Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#155ea0] bg-[#bff1f6]/40 font-bold"
                      : "text-[#0f273d] hover:bg-slate-50 hover:text-[#155ea0]"
                  )}
                >
                  <span>{item.name}</span>
                  <ChevronRight className={cn("h-4 w-4", isActive ? "text-[#155ea0]" : "text-slate-300")} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Minimal Bottom CTA Area */}
        <div className="p-5 border-t border-[#89c3da]/20 bg-white">
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#155ea0] hover:bg-[#2e6ea6] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md active:scale-98 transition-all"
          >
            <Heart className="h-4 w-4 fill-current text-[#bff1f6]" />
            <span>DONATE NOW</span>
          </Link>
        </div>

      </aside>
    </>
  );
}
