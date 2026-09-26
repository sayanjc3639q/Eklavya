import Link from "next/link";
import { Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIMELINE_EVENTS = [
  {
    year: "2019",
    title: "The Genesis at HIT Haldia",
    description:
      "A passionate group of engineering students noticed children from nearby railway slums lacking primary literacy and stray animals suffering untreated on campus roads. Eklavya was born with just 8 volunteer teachers.",
    badge: "Foundation",
    color: "bg-[#0078d4]",
  },
  {
    year: "2020",
    title: "Emergency COVID-19 Food & Ration Drives",
    description:
      "During campus lockdowns, student leads coordinated doorstep ration packages for over 300 vulnerable daily-wage families and arranged dedicated stray feeding points around Haldia.",
    badge: "Crisis Relief",
    color: "bg-[#d83b01]",
  },
  {
    year: "2022",
    title: "Official Animal Rescue Wing & Vaccination Drives",
    description:
      "Formalized our Animal Welfare Wing with local veterinary clinic tie-ups, completing anti-rabies vaccinations for 100+ community strays and setting up an on-call student rescue hotline.",
    badge: "Expansion",
    color: "bg-[#107c41]",
  },
  {
    year: "2024 - Present",
    title: "Weekend Learning Centers & Digital Literacy",
    description:
      "Operating regular weekend coaching centers with curated study kits, science workshops, scholarship assistance, and 150+ active student volunteers across multiple batches.",
    badge: "Scale & Impact",
    color: "bg-[#5c2d91]",
  },
];

export function AboutView() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#eff6fc] via-[#f9fbfd] to-white py-16 sm:py-20 border-b border-[#edebe9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0078d4] mb-3">
            Our Roots &amp; Journey
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            Born on Campus. Driven by{" "}
            <span className="text-[#0078d4]">Unwavering Compassion</span>.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-[#616161] leading-relaxed">
            Eklavya - Hands That Care began as a grassroots student initiative inside Haldia Institute of Technology. Today, it stands as a transformative student-led organization empowering underprivileged children and protecting stray animals across Haldia.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="py-16 bg-white border-b border-[#edebe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0078d4]">
                The Eklavya Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#242424]">
                Why Engineering Students Choose to Teach and Rescue
              </h2>
              <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
                As engineering students at Haldia Institute of Technology, we believe education and empathy must go hand-in-hand. While we build technical careers in classrooms, we dedicate our weekends and evenings to bridging inequalities right outside our campus gates.
              </p>
              <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
                Named after <em>Eklavya</em>—the epitome of dedication and self-driven learning—we strive to provide every child the guidance they deserve and give every injured street animal a fighting chance.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-[#f9fbfd] border border-[#edebe9]">
                  <div className="text-2xl font-black text-[#0078d4]">100%</div>
                  <div className="text-xs font-semibold text-[#424242] mt-1">Student Operated</div>
                  <div className="text-xs text-[#707070]">No overhead administrative costs</div>
                </div>
                <div className="p-4 rounded-lg bg-[#f9fbfd] border border-[#edebe9]">
                  <div className="text-2xl font-black text-[#107c41]">HIT Campus</div>
                  <div className="text-xs font-semibold text-[#424242] mt-1">Institutional Backing</div>
                  <div className="text-xs text-[#707070]">Faculty advisory &amp; student synergy</div>
                </div>
              </div>
            </div>

            {/* Visual Highlight Card */}
            <div className="fluent-card p-8 bg-gradient-to-br from-[#eff6fc] to-white border-[#c7e0f4] space-y-6 shadow-md">
              <h3 className="text-lg font-bold text-[#004e8c] flex items-center gap-2">
                <Compass className="h-5 w-5 text-[#0078d4]" />
                Our Core Operational Pillars
              </h3>

              <div className="space-y-4 text-sm text-[#424242]">
                <div className="flex items-start gap-3 p-3 rounded-md bg-white border border-[#edebe9]">
                  <CheckCircle2 className="h-5 w-5 text-[#0078d4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#242424]">Zero Child Left Behind</span>
                    Evening slum classes focusing on basic literacy, numeracy, and character building.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-md bg-white border border-[#edebe9]">
                  <CheckCircle2 className="h-5 w-5 text-[#107c41] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#242424]">Emergency First-Aid Squad</span>
                    Immediate wound dressing, maggot infestation treatment, and vet transit for animals.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-md bg-white border border-[#edebe9]">
                  <CheckCircle2 className="h-5 w-5 text-[#d83b01] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#242424]">Community Sensitization</span>
                    Encouraging campus students and local residents to coexist respectfully with animals.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Component */}
      <section className="py-20 bg-[#faf9f8] border-b border-[#edebe9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0078d4]">
              Milestones
            </span>
            <h2 className="text-3xl font-bold text-[#242424] mt-1">
              The Journey So Far
            </h2>
            <p className="text-sm text-[#616161] mt-2">
              From an informal group of 8 engineering batchmates to a full-fledged campus NGO.
            </p>
          </div>

          <div className="relative border-l-2 border-[#0078d4]/30 ml-4 sm:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Marker on Left for desktop */}
                <div className="hidden sm:block absolute -left-32 top-0 text-right w-24">
                  <span className="text-base font-black text-[#0078d4]">{event.year}</span>
                </div>

                {/* Dot */}
                <div className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full ${event.color} ring-4 ring-white shadow-sm`} />

                {/* Card */}
                <div className="fluent-card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="sm:hidden text-xs font-bold text-[#0078d4]">{event.year} •</span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#eff6fc] text-[#004e8c]">
                      {event.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#242424] mb-2">{event.title}</h3>
                  <p className="text-sm text-[#616161] leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#242424]">Want to be part of our story?</h3>
          <p className="mt-2 text-sm text-[#616161]">
            Whether you are an HIT student looking to volunteer, or a well-wisher looking to support our education and animal welfare kits.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/team">
              <Button variant="outline">Meet Our Team</Button>
            </Link>
            <Link href="/donate">
              <Button className="bg-[#0078d4] text-white">Support Eklavya</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
