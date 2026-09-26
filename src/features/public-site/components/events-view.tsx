"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface EventItem {
  id: string;
  title: string;
  category: "Education" | "Animal Welfare" | "Community";
  date: string;
  time: string;
  location: string;
  description: string;
  status: "Upcoming" | "Completed";
  impactBadge?: string;
  accent: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "1",
    title: "Diwali Slum Study & Stationery Distribution Drive",
    category: "Education",
    date: "November 08, 2026",
    time: "3:30 PM - 6:30 PM",
    location: "Railway Colony Slum Cluster, Haldia",
    description:
      "Distributing 150+ comprehensive education kits containing notebooks, drawing pads, geometry boxes, and solar study lamps for evening studies.",
    status: "Upcoming",
    accent: "bg-[#155ea0]",
  },
  {
    id: "2",
    title: "Campus-Wide Anti-Rabies Vaccination & Collar Drive",
    category: "Animal Welfare",
    date: "November 16, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "HIT Main Campus & Surrounding Sectors",
    description:
      "Collaborative drive with Haldia Veterinary Hospital to inoculate 60+ stray dogs and fit reflective collars to prevent nighttime road accidents.",
    status: "Upcoming",
    accent: "bg-[#2e6ea6]",
  },
  {
    id: "3",
    title: "Winter Blanket & Woolen Distribution for Underprivileged",
    category: "Community",
    date: "December 12, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Durgachak & Haldia Municipality Areas",
    description:
      "Annual student collection drive delivering clean warm blankets and sweaters to elderly and slum children ahead of peak winter cold.",
    status: "Upcoming",
    accent: "bg-[#4886b2]",
  },
  {
    id: "4",
    title: "Independence Day Science & Fun Carnival for Kids",
    category: "Education",
    date: "August 15, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "HIT Campus Ground, Haldia",
    description:
      "Over 90 slum children visited HIT laboratories, participated in simple robotics/science experiments, art competitions, and enjoyed festive lunch.",
    status: "Completed",
    impactBadge: "90+ Children Participated",
    accent: "bg-[#155ea0]",
  },
  {
    id: "5",
    title: "Summer Hydration Bowl Installation for Stray Animals",
    category: "Animal Welfare",
    date: "May 20, 2026",
    time: "8:00 AM - 1:00 PM",
    location: "HIT Campus & City Center Haldia",
    description:
      "Installed 45 durable cement water bowls across campus and key town sectors to prevent dehydration and heatstroke in birds and stray dogs.",
    status: "Completed",
    impactBadge: "45 Water Bowls Installed",
    accent: "bg-[#2e6ea6]",
  },
  {
    id: "6",
    title: "Back-to-School Basic Literacy Induction Camp",
    category: "Education",
    date: "April 10, 2026",
    time: "4:00 PM - 6:30 PM",
    location: "Brajolalchak Community Hall",
    description:
      "Conducted foundational reading assessments and enrolled 28 first-generation learners into weekend coaching batches.",
    status: "Completed",
    impactBadge: "28 First-Gen Learners",
    accent: "bg-[#4886b2]",
  },
];

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              GROUND ACTION • EVENTS &amp; CAMPS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Upcoming Drives &amp;
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Milestone Initiatives.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans">
              Discover our scheduled weekend teaching sessions, vaccination camps, and street rescue drives across Haldia.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white min-h-[600px] border-b border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">Filter Category:</span>
              {(["All", "Education", "Animal Welfare", "Community"] as const).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedFilter === category
                        ? "bg-[#155ea0] text-white shadow-md shadow-[#155ea0]/30"
                        : "bg-white text-[#0f273d] border border-[#89c3da]/60 hover:bg-[#bff1f6]/30"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Tabs for Upcoming vs Past */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-10 bg-[#bff1f6]/40 p-1.5 rounded-full border border-[#89c3da]/60 h-auto">
              <TabsTrigger value="upcoming" className="rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-[#155ea0] data-[state=active]:text-white shadow-sm">
                Upcoming Events &amp; Drives
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-[#155ea0] data-[state=active]:text-white shadow-sm">
                Past Completed Milestones
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Tab Content */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterEvents("Upcoming").map((event) => (
                  <div
                    key={event.id}
                    className="rounded-3xl bg-white border-2 border-[#89c3da]/50 p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#155ea0] transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                          {event.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#155ea0] bg-[#bff1f6]/60 px-3 py-1 rounded-full border border-[#89c3da]/40">
                          Registration Open
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0f273d] mb-4 leading-snug">
                        {event.title}
                      </h3>

                      <div className="space-y-2.5 text-xs text-[#3b5368] mb-6">
                        <div className="flex items-center gap-2 font-medium">
                          <Calendar className="h-4 w-4 text-[#155ea0]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 font-medium">
                          <Clock className="h-4 w-4 text-[#155ea0]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2 font-medium">
                          <MapPin className="h-4 w-4 text-[#155ea0] shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#3b5368] leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#89c3da]/40">
                      <button className="w-full bg-[#155ea0] hover:bg-[#2e6ea6] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer">
                        Volunteer for this Drive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Past Tab Content */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterEvents("Completed").map((event) => (
                  <div
                    key={event.id}
                    className="rounded-3xl bg-white border-2 border-[#89c3da]/40 p-8 flex flex-col justify-between shadow-md opacity-90"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#3b5368]">
                          {event.category}
                        </span>
                        {event.impactBadge && (
                          <span className="text-[11px] font-bold text-[#155ea0] bg-[#bff1f6]/60 px-3 py-1 rounded-full border border-[#89c3da]/40">
                            {event.impactBadge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-[#0f273d] mb-4 leading-snug">
                        {event.title}
                      </h3>

                      <div className="space-y-2.5 text-xs text-[#3b5368] mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#3b5368]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-[#3b5368] shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#3b5368] leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#89c3da]/40 flex items-center justify-between text-xs text-[#155ea0] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#155ea0]" />
                        Successfully Executed in Haldia
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </section>
    </div>
  );
}
