import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your LLC Fast — No Delays, No Lawyers | Start With Genie",
  description: "Need to start your LLC fast? Get instant access to everything you need — EIN guide, state filing steps, and operating agreement. No upsells. Just $49.",
};

export default function StartLLCFastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 