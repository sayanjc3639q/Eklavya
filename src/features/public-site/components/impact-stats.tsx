"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeartHandshake, GraduationCap, ShieldAlert, Users, Award } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
}

const STATS: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Animals Rescued & Treated",
    description: "Emergency medical interventions & shelter support in Haldia",
    icon: ShieldAlert,
    accentColor: "border-l-4 border-l-[#d83b01]",
  },
  {
    value: 120,
    suffix: "+",
    label: "Children Educated",
    description: "Continuous learning support, books & evening classes",
    icon: GraduationCap,
    accentColor: "border-l-4 border-l-[#0078d4]",
  },
  {
    value: 25,
    suffix: "+",
    label: "Stray Adoptions & Fosters",
    description: "Loving permanent and foster homes secured",
    icon: HeartHandshake,
    accentColor: "border-l-4 border-l-[#107c41]",
  },
  {
    value: 150,
    suffix: "+",
    label: "HIT Student Volunteers",
    description: "Active student community contributing every weekend",
    icon: Users,
    accentColor: "border-l-4 border-l-[#5c2d91]",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress === 1 ? target : target * (1 - Math.pow(2, -10 * progress)));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="rounded-xl bg-[#1b1a19] p-8 sm:p-10 shadow-[0_14px_28px_rgba(0,0,0,0.25)] border border-[#323130] text-white relative overflow-hidden">
        {/* Microsoft Fluent Glow subtle background */}
        <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#0078d4]/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-[#107c41]/20 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#323130] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#00a4ef] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="h-4 w-4" />
              <span>Real Ground Impact Metrics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Measurable Change in Haldia
            </h2>
          </div>
          <p className="text-[#a19f9d] text-sm max-w-md">
            Every weekend, student volunteers of Haldia Institute of Technology mobilize to educate, feed, rescue, and heal.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col bg-[#252423] rounded-lg p-5 border border-[#3b3a39] ${stat.accentColor} hover:bg-[#292827] transition-all group`}
              >
                <div className="h-9 w-9 rounded-md bg-[#323130] text-[#00a4ef] flex items-center justify-center mb-3 group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight font-sans">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-[#edebe9] mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[#a19f9d] mt-1.5 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
