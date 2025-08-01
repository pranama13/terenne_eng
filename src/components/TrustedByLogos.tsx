import React, { useState, useEffect } from "react";

// Example logo imports (replace with your actual logo paths)
import logo1 from "../assert/logos/logo1.png";
import logo2 from "../assert/logos/logo2.png";
import logo3 from "../assert/logos/logo3.png";
import logo4 from "../assert/logos/logo4.png";
import logo5 from "../assert/logos/logo5.png";
import logo6 from "../assert/logos/logo6.png";
import logo7 from "../assert/logos/logo7.png";
import logo8 from "../assert/logos/logo8.png";
import logo9 from "../assert/logos/logo9.png";
import logo10 from "../assert/logos/logo10.png";
import logo11 from "../assert/logos/logo11.png";
import logo12 from "../assert/logos/logo12.png";
import logo13 from "../assert/logos/logo13.png";
import logo14 from "../assert/logos/logo14.png";
import logo15 from "../assert/logos/logo15.png";
import logo16 from "../assert/logos/logo16.png";
import logo17 from "../assert/logos/logo17.png";
import logo18 from "../assert/logos/logo18.png";
import logo19 from "../assert/logos/logo19.png";
import logo20 from "../assert/logos/logo20.png";
import logo21 from "../assert/logos/logo21.png";
import logo22 from "../assert/logos/logo22.png";
import logo23 from "../assert/logos/logo23.png";
import logo24 from "../assert/logos/logo24.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24];

const TrustedByLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerView = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to next logo, cycling back to start after showing all
        const nextIndex = (prevIndex + 1) % logos.length;
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get current 5 logos to display
  const getCurrentLogos = () => {
    const result = [];
    for (let i = 0; i < logosPerView; i++) {
      const logoIndex = (currentIndex + i) % logos.length;
      result.push({
        logo: logos[logoIndex],
        index: logoIndex
      });
    }
    return result;
  };

  const currentLogos = getCurrentLogos();

  return (
    <section className="py-16 md:py-20 w-full relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/pro.mp4"
        />
        <div className="absolute inset-0 bg-blue-900/90 z-10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-2xl border border-white/20 p-4 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Valued Customers
              </h2>
              <div className="mt-4 h-1.5 w-24 bg-white mx-auto rounded-full"></div>
            </div>

            <div className="w-full overflow-hidden">
              <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 transition-all duration-500 ease-in-out">
                {currentLogos.map((item, idx) => (
                  <div
                    key={`${item.index}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 w-20 sm:h-20 sm:w-28 md:h-24 md:w-40 bg-white/90 rounded-lg p-2 sm:p-3 shadow-lg transform transition-all duration-500 hover:scale-105"
                  >
                    <img
                      src={item.logo}
                      alt={`Partner logo ${item.index + 1}`}
                      className="h-full w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(logos.length / logosPerView) }).map((_, groupIndex) => {
                const isActive = Math.floor(currentIndex / logosPerView) === groupIndex || 
                                (currentIndex >= logos.length - logosPerView + 1 && groupIndex === 0);
                return (
                  <div
                    key={groupIndex}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLogos;