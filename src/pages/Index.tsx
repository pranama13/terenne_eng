import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CompletionStats from '../components/completion'; // Fix capitalization
import ServiceOfferings from '../components/ServiceOfferings';
import GlobalPresence from '../components/GlobalPresence';
import Testimonials from '../components/Testimonials'; // Import Testimonials component
import TrustedByLogos from '../components/TrustedByLogos'; // <-- Add this import at the top

// Remove WhatsAppButton import
// import WhatsAppButton from '../components/WhatsAppButton';

// Replace the existing scrollToSection function with this improved version
const scrollToSection = (elementRef) => {
  if (!elementRef?.current) return;
  
  const targetPosition = elementRef.current.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // Much longer duration for extremely slow scrolling
  const duration = 5500; // 2.5 seconds for very slow scrolling
  
  // Add a small offset to trigger animations before fully arriving
  const offset = -50; // Start animations 50px before reaching the section
  
  let start = null;
  
  // Enhanced easing function for more gentle movement
  const easeInOutQuart = (t) => {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };
  
  const animate = (currentTime) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutQuart(progress);
    
    window.scrollTo(0, startPosition + (distance + offset) * easeProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  };
  
  // Prevent any other scrolling while animation is in progress
  document.body.style.overflow = 'hidden';
  
  // Remove default smooth scrolling
  document.documentElement.style.scrollBehavior = '';
  
  // Start animation with a small delay to let current animations complete
  setTimeout(() => {
    requestAnimationFrame(animate);
    
    // Re-enable scrolling after animation completes
    setTimeout(() => {
      document.body.style.overflow = '';
    }, duration + 100);
  }, 50);
};

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null); // Add ref for testimonials section
  const contactRef = useRef(null);
  
  // Add refs for all sections you want to scroll to
  
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (!aboutRef.current) return;
      
      // Get the position of the About section
      const aboutPosition = aboutRef.current.getBoundingClientRect();
      
      // Show header when the About section is at or above the top of the viewport
      if (aboutPosition.top <= 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize correct state on load
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div
      className="min-h-screen w-full bg-[#141414] space-y-0"
      style={{ backgroundColor: "#212121" }} // <-- Set your desired background color here
    >
      {/* Remove vertical gap between sections by removing extra margins/paddings */}
      <div ref={heroRef} className="mb-0">
        <Hero />
      </div>
      <div
        className="fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-300"
        style={{
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showHeader ? 1 : 0,
        }}
      >
        <Header
          mode="transparent"
          className="bg-black/80 backdrop-blur-sm border-b border-white/10 w-full"
          onNavigate={{
            home: () => scrollToSection(heroRef),
            about: () => scrollToSection(aboutRef),
            services: () => scrollToSection(servicesRef),
            projects: () => scrollToSection(projectsRef),
            testimonials: () => scrollToSection(testimonialsRef),
            contact: () => scrollToSection(contactRef),
          }}
        />
      </div>
      <div ref={aboutRef} className="mb-0">
        <About />
      </div>
      <div ref={servicesRef} className="mb-0">
        <Services />
      </div>
      <div ref={projectsRef} className="mb-0">
        <Projects />
      </div>
      <GlobalPresence />
      <div ref={testimonialsRef} className="mb-0">
        <CompletionStats />
        <Testimonials />
      </div>
      <div ref={contactRef} className="mb-0">
        <TrustedByLogos />
        <ServiceOfferings />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
