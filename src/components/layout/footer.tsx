"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Globe
} from "lucide-react";

const TEAM_CONTACTS = [
  {
    name: "Aman Sharma",
    position: "President & Operations Lead",
    phone: "+91 98765 43210",
  },
  {
    name: "Priya Mukherjee",
    position: "Head of Animal Welfare Wing",
    phone: "+91 98765 43211",
  },
  {
    name: "Rohan Sen",
    position: "Education & Teaching Coordinator",
    phone: "+91 98765 43212",
  },
];

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#0f273d] text-white border-t border-[#2e6ea6]/50">
      
      {/* Top Newsletter & Dispatch Bar */}
      <div className="border-b border-[#2e6ea6]/40 bg-[#155ea0]/20 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#89c3da] bg-white shrink-0">
              <Image
                src="/logo.jpg"
                alt="Eklavya Logo"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-sans">
                Eklavya - Hands That Care
              </h4>
              <p className="text-xs text-[#a8deee]">
                Be the first to hear how student changemakers are making a real difference in Haldia.
              </p>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="w-full lg:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#bff1f6] bg-[#155ea0]/60 px-5 py-2.5 rounded-full border border-[#89c3da]/50">
                <CheckCircle2 className="h-4 w-4 text-[#89c3da]" />
                <span>Thank you for subscribing to our community updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#0f273d] text-white placeholder:text-[#89c3da]/60 text-xs px-4 py-3 rounded-full border border-[#4886b2] focus:outline-none focus:border-[#bff1f6] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#155ea0] hover:bg-[#2e6ea6] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md border border-[#89c3da]/40 transition-all shrink-0 cursor-pointer"
                >
                  Sign-up →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Clean 4-Column Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Public Navigation */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#bff1f6]">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-[#a8deee]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About us &amp; HIT Roots
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-white transition-colors">
                  Vision &amp; Ground Mission
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Community Drives &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Core Leads &amp; Advisors
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Make a Contribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Initiatives & Information */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#bff1f6]">
              Our Initiatives
            </h5>
            <ul className="space-y-2.5 text-xs text-[#a8deee]">
              <li>
                <Link href="/vision-mission" className="hover:text-white transition-colors">
                  Slum Evening Coaching
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-white transition-colors">
                  Stray Animal Rescue Wing
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Anti-Rabies Vaccination Drives
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Winter Blanket Distribution
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donation Transparency &amp; Receipts
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Member Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Team Contacts formatted normally without enclosing boxes */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#bff1f6]">
              Key Team Contacts
            </h5>
            <div className="space-y-4 text-xs">
              {TEAM_CONTACTS.map((contact, idx) => (
                <div key={idx} className="space-y-0.5 border-b border-[#2e6ea6]/30 pb-3 last:border-b-0 last:pb-0">
                  <div className="font-bold text-white text-sm">
                    {contact.name}
                  </div>
                  <div className="text-[11px] font-medium text-[#bff1f6]">
                    {contact.position}
                  </div>
                  <div>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#a8deee] hover:text-white font-mono transition-colors"
                    >
                      <Phone className="h-3 w-3 text-[#89c3da]" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Location, Email & Social Media Icons */}
          <div className="space-y-5">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
                Campus Location
              </h5>
              <div className="space-y-2.5 text-xs text-[#a8deee]">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#89c3da] mt-0.5 shrink-0" />
                  <span>Haldia Institute of Technology, ICARE Complex, HIT Campus, Haldia, West Bengal 721657</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#89c3da] shrink-0" />
                  <a href="mailto:eklavya.hit@gmail.com" className="text-white hover:text-[#bff1f6] transition-colors">
                    eklavya.hit@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Circular Icon Buttons */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
                Connect With Us
              </h5>
              <div className="flex items-center gap-3">
                {/* Instagram Icon */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full bg-[#155ea0]/40 border border-[#4886b2] hover:bg-[#155ea0] hover:border-[#bff1f6] text-[#bff1f6] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full bg-[#155ea0]/40 border border-[#4886b2] hover:bg-[#155ea0] hover:border-[#bff1f6] text-[#bff1f6] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full bg-[#155ea0]/40 border border-[#4886b2] hover:bg-[#155ea0] hover:border-[#bff1f6] text-[#bff1f6] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>

                {/* HIT Portal Icon */}
                <a
                  href="https://hithaldia.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="HIT Haldia Official Website"
                  className="h-10 w-10 rounded-full bg-[#155ea0]/40 border border-[#4886b2] hover:bg-[#155ea0] hover:border-[#bff1f6] text-[#bff1f6] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#2e6ea6]/30 flex flex-col md:flex-row items-center justify-between text-xs text-[#a8deee]/80 gap-4">
          <p>© {new Date().getFullYear()} Eklavya - Hands That Care (Haldia Institute of Technology). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/donate" className="text-[#bff1f6] hover:underline">
              Tax Exemptions &amp; 80G
            </Link>
            <Link href="/about-us" className="hover:text-white">
              Campus Chapter
            </Link>
            <Link href="/login" className="hover:text-white">
              Volunteer Login
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
