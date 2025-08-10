"use client";

import { useEffect, useState } from "react";
import OnboardingStartModal from "@/components/OnboardingStartModal";
import { useRouter } from "next/navigation";

export default function OnboardingWelcomePage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // optional: if they've already seen it once
    const seen = localStorage.getItem("seenOnboardingWelcome");
    if (seen) setOpen(false);
  }, []);

  const handleContinue = () => {
    localStorage.setItem("seenOnboardingWelcome", "1");
    setOpen(false);
    // go to the main onboarding flow
    router.push("/onboarding");
  };

  return (
    <main className="min-h-dvh bg-white">
      {/* your page content if any */}
      <OnboardingStartModal
        open={open}
        onBegin={handleContinue}
        onClose={() => setOpen(false)}
      />
    </main>
  );
} 