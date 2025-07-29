import React, { useState, useEffect, useRef } from 'react';
import { Building2, Cog, Ruler, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';

// Data for service categories with background images
const serviceCategories = [
	{
		title: 'Architectural',
		icon: <Ruler className="w-8 h-8" />,
		description: 'Comprehensive architectural solutions from concept to completion',
        backgroundImage: '/architectural.webp', // Example path
        link: '/services/architectural'
	},
	{
		title: 'Engineering',
		icon: <Building2 className="w-8 h-8" />,
		description: 'Structural and technical engineering expertise for all project types',
        backgroundImage: '/engineering.webp', // Example path
        link: '/services/engineering'
	},
	{
		title: 'Technical',
		icon: <Cog className="w-8 h-8" />,
		description: 'Advanced technical services using cutting-edge technology',
        backgroundImage: '/technical.webp', // Example path
        link: '/services/technical'
	},
	{
		title: 'Project Management',
		icon: <Shield className="w-8 h-8" />,
		description: 'End-to-end project management for seamless execution',
        backgroundImage: '/project-management.webp', // Example path
        link: '/services/project-management'
	},
	{
		title: 'Specialized Services',
		icon: <Activity className="w-8 h-8" />,
		description: 'Specialized solutions for unique project requirements',
        backgroundImage: '/specialized.webp', // Example path
        link: '/services/specialized'
	},
];

const Services = () => {
    // This component now returns null, which means it will not render anything.
    // The original code is commented out below in case you want to restore it.
	return null;

    /*
	const [animated, setAnimated] = useState({ serviceCategories: false });
	const categoriesRef = useRef<HTMLDivElement>(null);

	// Intersection observer for animations
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		};

		const animateElement = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				if (entry.target === categoriesRef.current) {
					setAnimated((prev) => ({ ...prev, serviceCategories: true }));
				}
				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(animateElement, observerOptions);
		if (categoriesRef.current) observer.observe(categoriesRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="services" className="py-16 bg-[#212121] overflow-hidden w-full relative">
			<div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20">
				
				<div
					ref={categoriesRef}
					className={`transform transition-all duration-700 ${
						animated.serviceCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					
					<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6`}>
						{serviceCategories.map((category, index) => (
                            <Link to={category.link} key={index} className="group">
                                <div
                                    className="relative p-6 rounded-lg cursor-pointer transition-all duration-300 text-center flex flex-col items-center justify-end overflow-hidden bg-cover bg-center min-h-[200px] border-2 border-transparent group-hover:border-primary group-hover:shadow-2xl"
                                    style={{
                                        backgroundImage: `url(${category.backgroundImage})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-4 bg-white/10 text-white group-hover:bg-primary group-hover:text-background"
                                        >
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                    </div>
								</div>
                            </Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
    */
};

export default Services;
