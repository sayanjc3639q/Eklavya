import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Share2, UserCheck } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  branch: string;
  category: "Faculty" | "Core Lead" | "Volunteer";
  bio: string;
  initials: string;
  badge: string;
  accent: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. S. K. Bhattacharya",
    role: "Faculty Advisor & Mentor",
    branch: "Professor, Haldia Institute of Technology",
    category: "Faculty",
    bio: "Guiding student initiatives, institutional permissions, and community outreach strategies since 2019.",
    initials: "SB",
    badge: "Faculty Patron",
    accent: "border-t-4 border-t-[#5c2d91]",
  },
  {
    name: "Aman Sharma",
    role: "President & Operations Lead",
    branch: "B.Tech CSE (Final Year)",
    category: "Core Lead",
    bio: "Oversees overall volunteer scheduling, slum school curricula, and inter-college collaboration.",
    initials: "AS",
    badge: "Core Lead",
    accent: "border-t-4 border-t-[#0078d4]",
  },
  {
    name: "Priya Mukherjee",
    role: "Head of Animal Welfare Wing",
    branch: "B.Tech Biotechnology",
    category: "Core Lead",
    bio: "Directs 24/7 rescue coordination, veterinary hospital logistics, and stray vaccination drives.",
    initials: "PM",
    badge: "Animal Wing Head",
    accent: "border-t-4 border-t-[#107c41]",
  },
  {
    name: "Rohan Sen",
    role: "Education & Teaching Coordinator",
    branch: "B.Tech Electrical Engg",
    category: "Core Lead",
    bio: "Designs weekly lesson plans for slum children, study kit distribution, and student progress tracking.",
    initials: "RS",
    badge: "Education Lead",
    accent: "border-t-4 border-t-[#0078d4]",
  },
  {
    name: "Sneha Das",
    role: "Finance & Transparency Lead",
    branch: "B.Tech IT",
    category: "Core Lead",
    bio: "Manages donation fund audits, bill verifications, and public disclosure of NGO expenditures.",
    initials: "SD",
    badge: "Audit & Treasury",
    accent: "border-t-4 border-t-[#d83b01]",
  },
  {
    name: "Aniket Ghosh",
    role: "Volunteer Squad Coordinator",
    branch: "B.Tech Mechanical Engg",
    category: "Volunteer",
    bio: "Mobilizes weekend volunteers for feeding routes and setup of street medical camps.",
    initials: "AG",
    badge: "Lead Volunteer",
    accent: "border-t-4 border-t-[#008272]",
  },
];

export function TeamView() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eff6fc] via-[#f9fbfd] to-white py-16 sm:py-20 border-b border-[#edebe9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0078d4] mb-3">
            People Behind The Mission
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            Meet the Eklavya Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#616161] leading-relaxed">
            A united collective of students, faculty mentors, and volunteers at Haldia Institute of Technology giving their best for the community.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-[#faf9f8] border-b border-[#edebe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className={`fluent-card p-6 flex flex-col justify-between ${member.accent} hover:border-[#0078d4] transition-all`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <Badge
                      variant={
                        member.category === "Faculty"
                          ? "purple"
                          : member.category === "Core Lead"
                          ? "secondary"
                          : "success"
                      }
                    >
                      {member.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-[#242424]">{member.name}</h3>
                  <div className="text-xs font-semibold text-[#0078d4]">{member.role}</div>
                  <div className="text-xs text-[#707070] mb-3">{member.branch}</div>

                  <p className="text-xs text-[#616161] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#edebe9] flex items-center justify-between text-xs text-[#707070]">
                  <span>HIT Haldia Chapter</span>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded bg-[#f3f2f1] text-[#424242] hover:text-[#0078d4] cursor-pointer">
                      <Share2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="p-1.5 rounded bg-[#f3f2f1] text-[#424242] hover:text-[#0078d4] cursor-pointer">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
