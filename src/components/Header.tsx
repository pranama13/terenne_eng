import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
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

// Data for services mega menu (unchanged)
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const headerClasses = mode === 'transparent'
    ? "bg-transparent backdrop-blur-sm sticky top-0 z-50 transition-all duration-300"
    : "bg-background shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300";

  const navTextClass = `${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent transition-colors px-3 py-2 text-sm font-medium`;

  return (
    <header className={`${headerClasses} ${className} w-full`}>
      <div className="w-full max-w-[2400px] mx-auto px-2 py-1">
        <div className="flex items-center justify-between">
          {/* Placeholder to balance the Inquiry button on the right */}
          <div className="w-24"></div>

          {/* Navigation - Centered with inline logo */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="hidden md:flex items-center">
              {/* --- LEFT NAVIGATION ITEMS --- */}
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
                      <NavigationMenuLink asChild><Link to="/qualitypolicy" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Quality Policy</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/faq" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">FAQ</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/career" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Career</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/blog" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Blog</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/inquiry" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Contact Us</Link></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>SERVICES</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-[800px] p-6 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 grid grid-cols-4 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx}>
                          <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">{category.category}</h5>
                          <ul className="space-y-2">
                            {category.services.map((service, serviceIdx) => (<li key={serviceIdx}><NavigationMenuLink asChild><Link to={service.to} className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">{service.label}</Link></NavigationMenuLink></li>))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-4 pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                        <p className="text-xs text-white/60">Explore our comprehensive range of engineering and architectural services</p>
                        <Button variant="link" className="text-primary p-0 h-auto" asChild><Link to="/services" className="flex items-center">View All Services <ChevronDown className="ml-1 h-3 w-3 rotate-270" /></Link></Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>

             

              {/* --- RIGHT NAVIGATION ITEMS --- */}
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>SOFTWARE EXPERTISE</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      <NavigationMenuLink asChild><Link to="/autocad" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">AutoCAD</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/revit" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">Revit</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/etabs" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">ETABS</Link></NavigationMenuLink>
                      <NavigationMenuLink asChild><Link to="/staad-pro" className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">STAAD Pro</Link></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                 {/* --- SPINNING LOGO IN THE MIDDLE --- */}
              <div className="mx-4" style={{ transform: 'scale(0.8)',  }}>
                
                <LogoTriangle />
                
              </div>
                {/* --- ADDED PACKAGES --- */}
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
                  <Link to="/projects" className={`${navTextClass} font-bold`}>PROJECTS</Link>
                </NavigationMenuItem>

                {/* --- ADDED SUSTAINABILITY --- */}
                <NavigationMenuItem>
                  <Link to="/sustainability" className={`${navTextClass} font-bold`}>SUSTAINABILITY</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/inquiry" className={`${navTextClass} font-bold`}>CONTACT US</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Inquiry button aligned right */}
          <div className="hidden md:flex items-center w-24 justify-end" style={{ marginRight: '59px' }}>
            <Button variant="outline" className="bg-[#00A5E7] border-white border-2 text-white hover:bg-[#00A5E7]/90 hover:border-white px-6 py-1.5 font-semibold rounded-lg transition-all duration-300 shadow-lg text-base" asChild>
              <Link to="/inquiry">INQUIRY</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (functionality unchanged) */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation (functionality unchanged) */}
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
