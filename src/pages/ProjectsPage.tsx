import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Importing button for the hero
import Header from '../components/Header'; // Import the main Header component
import LogoTriangle from '../components/LogoTriangle'; // Assuming this is your logo component

// Sample data for the projects. 
// Replace these with your actual project data and image paths.
const projectsData = [
  {
    id: 1,
    title: 'Azure Tower',
    category: 'Commercial High-Rise',
    image: '/projects/commercial-01.webp', // Placeholder path
    description: 'A landmark skyscraper redefining the city skyline with sustainable design and cutting-edge engineering.',
  },
  {
    id: 2,
    title: 'Serenity Bridge',
    category: 'Infrastructure',
    image: '/projects/infrastructure-01.webp', // Placeholder path
    description: 'An elegant cable-stayed bridge designed for durability and aesthetic appeal, connecting two major urban centers.',
  },
  {
    id: 3,
    title: 'Veridian Residences',
    category: 'Residential Complex',
    image: '/projects/residential-01.webp', // Placeholder path
    description: 'A modern residential community focused on green living, featuring innovative structural and MEP systems.',
  },
  {
    id: 4,
    title: 'Starlight Convention Center',
    category: 'Public Venue',
    image: '/projects/public-01.webp', // Placeholder path
    description: 'A state-of-the-art facility with a complex, long-span roof structure for large-scale events.',
  },
  {
    id: 5,
    title: 'Helios Industrial Park',
    category: 'Industrial',
    image: '/projects/industrial-01.webp', // Placeholder path
    description: 'An advanced industrial park optimized for logistical efficiency and heavy machinery loads.',
  },
  {
    id: 6,
    title: 'Aqua Vista Waterfront',
    category: 'Mixed-Use Development',
    image: '/projects/mixed-use-01.webp', // Placeholder path
    description: 'A vibrant waterfront development combining retail, residential, and recreational spaces with resilient engineering.',
  },
  {
    id: 7,
    title: 'Phoenix Hospital Wing',
    category: 'Healthcare',
    image: '/projects/healthcare-01.webp', // Placeholder path
    description: 'A specialized healthcare facility engineered for advanced medical equipment and patient well-being.',
  },
  {
    id: 8,
    title: 'Athena University Library',
    category: 'Educational',
    image: '/projects/educational-01.webp', // Placeholder path
    description: 'An architectural centerpiece for a university, featuring a unique cantilevered design and collaborative spaces.',
  },
  {
    id: 9,
    title: 'Momentum Sports Arena',
    category: 'Recreational',
    image: '/projects/recreational-01.webp', // Placeholder path
    description: 'A multi-purpose sports arena with a retractable roof, designed for a dynamic and engaging spectator experience.',
  },
];

// --- NEW FOOTER COMPONENT ---
const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white/80 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="mb-4" style={{ transform: 'scale(0.5)', marginLeft: '-45px' }}>
                           <LogoTriangle />
                        </div>
                        <p className="text-sm text-white/60">
                            Engineering excellence and innovative solutions for a sustainable future.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>info@terreneeng.com</li>
                            <li>+94 11 234 5678</li>
                            <li>123 Engineering Lane, Colombo 03</li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    &copy; {new Date().getFullYear()} Terrene Engineering. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};


const ProjectsPage = () => {
  return (
    <div className="bg-[#212121] text-white min-h-screen">
      {/* Main Navigation Header */}
      <Header mode="solid" />

      {/* Hero Section */}
      <header className="relative w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left side: Text content */}
          <div className="bg-white text-gray-800 p-8 md:p-16 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a5a7a]">
              Expect More.<br/>Experience Better.
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md text-gray-600">
              Our professionals are experts in many disciplines, yet share one passion: making our clients successful. We combine creative yet practical solutions, a sense of urgency, and a focus on bottom-line value to meet your specific project needs.
            </p>
            <Button className="bg-[#9B2C2C] hover:bg-[#B92C2C] text-white font-bold py-3 px-6 rounded-md self-start">
              View Projects
            </Button>
          </div>
          {/* Right side: Image */}
          <div 
            className="relative bg-cover bg-center min-h-[400px] lg:min-h-[600px] order-1 lg:order-2"
            style={{ backgroundImage: "url('/prohero.webp')" }}
          >
          </div>
        </div>
        
        {/* SVG Overlay with white lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M-10 110 C 30 70, 70 30, 110 -10" stroke="white" strokeWidth="0.7" fill="none" />
          <path d="M-10 -10 C 30 30, 70 70, 110 110" stroke="white" strokeWidth="0.7" fill="none" />
          <path d="M40 110 C 50 50, 50 50, 60 -10" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M-10 40 C 50 50, 50 50, 110 60" stroke="white" strokeWidth="0.3" fill="none" />
        </svg>
      </header>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group block">
              {/* --- UPDATED PROJECT CARD LAYOUT --- */}
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 h-full flex flex-col md:flex-row transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2">
                {/* Image on the side */}
                <div className="relative md:w-2/5 h-64 md:h-auto flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r"></div>
                </div>
                {/* Text content on the side */}
                <div className="p-6 flex flex-col flex-grow">
                   <span className="bg-primary/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold rounded-full self-start mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="mt-auto">
                    <span className="text-primary font-semibold text-sm flex items-center">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      {/* --- ADDED FOOTER --- */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
