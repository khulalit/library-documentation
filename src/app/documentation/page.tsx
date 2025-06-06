import AuthorInfo from "@/components/AuthorInfo";

import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InstallationSection } from "@/components/InstallationSection";
import { WhyUseSection } from "@/components/WhyUseSection";
import { Metadata } from "next";
import ConditionalExamples from "@/components/ConditionalSection";

import FollowUpPopupWrapper from "@/components/FollowUpPopupWrapper";

export const metadata: Metadata = {
  title: "Documentation | react-if-then-else-switch",
  description:
    "Explore the complete documentation of react-if-then-else-switch.",
  keywords: [
    "Next.js",
    "Documentation",
    "App Router",
    "react-if-then-else-switch",
  ],
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 p-4 sm:p-8 font-sans">
      <HeroSection />

      <main className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-10 shadow-2xl border border-white border-opacity-20">
        <InstallationSection />
        <ConditionalExamples />
        <WhyUseSection />
        <AuthorInfo />
      </main>

      <Footer />
      <FollowUpPopupWrapper />
    </div>
  );
}
