import Link from "next/link";
import { ArrowRight, Heart, Users, Sparkles, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eff6fc] via-[#f9fbfd] to-[#f5f5f5] pt-14 pb-16 lg:pt-20 lg:pb-28 border-b border-[#edebe9]">
      {/* Fluent Subtly Elevated Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-tr from-[#0078d4]/10 via-[#00a4ef]/10 to-[#7fba00]/10 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Microsoft Fluent Ribbon Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c7e0f4] text-[#004e8c] text-xs sm:text-sm font-semibold mb-6 shadow-[0_1.2px_3.6px_rgba(0,0,0,0.06)]">
            <span className="flex h-2 w-2 rounded-full bg-[#0078d4]" />
            <span>Haldia Institute of Technology • Student Social Initiative</span>
          </div>

          {/* Fluent Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#242424] leading-[1.18] font-sans">
            Nurturing Excellence,{" "}
            <span className="bg-gradient-to-r from-[#0078d4] via-[#005a9e] to-[#107c41] bg-clip-text text-transparent">
              Inspiring Tomorrow
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#616161] leading-relaxed">
            Eklavya - Hands That Care empowers underprivileged children through structured primary education and provides emergency rescue, medical first-aid, and rehabilitation for stray animals across Haldia.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold shadow-[0_3.2px_7.2px_0_rgba(0,120,212,0.3)] gap-2">
                <Heart className="h-4 w-4 fill-white" />
                Donate to the Cause
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/about-us" className="w-full sm:w-auto">
              <Button variant="white" size="lg" className="w-full sm:w-auto font-semibold gap-2 border-[#edebe9]">
                <Users className="h-4 w-4 text-[#0078d4]" />
                Join As A Volunteer
              </Button>
            </Link>
          </div>

          {/* Microsoft Style Quick Feature Tiles */}
          <div className="mt-12 pt-8 border-t border-[#edebe9] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm font-medium text-[#424242] w-full max-w-4xl">
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white border border-[#edebe9] shadow-sm">
              <BookOpen className="h-4 w-4 text-[#0078d4] shrink-0" />
              <span>Evening Slum Schooling</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white border border-[#edebe9] shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#107c41] shrink-0" />
              <span>Stray Animal Rescue</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white border border-[#edebe9] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#d83b01] shrink-0" />
              <span>100% Student-Driven</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white border border-[#edebe9] shadow-sm">
              <Heart className="h-4 w-4 text-[#e3008c] shrink-0" />
              <span>Transparent Allocation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
