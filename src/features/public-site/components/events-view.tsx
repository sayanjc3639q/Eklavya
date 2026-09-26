"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Sparkles,
  CheckCircle2,
  Heart
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EVENTS_DATA, EventItem } from "../data/events-data";

export function EventsView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterEvents = (status: "Upcoming" | "Completed") => {
    return EVENTS_DATA.filter((event) => {
      const matchesStatus = event.status === status;
      const matchesCategory =
        selectedFilter === "All" || event.category === selectedFilter;
      return matchesStatus && matchesCategory;
    });
  };

  return (
    <div className="flex flex-col bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_volunteers.jpg"
            alt="Eklavya volunteers in community drive"
            fill
            priority
            className="object-cover object-center brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f273d]/90 via-[#0f273d]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              GROUND ACTION • EVENTS, DRIVES &amp; STORIES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Impact in Action across
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Haldia.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans max-w-2xl mx-auto">
              Explore our scheduled weekend teaching sessions, vaccination camps, street rescue drives, and in-depth ground reports.
            </p>
          </div>
        </div>
      </section>

      {/* Events Directory */}
      <section className="py-20 bg-gradient-to-b from-white via-[#bff1f6]/15 to-white min-h-[600px] border-b border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#155ea0] mr-2">
                Category:
              </span>
              {(["All", "Education", "Animal Welfare", "Community"] as const).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedFilter === category
                        ? "bg-[#155ea0] text-white shadow-md shadow-[#155ea0]/25"
                        : "bg-white text-[#0f273d] border border-[#89c3da]/60 hover:bg-[#bff1f6]/40"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <div className="text-xs text-[#3b5368] font-medium hidden sm:block">
              Showing stories from Haldia Institute of Technology
            </div>
          </div>

          {/* Tabs for Upcoming vs Past */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-10 bg-[#bff1f6]/40 p-1.5 rounded-full border border-[#89c3da]/60 h-auto">
              <TabsTrigger 
                value="upcoming" 
                className="rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-[#155ea0] data-[state=active]:text-white shadow-sm transition-all"
              >
                Upcoming Events &amp; Drives
              </TabsTrigger>
              <TabsTrigger 
                value="past" 
                className="rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-[#155ea0] data-[state=active]:text-white shadow-sm transition-all"
              >
                Past Milestones &amp; Blogs
              </TabsTrigger>
            </TabsList>

            {/* UPCOMING TAB */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterEvents("Upcoming").map((event) => (
                  <EventCard key={event.id} event={event} isUpcoming={true} />
                ))}
              </div>
            </TabsContent>

            {/* PAST TAB */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterEvents("Completed").map((event) => (
                  <EventCard key={event.id} event={event} isUpcoming={false} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-16 bg-[#155ea0] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-2">
            HAVE AN IDEA FOR A COMMUNITY DRIVE?
          </div>
          <h3 className="text-3xl font-extrabold text-white">
            Lead a Drive with Eklavya HIT
          </h3>
          <p className="mt-3 text-sm text-[#bff1f6] max-w-xl mx-auto">
            If you are a student or faculty member at Haldia Institute of Technology with an initiative idea, collaborate with our ground team.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/about-us">
              <button className="bg-white text-[#155ea0] hover:bg-[#bff1f6] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer">
                Volunteer with Us
              </button>
            </Link>
            <Link href="/donate">
              <button className="border-2 border-[#bff1f6] text-white hover:bg-[#bff1f6] hover:text-[#155ea0] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Fund an Event
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function EventCard({ event, isUpcoming }: { event: EventItem; isUpcoming: boolean }) {
  return (
    <div className="group rounded-3xl bg-white border-2 border-[#89c3da]/50 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#155ea0] transition-all duration-300">
      
      {/* Top Media / Cover Image Container */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f273d]/75 via-transparent to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#155ea0]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              {event.category}
            </span>
            {event.impactBadge && (
              <span className="text-[10px] font-bold text-[#0f273d] bg-[#bff1f6]/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#89c3da] shadow-sm">
                {event.impactBadge}
              </span>
            )}
          </div>

          {/* Bottom Title bar overlay on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-[11px] text-[#bff1f6] font-medium">
              <Calendar className="h-3.5 w-3.5 text-[#89c3da]" />
              <span>{event.date}</span>
              <span className="mx-1">•</span>
              <Clock className="h-3.5 w-3.5 text-[#89c3da]" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0f273d] group-hover:text-[#155ea0] transition-colors line-clamp-2 leading-snug mb-3">
            {event.title}
          </h3>

          <div className="flex items-start gap-2 text-xs text-[#3b5368] mb-4">
            <MapPin className="h-4 w-4 text-[#155ea0] shrink-0 mt-0.5" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#3b5368] leading-relaxed line-clamp-3 mb-4">
            {event.summary}
          </p>
        </div>
      </div>

      {/* Card Footer with Read More CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-[#89c3da]/30 flex items-center justify-between gap-3">
        <div className="text-[11px] font-semibold text-[#5996b9]">
          {event.readTime}
        </div>

        <Link 
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-2 bg-[#155ea0] hover:bg-[#2e6ea6] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#155ea0]/20 transition-all active:scale-95 group/btn cursor-pointer"
        >
          <span>Read More</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
