import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PILLARS_6 = [
  {
    number: "01",
    title: "Classroom Teaching & Evening Mentoring",
    description:
      "HIT student volunteers deliver structured learning sessions in partner slum study centers, from foundational literacy and mathematics to career guidance for high-school learners. Every session follows a curated curriculum so volunteer mentors feel confident.",
  },
  {
    number: "02",
    title: "School Kits & Study Desk Infrastructure",
    description:
      "Large-format donation drives where we distribute comprehensive study kits, books, solar study lamps, notebooks, and renovate local study spaces with whiteboards and clean drinking water facilities.",
  },
  {
    number: "03",
    title: "STEM Workshops & Experiential Science",
    description:
      "Student engineers share technical knowledge, simple electronics kits, robotics models, and design thinking directly with young students to inspire creativity beyond textbook rote learning.",
  },
  {
    number: "04",
    title: "Stray Animal Rescue & 24/7 First-Aid",
    description:
      "Rapid-response on-call volunteer squad providing wound dressings, emergency veterinary hospital transit, medication, and foster rehabilitation for injured and distressed street animals in Haldia.",
  },
  {
    number: "05",
    title: "Anti-Rabies Inoculation & Safety Collars",
    description:
      "Scheduled community-wide vaccination drives protecting street dog populations and fitting reflective glowing collars to drastically minimize night-time vehicular accidents.",
  },
  {
    number: "06",
    title: "Community Feeding & Summer Hydration",
    description:
      "Organized evening food routes providing clean cooked meals and installation of permanent cemented water bowls across campus and key municipal sectors to prevent summer dehydration.",
  },
];

export function VisionMissionView() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. Hero Banner Matching Editorial Vision Style */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[480px] lg:min-h-[540px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vision_hero.jpg"
            alt="Children smiling together outdoors"
            fill
            priority
            className="object-cover object-center brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f273d]/90 via-[#0f273d]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              ABOUT US • VISION &amp; MISSION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Change Today...
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Change Tomorrow.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans max-w-xl">
              Eklavya was founded by engineering students at Haldia Institute of Technology who believed that every underprivileged child deserves quality education, and every stray animal deserves safety and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Introductory Narrative Paragraph */}
      <section className="py-16 bg-white border-b border-[#89c3da]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-2xl text-[#0f273d] font-normal leading-relaxed">
            Eklavya was founded at Haldia Institute of Technology by a group of passionate students who believed that <strong>no child should be denied the gift of education</strong> and <strong>no animal should suffer on our streets</strong>. Since then, Eklavya has transformed this conviction into an active volunteering movement for youth, building a compassionate ecosystem across Haldia.
          </p>
        </div>
      </section>

      {/* 3. Full-Width School Assembly Photo Card */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#89c3da]/40">
            <Image
              src="/school_line.jpg"
              alt="Rural school children standing in neat assembly line"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Alternating Vision & Mission Focus Blocks (Matching Screenshot 2) */}
      <section className="py-16 bg-white space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Row A: Mission Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                OUR MISSION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f273d] tracking-tight">
                Together for Lasting Hope and Humanity
              </h2>
              <p className="text-base text-[#3b5368] leading-relaxed">
                To drive real social change in Haldia by fostering an empowering environment where young adults and underprivileged children learn, lead, and thrive together while protecting vulnerable street animals.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-[#89c3da]/40">
                <Image
                  src="/laptop_learning.jpg"
                  alt="Children learning together on a digital laptop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row B: Vision Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-[#89c3da]/40">
                <Image
                  src="/stray_rescue.jpg"
                  alt="HIT Volunteers caring for stray animals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                OUR VISION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f273d] tracking-tight">
                Opportunity, Compassion and Equality for All
              </h2>
              <p className="text-base text-[#3b5368] leading-relaxed">
                To build an influential, equal, and socially conscious society where educational access knows no economic boundaries and where stray animals live safely without suffering or neglect.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Iconic Signature Blue Quote Box (Preserved as requested) */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-14 bg-[#155ea0] text-white shadow-2xl border border-[#2e6ea6]">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-6">
              THE GRAND VISION
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white font-sans">
              “A society where quality primary education is a fundamental right for every child, and where stray animals receive the empathy, medical care, and dignity they deserve.”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#4886b2]/60 text-sm text-[#bff1f6] flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-semibold">Eklavya Core Charter</span>
              <span>Haldia Institute of Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The 6-Card Numbered Grid (Matching Screenshot 3) */}
      <section className="py-20 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white border-t border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0] mb-3">
              OUR ACTION TRACKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f273d]">
              How We Create Measurable Impact
            </h2>
            <p className="text-sm text-[#3b5368] mt-2">
              Structured operational programs delivered on the ground by student volunteers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS_6.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-3xl bg-white border-2 border-[#89c3da]/50 p-8 sm:p-10 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#155ea0] transition-all duration-300 group"
              >
                <div>
                  {/* Circle Number Badge in palette #89c3da / #155ea0 */}
                  <div className="h-12 w-12 rounded-full bg-[#bff1f6] text-[#155ea0] border border-[#89c3da] flex items-center justify-center font-bold text-sm mb-6 group-hover:bg-[#155ea0] group-hover:text-white transition-colors">
                    {pillar.number}
                  </div>

                  <h3 className="text-xl font-bold text-[#0f273d] mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3b5368] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Call To Action Footer Banner */}
      <section className="py-16 bg-[#155ea0] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white">Join Our Vision for Haldia</h3>
          <p className="mt-3 text-sm text-[#bff1f6]">
            Whether you want to tutor slum children on weekends, join animal rescue shifts, or support study kits.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Link href="/about-us">
              <button className="bg-white text-[#155ea0] hover:bg-[#bff1f6] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer">
                Volunteer with Eklavya
              </button>
            </Link>
            <Link href="/donate">
              <button className="border-2 border-[#bff1f6] text-white hover:bg-[#bff1f6] hover:text-[#155ea0] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
