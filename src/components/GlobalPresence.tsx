import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SPACING_CLASSES } from '@/lib/spacing';

import mapImage from '../assert/map.png';

// Preload map image function
function preloadMapImage(src: string) {
  const img = new window.Image();
  img.src = src;
}

// --- UPDATED COUNTRY DATA ---
const countryData = {
  'Sri Lanka': 'Information about our operations in Sri Lanka...',
  'Australia': 'Information about our operations in Australia...',
  'Singapore': 'Information about our operations in Singapore...',
  'Maldives': 'Information about our operations in Maldives...',
  'UAE': 'Information about our operations in UAE...',
  'Oman': 'Information about our operations in Oman...',
  'Saudi Arabia': 'Information about our operations in Saudi Arabia...',
  'Qatar': 'Information about our operations in Qatar...',
  'New Zealand': 'Information about our operations in New Zealand...',
  'United Kingdom': 'Information about our operations in the United Kingdom...',
  'Canada': 'Information about our operations in Canada...',
  'Germany': 'Information about our operations in Germany...',
};

// --- UPDATED COUNTRY LIST FOR RENDERING ---
const countryList = [
    'Sri Lanka', 'Australia', 'Singapore', 'Maldives',
    'UAE', 'Oman', 'Saudi Arabia', 'Qatar',
    'New Zealand', 'United Kingdom', 'Canada', 'Germany'
];


const GlobalPresence = () => {
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleToggle = (countryName: string) => {
    setOpenCountry(openCountry === countryName ? null : countryName);
  };

  // Preload the map image on mount
  useEffect(() => {
    preloadMapImage(mapImage);
  }, []);

  return (
    <section className="py-4 md:py-6 relative overflow-hidden w-full">
      {/* --- Video Background --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/pro.mp4" // Assumes video is in /public/pro.mp4
          />
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
      </div>

      <div className="w-full mx-auto px-2 md:px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          {/* Text content (left) */}
          <div className="flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-l-2xl border-r border-white/10 relative overflow-hidden min-h-[400px] shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                Global Presence
              </h2>
              <p className="text-white text-lg mb-6 max-w-md">
                We proudly serve clients across the globe, delivering excellence in
                every region.
              </p>
              {/* --- UPDATED COUNTRY LIST RENDER --- */}
              <ul className="space-y-3 text-white text-base font-medium">
                {countryList.map((country) => (
                  <li key={country}>
                    <div
                      className={`flex items-center justify-between px-5 py-4 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                        openCountry === country
                          ? 'bg-primary/10 border-white rounded-t-lg'
                          : 'hover:bg-white/10 rounded-lg'
                      }`}
                      style={{
                        borderBottomLeftRadius: openCountry === country ? 0 : undefined,
                        borderBottomRightRadius: openCountry === country ? 0 : undefined,
                      }}
                      onClick={() => handleToggle(country)}
                    >
                      <span>{country}</span>
                      <span className="ml-2">
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${openCountry === country ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="white"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                        openCountry === country
                          ? 'max-h-40 opacity-100 rounded-b-lg'
                          : 'max-h-0 opacity-0'
                      }`}
                      style={{
                        borderTop: openCountry === country ? 'none' : undefined,
                      }}
                    >
                      {openCountry === country && (
                        <div className="p-4 bg-white/10 text-white text-sm">
                          {countryData[country]}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Map image (right, more than center) */}
          <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-end rounded-r-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-[inherit] blur-2xl opacity-80 z-0"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
            <img
              src={mapImage}
              alt="Global Presence Map"
              className="w-[90%] h-[90%] object-contain relative z-10"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;