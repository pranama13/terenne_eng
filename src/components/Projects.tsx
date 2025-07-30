import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';

import commercialImage from '../assert/Project/comercial.jpg';
import educationImage from '../assert/Project/education.jpg';
import facultyImage from '../assert/Project/faculty.jpg';
import hospitalImage from '../assert/Project/hospital.jpg';
import infrastructureImage from '../assert/Project/infrastructure.jpg';
import StructuralEngineering from '../assert/StructuralEngineering.jpg';

const initialProjects = [
    { index: 1, title: 'Commercial Complex Design', category: 'Commercial', image: commercialImage, location: 'Downtown Metro City', year: '2023' },
    { index: 2, title: 'Educational Building', category: 'Institutional', image: educationImage, location: 'University Campus', year: '2022' },
    { index: 3, title: 'Residential Development', category: 'Residential', image: facultyImage, location: 'Coastal Heights', year: '2022' },
    { index: 4, title: 'Healthcare Facility', category: 'Healthcare', image: hospitalImage, location: 'Central Medical District', year: '2021' },
    { index: 5, title: 'Infrastructure Project', category: 'Infrastructure', image: infrastructureImage, location: 'Regional Highway 101', year: '2023' },
    { index: 6, title: 'Industrial Facility', category: 'Industrial', image: commercialImage, location: 'Tech Industrial Park', year: '2021' },
    { index: 7, title: 'Urban Office Tower', category: 'Commercial', image: commercialImage, location: 'Metro Business District', year: '2024' },
    { index: 8, title: 'Science Research Center', category: 'Institutional', image: educationImage, location: 'Innovation Park', year: '2023' },
    { index: 9, title: 'Luxury Apartments', category: 'Residential', image: facultyImage, location: 'Uptown Residences', year: '2024' },
    { index: 10, title: 'City Hospital Expansion', category: 'Healthcare', image: hospitalImage, location: 'Health Avenue', year: '2023' },
];

function preloadImages(projects) {
    projects.forEach((p) => {
        const img = new window.Image();
        img.src = p.image;
    });
}

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [cardDimensions, setCardDimensions] = useState({ width: 0, gap: 0 });
    
    // --- RESPONSIVE STATE ---
    // State to determine if the view is mobile, which controls the number of visible cards.
    const [isMobile, setIsMobile] = useState(false);

    const intervalRef = useRef(null);
    const carouselRef = useRef(null);

    // Effect to check screen size for responsiveness
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Preload images
    useEffect(() => {
        preloadImages(initialProjects);
    }, []);

    // Effect to dynamically calculate card and gap widths
    useEffect(() => {
        const calculateDimensions = () => {
            if (carouselRef.current && carouselRef.current.children.length > 0) {
                const cardNode = carouselRef.current.children[0];
                const style = window.getComputedStyle(carouselRef.current);
                const gap = parseFloat(style.gap) || 0;
                const width = cardNode.getBoundingClientRect().width;
                setCardDimensions({ width, gap });
            }
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);


    const handleNext = () => {
        setCurrentIndex(prev => prev + 1);
    };

    // Auto-slide functionality
    useEffect(() => {
        if (isPaused || cardDimensions.width === 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }
        const startAutoSlide = () => {
            intervalRef.current = setInterval(handleNext, 4000);
        };

        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, currentIndex, cardDimensions]);

    // --- DYNAMIC VISIBLE COUNT ---
    // Determines how many cards to show based on screen size.
    const visibleCount = isMobile ? 1 : 4;

    // Effect to handle the infinite loop jump
    useEffect(() => {
        if (currentIndex >= initialProjects.length) {
            const timer = setTimeout(() => {
                setIsJumping(true);
                setCurrentIndex(0);
            }, 700);
            return () => clearTimeout(timer);
        } else if (isJumping) {
            const timer = setTimeout(() => {
                setIsJumping(false);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isJumping]);


    // Create extended array for infinite scrolling using the dynamic visibleCount
    const extendedProjects = [
        ...initialProjects.slice(-visibleCount),
        ...initialProjects,
        ...initialProjects.slice(0, visibleCount),
    ];

    // Transform calculation using dynamic dimensions and visibleCount
    const getTransform = () => {
        if (cardDimensions.width === 0) return 'translateX(0px)';
        const baseTransform = (currentIndex + visibleCount) * (cardDimensions.width + cardDimensions.gap);
        return `translateX(-${baseTransform}px)`;
    };

    // Responsive card width classes
    const getCardWidthClass = () => {
        // Reduced the smallest size slightly for better fit on narrow screens
        return "w-[240px] sm:w-[260px] md:w-[260px] lg:w-[280px] xl:w-[300px]";
    };

    // Dynamically calculate the viewport width based on visibleCount
    const viewportWidth = (visibleCount * cardDimensions.width) + ((visibleCount - 1) * cardDimensions.gap);

    return (
        <section
            id="projects"
            className="py-10 md:py-12 w-full relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/pro.mp4"
                />
                <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
            </div>

            <div className="w-full max-w-[2400px] px-2 md:px-4 lg:px-6 relative z-20">
                <Card
                    className={`${SPACING_CLASSES.COMPONENT} bg-background/80 rounded-2xl border border-white/10 relative overflow-hidden transition-all duration-300`}
                >
                    <div
                        className="absolute inset-0 z-0"
                        style={{ backgroundImage: `url(${StructuralEngineering})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    />
                    <div className="absolute inset-0 bg-black/25 z-10"></div>
                    
                    <div className="relative z-20 p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
                            <div>
                                {/* --- Responsive Heading --- */}
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    Featured Projects
                                </h2>
                                <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <Button
                                    variant="outline"
                                    className="bg-[#00A5E7] border-white border-2 text-white hover:bg-[#00A5E7]/90 hover:border-white px-6 py-1.5 font-semibold rounded-lg transition-all duration-300 shadow-lg text-base"
                                >
                                    View All Projects
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            {/* The viewport container is now centered and its width is dynamically calculated */}
                            <div
                                className="overflow-hidden mx-auto"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                style={{ 
                                    width: viewportWidth > 0 ? `${viewportWidth}px` : '100%',
                                    maxWidth: '100%' 
                                }}
                            >
                                <div
                                    ref={carouselRef}
                                    className={`flex gap-5 will-change-transform ${isJumping ? 'transition-none' : 'transition-transform duration-700 ease-in-out'}`}
                                    style={{ transform: getTransform() }}
                                >
                                    {extendedProjects.map((project, idx) => (
                                        <Card
                                            key={`${project.index}-${idx}`}
                                            className={`${getCardWidthClass()} flex-none group hover:shadow-2xl shadow-lg transition-all duration-500 overflow-hidden bg-background/90 backdrop-blur-md border border-white/20 select-none p-0 hover:scale-105 hover:-translate-y-2 shadow-xl`}
                                        >
                                            <div className="relative overflow-hidden h-67 md:h-53 lg:h-[385px]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/20">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                                    <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-2">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-white/ truncate mr-2">
                                                            {project.location}
                                                        </span>
                                                        <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                                                            {project.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Button is visible only on mobile screens */}
                        <div className="mt-12 text-center md:hidden">
                            <Button
                                variant="outline"
                                className="w-full max-w-md transition-all duration-300 hover:shadow-lg border-primary text-primary hover:bg-primary/10"
                            >
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Projects;