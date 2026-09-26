import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EklavyaAudienceCards() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: #155ea0 (Deep Royal Cerulean) - White Text */}
        <div className="rounded-3xl bg-[#155ea0] text-white p-8 flex flex-col justify-between shadow-2xl border border-[#2e6ea6] min-h-[270px] transition-transform hover:-translate-y-1">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-[#a8deee]">
              I&apos;m a Student Changemaker
            </div>
            <div className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white font-sans">
              150+
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#bff1f6]">
              HIT Volunteers Engaged
            </div>
          </div>

          <div className="mt-6">
            <Link href="/about-us">
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#bff1f6] bg-transparent text-white font-bold text-xs uppercase tracking-wider hover:bg-[#bff1f6] hover:text-[#155ea0] transition-all cursor-pointer">
                CLICK HERE
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2: #bff1f6 (Ultra Light Aqua Tint) - Deep #155ea0 text */}
        <div className="rounded-3xl bg-[#bff1f6] text-[#0f273d] p-8 flex flex-col justify-between shadow-xl border border-[#89c3da] min-h-[270px] transition-transform hover:-translate-y-1">
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#155ea0]">
              I&apos;m an Individual Supporter
            </div>
            <div className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-[#155ea0] font-sans">
              120+
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#2e6ea6]">
              Children &amp; Animals Reached
            </div>
          </div>

          <div className="mt-6">
            <Link href="/donate">
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#155ea0] bg-transparent text-[#155ea0] font-bold text-xs uppercase tracking-wider hover:bg-[#155ea0] hover:text-white transition-all cursor-pointer">
                CLICK HERE
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3: #5996b9 (Steel Azure) - Crisp White Text */}
        <div className="rounded-3xl bg-[#5996b9] text-white p-8 flex flex-col justify-between shadow-xl border border-[#4886b2] min-h-[270px] transition-transform hover:-translate-y-1">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-[#bff1f6]">
              Campus &amp; Institutional Synergy
            </div>
            <div className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white font-sans">
              6+
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#a8deee]">
              Years of Ground Impact
            </div>
          </div>

          <div className="mt-6">
            <Link href="/vision-mission">
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white bg-transparent text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#2e6ea6] transition-all cursor-pointer">
                CLICK HERE
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
