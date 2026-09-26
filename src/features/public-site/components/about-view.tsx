import Image from "next/image";
import Link from "next/link";
import { Compass, CheckCircle2, ArrowRight } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    year: "2019",
    title: "The Genesis at HIT Haldia",
    description:
      "A passionate group of engineering students noticed children from nearby railway slums lacking primary literacy and stray animals suffering untreated on campus roads. Eklavya was born with just 8 volunteer teachers.",
    badge: "Foundation",
    color: "bg-[#155ea0]",
  },
  {
    year: "2020",
    title: "Emergency COVID-19 Food & Ration Drives",
    description:
      "During campus lockdowns, student leads coordinated doorstep ration packages for over 300 vulnerable daily-wage families and arranged dedicated stray feeding points around Haldia.",
    badge: "Crisis Relief",
    color: "bg-[#2e6ea6]",
  },
  {
    year: "2022",
    title: "Official Animal Rescue Wing & Vaccination Drives",
    description:
      "Formalized our Animal Welfare Wing with local veterinary clinic tie-ups, completing anti-rabies vaccinations for 100+ community strays and setting up an on-call student rescue hotline.",
    badge: "Expansion",
    color: "bg-[#4886b2]",
  },
  {
    year: "2024 - Present",
    title: "Weekend Learning Centers & Digital Literacy",
    description:
      "Operating regular weekend coaching centers with curated study kits, science workshops, scholarship assistance, and 150+ active student volunteers across multiple batches.",
    badge: "Scale & Impact",
    color: "bg-[#155ea0]",
  },
];

export function AboutView() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. Full-Bleed Editorial Hero Header */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[480px] lg:min-h-[540px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_volunteers.jpg"
            alt="Eklavya volunteers group photo"
            fill
            priority
            className="object-cover object-center brightness-[0.40] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f273d]/90 via-[#0f273d]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              ABOUT US • OUR STORY &amp; HIT ROOTS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Born on Campus.
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Driven by Unwavering Compassion.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans max-w-xl">
              Eklavya - Hands That Care began as a grassroots student initiative inside Haldia Institute of Technology. Today, it stands as an active student-led organization empowering children and protecting animals across Haldia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Dual Cards */}
      <section className="py-20 bg-white border-b border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                THE EKLAVYA PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f273d] tracking-tight">
                Why Engineering Students Choose to Teach &amp; Rescue
              </h2>
              <p className="text-base text-[#3b5368] leading-relaxed">
                As engineering students at Haldia Institute of Technology, we believe academic excellence and social empathy must coexist. While building technical careers in classrooms, we dedicate our weekends to solving immediate humanitarian and animal welfare challenges outside our college gates.
              </p>
              <p className="text-base text-[#3b5368] leading-relaxed">
                Named after <em>Eklavya</em>—the epitome of dedication and self-driven learning—we strive to give every underprivileged child personalized mentorship and provide every injured street animal emergency medical treatment.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-6 rounded-3xl bg-gradient-to-b from-[#bff1f6]/30 to-white border-2 border-[#89c3da]/60 shadow-md">
                  <div className="text-3xl font-black text-[#155ea0]">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0f273d] mt-1">Student Operated</div>
                  <div className="text-xs text-[#3b5368] mt-1">Zero administrative deductions</div>
                </div>
                <div className="p-6 rounded-3xl bg-gradient-to-b from-[#bff1f6]/30 to-white border-2 border-[#89c3da]/60 shadow-md">
                  <div className="text-3xl font-black text-[#2e6ea6]">HIT Campus</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0f273d] mt-1">Institutional Backing</div>
                  <div className="text-xs text-[#3b5368] mt-1">Faculty advisors &amp; student synergy</div>
                </div>
              </div>
            </div>

            {/* Visual Operational Highlight Card */}
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#155ea0] to-[#2e6ea6] text-white shadow-2xl border border-[#4886b2] space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="h-6 w-6 text-[#bff1f6]" />
                <span>Our Core Operational Commitments</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-[#bff1f6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Zero Child Left Behind</strong>
                    <span className="text-[#a8deee] text-xs">Four weekly evening coaching hubs near Haldia railway slum clusters.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-[#bff1f6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Emergency Animal First-Aid Squad</strong>
                    <span className="text-[#a8deee] text-xs">24/7 on-call student rescue squad, wound dressing, and veterinary clinic transit.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-[#bff1f6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Community Sensitization</strong>
                    <span className="text-[#a8deee] text-xs">Instilling respect, cleanliness, and humane coexistence across campus and town.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Milestone Timeline Component */}
      <section className="py-24 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white border-b border-[#89c3da]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0] mb-3">
              MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f273d]">
              The Journey So Far
            </h2>
            <p className="text-sm text-[#3b5368] mt-2">
              From an informal group of 8 engineering batchmates to a full-fledged campus NGO.
            </p>
          </div>

          <div className="relative border-l-2 border-[#155ea0]/40 ml-4 sm:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Year Marker on Left */}
                <div className="hidden sm:block absolute -left-32 top-0 text-right w-24">
                  <span className="text-lg font-black text-[#155ea0]">{event.year}</span>
                </div>

                {/* Dot */}
                <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full ${event.color} ring-4 ring-white shadow-md`} />

                {/* Card */}
                <div className="rounded-3xl bg-white border-2 border-[#89c3da]/50 p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-[#155ea0] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="sm:hidden text-xs font-bold text-[#155ea0]">{event.year} •</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                      {event.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f273d] mb-2">{event.title}</h3>
                  <p className="text-sm text-[#3b5368] leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-16 bg-[#155ea0] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white">Want to be part of our story?</h3>
          <p className="mt-3 text-sm text-[#bff1f6]">
            Whether you are an HIT student looking to volunteer, or a well-wisher looking to support our education and animal rescue kits.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Link href="/team">
              <button className="bg-white text-[#155ea0] hover:bg-[#bff1f6] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer">
                Meet Our Team
              </button>
            </Link>
            <Link href="/donate">
              <button className="border-2 border-[#bff1f6] text-white hover:bg-[#bff1f6] hover:text-[#155ea0] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Support Eklavya
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
