import type React from "react";
import { Hero } from "@/client/ui/organisms/hero";
import { ReviewsSection } from "@/client/ui/organisms/review-section";
import { ProblemSection } from "@/client/ui/organisms/problem-section";
import { TrustSection } from "@/client/ui/organisms/trust-section";
import { Footer } from "@/client/ui/organisms/footer";

export const metadata = {
  title: "Kistra | Shoe Reviews That Actually Work",
  description:
    "Stop wasting money on shoes that don't fit your running style. Get reviews from verified runners who've actually put in the miles.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Hero />
        <ReviewsSection />
        <ProblemSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
