import { Suspense } from "react";
import { Authority } from "@/components/Authority";
import { Deliverables } from "@/components/Deliverables";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Outcomes } from "@/components/Outcomes";
import { PainPoints } from "@/components/PainPoints";
import { SignupNotice } from "@/components/SignupNotice";
import { StickyCTA } from "@/components/StickyCTA";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <SignupNotice />
      </Suspense>
      <main className="lg:pb-0">
        <Hero />
        <TrustBar />
        <PainPoints />
        <Deliverables />
        <Outcomes />
        <Authority />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
