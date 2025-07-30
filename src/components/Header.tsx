import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import LogoTriangle from './LogoTriangle';

// Data for services mega menu
const serviceCategories = [
  {
    category: "Architectural",
    services: [
      { label: "Architectural Consultancy", to: "/architectural-consulting" },
      { label: "Interior Design Services", to: "/interior-design" },
      { label: "Furniture Design & Supply", to: "/furniture-design" },
      { label: "Acoustic & Lighting Design", to: "/acoustic-lighting" },
      { label: "Master Planning & Urban Design", to: "/master-planning" }
    ]
  },
  {
    category: "Engineering",
    services: [
      { label: "Structural Consultancy", to: "/structural-consultancy" },
      { label: "MEP Engineering", to: "/mep-engineering" },
      { label: "HVAC Solutions", to: "/hvac-solutions" },
      { label: "ELV Services", to: "/elv-services" },
      { label: "Material Consultancy", to: "/material-consultancy" }
    ]
  },
  {
    category: "Technical",
    services: [
      { label: "Laboratory Testing", to: "/laboratory-testing" },
      { label: "Land Surveying & GIS Mapping", to: "/land-surveying" },
      { label: "BIM Services", to: "/bim-services" },
      { label: "Software Training", to: "/software-training" },
      { label: "Import & Export Materials", to: "/import-export" }
    ]
  },
  {
    category: "Project Management",
    services: [
      { label: "Construction Services", to: "/construction-services" },
      { label: "Project Management", to: "/project-management" },
      { label: "Quantity Surveying", to: "/quantity-surveying" },
      { label: "Construction Claims", to: "/construction-claims" },
      { label: "Tendering & Procurement", to: "/tendering-procurement" }
    ]
  }
];

// --- NEW: Data for Software Training Dropdown ---
const softwareTrainingLinks = [
    { label: "BIM", to: "/software-training/bim" },
    { label: "Digital Twin", to: "/software-training/digital-twin" },
    { label: "AI in Engineering", to: "/software-training/ai-engineering" },
    { label: "3D Visualization", to: "/software-training/3d-visualization" },
    { label: "Construction Project Management", to: "/software-training/cpm" },
];

const services = serviceCategories.flatMap(category => category.services);

interface HeaderProps {
  mode?: 'transparent' | 'solid';
  className?: string;
  onNavigate?: {
    home?: () => void;
    about?: () => void;
    services?: () => void;
    projects?: () => void;
    testimonials?: () => void;
    contact?: () => void;
  };
}

const Header = ({ mode = 'transparent', className = '', onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);

  const headerClasses = mode === 'transparent'
    ? "bg-transparent backdrop-blur-sm sticky top-0 z-50 transition-all duration-300"
    : "bg-background shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300";

  const navTextClass = `${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent transition-colors px-3 py-2 text-md font-medium`;

  return (
    
    <header className={`${headerClasses} ${className} w-full`}>
      
      <div className="w-full max-w-[2400px] mx-auto px-2 py-1">
        <div className="flex items-center justify-between">
            <div className="mx-4" style={{ transform: 'scale(0.8)' }}>
                <LogoTriangle />
            </div>

          <div className="flex-1 flex justify-center">
            <NavigationMenu className="hidden md:flex items-center">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`${navTextClass} font-bold`}>HOME</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>COMPANY</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild><Link to="/about" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">About Us</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/Whyterrene" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Why Terrene</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/sustainability" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Sustainability</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/testimonial" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Testimonial</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/sitemap" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Sitemap</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/qualitypolicy" className="block px-3 py-2 text-sm   text-white hover:bg-white/10 rounded">Quality Policy</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/faq" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">FAQ</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/career" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Career</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/blog" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Blog</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/inquiry" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Contact Us</Link></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={navTextClass}
                    onMouseEnter={() => setHoveredCategory(0)}
                  >
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-[800px] p-6 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 flex gap-6">
                      <ul className="w-1/4 space-y-2 border-r border-white/10 pr-4">
                        {serviceCategories.map((category, idx) => (
                           <li 
                             className="group" 
                             key={idx}
                             onMouseEnter={() => setHoveredCategory(idx)}
                           >
                             <Link to="#" className="flex justify-between items-center p-2 text-sm text-white hover:bg-white/10 rounded transition-colors">
                               {category.category}
                               <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                             </Link>
                           </li>
                        ))}
                      </ul>
                      <div className="w-3/4">
                        {serviceCategories[hoveredCategory] && (
                         <div>
                          <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">{serviceCategories[hoveredCategory].category}</h5>
                          <ul className="space-y-2 grid grid-cols-2 gap-x-4">
                            {serviceCategories[hoveredCategory].services.map((service, serviceIdx) => (
                                <li key={serviceIdx}>
                                    <NavigationMenuLink asChild>
                                        <Link to={service.to} className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">{service.label}</Link>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* --- UPDATED SOFTWARE EXPERTISE MENU --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>SOFTWARE TRAINING</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-64 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      {softwareTrainingLinks.map((link, idx) => (
                        <NavigationMenuLink asChild key={idx}>
                          <Link to={link.to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">{link.label}</Link>
                        </NavigationMenuLink>
                      ))}
                      <div className="border-t border-white/10 mt-2 pt-2">
                         <NavigationMenuLink asChild>
                            <Link to="/software-training" className="block px-3 py-2 text-sm text-primary font-semibold hover:bg-white/10 rounded">
                                View More
                            </Link>
                         </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>PACKAGES</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild><Link to="/packages/starterPackage" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Starter</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/packages/mid-level" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Mid Level</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/packages/high-end" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">High End</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/packages/international" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">International</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/packages/corporate" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Corporate</Link></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>PROJECTS</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild><Link to="/ongoing-projects" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Ongoing Projects</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/completed-projects" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Completed Projects</Link></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/sustainability" className={`${navTextClass} font-bold`}>SUSTAINABILITY</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/inquiry" className={`${navTextClass} font-bold`}>CONTACT US</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>


          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            {/* Mobile menu content */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
export { services, serviceCategories };
