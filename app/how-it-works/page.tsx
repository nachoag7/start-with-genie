import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { SectionReveal } from '../../components/reveal'
import PremiumButton from '../../components/ui/PremiumButton'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'See How Genie Works in 30 Seconds',
  description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
  openGraph: {
    title: 'See How Genie Works in 30 Seconds',
    description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
    url: 'https://startwithgenie.com/how-it-works',
    images: [
      {
        url: 'https://startwithgenie.com/genie-og.png',
        width: 1200,
        height: 628,
        alt: 'Start With Genie – How It Works',
      },
    ],
  },
  twitter: {
    title: 'See How Genie Works in 30 Seconds',
    description: 'Watch how Genie helps you set up your LLC with personalized instructions, EIN help, and downloads in one clean dashboard.',
    images: ['https://startwithgenie.com/genie-og.png'],
  },
}

export default function HowItWorksPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set mounted state to prevent SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set playback speed to 1.25x on mount
  useEffect(() => {
    if (videoRef.current && isMounted) {
      videoRef.current.playbackRate = 1.25;
    }
  }, [isMounted]);

  // Auto-play video when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && isMounted) {
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
              console.log('Autoplay prevented by browser');
            });
            setIsPlaying(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isMounted]);

  // Play video when it comes into view (Framer Motion)
  // User can pause/resume after that
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Sync play/pause state if user uses native controls
  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <div className="min-h-screen bg-white">
      <SectionReveal>
        <section className="w-full flex flex-col items-center justify-center py-32">
          <h1 className="text-center text-3xl md:text-4xl font-semibold mb-6">
            See How Genie Works in 30 Seconds
          </h1>
          <div 
            className="relative w-full flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <motion.video
                ref={videoRef}
                muted
                loop
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                playsInline
                preload="metadata"
                className="rounded-2xl shadow-2xl w-full max-w-[720px] aspect-video bg-black object-cover transition-all duration-200 ease-smooth"
                style={{ outline: 'none', border: 'none', padding: 0 }}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                whileHover={{ scale: 1.01 }}
              >
                <source src="/dashboard-preview.webm" type="video/webm" />
                <source src="/dashboard-preview-mobile.mp4" type="video/mp4" />
                <source src="/dashboard-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
              
              {/* Top highlight overlay on hover */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* 30s preview pill */}
              <div 
                className={`absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                30s preview
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center max-w-md">
            Get personalized instructions, EIN help, and downloads in one clean dashboard.
          </p>
          <div className="text-center mt-8" data-cta-section>
            <Link href="/checkout">
              <PremiumButton size="md" className="w-full max-w-xs hover:scale-[1.015] hover:shadow-md transition-all duration-200 ease-smooth group">
                <span className="relative text-white">
                  Start My LLC for $49
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-smooth"></span>
                </span>
              </PremiumButton>
            </Link>
          </div>
        </section>
      </SectionReveal>
      
      <Footer />
    </div>
  )
} 