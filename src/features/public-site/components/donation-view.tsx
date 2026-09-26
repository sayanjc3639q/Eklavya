"use client";

import { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eff6fc] via-[#f9fbfd] to-white py-16 sm:py-20 border-b border-[#edebe9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0078d4] mb-3">
            100% Direct Ground Impact
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            Support Our Mission in Haldia
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#616161] leading-relaxed">
            Every rupee you contribute directly funds books, emergency veterinary care, medicines, and food. Zero administrative deductions.
          </p>
        </div>
      </section>

      {/* Main Donation Flow */}
      <section className="py-16 bg-[#faf9f8] border-b border-[#edebe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Donation Card & Tiers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="fluent-card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#242424] mb-2">
                  Select Your Contribution Tier
                </h2>
                <p className="text-xs text-[#616161] mb-6">
                  Transparent impact allocation with real ground deliverables.
                </p>

                {/* Tier Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
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
                        className={`text-left p-4 rounded-lg border transition-all cursor-pointer relative ${
                          isSelected
                            ? "border-[#0078d4] bg-[#eff6fc] ring-2 ring-[#0078d4]"
                            : "border-[#edebe9] bg-white hover:border-[#bfdbfe]"
                        }`}
                      >
                        {tier.popular && (
                          <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-[#0078d4] text-white px-2 py-0.5 rounded">
                            Most Chosen
                          </span>
                        )}
                        <div className="text-xl font-bold text-[#242424]">
                          {formatINR(tier.amount)}
                        </div>
                        <div className="text-xs font-semibold text-[#0078d4] mt-0.5">
                          {tier.title}
                        </div>
                        <p className="text-[11px] text-[#616161] mt-2 leading-snug">
                          {tier.impact}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#424242] mb-2">
                    Or Enter Custom Amount (₹ INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-[#616161] font-semibold">₹</span>
                    <Input
                      type="number"
                      placeholder="e.g. 1500"
                      className="pl-8 text-base font-semibold"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Donor Details Form */}
                {isSuccess ? (
                  <div className="p-6 rounded-lg bg-[#f0f9f3] border border-[#b5e0c4] text-center space-y-3">
                    <CheckCircle2 className="h-10 w-10 text-[#107c41] mx-auto" />
                    <h3 className="text-lg font-bold text-[#0e6333]">Thank You for Your Compassion!</h3>
                    <p className="text-xs text-[#242424] max-w-md mx-auto">
                      Your contribution of <strong>{formatINR(activeAmount || 0)}</strong> has been registered. An official 80G compliant receipt has been dispatched to <strong>{donorEmail || "your email"}</strong>.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSuccess(false)}
                      className="mt-2"
                    >
                      Make Another Contribution
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#edebe9]">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#242424]">
                      Donor Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#616161] mb-1 font-medium">Full Name</label>
                        <Input
                          required
                          placeholder="Your Name"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#616161] mb-1 font-medium">Email Address</label>
                        <Input
                          required
                          type="email"
                          placeholder="name@example.com"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#616161] mb-1 font-medium">Phone Number (For Receipt / Updates)</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0078d4] hover:bg-[#106ebe] text-white font-bold shadow-md mt-4"
                    >
                      <Lock className="h-4 w-4 mr-1.5" />
                      Proceed to Contribute {formatINR(activeAmount || 0)}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#707070] pt-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#107c41]" />
                      <span>256-bit Encrypted Transaction • Verified UPI / Card Gateway</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Breakdown & Transparency */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Where the Money Goes */}
              <div className="fluent-card p-6 border-t-4 border-t-[#0078d4]">
                <h3 className="text-base font-bold text-[#242424] mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#0078d4]" />
                  Where Does Your Money Go?
                </h3>

                <div className="space-y-3.5 text-xs text-[#424242]">
                  <div className="p-3 rounded-md bg-[#eff6fc] border border-[#c7e0f4]">
                    <strong className="block text-[#004e8c] font-bold">45% — Child Education &amp; Learning Kits</strong>
                    Notebooks, pencils, textbooks, evening classroom lighting, and examination fees.
                  </div>
                  <div className="p-3 rounded-md bg-[#f0f9f3] border border-[#b5e0c4]">
                    <strong className="block text-[#0e6333] font-bold">40% — Emergency Vet Care &amp; Feeds</strong>
                    Veterinary doctor fees, antibiotics, bandages, vaccinations, and daily food runs.
                  </div>
                  <div className="p-3 rounded-md bg-[#faf9f8] border border-[#edebe9]">
                    <strong className="block text-[#242424] font-bold">15% — Emergency Contingency &amp; Logistics</strong>
                    Transit crates, collars, water bowls, and student rescue transport fuel.
                  </div>
                  <div className="p-3 rounded-md bg-white border border-[#edebe9]">
                    <strong className="block text-[#242424] font-bold">0% — Administrative Overhead</strong>
                    Eklavya is 100% student volunteer-run at HIT Haldia. No salaries, zero platform cut.
                  </div>
                </div>
              </div>

              {/* Bank Transfer / UPI Information */}
              <div className="fluent-card p-6 bg-[#f9fbfd]">
                <h3 className="text-sm font-bold text-[#242424] mb-3">
                  Direct Bank &amp; UPI Transfer
                </h3>
                <div className="space-y-2 text-xs text-[#616161]">
                  <div>
                    <span className="font-semibold text-[#242424]">Account Name:</span> Eklavya Hands That Care HIT
                  </div>
                  <div>
                    <span className="font-semibold text-[#242424]">Bank:</span> State Bank of India, Haldia Branch
                  </div>
                  <div>
                    <span className="font-semibold text-[#242424]">IFSC:</span> SBIN0007089
                  </div>
                  <div>
                    <span className="font-semibold text-[#242424]">UPI ID:</span> eklavya.hit@sbi
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
