import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Share2 } from "lucide-react";

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
    accent: "bg-[#155ea0]",
  },
  {
    name: "Aman Sharma",
    role: "President & Operations Lead",
    branch: "B.Tech CSE (Final Year)",
    category: "Core Lead",
    bio: "Oversees overall volunteer scheduling, slum school curricula, and inter-college collaboration.",
    initials: "AS",
    badge: "Core Lead",
    accent: "bg-[#2e6ea6]",
  },
  {
    name: "Priya Mukherjee",
    role: "Head of Animal Welfare Wing",
    branch: "B.Tech Biotechnology",
    category: "Core Lead",
    bio: "Directs 24/7 rescue coordination, veterinary hospital logistics, and stray vaccination drives.",
    initials: "PM",
    badge: "Animal Wing Head",
    accent: "bg-[#4886b2]",
  },
  {
    name: "Rohan Sen",
    role: "Education & Teaching Coordinator",
    branch: "B.Tech Electrical Engg",
    category: "Core Lead",
    bio: "Designs weekly lesson plans for slum children, study kit distribution, and student progress tracking.",
    initials: "RS",
    badge: "Education Lead",
    accent: "bg-[#155ea0]",
  },
  {
    name: "Sneha Das",
    role: "Finance & Transparency Lead",
    branch: "B.Tech IT",
    category: "Core Lead",
    bio: "Manages donation fund audits, bill verifications, and public disclosure of NGO expenditures.",
    initials: "SD",
    badge: "Audit & Treasury",
    accent: "bg-[#2e6ea6]",
  },
  {
    name: "Aniket Ghosh",
    role: "Volunteer Squad Coordinator",
    branch: "B.Tech Mechanical Engg",
    category: "Volunteer",
    bio: "Mobilizes weekend volunteers for feeding routes and setup of street medical camps.",
    initials: "AG",
    badge: "Lead Volunteer",
    accent: "bg-[#5996b9]",
  },
];

export function TeamView() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              THE TEAM • PASSION IN ACTION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Meet the Faces Behind
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Eklavya HIT.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans">
              A united collective of engineering students, volunteer tutors, animal rescuers, and faculty mentors from Haldia Institute of Technology giving their best for the community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white border-b border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border-2 border-[#89c3da]/50 p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#155ea0] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <Avatar className="h-16 w-16 border-2 border-[#89c3da]">
                      <AvatarFallback className="bg-[#bff1f6] text-[#155ea0] font-black text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                      {member.badge}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f273d]">{member.name}</h3>
                  <div className="text-xs font-bold text-[#155ea0] mt-1">{member.role}</div>
                  <div className="text-xs text-[#3b5368] mb-4">{member.branch}</div>

                  <p className="text-xs sm:text-sm text-[#3b5368] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#89c3da]/40 flex items-center justify-between text-xs text-[#3b5368]">
                  <span className="font-semibold text-[#155ea0]">HIT Haldia Chapter</span>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-[#bff1f6]/60 text-[#155ea0] hover:bg-[#155ea0] hover:text-white transition-colors cursor-pointer">
                      <Share2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="p-2 rounded-full bg-[#bff1f6]/60 text-[#155ea0] hover:bg-[#155ea0] hover:text-white transition-colors cursor-pointer">
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
