"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart, 
  Users, 
  CheckCircle2, 
  Quote,
  Sparkles,
  Camera,
  BookOpen
} from "lucide-react";
import { EventItem } from "../data/events-data";

export function EventDetailView({ event }: { event: EventItem }) {
  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. Header / Breadcrumb Top Bar */}
      <div className="bg-[#0f273d] text-white py-6 border-b border-[#2e6ea6]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bff1f6] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Events</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#155ea0] px-3.5 py-1 rounded-full border border-[#89c3da]/40">
              {event.category}
            </span>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#bff1f6] hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section with Big Cover Picture */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#bff1f6]">
              <Sparkles className="h-4 w-4 text-[#89c3da]" />
              <span>{event.status === "Upcoming" ? "Upcoming Community Drive" : "Ground Mission Report"}</span>
              <span>•</span>
              <span>{event.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {event.title}
            </h1>

            <p className="text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans">
              {event.summary}
            </p>

            {/* Author and Date Meta Row */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#a8deee] border-t border-[#2e6ea6]/50">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-[#155ea0] text-[#bff1f6] font-bold flex items-center justify-center border border-[#89c3da]">
                  {event.author.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{event.author.name}</div>
                  <div className="text-[10px] text-[#a8deee]">{event.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#89c3da]" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#89c3da]" />
                <span>{event.time}</span>
              </div>
            </div>

          </div>

          {/* Large Hero Cover Image Showcase */}
          <div className="mt-10 relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#89c3da]/50">
            <Image
              src={event.gallery[activeImageIndex] || event.coverImage}
              alt={event.title}
              fill
              priority
              className="object-cover transition-all duration-300"
            />
          </div>

        </div>
      </section>

      {/* 3. Event Details & Blog Article Body */}
      <section className="py-16 bg-gradient-to-b from-white via-[#bff1f6]/15 to-white border-b border-[#89c3da]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Column: Full Blog Post & Photo Gallery */}
            <article className="lg:col-span-8 space-y-12">
              
              {/* Blog Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#0f273d] flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-[#155ea0]" />
                  <span>Initiative Overview &amp; Objective</span>
                </h2>
                <p className="text-base text-[#3b5368] leading-relaxed">
                  {event.blogContent.overview}
                </p>
              </div>

              {/* Photo Gallery with Thumbnail Switcher */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#0f273d] flex items-center gap-2">
                    <Camera className="h-5 w-5 text-[#155ea0]" />
                    <span>Ground Pictures &amp; Visuals ({event.gallery.length})</span>
                  </h3>
                  <span className="text-xs text-[#5996b9] font-medium">Click thumbnail to view</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {event.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? "border-[#155ea0] ring-4 ring-[#bff1f6] scale-102"
                          : "border-[#89c3da]/50 opacity-75 hover:opacity-100 hover:border-[#155ea0]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${event.title} photo ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Action Points */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#bff1f6]/30 via-white to-white border-2 border-[#89c3da]/50 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#0f273d]">
                  Key Deliverables &amp; Focus Areas
                </h3>
                <ul className="space-y-3">
                  {event.blogContent.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[#3b5368]">
                      <CheckCircle2 className="h-5 w-5 text-[#155ea0] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ground Field Report */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0f273d]">
                  Ground Field Report
                </h3>
                <p className="text-base text-[#3b5368] leading-relaxed">
                  {event.blogContent.groundReport}
                </p>
              </div>

              {/* Volunteer Quote Box */}
              {event.blogContent.volunteerQuotes.map((vq, i) => (
                <div 
                  key={i}
                  className="rounded-3xl p-8 bg-[#155ea0] text-white shadow-xl border border-[#2e6ea6] space-y-4 relative overflow-hidden"
                >
                  <Quote className="h-10 w-10 text-[#bff1f6]/30 absolute top-4 right-4" />
                  <blockquote className="text-lg sm:text-xl font-medium italic text-[#bff1f6] leading-relaxed">
                    “{vq.quote}”
                  </blockquote>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    — {vq.by}
                  </div>
                </div>
              ))}

              {/* Impact Conclusion */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-[#89c3da]/40 space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                  THE LONG-TERM IMPACT
                </div>
                <p className="text-sm text-[#3b5368] leading-relaxed">
                  {event.blogContent.impactSummary}
                </p>
              </div>

            </article>

            {/* Right Sidebar: Key Event Info & Action Box */}
            <aside className="lg:col-span-4 space-y-6 sticky top-24">
              
              {/* Event Quick Info Card */}
              <div className="rounded-3xl bg-white border-2 border-[#89c3da]/60 p-6 sm:p-8 shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-[#0f273d] border-b border-[#89c3da]/30 pb-3">
                  Event Essentials
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#155ea0] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#5996b9]">Date</div>
                      <div className="font-bold text-[#0f273d]">{event.date}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#155ea0] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#5996b9]">Time</div>
                      <div className="font-bold text-[#0f273d]">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#155ea0] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#5996b9]">Location</div>
                      <div className="font-bold text-[#0f273d]">{event.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#155ea0] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#5996b9]">Volunteers Mobilized</div>
                      <div className="font-bold text-[#0f273d]">{event.attendeesCount}+ HIT Students</div>
                    </div>
                  </div>
                </div>

                {/* Highlight Stat Pill */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#155ea0] to-[#2e6ea6] text-white text-center shadow-md">
                  <div className="text-2xl font-black text-[#bff1f6]">{event.highlightStat.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white mt-0.5">
                    {event.highlightStat.label}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <Link href="/about-us" className="block">
                    <button className="w-full bg-[#155ea0] hover:bg-[#2e6ea6] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#155ea0]/25 active:scale-95 transition-all cursor-pointer">
                      Volunteer for this Initiative
                    </button>
                  </Link>

                  <Link href="/donate" className="block">
                    <button className="w-full border-2 border-[#155ea0] text-[#155ea0] hover:bg-[#bff1f6]/40 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Heart className="h-3.5 w-3.5 fill-current text-[#155ea0]" />
                      <span>Sponsor this Drive</span>
                    </button>
                  </Link>
                </div>

              </div>

              {/* Campus Contact info */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-[#89c3da]/40 text-xs text-[#3b5368] space-y-2">
                <div className="font-bold text-[#0f273d]">Need directions or group registration?</div>
                <p>Contact our student coordinators directly at <strong className="text-[#155ea0]">+91 98765 43210</strong> or meet us at HIT Student Activity Center.</p>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
