import React, { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Imports from your latest file
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';

// Import your video assets
import heroVideo from '@/assert/videos/hero-background.mp4';
import heroVideo2 from '@/assert/videos/hero-background2.mp4';

// Import your Header component for navigation
import Header from './Header';

const Hero = () => {
  // State and refs for managing the video playback loop
  const [activeVideo, setActiveVideo] = useState(1);
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  // This useEffect hook handles the video switching logic
  useEffect(() => {
    // Set a slower playback rate for a more cinematic feel
    if (video1Ref.current) video1Ref.current.playbackRate = 0.6;
    if (video2Ref.current) video2Ref.current.playbackRate = 0.6;

    // Function to switch to video 2 when video 1 ends
    const handleVideo1End = () => {
      if (video2Ref.current) {
        video2Ref.current.play().then(() => setActiveVideo(2)).catch(e => console.error("Video 2 play error:", e));
      }
    };
    
    // Function to loop back to video 1 when video 2 ends
    const handleVideo2End = () => {
      if (video1Ref.current) {
        video1Ref.current.currentTime = 0; // Rewind to the start
        video1Ref.current.play().then(() => setActiveVideo(1)).catch(e => console.error("Video 1 play error:", e));
      }
    };

    // Attach event listeners to the video elements
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (v1) v1.addEventListener('ended', handleVideo1End);
    if (v2) v2.addEventListener('ended', handleVideo2End);

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      if (v1) v1.removeEventListener('ended', handleVideo1End);
      if (v2) v2.removeEventListener('ended', handleVideo2End);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pb-16 md:pb-20 overflow-hidden">
      {/* Container for the background videos and overlays */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video ref={video1Ref} autoPlay muted playsInline className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${activeVideo === 1 ? 'opacity-100' : 'opacity-0'}`} style={{ filter: 'brightness(0.85)' }}>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video ref={video2Ref} muted playsInline className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${activeVideo === 2 ? 'opacity-100' : 'opacity-0'}`} style={{ filter: 'brightness(0.85)' }}>
          <source src={heroVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/100"></div>
      </div>

      {/* --- ADDED SPLINE SCENE --- */}
      {/* This container positions the 3D scene on the right side of the screen. */}
      {/* The transform property shifts it to the right, making only half of it visible. */}
      <div className="absolute top-[40vh] right-0 h-full w-full md:w-2/3 lg:w-1/2 z-10 opacity-80" style={{ transform: 'translateX(45%)' }}>
        <Spline scene="https://prod.spline.design/RNgKqVn7e1lTPEWm/scene.splinecode" />
      </div>

      {/* Header for navigation links */}
      <div className="relative z-50">
        <Header mode="transparent" />
      </div>

      {/* Hero Content - Kept exactly as you provided */}
      <div className="relative z-20 flex-grow flex items-center pt-8 md:pt-12">
        <div className="container mx-auto px-4 pl-18 md:pl-24 lg:pl-36 flex flex-col items-start justify-center text-left mt-4 md:mt-8">
            <h1 className="font-extrabold text-white mb-2 leading-tight drop-shadow-2xl"
                style={{ fontSize: "4.9rem", lineHeight: 0.85 }}>
                Shaping tomorrow with<br />
                <span className="font-extrabold" style={{ fontSize: "3.6rem", marginTop: "-0.5rem", display: "inline-block" }}>
                Visionary engineering
                </span>
            </h1>
            <br /><p
                className="text-white text-2xl md:text-3xl mb-6"
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
                delivering solutions for some of the world's largest and most complex projects. Our approach is guided by our unique engineering philosophies:
            </p><br />
            <div className="mt-2 mb-10">
                <span className="font-extrabold text-white text-2xl md:text-3xl tracking-wide">
                LEAD. CREATE. DELIVER. SUSTAIN.
                </span>
            </div>
        </div>
      </div>

      {/* Scroll indicator - Preserved from your original file */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
      
      {/* Thin blue line at the bottom - Preserved from your original file */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50"></div>
    </section>
  );
};

export default Hero;