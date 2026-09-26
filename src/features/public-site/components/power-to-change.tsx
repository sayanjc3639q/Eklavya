import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PowerToChangeLife() {
  return (
    <section className="relative overflow-hidden bg-[#2e6ea6] text-white py-24 sm:py-28">
      {/* Decorative Brush/Wave Backing using our palette */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#155ea0]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#89c3da]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tag */}
        <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-4">
          JOIN THE MOVEMENT
        </div>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          You Have the <span className="text-white">Power to</span>
          <br />
          <span className="font-serif italic font-normal text-[#bff1f6]">
            Change a Life
          </span>
        </h2>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/about-us">
            <button className="w-full sm:w-auto bg-[#155ea0] hover:bg-[#0f273d] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-[#89c3da]/40 transition-all cursor-pointer">
              Volunteer with Eklavya
            </button>
          </Link>
          <Link href="/donate">
            <button className="w-full sm:w-auto border-2 border-[#bff1f6] text-white hover:bg-[#bff1f6] hover:text-[#155ea0] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>Support Our Impact</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
