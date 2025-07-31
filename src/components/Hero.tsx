import React, { useRef, useEffect } from 'react';
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

      {/* Centered Hexagon Overlay with Hexagonal Pattern */}
      <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center ml-[-56.5vh] mt-[15vh]">
        {/* Added 'group' class to enable group-hover effects on children */}
        <div className="group" style={{
          width: '95vmin', // Use viewport units for responsive sizing
          height: '95vmin',
        }}>
          <svg
            width="100%"
            height="85%"
            // The viewBox is now wider than it is tall (140x80)
            viewBox="0 0 140 100"
            preserveAspectRatio="xMidYMid meet"
            className="absolute"
          >
            <defs>
              <pattern id="hexBeehive" width="3" height="3" patternUnits="userSpaceOnUse">
                <polygon
                  points="0.75,0.2 2.25,0.2 3,1.3 2.25,2.4 0.75,2.4 0,1.3"
                  fill="hsla(216, 46%, 96%, 0.1)"
                  stroke="hsla(210, 100%, 55%, 0.97)"
                  strokeWidth="0.09"
                />
              </pattern>

              <pattern id="hexBeehiveSmall" width="2" height="1.7" patternUnits="userSpaceOnUse">
                <polygon
                  points="0.5,0.1 1.5,0.1 2,0.85 1.5,1.6 0.5,1.6 0,0.85"
                  fill="none"
                  stroke="rgba(67, 195, 255, 0.5)"
                  strokeWidth="0.03"
                />
              </pattern>

              {/* Updated clipPath to a wide hexagon */}
              <clipPath id="hexagonMask">
                  <polygon points="70,0 140,20 140,60 70,80 0,60 0,20" />
              </clipPath>

              <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.12)" />
                <stop offset="50%" stopColor="rgba(14, 165, 233, 0.08)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
              </linearGradient>
            </defs>

            {/* Updated polygon for the wide hexagon border */}
            <polygon
              points="70,0 140,20 140,60 70,80 0,60 0,20"
              fill="none"
              stroke="rgba(59, 130, 246, 0.8)"
              strokeWidth="0.3"
              className="animate-pulse"
              style={{
                animationDuration: '6s',
                filter: 'drop-shadow(0 0.4px 1.2px rgba(59, 130, 246, 0.3))'
              }}
            />

            {/* Fills applied to the new hexagon mask, wrapped in a group for hover effect */}
            <g className="transition-transform duration-300 ease-in-out group-hover:scale-[1.03]" style={{ transformOrigin: 'center' }}>
              <rect
                width="100%"
                height="100%"
                fill="url(#hexBeehive)"
                clipPath="url(#hexagonMask)"
              />
              <rect
                width="100%"
                height="100%"
                fill="url(#hexBeehiveSmall)"
                clipPath="url(#hexagonMask)"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Hero Content - CENTERED */}
      <div className="relative z-20 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center text-center justify-center max-w-6xl">
          {/* Increased maxWidth for the content area to fit the wider shape */}
          <div className="hexagon-content-area" style={{ maxWidth: '750px' }}>
            {/* Main Heading - CENTERED */}
            <h1 className="font-extrabold text-white mb-4 leading-tight drop-shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              Engineering Excellence
              <br />
              <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl -mt-1 inline-block">
                is at the Heart of Everything We do
              </span>
            </h1>

            {/* Description - CENTERED */}
            <p
              className="text-white text-lg md:text-xl mb-6 text-center ml-5"
              style={{
                fontFamily: '"Abadi Extra Light", "Arial Nova Cond Light", Arial, sans-serif',
                fontWeight: 200,
                lineHeight: 1.3,
                maxWidth: '700px',
                letterSpacing: "0.01em",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              As trusted engineering consultants and contractors, we design, build, and maintain innovative solutions that meet today's challenges while ensuring sustainability for a better tomorrow
            </p>

            {/* Tagline - CENTERED */}
            <div className="mt-6 text-center">
              <span className="font-extrabold text-white text-lg sm:text-xl md:text-2xl tracking-wide">
                DESIGN | BUILD | SUSTAINABLE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Small hexagonal accents outside the main shape */}
      <div className="absolute inset-0 w-full h-full z-8 pointer-events-none">
        {/* Top right hexagon cluster */}
        <div className="absolute top-32 right-16 opacity-25 group transition-all duration-300 hover:opacity-50 cursor-pointer pointer-events-auto">
          <svg width="80" height="80" className="transition-transform duration-300 group-hover:scale-110">
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
        <div className="absolute bottom-40 right-12 opacity-20 group transition-all duration-300 hover:opacity-50 cursor-pointer pointer-events-auto">
          <svg width="60" height="60" className="transition-transform duration-300 group-hover:scale-110">
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

        /* Added for centering the transform on the SVG group */
        .transform-origin-center {
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default Hero;