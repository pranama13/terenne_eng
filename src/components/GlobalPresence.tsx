// Real flag component using inline SVG flags
const RealFlag = ({ isoCode }: { isoCode: string }) => {
  return (
    <div className="inline-block w-8 h-6 rounded-sm overflow-hidden shadow-md border border-white/20">
      <img 
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCode}.svg`}
        alt={`${isoCode} flag`}
        className="w-full h-full object-cover"
        style={{ display: 'block' }}
        onError={(e) => {
          // Fallback to another reliable service
          const target = e.target as HTMLImageElement;
          target.src = `https://flagsapi.com/${isoCode}/flat/32.png`;
        }}
      />
    </div>
  );
};import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SPACING_CLASSES } from '@/lib/spacing';

import mapImage from '../assert/map.png';

// Data object for potential future use
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
  'United Kingdom': 'Information about your operations in the United Kingdom...',
  'Canada': 'Information about our operations in Canada...',
  'Germany': 'Information about our operations in Germany...',
};

// Country list with ISO codes for real flags
const countryList = [
    { name: 'Sri Lanka', isoCode: 'LK' },
    { name: 'Australia', isoCode: 'AU' },
    { name: 'Singapore', isoCode: 'SG' },
    { name: 'Maldives', isoCode: 'MV' },
    { name: 'UAE', isoCode: 'AE' },
    { name: 'Oman', isoCode: 'OM' },
    { name: 'Saudi Arabia', isoCode: 'SA' },
    { name: 'Qatar', isoCode: 'QA' },
    { name: 'New Zealand', isoCode: 'NZ' },
    { name: 'United Kingdom', isoCode: 'GB' },
    { name: 'Canada', isoCode: 'CA' },
    { name: 'Germany', isoCode: 'DE' },
];



const GlobalPresence = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-4 md:py-6 relative overflow-hidden w-full">
      {/* --- Video Background --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/pro.mp4"
          />
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 relative z-20">
        {/* Main container with a vertical layout */}
        <div className="flex flex-col gap-8">

          {/* --- TOP SECTION: COUNTRIES --- */}
          <motion.div 
            className="p-6 lg:p-10 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Global Presence
              </h2>
              <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
                We proudly serve clients across the globe, delivering excellence in
                every region.
              </p>

              {/* Responsive Grid for Countries with Flags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                {countryList.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="flex items-center justify-center bg-white/5 border border-white/10 rounded-lg p-4 text-center text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer min-h-[70px] group"
                  >
                    <div className="mr-3 transition-transform duration-300 group-hover:scale-110 flex items-center">
                      <RealFlag isoCode={country.isoCode} />
                    </div>
                    <span className="text-sm md:text-base">{country.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- BOTTOM SECTION: MAP --- */}
          <motion.div 
            className="relative min-h-[300px] md:min-h-[450px] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-[inherit] blur-2xl opacity-80 z-0"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
            <img
              src={mapImage}
              alt="Global Presence Map"
              className="w-[90%] h-[90%] object-contain relative z-10"
              draggable={false}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;