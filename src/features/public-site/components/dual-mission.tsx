import Link from "next/link";
import { BookOpen, HeartPulse, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualMission() {
  return (
    <section className="py-20 bg-[#faf9f8] border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eff6fc] border border-[#c7e0f4] text-[#004e8c] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#0078d4]" />
            <span>Core Pillars of Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight">
            Two Pillars. One Unified Purpose.
          </h2>
          <p className="mt-3 text-base text-[#616161]">
            Eklavya bridges student talent and social compassion by addressing two critical needs across the Haldia region.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Pillar 1: Education (Microsoft Blue Accent) */}
          <div className="fluent-card p-8 flex flex-col justify-between border-t-4 border-t-[#0078d4] group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-lg bg-[#eff6fc] border border-[#c7e0f4] text-[#0078d4] flex items-center justify-center shadow-sm group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#004e8c] bg-[#eff6fc] px-2.5 py-1 rounded-md border border-[#c7e0f4]">
                  Pillar 01
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#242424] mb-2">
                Child Education & Mentorship
              </h3>
              <p className="text-[#616161] text-sm leading-relaxed mb-6">
                We organize evening study centers and tutoring for children in underprivileged communities near Haldia. From fundamental literacy to STEM workshops, HIT student volunteers mentor and inspire the next generation.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0078d4] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Free study kits, notebooks, and school supplies distribution
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0078d4] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Continuous weekend mentorship by HIT engineering students
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0078d4] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Formal school admission support & scholarship guidance
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#edebe9] flex items-center justify-between">
              <Link href="/vision-mission">
                <Button variant="ghost" className="font-semibold text-[#0078d4] hover:text-[#005a9e] p-0 hover:bg-transparent flex items-center gap-1.5">
                  Explore Education Initiatives
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillar 2: Stray Animal Welfare (Microsoft Green Accent) */}
          <div className="fluent-card p-8 flex flex-col justify-between border-t-4 border-t-[#107c41] group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-lg bg-[#f0f9f3] border border-[#b5e0c4] text-[#107c41] flex items-center justify-center shadow-sm group-hover:bg-[#107c41] group-hover:text-white transition-colors">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0e6333] bg-[#f0f9f3] px-2.5 py-1 rounded-md border border-[#b5e0c4]">
                  Pillar 02
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#242424] mb-2">
                Stray Animal Rescue & Care
              </h3>
              <p className="text-[#616161] text-sm leading-relaxed mb-6">
                Street animals face daily hazards, malnutrition, and injuries. Our rapid-response student team provides first-aid, anti-rabies vaccination drives, regular feeding routes, and adoption coordination.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#107c41] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Rapid medical first-aid & emergency veterinary transport
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#107c41] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Organized campus and community feeding drives for strays
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#107c41] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#424242]">
                    Anti-rabies inoculation drives and adoption screening
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#edebe9] flex items-center justify-between">
              <Link href="/vision-mission">
                <Button variant="ghost" className="font-semibold text-[#107c41] hover:text-[#0b5a2f] p-0 hover:bg-transparent flex items-center gap-1.5">
                  Explore Animal Welfare
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
