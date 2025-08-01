import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, CheckCircle, Clock } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
// Import a background image - adjust the path as needed
import offeringsBgImage from '../assert/home.jpg';

const ServiceOfferings = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const offeringsData = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Cost-Effective",
      description: "We work closely with you to align engineering solutions with your budget and delivering exceptional value without compromising on quality."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Uncompromised Quality Assurance",
      description: "From concept to completion, every stage is reviewed by our expert engineers to ensure precision, compliance, and lasting reliability."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Prompt Delivery",
      description: "We’re committed to meeting deadlines and delivering every project on schedule with efficiency, consistency, and professionalism."
    }
  ];

  return (
    <section id="ServiceOfferings" className="py-2 md:py-4 w-full relative overflow-hidden">
      {/* --- Video Background and Blue Tint Overlay --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero.mp4"
        />
        <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
      </div>

      <div className="w-full max-w-9xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative mb-8">
          {/* Outer premium white glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-xl z-0"></div>
          
          {/* Secondary glow with blue accent */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 via-white/5 to-transparent rounded-xl blur-md opacity-70 z-0"></div>
          
          {/* Main content container */}
          <div className={`${SPACING_CLASSES.COMPONENT} relative rounded-xl overflow-hidden z-10`}>
            {/* Background image */}
            <div 
              className="absolute inset-0 z-0" 
              style={{
                backgroundImage: `url(${offeringsBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.65)',
                transform: 'scaleX(-1)'
              }}
            ></div>
            
            {/* Premium border effect with gradient */}
            <div className="absolute inset-0 rounded-xl z-0">
              <div className="absolute inset-0 border border-white/15 rounded-xl"></div>
              <div className="absolute inset-0 border border-primary/10 rounded-xl" style={{clipPath: 'inset(1px)'}}></div>
            </div>
            
            {/* Enhanced corner accents with white glow */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl z-10">
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-tl"></div>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br z-10">
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-br"></div>
            </div>

            {/* Your colored, padded container with heading/description - UPDATED BACKGROUND */}
            <div
              className="flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-2xl border-r border-white/10 relative overflow-hidden mb-10"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
              </div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center relative z-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  We Offer Quality Services
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                <p className="text-white max-w-2xl mx-auto">
                  When you plan to outsource engineering services, we deliver excellence irrespective of geographical boundaries and international codes.
                </p>
              </motion.div>
            </div>

            {/* Content grid with proper z-index */}
            <div className={`grid grid-cols-1 md:grid-cols-3 ${SPACING_CLASSES.GRID} relative z-10`}>
              {offeringsData.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-black/40 transition-all hover:-translate-y-1 group text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{offering.title}</h3>
                  <p className="text-white">{offering.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;