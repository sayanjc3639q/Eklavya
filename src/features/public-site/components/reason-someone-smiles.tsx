import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ReasonSomeoneSmiles() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Large Column (Tall Card with Gradient Overlay) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl min-h-[460px] lg:min-h-[520px] flex flex-col justify-end group">
            <Image
              src="/teacher_classroom.jpg"
              alt="Teacher guiding classroom of children"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Gradient Overlay for perfect typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-sans">
                Be the Reason
                <br />
                Someone <span className="text-[#bff1f6] font-serif italic">Smiles.</span>
              </h3>
            </div>
          </div>

          {/* Right Column (2 Small Top Photos + 1 Bottom Impact Card) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Top 2 Square Photos */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#89c3da]/30">
                <Image
                  src="/smiling_child.jpg"
                  alt="Smiling young school girl"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#89c3da]/30">
                <Image
                  src="/clock_craft.jpg"
                  alt="Young student with clock craft project"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom Impact Card in Palette */}
            <div className="rounded-3xl bg-[#155ea0] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl flex-1 border border-[#2e6ea6]">
              <div>
                <p className="text-base sm:text-lg font-semibold text-[#bff1f6] leading-snug">
                  Join us in the journey to empower communities and change lives across Haldia.
                </p>
                <div className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-white font-sans">
                  80,000+
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a8deee] mt-1">
                  Hours Contributed &amp; Children Supported
                </div>
              </div>

              <div className="mt-6">
                <Link href="/donate">
                  <button className="w-full bg-white hover:bg-[#bff1f6] text-[#155ea0] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
                    <span>Donate Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
