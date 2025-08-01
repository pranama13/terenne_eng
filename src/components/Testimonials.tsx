import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SPACING_CLASSES } from '@/lib/spacing';
import client from '../assert/client.jpg';

const testimonials = [
    {
        id: 1,
        quote: "Terrene Engineering transformed our concept into reality with exceptional attention to detail. Their sustainable approach to design didn't just meet our expectations—it exceeded them.",
        name: "Sarah Johnson",
        position: "Director of Operations",
        company: "Greenscape Development",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        id: 2,
        quote: "Working with the Terrene team was refreshing. Their innovative solutions saved us both time and resources while delivering a structure that perfectly balances form and function.",
        name: "Michael Chen",
        position: "Project Manager",
        company: "Urban Horizons",
        image: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
        id: 3,
        quote: "The engineering expertise at Terrene is unparalleled. They navigated complex regulatory requirements with ease and delivered a sustainable design that has become a benchmark in our industry.",
        name: "Amira Patel",
        position: "Chief Sustainability Officer",
        company: "EcoBuilt Construction",
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        id: 4,
        quote: "From initial concept to final implementation, Terrene's attention to detail was impressive. Their team understood our vision and translated it into a magnificent structure that exceeded our expectations.",
        name: "Robert Martinez",
        position: "CEO",
        company: "Nexus Properties",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 5,
        quote: "Terrene Engineering's commitment to sustainability without compromising on design excellence made them the perfect partner for our eco-resort project. The results speak for themselves.",
        name: "Emily Tanaka",
        position: "Development Director",
        company: "Harmony Resorts",
        image: "https://randomuser.me/api/portraits/women/59.jpg"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const maxIndex = Math.ceil(testimonials.length / 2) - 1;
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto scroll functionality
    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        
        if (!isHovering) {
            timerRef.current = setInterval(() => {
                setActiveIndex(current => {
                    return current < maxIndex ? current + 1 : 0;
                });
            }, 5000); 
        }
        
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isHovering, maxIndex]);

    const handlePrevious = () => {
        setActiveIndex((current) => (current > 0 ? current - 1 : 0));
    };

    const handleNext = () => {
        setActiveIndex((current) => (current < maxIndex ? current + 1 : maxIndex));
    };

    return (
        // The `bg-[#212121]` has been removed to show the video background.
        <section className="py-8 md:py-10 w-full relative overflow-hidden">
            {/* --- Video Background and Overlay --- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/about.mp4"
                />
                <div className="absolute inset-0 bg-blue-900/90 z-10" />
            </div>
            
            <div className="w-full mx-auto px-4 md:px-6 relative z-20">
                <div className="relative">
                    {/* Blurred background image for the main card */}
                    <div
                        className="absolute inset-0 rounded-2xl z-0"
                        style={{
                            backgroundImage: `url(${client})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }}
                    ></div>
                    {/* Main testimonial card content */}
                    <div className="rounded-2xl border border-white/10 bg-background/60 shadow-2xl p-6 md:p-10 lg:p-12 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Voices of Trust</h2>
                            <p className="text-white/ max-w-2xl mx-auto">
                                Our reputation is built on results and reinforced by those who’ve experienced them.
Hear directly from our valued clients as they share their experiences with Terrene Engineering’s commitment to quality, innovation, and dependable service across the globe.

                            </p>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndex * 50}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="w-full md:w-1/2 flex-shrink-0 px-4 mb-8"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
                                                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 blur-[2px] opacity-80"></div>
                                                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/10 via-primary/10 to-white/10 blur-lg opacity-60"></div>
                                                </div>
                                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl h-full flex flex-col relative z-10">
                                                    <div className="mb-4">
                                                        <Quote className="h-8 w-8 text-primary opacity-50" />
                                                    </div>
                                                    <p className="text-white italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                                    <div className="flex items-center">
                                                        <div className="mr-4">
                                                            <img
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-white">{testimonial.name}</h4>
                                                            <p className="text-sm text-white/">
                                                                {testimonial.position}, {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Navigation buttons */}
                            <div className="flex justify-center mt-8 space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handlePrevious}
                                    disabled={activeIndex === 0}
                                    className="border-primary text-primary hover:bg-primary/10"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                    <span className="sr-only">Previous</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleNext}
                                    disabled={activeIndex === maxIndex}
                                    className="border-primary text-primary hover:bg-primary/10"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                    <span className="sr-only">Next</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;