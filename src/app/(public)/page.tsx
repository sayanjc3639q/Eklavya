import { EklavyaHero } from "@/features/public-site/components/eklavya-hero";
import { EklavyaAudienceCards } from "@/features/public-site/components/eklavya-audience-cards";
import { EklavyaTheChallenge } from "@/features/public-site/components/eklavya-the-challenge";
import { EklavyaWhatWeDo } from "@/features/public-site/components/eklavya-what-we-do";
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
      <EklavyaHero />
      <EklavyaAudienceCards />
      <EklavyaTheChallenge />
      <EklavyaWhatWeDo />
      <ReasonSomeoneSmiles />
      <PowerToChangeLife />
    </div>
  );
}
