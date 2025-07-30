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
    { index: 3, 'title': 'Residential Development', category: 'Residential', image: facultyImage, location: 'Coastal Heights', year: '2022' },
    { index: 4, title: 'Healthcare Facility', category: 'Healthcare', image: hospitalImage, location: 'Central Medical District', year: '2021' },
    { index: 5, title: 'Infrastructure Project', category: 'Infrastructure', image: infrastructureImage, location: 'Regional Highway 101', year: '2023' },
    { index: 6, title: 'Industrial Facility', category: 'Industrial', image: commercialImage, location: 'Tech Industrial Park', year: '2021' },
    { index: 7, title: 'Urban Office Tower', category: 'Commercial', image: commercialImage, location: 'Metro Business District', year: '2024' },
    { index: 8, title: 'Science Research Center', category: 'Institutional', image: educationImage, location: 'Innovation Park', year: '2023' },
    { index: 9, title: 'Luxury Apartments', category: 'Residential', image: facultyImage, location: 'Uptown Residences', year: '2024' },
    { index: 10, title: 'City Hospital Expansion', category: 'Healthcare', image: hospitalImage, location: 'Health Avenue', year: '2023' },
];

const SWIPE_THRESHOLD = 50; // Minimum pixels for a swipe to register

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
    const [isDragging, setIsDragging] = useState(false);
    const [cardDimensions, setCardDimensions] = useState({ width: 0, gap: 0 });
    const [dragOffset, setDragOffset] = useState(0);
    const touchStartX = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => preloadImages(initialProjects), []);

    useEffect(() => {
        const calculateDimensions = () => {
            if (carouselRef.current && carouselRef.current.children.length > 0) {
                const cardNode = carouselRef.current.children[0] as HTMLElement;
                const style = window.getComputedStyle(carouselRef.current);
                const gap = parseFloat(style.gap) || 0;
                const width = cardNode.offsetWidth;
                setCardDimensions({ width, gap });
            }
        };
        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);
        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    const handleNext = () => setCurrentIndex(prev => prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev - 1);

    useEffect(() => {
        if (isPaused || isDragging || cardDimensions.width === 0) {
            clearInterval(intervalRef.current!);
            return;
        }
        intervalRef.current = setInterval(handleNext, 4000);
        return () => clearInterval(intervalRef.current!);
    }, [isPaused, isDragging, currentIndex, cardDimensions]);

    const visibleCount = isMobile ? 1 : 4;

    useEffect(() => {
        if (currentIndex >= initialProjects.length || currentIndex < 0) {
            const timer = setTimeout(() => {
                setIsJumping(true);
                const newIndex = currentIndex < 0 ? initialProjects.length - 1 : 0;
                setCurrentIndex(newIndex);
            }, 500);
            return () => clearTimeout(timer);
        } else if (isJumping) {
            const timer = setTimeout(() => setIsJumping(false), 50);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isJumping]);

    const extendedProjects = [
        ...initialProjects.slice(-visibleCount),
        ...initialProjects,
        ...initialProjects.slice(0, visibleCount),
    ];

    const getTransform = () => {
        if (cardDimensions.width === 0) return 'translateX(0px)';
        const baseTransform = (currentIndex + visibleCount) * (cardDimensions.width + cardDimensions.gap);
        return `translateX(-${baseTransform - dragOffset}px)`;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        setDragOffset(touchStartX.current - currentX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
            if (dragOffset > 0) handleNext();
            else handlePrev();
        }
        setDragOffset(0);
    };
    
    const getCardWidthClass = () => "w-[240px] sm:w-[260px] md:w-[260px] lg:w-[280px] xl:w-[300px]";
    const viewportWidth = (visibleCount * cardDimensions.width) + ((visibleCount - 1) * cardDimensions.gap);

    return (
        <section id="projects" className="py-10 md:py-12 w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/pro.mp4" />
                <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
            </div>
            <div className="w-full max-w-[2400px] px-2 md:px-4 lg:px-6 relative z-20">
                <Card className={`${SPACING_CLASSES.COMPONENT} bg-background/80 rounded-2xl border border-white/10 relative overflow-hidden transition-all duration-300`}>
                    <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${StructuralEngineering})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="absolute inset-0 bg-black/25 z-10"></div>
                    <div className="relative z-20 p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Featured Projects</h2>
                                <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <Button variant="outline" className="bg-[#00A5E7] border-white border-2 text-white hover:bg-[#00A5E7]/90 hover:border-white px-6 py-1.5 font-semibold rounded-lg shadow-lg text-base">
                                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="overflow-hidden mx-auto"
                                onMouseEnter={() => !isMobile && setIsPaused(true)}
                                onMouseLeave={() => !isMobile && setIsPaused(false)}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                style={{ width: viewportWidth > 0 ? `${viewportWidth}px` : '100%', maxWidth: '100%' }}
                            >
                                <div
                                    ref={carouselRef}
                                    className="flex gap-5 will-change-transform"
                                    style={{
                                        transform: getTransform(),
                                        transition: isJumping || isDragging ? 'none' : 'transform 0.5s ease-in-out',
                                    }}
                                >
                                    {extendedProjects.map((project, idx) => (
                                        <Card key={`${project.index}-${idx}`} className={`${getCardWidthClass()} flex-none group overflow-hidden bg-background/90 backdrop-blur-md border border-white/20 select-none p-0 shadow-xl`}>
                                            <div className="relative overflow-hidden aspect-[3/4]">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/20">{project.category}</span>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                                    <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-2">{project.title}</h3>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-white/ truncate mr-2">{project.location}</span>
                                                        <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">{project.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center md:hidden">
                            <Button variant="outline" className="w-full max-w-md transition-all duration-300 hover:shadow-lg border-primary text-primary hover:bg-primary/10">
                                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Projects;