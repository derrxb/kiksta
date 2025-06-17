import type React from "react";
import { Header } from "@/client/ui/organisms/header";
import { Hero } from "@/client/ui/organisms/hero";
import { ReviewsSection } from "@/client/ui/organisms/review-section";
import { ProblemSection } from "@/client/ui/organisms/problem-section";
import { TrustSection } from "@/client/ui/organisms/trust-section";
import { Footer } from "@/client/ui/organisms/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
