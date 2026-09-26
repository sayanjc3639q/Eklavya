import Image from "next/image";

const CHALLENGE_STATS = [
  {
    value: "47%",
    label: "Lack of Foundational Reading",
    desc: "Nearly half of primary slum students struggle to read basic Grade 2 sentences without regular remedial tutoring.",
    highlight: "Literacy Deficit",
  },
  {
    value: "1:45+",
    label: "Overcrowded Classrooms",
    desc: "Severe teacher shortages leave first-generation learners without individual academic attention or guidance.",
    highlight: "Teacher Ratio Gap",
  },
  {
    value: "68%",
    label: "Zero Home Study Resources",
    desc: "Children lack basic lighting, dedicated study desks, textbooks, and essential stationery supplies at home.",
    highlight: "Resource Scarcity",
  },
];

export function BhumiTheChallenge() {
  return (
    <section className="py-28 bg-white border-b border-[#89c3da]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0] mb-3">
            THE CHALLENGE
          </div>

          {/* Large Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f273d] tracking-tight leading-[1.15]">
            <span className="text-[#155ea0]">Underprivileged Children</span> Risk Being
            <br />
            <span className="font-serif italic font-normal text-[#2e6ea6]">
              Left Behind
            </span>
          </h2>

          {/* Subparagraph */}
          <p className="mt-6 text-base sm:text-xl text-[#3b5368] leading-relaxed font-sans max-w-2xl mx-auto">
            Without immediate intervention today, <strong>an entire generation of Haldia&apos;s most vulnerable children</strong> will grow up without the foundational literacy, critical skills, or mentorship needed to break the cycle of generational poverty.
          </p>
        </div>

        {/* Big Impact Cards using #bff1f6 / #89c3da and #155ea0 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {CHALLENGE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-gradient-to-b from-[#bff1f6]/30 via-white to-white border-2 border-[#89c3da]/60 p-8 sm:p-10 lg:p-12 min-h-[340px] flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#155ea0] hover:bg-[#bff1f6]/20 transition-all duration-300 group"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#4886b2] mb-2">
                  {stat.highlight}
                </div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#155ea0] tracking-tight font-sans group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-[#0f273d] mt-4 leading-snug">
                  {stat.label}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#3b5368] mt-6 leading-relaxed border-t border-[#89c3da]/40 pt-4">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-Section Alternating Storytelling Rows */}
        <div className="space-y-28">
          
          {/* Row 1: Opportunity Gaps at Home */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border-2 border-[#89c3da]/50">
              <Image
                src="/child_learning.jpg"
                alt="Opportunity Gaps at Home - Eklavya student tutoring children"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 lg:pl-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                Core Barrier 01
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#155ea0] tracking-tight">
                Opportunity Gaps at Home
              </h3>
              <p className="text-base sm:text-lg text-[#3b5368] leading-relaxed">
                Children from daily-wage households face relentless systemic barriers. From the lack of basic textbooks, geometry sets, and adequate study lighting to unstable domestic situations, quality learning feels unreachable before it even starts.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#0f273d] pt-2">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Absence of educated family members to assist with basic homework</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>High risk of premature dropouts to support family livelihoods</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2: Broken Classrooms & Resource Scarcity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4 lg:pr-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                Core Barrier 02
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#155ea0] tracking-tight">
                Broken Classrooms &amp; Overburdened Teachers
              </h3>
              <p className="text-base sm:text-lg text-[#3b5368] leading-relaxed">
                Government primary schools in remote industrial outskirts often operate under severe infrastructural strain. Dilapidated blackboards, missing learning aids, and a 1:45+ pupil-to-teacher ratio mean struggling students are quietly left behind without individual care.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#0f273d] pt-2">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Rote memorization replaces interactive and conceptual understanding</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Lack of experiential STEM, art, or extracurricular exposure</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border-2 border-[#89c3da]/50">
              <Image
                src="/broken_classroom.jpg"
                alt="Overburdened and under-resourced primary classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 3: The Widening Digital & Mentorship Divide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border-2 border-[#89c3da]/50">
              <Image
                src="/digital_divide.jpg"
                alt="Underprivileged girl studying under lantern light - The Digital Divide"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 lg:pl-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                Core Barrier 03
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#155ea0] tracking-tight">
                The Digital &amp; Mentorship Divide
              </h3>
              <p className="text-base sm:text-lg text-[#3b5368] leading-relaxed">
                As modern education rapidly shifts to digital tools and English proficiency, underprivileged students without computer access or personal mentors fall exponentially further behind their urban peers.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#0f273d] pt-2">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Zero exposure to digital devices and basic computer literacy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Lack of aspirational youth role models in immediate neighborhoods</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4: Stray Animal Distress & Neglect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4 lg:pr-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                Animal Welfare Distress
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#155ea0] tracking-tight">
                Stray Animal Distress &amp; Neglect
              </h3>
              <p className="text-base sm:text-lg text-[#3b5368] leading-relaxed">
                Alongside vulnerable children, over 1,000 stray dogs and cats across Haldia municipal zones suffer from untreated vehicular accidents, severe malnutrition, rabies exposure, and lack of clean water during peak summer months without organized rescue support.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#0f273d] pt-2">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>Absence of 24/7 dedicated animal ambulance transit in town</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#155ea0] shrink-0" />
                  <span>High rabies transmission risk without consistent inoculation coverage</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl border-2 border-[#89c3da]/50">
              <Image
                src="/stray_rescue.jpg"
                alt="HIT Students treating an injured stray animal"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
