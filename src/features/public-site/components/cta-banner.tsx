import Link from "next/link";
import { Heart, ArrowRight, ShieldCheck } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#155ea0] via-[#2e6ea6] to-[#0f273d] py-16 text-white border-t border-[#4886b2]/40">
      {/* Decorative Glow using #89c3da & #bff1f6 */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#89c3da]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#bff1f6]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
          Direct Ground Contribution
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
          Help Us Educate a Child or Treat an Injured Stray Today
        </h2>

        <p className="mt-3 max-w-xl mx-auto text-[#a8deee] text-base leading-relaxed">
          100% of your contributions go straight into books, school supplies, emergency veterinary treatment, and daily meals in Haldia.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/donate" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-[#155ea0] hover:bg-[#bff1f6] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Heart className="h-4 w-4 fill-[#155ea0] text-[#155ea0]" />
              Make A Contribution
            </button>
          </Link>
          <Link href="/about-us" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#89c3da] text-white hover:bg-white/10 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              Read Our Full Story
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#bff1f6]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#89c3da]" />
            Transparent Fund Allocation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#89c3da]" />
            100% Student-Audited Operations
          </span>
        </div>
      </div>
    </section>
  );
}
