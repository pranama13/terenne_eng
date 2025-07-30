import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
// Import logo from assets folder
import Logo2 from '../assert/Logo2.png';

// --- NEW: Custom SVG component for the TikTok icon ---
const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.63-1.1-6.22-3.04-1.3-1.59-1.96-3.6-1.93-5.56.02-1.52.53-3.04 1.52-4.25 1.08-1.31 2.7-1.99 4.33-1.98.01 1.54-.01 3.08-.01 4.61-.97.12-1.93.57-2.64 1.31-.69.73-1.03 1.72-1.02 2.74.01 1.09.45 2.19 1.26 2.94.79.74 1.83 1.14 2.87 1.13.99 0 1.97-.34 2.73-.98.6-.5 1-1.16 1.23-1.88.08-1.57.08-3.14.08-4.71.01-1.19-.42-2.37-1.12-3.29-.81-1.09-2.06-1.64-3.32-1.61.02-1.56.01-3.11.01-4.67.13-1.59.76-3.14 1.87-4.25Z"/>
    </svg>
);

const Footer = () => {
  return (
    <section className="py-7 pb-0 md:py-11 md:pb-0 w-full relative overflow-hidden">
      <footer className="bg-slate-900 text-white w-full">
        <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 py-8 pb-4 relative z-20">
          {/* Responsive grid: always 1 column on mobile, 4 columns on md+ */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 min-h-[1px] text-left">
              {/* Logo and company name */}
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center space-x-4 h-full">
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <img
                        src={Logo2}
                        alt="Terrene Engineering Logo"
                        className="object-contain"
                        style={{
                          width: "470px",
                          height: "auto",
                          maxWidth: "100%"
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-2xl mb-1.5">Terrene Engineering</h1>
                    <p className="text-base text-gray-400 mb-8">(Private) Limited</p>
                    <p className="text-xs text-gray-400">
                      professional engineering solutions for structural, civil, and architectural projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/structural-consultancy" className="text-gray-300 hover:text-white transition-colors">Structural Engineering</Link></li>
                  <li><Link to="/civil-engineering" className="text-gray-300 hover:text-white transition-colors">Civil Engineering</Link></li>
                  <li><Link to="/architectural-consulting" className="text-gray-300 hover:text-white transition-colors">Architectural Drafting</Link></li>
                  <li><Link to="/project-management" className="text-gray-300 hover:text-white transition-colors">Project Management</Link></li>
                  <li><Link to="/code-compliance" className="text-gray-300 hover:text-white transition-colors">Code Compliance</Link></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/mep-engineering" className="text-gray-300 hover:text-white transition-colors">MEP Engineering</Link></li>
                  <li><Link to="/interior-design" className="text-gray-300 hover:text-white transition-colors">Interior Design Services</Link></li>
                  <li><Link to="/bim-services" className="text-gray-300 hover:text-white transition-colors">BIM Services</Link></li>
                  <li><Link to="/laboratory-testing" className="text-gray-300 hover:text-white transition-colors">Laboratory Testing</Link></li>
                  <li><Link to="/quantity-surveying" className="text-gray-300 hover:text-white transition-colors">Quantity Surveying</Link></li>
                </ul>
              </div>
            </div>

            {/* Quick Links section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/career" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/quality-policy" className="text-gray-300 hover:text-white transition-colors">Quality Policy</Link></li>
                  <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
                  <li><Link to="/testimonial" className="text-gray-300 hover:text-white transition-colors">Testimonial</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">123 Engineering Lane, Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">info@terreneeng.com</span>
                </div>
                {/* --- SOCIAL MEDIA ICONS UPDATED --- */}
                <div className="flex space-x-4 pt-2 justify-start pl-0 ml-0">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                   <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                   <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2025 Terrene Engineering (Private) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
