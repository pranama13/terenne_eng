import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, ChevronDown } from 'lucide-react';
import aboutImage from '../assert/about.jpg';
import about1 from '../assert/about/about1.jpg';
import about2 from '../assert/about/about2.jpg';
import about3 from '../assert/about/about3.jpg';
import about4 from '../assert/about/about4.jpg';
import about5 from '../assert/about/about5.jpg';


const About = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    mission: false,
    vision: false,
    team: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [about1, about2, about3, about4, about5];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the useEffect that controls image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the animation before changing the currentImage state
      const nextImageEl = document.getElementById('nextImage');
      const currentImageEl = document.getElementById('currentImage');
      
      if (nextImageEl && currentImageEl) {
        // Start animation
        currentImageEl.style.opacity = '0';
        currentImageEl.style.transform = 'scale(0.95) translateZ(0)';
        nextImageEl.style.opacity = '1';
        nextImageEl.style.transform = 'scale(1.0) translateZ(0)';
        
        // Change the currentImage state after animation starts
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1500); // Wait until animation is almost complete
      } else {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 7000); // <-- Increased from 5000ms to 8000ms (8 seconds)
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleToggle = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#212121" }}>
      {/* Header with hide/show animation */}
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      <div className="pt-20">
        {/* Left: Image - left aligned, half of the page */}
        <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full z-0">
          <div className="relative w-full h-full overflow-hidden border-2 border-white/10 bg-black/40 shadow-2xl">
            {/* White glowing shade */}
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            {/* Blue light accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            {/* Animated image transition - improved with scale and movement effects */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Current image - fade out and scale down when transitioning */}
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="About section"
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 1,
                  zIndex: 10,
                  objectPosition: "center",
                  transform: "scale(1.0) translateZ(0)",
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                key={currentImage}
              />
              
              {/* Next image - starts zoomed in and slides up while fading in */}
              <img
                id="nextImage"
                src={images[(currentImage + 1) % images.length]}
                alt=""
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 0,
                  zIndex: 9,
                  objectPosition: "center",
                  transform: "scale(1.05) translateY(10px) translateZ(0)", 
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            {/* Main About Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              {/* Empty column for spacing on small screens */}
              <div className="hidden lg:block"></div>
              
              {/* Right: Content - UPDATED BACKGROUND GRADIENT */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-80 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                
                {/* About image that fills top and extends to corners */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    {/* Increased image height */}
                    <img 
                      src={aboutImage} 
                      alt="About Terrene Engineering" 
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    
                    {/* Blue overlay to match reference image */}
                    <div className="absolute inset-0 bg-blue-800/40"></div>
                    
                    {/* Construction image specific gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Content container aligned to bottom like reference */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Engineering Excellence</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content container - with proper padding now that image is at the top */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  {/* Company Introduction - reduce margin */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      About <span className="text-primary-300">Terrene Engineering</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      Terrene Engineering (Pvt) Ltd is a globally trusted name in engineering consultancy and contracting. With over 20 years of proven expertise, we deliver end-to-end engineering solutions that merge innovation, precision, and sustainability. Our team of experienced professionals operates across Sri Lanka, Maldives, Oman, UAE, Qatar, KSA, Australia, Singapore, New Zealand, UK, Canada, Germany, and serves clients around the world.
If space is not available by clicking learn more tab you can get all these information <br /><br />
From project inception to completion, Terrene Engineering integrates smart project management, digital transformation, sustainable practices, and cutting-edge technologies such as BIM, AI, and Digital Twin solutions. Our multidisciplinary services span design, construction, cost and value engineering, geotechnical investigations, interior and furniture solutions, smart maintenance systems, import and export services, and comprehensive engineering consultancy across all disciplines. We also provide the latest engineering software training globally, conducted by certified industry experts, ensuring professionals stay equipped with current tools and best practices.
<br /><br />Driven by excellence, we build with purpose and consult with insight, ensuring that every project not only meets today’s challenges but also contributes to a sustainable tomorrow.

                    </p>
                  </div>

                  {/* Mission, Vision, Team Dropdowns - reduce spacing */}
                  <div className="w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Company</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Mission Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['mission']
                              ? 'bg-white/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('mission')}
                        >
                          <span className="text-xl font-semibold text-white">Our Mission</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['mission'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white/20 ${
                            openSections['mission']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-black/20 text-white">
                            <p className="mb-4 text-lg">
                             We design and deliver high-quality, sustainable engineering solutions tailored to the unique needs of each client. From concept to completion and through ongoing maintenance we ensure long-term performance, lifetime warranty support, and enduring value. Leveraging advanced technologies such as BIM, AI, and Digital Twins, we drive innovation across every stage of construction and engineering. Our approach is built on transparency, efficiency, and professional integrity, fostering long-term partnerships with clients worldwide. Through continuous learning and globally certified skill training programs, we empower our teams and partners to advance responsibly, sustainably, and with lasting impact.
                            </p>
                            <p className="text-lg">
                              We aim to contribute positively to the built environment through thoughtful design, technical excellence, and collaborative partnerships with our clients and communities.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      {/* Vision Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['vision']
                              ? 'bg-white/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('vision')}
                        >
                          <span className="text-xl font-semibold text-white">Our Vision</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['vision'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white/20 ${
                            openSections['vision']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-black/20 text-white">
                            <p className="mb-4 text-lg">
                              To be the world’s most trusted and innovative engineering consulting and contracting firm, delivering sustainable solutions that shape a better future for communities and industries across the globe.
                            </p>
                            
                          </div>
                        </div>
                      </li>
                      
                      {/* Team Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['team']
                              ? 'bg-white/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('team')}
                        >
                          <span className="text-xl font-semibold text-white">Our Team</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['team'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white/20 ${
                            openSections['team']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-black/20 text-white">
                            <p className="mb-4 text-lg">
                              We are driven by a deep commitment to inspiring, developing, and celebrating both individual and collective excellence. At the heart of our success is our people—their expertise, passion, and collaboration define who we are. We believe that diverse, high-performing teams are essential to delivering world-class engineering solutions, and we actively foster an inclusive environment where every background, perspective, and skillset is valued. Our culture is built on engagement, continuous learning, and mutual growth. As we expand globally, we welcome motivated, talented individuals who are eager to grow with us and shape the future of engineering. 
                            </p>
                            
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;