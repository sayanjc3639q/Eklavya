"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProgramCard {
  id: string;
  pill: string;
  title: string;
  italicSubtitle: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor: string;
  accentTextColor: string;
  buttonBg: string;
  buttonText: string;
  borderColor: string;
}

const STACKED_CARDS: ProgramCard[] = [
  {
    id: "card-1",
    pill: "PROGRAM 01 • PRIMARY EDUCATION",
    title: "Strong Foundations",
    italicSubtitle: "In Slums & Villages",
    description:
      "We run 4 weekly community learning hubs directly inside underprivileged settlements near Haldia. From fundamental literacy and numerical confidence to school kit provisions, our student teachers build rock-solid educational roots.",
    highlights: [
      "120+ First-generation slum learners actively enrolled",
      "Free textbooks, notebooks, solar study lamps & stationery",
      "Regular parent counseling to prevent adolescent school dropouts",
    ],
    ctaText: "Explore Education Model",
    ctaLink: "/vision-mission",
    imageSrc: "/child_learning.jpg",
    imageAlt: "Eklavya Education drive with student tutor and children",
    bgColor: "bg-[#155ea0]",       /* Deepest Azure */
    textColor: "text-white",
    accentTextColor: "text-[#bff1f6]",
    buttonBg: "bg-[#bff1f6] hover:bg-white",
    buttonText: "text-[#155ea0]",
    borderColor: "border-[#2e6ea6]",
  },
  {
    id: "card-2",
    pill: "PROGRAM 02 • INNOVATION & STEM",
    title: "Experiential STEM & Arts",
    italicSubtitle: "Inspiring Scientific Curiosity",
    description:
      "Engineering student volunteers bring laboratory kits, robotics models, science demos, and art workshops directly to village kids. We transform dry theoretical memorization into playful discovery and critical thinking.",
    highlights: [
      "Hands-on electronics, robotics, and basic coding modules",
      "Weekend science carnivals & interactive science exhibits at HIT",
      "Dedicated painting, crafts, and self-expression sessions",
    ],
    ctaText: "View STEM Initiatives",
    ctaLink: "/events",
    imageSrc: "/stem_workshop.jpg",
    imageAlt: "HIT Students demonstrating robotics and science models to school children",
    bgColor: "bg-[#2e6ea6]",       /* Rich Deep Azure */
    textColor: "text-white",
    accentTextColor: "text-[#a8deee]",
    buttonBg: "bg-white hover:bg-[#bff1f6]",
    buttonText: "text-[#2e6ea6]",
    borderColor: "border-[#4886b2]",
  },
  {
    id: "card-3",
    pill: "PROGRAM 03 • ANIMAL RESCUE & VET CARE",
    title: "Emergency First-Aid",
    italicSubtitle: "For Injured Stray Animals",
    description:
      "Street animals suffer silently through vehicle accidents and disease. Our 24/7 student on-call response team carries first-aid kits, dresses infected wounds, provides medication, and transports critical cases to veterinary clinics.",
    highlights: [
      "50+ Successful emergency rescues and major surgical recoveries",
      "Annual campus & town-wide anti-rabies vaccination coverage",
      "Installation of reflective safety collars to prevent vehicle hits",
    ],
    ctaText: "Explore Animal Care",
    ctaLink: "/vision-mission",
    imageSrc: "/stray_rescue.jpg",
    imageAlt: "Students treating injured dog on campus",
    bgColor: "bg-[#4886b2]",       /* Medium Azure */
    textColor: "text-white",
    accentTextColor: "text-[#bff1f6]",
    buttonBg: "bg-white hover:bg-[#bff1f6]",
    buttonText: "text-[#155ea0]",
    borderColor: "border-[#5996b9]",
  },
  {
    id: "card-4",
    pill: "PROGRAM 04 • COMMUNITY NUTRITION & WELFARE",
    title: "Community Feeding Drives",
    italicSubtitle: "Hunger Relief & Summer Hydration",
    description:
      "A hungry animal is a distressed animal. We coordinate scheduled daily feeding routes across Haldia, cooking balanced nutritious meals and installing heavy cemented hydration bowls throughout campus and municipal areas.",
    highlights: [
      "Daily feeding routes covering 80+ stray animals every evening",
      "45+ Cement water bowls installed across dry zones during heatwaves",
      "Sterilization assistance and compassionate adoption screening",
    ],
    ctaText: "Support Animal Feeding",
    ctaLink: "/donate",
    imageSrc: "/community_feeding.jpg",
    imageAlt: "Organized student community stray dog feeding drive in Haldia",
    bgColor: "bg-[#5996b9]",       /* Steel Azure */
    textColor: "text-white",
    accentTextColor: "text-[#bff1f6]",
    buttonBg: "bg-[#155ea0] hover:bg-[#2e6ea6]",
    buttonText: "text-white",
    borderColor: "border-[#6faac7]",
  },
];

export function EklavyaWhatWeDo() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white border-t border-[#89c3da]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#155ea0] mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f273d] tracking-tight">
            Transforming Education <span className="font-serif italic font-normal text-[#155ea0]">&amp; Society</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b5368] font-sans max-w-xl mx-auto">
            Our multi-pronged programs bridge the divide between privilege and need through structured, on-ground student initiatives.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-12 pb-16">
          {STACKED_CARDS.map((card, idx) => {
            const stickyTop = 100 + idx * 28;

            return (
              <div
                key={card.id}
                style={{ top: `${stickyTop}px` }}
                className={`sticky rounded-3xl ${card.bgColor} ${card.textColor} p-8 sm:p-12 lg:p-14 border ${card.borderColor} shadow-2xl transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text Column */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6]">
                      {card.pill}
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">
                      {card.title}
                    </h3>
                    
                    <div className={`font-serif italic text-2xl lg:text-3xl ${card.accentTextColor}`}>
                      {card.italicSubtitle}
                    </div>

                    <p className="text-[#a8deee]/90 text-sm sm:text-base leading-relaxed pt-2">
                      {card.description}
                    </p>

                    <div className="space-y-2 pt-2 pb-2">
                      {card.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#bff1f6] mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link href={card.ctaLink}>
                        <button className={`${card.buttonBg} ${card.buttonText} px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95`}>
                          <span>{card.ctaText}</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl border-2 border-white/20">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
