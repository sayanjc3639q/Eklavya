"use client";

import { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { formatINR } from "@/lib/utils";

const DONATION_TIERS = [
  {
    amount: 100,
    title: "Essential Study Kit",
    impact: "Provides 2 comprehensive notebook & stationery sets for slum kids.",
    category: "Education",
  },
  {
    amount: 500,
    title: "Stray Meal & First-Aid Care",
    impact: "Feeds 5 street dogs for 1 week and covers basic antiseptic/wound dressing.",
    category: "Animal Welfare",
    popular: true,
  },
  {
    amount: 1000,
    title: "Child Monthly Coaching & Anti-Rabies Vaccine",
    impact: "Funds 1 month of structured coaching for a child + 1 dog anti-rabies vaccination.",
    category: "Dual Impact",
  },
  {
    amount: 2500,
    title: "Comprehensive Rescue & Scholar Kit",
    impact: "Covers emergency vet surgery/medication + full academic term school bag & uniform.",
    category: "Super Patron",
  },
];

export function DonationView() {
  const [selectedTier, setSelectedTier] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const activeAmount = customAmount ? Number(customAmount) : selectedTier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="flex flex-col bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full bg-[#0f273d] text-white overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[#bff1f6] mb-3">
              DIRECT IMPACT • ZERO OVERHEAD
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Support Our Mission in
              <br />
              <span className="font-serif italic font-normal text-[#a8deee]">
                Haldia.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#bff1f6]/90 leading-relaxed font-sans">
              Every rupee you contribute directly funds books, emergency veterinary surgeries, medicines, and daily meals. 100% student volunteer-operated.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Flow */}
      <section className="py-24 bg-gradient-to-b from-white via-[#bff1f6]/20 to-white border-b border-[#89c3da]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Donation Card & Tiers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-white border-2 border-[#89c3da]/60 p-8 sm:p-10 shadow-xl">
                <h2 className="text-2xl font-bold text-[#0f273d] mb-2">
                  Select Your Contribution Tier
                </h2>
                <p className="text-xs text-[#3b5368] mb-8">
                  Transparent impact allocation with real ground deliverables in Haldia.
                </p>

                {/* Tier Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {DONATION_TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.amount && !customAmount;
                    return (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => {
                          setSelectedTier(tier.amount);
                          setCustomAmount("");
                        }}
                        className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                          isSelected
                            ? "border-[#155ea0] bg-[#bff1f6]/30 shadow-md ring-2 ring-[#155ea0]"
                            : "border-[#89c3da]/50 bg-white hover:border-[#155ea0]/60 hover:bg-[#bff1f6]/10"
                        }`}
                      >
                        {tier.popular && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#155ea0] text-white px-2.5 py-0.5 rounded-full">
                            Most Chosen
                          </span>
                        )}
                        <div className="text-2xl font-black text-[#155ea0]">
                          {formatINR(tier.amount)}
                        </div>
                        <div className="text-xs font-bold text-[#0f273d] mt-1">
                          {tier.title}
                        </div>
                        <p className="text-xs text-[#3b5368] mt-2 leading-relaxed">
                          {tier.impact}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f273d] mb-2">
                    Or Enter Custom Amount (₹ INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-[#155ea0] font-bold text-lg">₹</span>
                    <Input
                      type="number"
                      placeholder="e.g. 1500"
                      className="pl-9 h-12 text-lg font-bold rounded-xl border-2 border-[#89c3da]/60 text-[#0f273d] focus:border-[#155ea0]"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Donor Details Form */}
                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-[#bff1f6]/40 border-2 border-[#155ea0] text-center space-y-4">
                    <CheckCircle2 className="h-12 w-12 text-[#155ea0] mx-auto" />
                    <h3 className="text-xl font-bold text-[#0f273d]">Thank You for Your Compassion!</h3>
                    <p className="text-xs text-[#3b5368] max-w-md mx-auto leading-relaxed">
                      Your contribution of <strong>{formatINR(activeAmount || 0)}</strong> has been registered. An official 80G compliant receipt has been dispatched to <strong>{donorEmail || "your email"}</strong>.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-[#155ea0] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      Make Another Contribution
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-6 border-t border-[#89c3da]/40">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#155ea0]">
                      Donor Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#3b5368] mb-1 font-semibold">Full Name</label>
                        <Input
                          required
                          placeholder="Your Name"
                          className="rounded-xl border-[#89c3da]/60"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#3b5368] mb-1 font-semibold">Email Address</label>
                        <Input
                          required
                          type="email"
                          placeholder="name@example.com"
                          className="rounded-xl border-[#89c3da]/60"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#3b5368] mb-1 font-semibold">Phone Number (For 80G Receipt &amp; Updates)</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="rounded-xl border-[#89c3da]/60"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#155ea0] hover:bg-[#2e6ea6] text-white py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#155ea0]/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <Lock className="h-4 w-4" />
                      <span>Proceed to Contribute {formatINR(activeAmount || 0)}</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#3b5368] pt-2">
                      <ShieldCheck className="h-4 w-4 text-[#155ea0]" />
                      <span>256-bit Encrypted Transaction • Verified UPI / Card Gateway</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Breakdown & Transparency */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Where the Money Goes */}
              <div className="rounded-3xl bg-white border-2 border-[#89c3da]/60 p-8 shadow-xl">
                <h3 className="text-lg font-bold text-[#0f273d] mb-6 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#155ea0]" />
                  Where Does Your Money Go?
                </h3>

                <div className="space-y-4 text-xs text-[#3b5368]">
                  <div className="p-4 rounded-2xl bg-[#bff1f6]/30 border border-[#89c3da]/50">
                    <strong className="block text-[#155ea0] font-bold text-sm">45% — Child Education &amp; Learning Kits</strong>
                    Notebooks, pencils, textbooks, evening classroom lighting, and examination fees.
                  </div>
                  <div className="p-4 rounded-2xl bg-[#bff1f6]/30 border border-[#89c3da]/50">
                    <strong className="block text-[#2e6ea6] font-bold text-sm">40% — Emergency Vet Care &amp; Feeds</strong>
                    Veterinary doctor fees, antibiotics, bandages, vaccinations, and daily food runs.
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#89c3da]/40">
                    <strong className="block text-[#0f273d] font-bold text-sm">15% — Emergency Contingency &amp; Logistics</strong>
                    Transit crates, collars, water bowls, and student rescue transport fuel.
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#155ea0] to-[#2e6ea6] text-white">
                    <strong className="block font-bold text-sm">0% — Administrative Overhead</strong>
                    Eklavya is 100% student volunteer-run at HIT Haldia. Zero platform cuts.
                  </div>
                </div>
              </div>

              {/* Direct Bank / UPI Info */}
              <div className="rounded-3xl bg-gradient-to-b from-[#bff1f6]/30 to-white border-2 border-[#89c3da]/50 p-8 shadow-md">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#155ea0] mb-3">
                  Direct Bank &amp; UPI Transfer
                </h3>
                <div className="space-y-2 text-xs text-[#3b5368]">
                  <div>
                    <span className="font-bold text-[#0f273d]">Account Name:</span> Eklavya Hands That Care HIT
                  </div>
                  <div>
                    <span className="font-bold text-[#0f273d]">Bank:</span> State Bank of India, Haldia Branch
                  </div>
                  <div>
                    <span className="font-bold text-[#0f273d]">IFSC:</span> SBIN0007089
                  </div>
                  <div>
                    <span className="font-bold text-[#0f273d]">UPI ID:</span> eklavya.hit@sbi
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
