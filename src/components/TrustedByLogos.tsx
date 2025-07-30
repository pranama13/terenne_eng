import React from "react";
import { motion } from "framer-motion";

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
import logo12 from "../assert/logos/logo11.png";
import logo11 from "../assert/logos/logo12.png";
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
import logobbackground from "../assert/career.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24];

// To create a seamless loop, we duplicate the logos.
const extendedLogos = [...logos, ...logos];

const TrustedByLogos = () => {
  return (
    <section className="py-16 md:py-20 w-full relative">
      {/* A style tag to define the scrolling animation. This is often placed in a global CSS file. */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      
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
          className="rounded-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${logobbackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Valued Customers
              </h2>
              <div className="mt-4 h-1.5 w-24 bg-gray-700 mx-auto rounded-full"></div>
            </div>

            <div
              className="w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
              }}
            >
              {/* Removed the whileHover prop to disable pausing */}
              <motion.div
                className="flex gap-10 md:gap-16"
                style={{ animation: `scroll 20s linear infinite` }}
              >
                {extendedLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex-none flex items-center justify-center h-24 w-40 md:h-28 md:w-52"
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${idx + 1}`}
                      // Removed grayscale and hover effect classes
                      className="h-full w-full object-contain transition-all duration-300"
                      draggable={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLogos;