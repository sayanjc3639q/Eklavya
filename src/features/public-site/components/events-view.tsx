"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, CheckCircle2, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
    accent: "border-l-4 border-l-[#0078d4]",
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
    accent: "border-l-4 border-l-[#107c41]",
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
    accent: "border-l-4 border-l-[#5c2d91]",
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
    accent: "border-l-4 border-l-[#0078d4]",
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
    accent: "border-l-4 border-l-[#107c41]",
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
    accent: "border-l-4 border-l-[#0078d4]",
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
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eff6fc] via-[#f9fbfd] to-white py-16 sm:py-20 border-b border-[#edebe9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0078d4] mb-3">
            Community Engagements
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            Events &amp; Ground Action Drives
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#616161] leading-relaxed">
            Discover our upcoming weekend initiatives or view past milestone camps organized by student volunteers in Haldia.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-[#faf9f8] min-h-[600px] border-b border-[#edebe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#616161]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#616161]">Filter:</span>
              {(["All", "Education", "Animal Welfare", "Community"] as const).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                      selectedFilter === category
                        ? "bg-[#0078d4] text-white shadow-sm"
                        : "bg-white text-[#424242] border border-[#edebe9] hover:bg-[#f3f2f1]"
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
            <TabsList className="mb-8">
              <TabsTrigger value="upcoming">Upcoming Events &amp; Drives</TabsTrigger>
              <TabsTrigger value="past">Past Completed Milestones</TabsTrigger>
            </TabsList>

            {/* Upcoming Tab Content */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterEvents("Upcoming").map((event) => (
                  <div
                    key={event.id}
                    className={`fluent-card p-6 flex flex-col justify-between ${event.accent} hover:border-[#0078d4] transition-all`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant={
                            event.category === "Education"
                              ? "secondary"
                              : event.category === "Animal Welfare"
                              ? "success"
                              : "purple"
                          }
                        >
                          {event.category}
                        </Badge>
                        <span className="text-xs font-semibold text-[#0078d4] bg-[#eff6fc] px-2 py-0.5 rounded">
                          Registration Open
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#242424] mb-3 leading-snug">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-xs text-[#616161] mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#0078d4]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-[#0078d4]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 text-[#0078d4] shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#616161] leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#edebe9]">
                      <Button size="sm" className="w-full bg-[#0078d4] text-white">
                        Volunteer for this Drive
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Past Tab Content */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterEvents("Completed").map((event) => (
                  <div
                    key={event.id}
                    className={`fluent-card p-6 flex flex-col justify-between ${event.accent} opacity-90`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{event.category}</Badge>
                        {event.impactBadge && (
                          <span className="text-xs font-semibold text-[#0e6333] bg-[#f0f9f3] px-2 py-0.5 rounded border border-[#b5e0c4]">
                            {event.impactBadge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-[#242424] mb-3 leading-snug">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-xs text-[#616161] mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#616161]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 text-[#616161] shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#616161] leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#edebe9] flex items-center justify-between text-xs text-[#707070]">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#107c41]" />
                        Successfully Executed
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
