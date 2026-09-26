import { BhumiHero } from "@/features/public-site/components/bhumi-hero";
import { BhumiAudienceCards } from "@/features/public-site/components/bhumi-audience-cards";
import { BhumiTheChallenge } from "@/features/public-site/components/bhumi-the-challenge";
import { BhumiWhatWeDo } from "@/features/public-site/components/bhumi-what-we-do";
import { ReasonSomeoneSmiles } from "@/features/public-site/components/reason-someone-smiles";
import { PowerToChangeLife } from "@/features/public-site/components/power-to-change";

export const metadata = {
  title: "Eklavya - Hands That Care | Haldia Institute of Technology",
  description:
    "One Movement, Many Ways to Bring Change. Official student-run NGO of Haldia Institute of Technology empowering children and rescuing stray animals.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BhumiHero />
      <BhumiAudienceCards />
      <BhumiTheChallenge />
      <BhumiWhatWeDo />
      <ReasonSomeoneSmiles />
      <PowerToChangeLife />
    </div>
  );
}
