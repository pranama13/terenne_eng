import React, { useRef, useEffect, useState } from 'react';
import heroVideo from '@/assert/videos/hero-background.mp4';
import Header from './Header';

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement | null>(null);

  // This useEffect hook sets the video playback rate
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pb-16 md:pb-20 overflow-hidden">
      {/* Container for the background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={video1Ref}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header for navigation links */}
      <div className="relative z-50">
        <Header mode="transparent" />
      </div>

      {/* Hero Content - Now with responsive alignment and padding */}
      <div className="relative z-20 flex-grow flex items-center pt-8 md:pt-12">
        {/*
          Responsive container:
          - Mobile: Centered text and content with horizontal padding (px-6).
          - Medium screens and up (md): Left-aligned text and content with increased padding.
        */}
        <div className="container mx-auto px-6 md:px-12 lg:pl-24 flex flex-col items-center text-center md:items-start md:text-left justify-center mt-4 md:mt-8">
            {/*
              Responsive Heading:
              - Removed fixed inline font sizes.
              - Uses Tailwind's responsive text utilities (e.g., text-4xl, md:text-6xl, etc.).
            */}
            <h1 className="font-extrabold text-white mb-2 leading-tight drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Engineering excellence <br />
                <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl -mt-2 inline-block">
                is at the heart of everything we do
                </span>
            </h1>
            <br />
            <p
                className="text-white text-xl md:text-2xl mb-6"
                style={{
                fontFamily: '"Abadi Extra Light", "Arial Nova Cond Light", Arial, sans-serif',
                fontWeight: 200,
                lineHeight: 1.2,
                maxWidth: 700,
                letterSpacing: "0.01em",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
                }}
            >
                As trusted engineering consultants and contractors, we design, build, and maintain innovative solutions that meet today’s challenges while ensuring sustainability for a better tomorrow
            </p>
            <br />
            <div className="mt-2 mb-10">
                {/* Responsive text size for the tagline */}
                <span className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl tracking-wide">
                DESIGN | BUILD | SUSTAINABLE
                </span>
            </div>
        </div>
      </div>

      {/* --- Building Image Overlay --- */}
      {/* Changed bottom-[-0vh] to bottom-0 for clarity */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none">
        <img
            src="/hero bottom.png"
            alt="Cityscape overlay"
            className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Scroll indicator - Remains visible and functional on all screen sizes */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Thin blue line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50"></div>
    </section>
  );
};

export default Hero;