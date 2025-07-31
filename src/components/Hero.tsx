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
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header for navigation links */}
      <div className="relative z-50">
        <Header mode="transparent" />
      </div>

      {/* Large Triangle Overlay with Hexagonal Pattern - MODIFIED */}
      <div className="absolute inset-0 w-full h-full z-20 flex items-left justify-start mt-[-40vh]">
        <div style={{
          width: '140vw',
          height: '140vh',
          minWidth: '1000px',
          minHeight: '1000px',
        }}>
          {/* MODIFIED: Changed viewBox aspect ratio to make the triangle taller */}
          <svg
            width="140%"
            height="140%"
            viewBox="0 0 80 50"
            preserveAspectRatio="xMinYMid meet"
            className="absolute"
          >
            <defs>
              <pattern id="hexBeehive" width="3" height="3" patternUnits="userSpaceOnUse">
                <polygon
                  points="0.75,0.2 2.25,0.2 3,1.3 2.25,2.4 0.75,2.4 0,1.3"
                  fill="rgba(59, 130, 246, 0.08)"
                  stroke="rgba(59, 130, 246, 0.25)"
                  strokeWidth="0.05"
                />
              </pattern>
              
              <pattern id="hexBeehiveSmall" width="2" height="1.7" patternUnits="userSpaceOnUse">
                <polygon
                  points="0.5,0.1 1.5,0.1 2,0.85 1.5,1.6 0.5,1.6 0,0.85"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.25)"
                  strokeWidth="0.03"
                />
              </pattern>
              
              <clipPath id="triangleMask">
                <polygon points="0,0 50,40 0,80" />
              </clipPath>
              
              <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.12)" />
                <stop offset="50%" stopColor="rgba(14, 165, 233, 0.08)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
              </linearGradient>
            </defs>
            
            <polygon
              points="0,0 50,40 0,80"
              fill="url(#triangleGradient)"
              stroke="rgba(59, 130, 246, 0.8)"
              strokeWidth="0.3"
              className="animate-pulse"
              style={{
                animationDuration: '6s',
                filter: 'drop-shadow(0 0.4px 1.2px rgba(59, 130, 246, 0.3))'
              }}
            />
            
            <rect
              width="100%"
              height="120%"
              fill="url(#hexBeehive)"
              clipPath="url(#triangleMask)"
            />
            
            <rect
              width="100%"
              height="100%"
              fill="url(#hexBeehiveSmall)"
              clipPath="url(#triangleMask)"
            />
            
            <g opacity="0.6">
              <polygon
                points="-0.5,-0.5 0.5,-0.5 1,0 0.5,0.5 -0.5,0.5 0,0"
                fill="rgba(59, 130, 246, 0.2)"
                stroke="rgba(59, 130, 246, 1)"
                strokeWidth="0.2"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
              
              <polygon
                points="-0.5,79.5 0.5,79.5 1,80 0.5,80.5 -0.5,80.5 0,80"
                fill="rgba(59, 130, 246, 0.2)"
                stroke="rgba(59, 130, 246, 1)"
                strokeWidth="0.2"
                className="animate-pulse"
                style={{ animationDelay: '2s' }}
              />
              
              <polygon
                points="49.5,39.5 50.5,39.5 51,40 50.5,40.5 49.5,40.5 49,40"
                fill="rgba(59, 130, 246, 0.2)"
                stroke="rgba(59, 130, 246, 1)"
                strokeWidth="0.2"
                className="animate-pulse"
                style={{ animationDelay: '1.5s' }}
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Hero Content - LEFT ALIGNED inside the triangle */}
      <div className="relative z-20 flex-grow flex items-center justify-start pt-8 md:pt-12">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-start text-left justify-center mt-8 md:mt-16 max-w-6xl ml-[-10vw] mt-[-15vw]">
          {/* Content positioned inside triangle - LEFT ALIGNED */}
          <div className="triangle-content-area" style={{
          
            marginLeft: '8vw',
            maxWidth: '50vw',
            textAlign: 'left'
          }}>
            {/* Main Heading - LEFT ALIGNED */}
            <h1 className="font-extrabold text-white mb-4 leading-tight drop-shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left">
              Engineering excellence
              <br />
              <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl -mt-1 inline-block">
                is at the heart of everything we do
              </span>
            </h1>

            {/* Description - LEFT ALIGNED */}
            <p
              className="text-white text-lg md:text-xl mb-6 text-left"
              style={{
                fontFamily: '"Abadi Extra Light", "Arial Nova Cond Light", Arial, sans-serif',
                fontWeight: 200,
                lineHeight: 1.3,
                maxWidth: '500px',
                letterSpacing: "0.01em",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              As trusted engineering consultants and contractors, we design, build, and maintain innovative solutions that meet today's challenges while ensuring sustainability for a better tomorrow
            </p>

            {/* Tagline - LEFT ALIGNED */}
            <div className="mt-6 text-left">
              <span className="font-extrabold text-white text-lg sm:text-xl md:text-2xl tracking-wide">
                DESIGN | BUILD | SUSTAINABLE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Small hexagonal accents outside triangle */}
      <div className="absolute inset-0 w-full h-full z-8 pointer-events-none">
        {/* Top right hexagon cluster */}
        <div className="absolute top-32 right-16 opacity-25">
          <svg width="80" height="80">
            <polygon
              points="20,5 60,5 80,35 60,65 20,65 0,35"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.5"
              className="animate-pulse"
              style={{ animationDelay: '3s' }}
            />
            <polygon
              points="30,15 50,15 60,35 50,55 30,55 20,35"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="#0EA5E9"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: '3.5s' }}
            />
          </svg>
        </div>

        {/* Bottom right hexagon */}
        <div className="absolute bottom-40 right-12 opacity-20">
          <svg width="60" height="60">
            <polygon
              points="15,4 45,4 60,30 45,56 15,56 0,30"
              fill="rgba(16, 185, 129, 0.1)"
              stroke="#10B981"
              strokeWidth="1.5"
              className="animate-pulse"
              style={{ animationDelay: '4s' }}
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Thin blue line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50"></div>

      <style>{`
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        /* Responsive triangle content positioning */
        @media (max-width: 768px) {
          .triangle-content-area {
            margin-top: 10vh !important;
            margin-left: 4vw !important;
            max-width: 70vw !important;
          }
        }

        @media (min-width: 1024px) {
          .triangle-content-area {
            margin-top: 6vh !important;
            margin-left: 6vw !important;
            max-width: 45vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;