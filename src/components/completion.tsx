import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SPACING_CLASSES } from '@/lib/spacing';
import StructuralEngineering from '../assert/StructuralEngineering2.jpg';

const statsData = [
    { label: 'Happy Clients', value: 2500, suffix: '+' },
    { label: 'Qualified Engineers', value: 180, suffix: '+' },
    { label: 'Years of Experience', value: 17, suffix: '+' },
    { label: 'Countries Served', value: 30, suffix: '+' }
];

const StatCounter = ({ value, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = Math.min(value, 9999);
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16.67); // Corresponds to 60fps

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return (
        <span ref={ref} className="text-3xl sm:text-4xl font-bold text-white">
            {count}{suffix}
        </span>
    );
};

const CompletionStats = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section className="py-3 md:py-8 w-full relative overflow-hidden">
            {/* --- Video Background and Overlay --- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/hero.mp4"
                />
                <div className="absolute inset-0 bg-blue-900/90 z-10" />
            </div>

            {/* --- RESPONSIVE CONTAINER --- */}
            {/* Replaced invalid max-w-[1400vh] with a standard max-w-7xl and mx-auto for centering. */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-20">
                {/* --- RESPONSIVE PADDING --- */}
                {/* Replaced invalid p-[-10vh] with responsive padding classes (p-8, md:p-12, etc.). */}
                <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] p-8 md:p-12 lg:p-16">
                    
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${StructuralEngineering})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    
                    <div className="absolute inset-0 z-10 bg-black/45 pointer-events-none" />
                    
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        // The existing grid classes provide the core responsiveness (2 columns on mobile, 4 on desktop).
                        className={`relative grid grid-cols-2 md:grid-cols-4 ${SPACING_CLASSES.GRID} text-center`}
                    >
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="flex flex-col items-center relative z-20"
                            >
                                {/* The StatCounter now has responsive font size */}
                                <StatCounter value={stat.value} suffix={stat.suffix} />
                                <div className="h-1 w-12 bg-white/60 rounded-full my-3"></div>
                                {/* --- RESPONSIVE FONT SIZE --- */}
                                <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
                                
                                {/* Vertical line is correctly hidden on mobile (md:block) */}
                                {index !== statsData.length - 1 && (
                                    <div className="hidden md:block absolute top-1/4 right-0 h-2/4 w-px bg-white/30"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompletionStats;