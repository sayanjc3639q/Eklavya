import Image from "next/image";
import Link from "next/link";

export function EklavyaHero() {
  return (
    <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image of Real Volunteers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_volunteers.jpg"
          alt="Eklavya Volunteers at Haldia Institute of Technology"
          fill
          priority
          className="object-cover object-center brightness-[0.38] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f273d]/90 via-[#155ea0]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            One <span className="text-white">Movement</span>
            <br />
            <span className="font-serif italic font-normal text-[#a8deee]">
              Many Ways to
            </span>
            <br />
            Bring Change.
          </h1>

          {/* Subheading in Serif Italic (#bff1f6) */}
          <h2 className="mt-4 text-xl sm:text-2xl font-serif italic text-[#bff1f6]">
            One platform. Endless ways to give
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-[#a8deee]/90 leading-relaxed max-w-xl font-sans">
            Whether <strong className="text-white">you&apos;re a young changemaker</strong> with passion, a generous donor with purpose, or an institutional partner with scale, <strong>Eklavya</strong> is your platform to transform education and animal welfare across Haldia.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/about-us">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-[#89c3da]/40 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
                Learn Our Story
              </button>
            </Link>
            <Link href="/donate">
              <button className="bg-[#155ea0] hover:bg-[#2e6ea6] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans shadow-lg shadow-[#155ea0]/40 border border-[#89c3da]/30 transition-all cursor-pointer">
                Join The Movement
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
