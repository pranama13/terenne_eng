import React, { useState, useEffect, useRef } from 'react';
import { Building2, Cog, Ruler, Shield, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';
import service2 from '../assert/service2.jpg';
import service3 from '../assert/service3.jpg';
import { Card } from "@/components/ui/card";
import Header from '../components/Header'; // Assuming Header is in this path
import Footer from '../components/Footer'; // Assuming Footer is in this path

// --- SERVICE CATEGORIES ---
const serviceCategories = [
	{
		title: 'Architectural',
		icon: <Ruler className="w-8 h-8" />,
		description: 'Comprehensive architectural solutions from concept to completion',
		backgroundImage: '/architectural.webp',
		subServices: [
			{ title: 'Architectural Consultancy', description: 'Expert advice on design and implementation strategies' },
			{ title: 'Interior Design', description: 'Functional and aesthetic interior space planning' },
			{ title: 'Furniture Design', description: 'Custom furniture solutions tailored to your needs' },
			{ title: 'Acoustic & Lighting', description: 'Optimized sound and lighting environments' },
			{ title: 'Master Planning', description: 'Strategic urban and site development planning' },
		],
	},
	{
		title: 'Engineering',
		icon: <Building2 className="w-8 h-8" />,
		description: 'Structural and technical engineering expertise for all project types',
		backgroundImage: '/engineering.webp',
		subServices: [
			{ title: 'Structural Consultancy', description: 'Comprehensive structural analysis and design' },
			{ title: 'MEP Engineering', description: 'Mechanical, electrical and plumbing solutions' },
			{ title: 'HVAC Solutions', description: 'Climate control systems for optimal comfort' },
			{ title: 'ELV Services', description: 'Extra-low voltage systems for modern buildings' },
			{ title: 'Material Consultancy', description: 'Guidance on optimal material selection' },
		],
	},
	{
		title: 'Technical',
		icon: <Cog className="w-8 h-8" />,
		description: 'Advanced technical services using cutting-edge technology',
		backgroundImage: '/technical.webp',
		subServices: [
			{ title: 'Laboratory Testing', description: 'Rigorous material and structural testing' },
			{ title: 'Land Surveying & GIS', description: 'Precise mapping and geographical data analysis' },
			{ title: 'BIM Services', description: 'Building Information Modeling for better project coordination' },
			{ title: 'Software Training', description: 'Professional training on industry-standard software' },
			{ title: 'Import & Export', description: 'Material procurement and logistics solutions' },
		],
	},
	{
		title: 'Project Management',
		icon: <Shield className="w-8 h-8" />,
		description: 'End-to-end project management for seamless execution',
		backgroundImage: '/project-management.webp',
		subServices: [
			{ title: 'Construction Services', description: 'Supervision and execution of construction projects' },
			{ title: 'Project Management', description: 'Comprehensive oversight from planning to delivery' },
			{ title: 'Quantity Surveying', description: 'Accurate cost estimation and quantity analysis' },
			{ title: 'Construction Claims', description: 'Expert resolution of construction-related claims' },
			{ title: 'Tendering & Procurement', description: 'Strategic sourcing and contractor selection' },
		],
	},
	{
		title: 'Specialized Services',
		icon: <Activity className="w-8 h-8" />,
		description: 'Specialized solutions for unique project requirements',
		backgroundImage: '/specialized.webp',
		subServices: [
			{ title: 'Sustainability Design', description: 'Eco-friendly design solutions for modern buildings' },
			{ title: 'Historic Preservation', description: 'Careful restoration of historical structures' },
			{ title: 'Feasibility Studies', description: 'Comprehensive analysis of project viability' },
			{ title: 'Risk Assessment', description: 'Identification and mitigation of project risks' },
			{ title: 'Virtual Reality Design', description: 'Immersive visualization of architectural concepts' },
		],
	},
];

const Services = () => {
	const [activeService, setActiveService] = useState<number>(0);
	const [animated, setAnimated] = useState({
		header: false,
		serviceCategories: false,
	});
	const [imageIndex, setImageIndex] = useState(0);

	const headerRef = useRef<HTMLDivElement>(null);
	const categoriesRef = useRef<HTMLDivElement>(null);

	const serviceImages = [
		"https://images.unsplash.com/photo-1504307651254-35680f356dfd",
		service2,
		service3,
	];

	useEffect(() => {
		serviceImages.forEach((img) => {
			const image = new window.Image();
			image.src = img;
		});
	}, []);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		};

		const animateElement = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				if (entry.target === headerRef.current) {
					setAnimated((prev) => ({ ...prev, header: true }));
				} else if (entry.target === categoriesRef.current) {
					setAnimated((prev) => ({ ...prev, serviceCategories: true }));
				}

				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(animateElement, observerOptions);

		if (headerRef.current) observer.observe(headerRef.current);
		if (categoriesRef.current) observer.observe(categoriesRef.current);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		timer = setTimeout(() => {
			setImageIndex((prev) => (prev + 1) % serviceImages.length);
		}, 5000);
		return () => clearTimeout(timer);
	}, [imageIndex]);

	return (
		<section id="services" className="py-15 overflow-hidden w-full relative">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/service.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute inset-0 bg-blue-900/90 z-10"></div>
			<div className="absolute inset-0 bg-black/30 z-15"></div>

			<div className="w-full max-w-9xl mx-auto px-4 md:px-8 relative z-20">
				<div
					ref={headerRef}
					className={`transform transition-all duration-700 ${animated.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					<div
						className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
					>
						<div
							className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-stretch rounded-l-2xl overflow-hidden border border-white/10 transition-all duration-300"
						>
							{serviceImages.map((img, idx) => (
								<img
									key={idx}
									src={img}
									alt={`Engineering services ${idx + 1}`}
									className={`w-full h-full object-cover transition-all duration-1000 absolute inset-0
										${imageIndex === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'}`}
								/>
							))}
							<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#141414]/95 via-[#141414]/70 to-transparent pointer-events-none z-30"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
						</div>
						<div
							className="flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-r from-cyan-500 to-blue-700 backdrop-blur-sm rounded-r-2xl border-l border-white/10 relative overflow-hidden transition-all duration-300"
						>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
							</div>
							<div className="relative z-10">
								<div className="mb-10">
									<div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-6 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300 group">
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
										<h5 className="text-white font-bold text-lg tracking-wider group-hover:scale-105 transition-transform">WHAT WE OFFER</h5>
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
									</div>
								</div>
								<h2 className="text-4xl lg:text-6xl font-bold text-white mb-10 leading-tight">
									<span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">"Sustainable Engineering, Lifetime Assurance"
</span>
									<br /><span className="text-white font-light">for Every Project</span>
								</h2>
								<div className="flex items-center gap-4 mb-10">
									<div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
									<div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
									<div className="w-8 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
								</div>
								<p className="text-white/ text-lg leading-relaxed max-w-lg mb-6">
									From concept to completion, we deliver integrated engineering, construction, digital, and support services tailored to meet the demands of modern development. Our multidisciplinary expertise enables us to handle complex projects with precision, innovation, and sustainability at the core. Whether it's building environments, managing assets, or empowering professionals through training, we provide end-to-end solutions that drive results locally and worldwide.
								</p>
								<div className="flex flex-wrap gap-4 mb-8">
								</div>
								<Button asChild variant="outline" className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
									<Link to="/inquiry">
										<span className="flex items-center gap-3">
											Contact our team
											<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
										</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>


				<div
					ref={categoriesRef}
					className={`mt-16 transform transition-all duration-700 ${
						animated.serviceCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<div className="flex flex-col gap-y-8">
						<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${SPACING_CLASSES.GRID}`}>
							{serviceCategories.map((category, index) => (
								<div
									key={index}
									className={`relative px-4 py-6 rounded-lg cursor-pointer transition-all duration-300 text-center flex flex-col items-center overflow-hidden bg-cover bg-center ${
										activeService === index
											? 'border border-primary/50'
											: 'border border-transparent'
									}`}
									style={{
										backgroundImage: `url(${category.backgroundImage})`,
										transitionDelay: `${index * 100}ms`,
										boxShadow: activeService === index ? '0 8px 40px 0 rgba(20,20,20,0.35), 8px 0 32px -8px #0E75A0AA' : 'none'
									}}
									onMouseEnter={() => setActiveService(index)}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>
									<div className="relative z-10 flex flex-col items-center text-center">
										<div
											className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-4 ${
												activeService === index
													? 'bg-primary text-background'
													: 'bg-white/10 text-white'
											}`}
										>
											{category.icon}
										</div>
										<h3 className="text-lg font-semibold text-white mb-auto">{category.title}</h3>
										<div
											className={`h-1 w-0 bg-primary mx-auto rounded-full transition-all duration-300 mt-3 ${
												activeService === index ? 'w-3/4' : ''
											}`}
										></div>
										<ChevronDown
											className={`w-5 h-5 mx-auto mt-2 transition-transform duration-300 text-white/ ${
												activeService === index ? 'rotate-180 text-primary' : ''
											}`}
										/>
									</div>
								</div>
							))}
						</div>

						{/* --- SUB-SERVICES PANEL MODIFIED --- */}
						{/* Now hidden on mobile (screens < 768px) and visible on medium screens and up */}
						<div
							className={`hidden md:block relative overflow-hidden rounded-lg p-6 border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
								activeService !== null
									? 'opacity-100 translate-y-0 max-h-[800px]'
									: 'opacity-0 -translate-y-10 max-h-0 overflow-hidden'
							}`}
						>
							<div className="relative z-10">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
									{serviceCategories[activeService]?.subServices.map((service, index) => (
										<div
											key={index}
											className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/ transition-all duration-300 group backdrop-blur-sm"
											style={{ transitionDelay: `${index * 50}ms` }}
										>
											<h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
												{service.title}
											</h4>
											<p className="text-white/ text-sm leading-relaxed">
												{service.description}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;