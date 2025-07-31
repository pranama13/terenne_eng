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

// Data for Dropdowns
const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Why Terrene", to: "/Whyterrene" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Testimonial", to: "/testimonial" },
    { label: "Sitemap", to: "/sitemap" },
    { label: "Quality Policy", to: "/qualitypolicy" },
    { label: "FAQ", to: "/faq" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/inquiry" },
];

const softwareTrainingLinks = [
    { label: "BIM", to: "/software-training/bim" },
    { label: "Digital Twin", to: "/software-training/digital-twin" },
    { label: "AI in Engineering", to: "/software-training/ai-engineering" },
    { label: "3D Visualization", to: "/software-training/3d-visualization" },
    { label: "Construction Project Management", to: "/software-training/cpm" },
];

const packageLinks = [
    { label: "Starter", to: "/packages/starterPackage" },
    { label: "Mid Level", to: "/packages/mid-level" },
    { label: "High End", to: "/packages/high-end" },
    { label: "International", to: "/packages/international" },
    { label: "Corporate", to: "/packages/corporate" },
];

const projectLinks = [
    { label: "Ongoing Projects", to: "/ongoing-projects" },
    { label: "Completed Projects", to: "/completed-projects" },
];


const services = serviceCategories.flatMap(category => category.services);

interface HeaderProps {
  mode?: 'transparent' | 'solid';
  className?: string;
}

const Header = ({ mode = 'transparent', className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const headerClasses = mode === 'transparent'
    ? "bg-transparent backdrop-blur-sm sticky top-0 z-50 transition-all duration-300"
    : "bg-background shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300";

  const navTextClass = `${mode === 'transparent' ? 'text-white' : 'text-foreground'} hover:text-primary-100 bg-transparent hover:bg-transparent transition-colors px-3 py-2 text-md font-medium`;
  const mobileNavTextClass = `${mode === 'transparent' ? 'text-white' : 'text-foreground'}`;
  
  const toggleAccordion = (accordionName: string) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileNavTextClass}`} onClick={() => setIsMenuOpen(false)}>{children}</Link>
  );

  const MobileAccordion = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
    <div className="border-b border-white/10 py-1">
      <button onClick={() => toggleAccordion(title)} className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${mobileNavTextClass}`}>
        <span>{title}</span>
        <ChevronDown className={`transform transition-transform ${openAccordion === title ? 'rotate-180' : ''} w-5 h-5`} />
      </button>
      {openAccordion === title && (
        <div className="pl-4 mt-1 space-y-1 pb-2">
          {links.map(link => (
            <Link key={link.to} to={link.to} className={`block px-3 py-2 rounded-md text-sm ${mobileNavTextClass} hover:bg-white/10`} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    
    <header className={`${headerClasses} ${className} w-full`}>
      <div className="w-full max-w-[2400px] mx-auto px-2 py-1">
        <div className="flex items-center justify-between">
            <Link to="/" aria-label="Go to Home" onClick={() => setIsMenuOpen(false)}>
                <div className="mx-4" style={{ transform: 'scale(0.8)' }}>
                    <LogoTriangle />
                </div>
            </Link>

          <div className="flex-1 flex justify-center">
            {/* Desktop Menu */}
            <NavigationMenu className="hidden md:flex items-center">
              <NavigationMenuList>
                <NavigationMenuItem><Link to="/" className={`${navTextClass} font-bold`}>HOME</Link></NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>COMPANY</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      {companyLinks.map(link => <NavigationMenuLink asChild key={link.to}><Link to={link.to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">{link.label}</Link></NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass} onMouseEnter={() => setHoveredCategory(0)}>SERVICES</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-[800px] p-6 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 flex gap-6">
                      <ul className="w-1/4 space-y-2 border-r border-white/10 pr-4">
                        {serviceCategories.map((category, idx) => (
                           <li className="group" key={idx} onMouseEnter={() => setHoveredCategory(idx)}>
                             <div className="flex justify-between items-center p-2 text-sm text-white hover:bg-white/10 rounded transition-colors cursor-pointer">
                               {category.category}
                               <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                           </li>
                        ))}
                      </ul>
                      <div className="w-3/4">
                        {serviceCategories[hoveredCategory] && (
                         <div>
                          <h5 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider border-b border-white/10 pb-2">{serviceCategories[hoveredCategory].category}</h5>
                          <ul className="space-y-2 grid grid-cols-2 gap-x-4">
                            {serviceCategories[hoveredCategory].services.map((service) => (
                                <li key={service.to}>
                                    <NavigationMenuLink asChild><Link to={service.to} className="block px-2 py-1.5 text-sm text-white hover:bg-white/10 rounded transition-colors">{service.label}</Link></NavigationMenuLink>
                                </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>SOFTWARE TRAINING</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-64 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      {softwareTrainingLinks.map((link) => (<NavigationMenuLink asChild key={link.to}><Link to={link.to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">{link.label}</Link></NavigationMenuLink>))}
                      <div className="border-t border-white/10 mt-2 pt-2"><NavigationMenuLink asChild><Link to="/software-training" className="block px-3 py-2 text-sm text-primary font-semibold hover:bg-white/10 rounded">View More</Link></NavigationMenuLink></div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>PACKAGES</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      {packageLinks.map(link => <NavigationMenuLink asChild key={link.to}><Link to={link.to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">{link.label}</Link></NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navTextClass}>PROJECTS</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-transparent !border-none !shadow-none">
                    <div className="w-48 p-2 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
                      {projectLinks.map(link => <NavigationMenuLink asChild key={link.to}><Link to={link.to} className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded">{link.label}</Link></NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem><Link to="/sustainability" className={`${navTextClass} font-bold`}>SUSTAINABILITY</Link></NavigationMenuItem>
                <NavigationMenuItem><Link to="/inquiry" className={`${navTextClass} font-bold`}>CONTACT US</Link></NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={mobileNavTextClass}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-2">
            <div className="border-b border-white/10 py-1"><MobileNavLink to="/">HOME</MobileNavLink></div>
            <MobileAccordion title="COMPANY" links={companyLinks} />
            <MobileAccordion title="SERVICES" links={serviceCategories.flatMap(cat => cat.services)} />
            <MobileAccordion title="SOFTWARE TRAINING" links={softwareTrainingLinks} />
            <MobileAccordion title="PACKAGES" links={packageLinks} />
            <MobileAccordion title="PROJECTS" links={projectLinks} />
            <div className="border-b border-white/10 py-1"><MobileNavLink to="/sustainability">SUSTAINABILITY</MobileNavLink></div>
            <div className="py-1"><MobileNavLink to="/inquiry">CONTACT US</MobileNavLink></div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
export { services, serviceCategories };