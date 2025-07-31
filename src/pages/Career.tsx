import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import {
  Phone, Mail, MapPin, Clock, Send,
  Briefcase, Users, BookOpen, ChevronRight, Quote, ArrowLeft, ArrowRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroVideo from '/car.mp4';
import whyWorkWithUsImage from '../assert/why-work-with-us.jpg';

const Career = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // --- Carousel Setup ---
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);
  // --- End Carousel Setup ---

  const positions = [
    {
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 150,000 - 200,000",
      description: "Lead structural design projects and mentor junior engineers in our growing team."
    },
    {
      title: "Civil Engineering Graduate",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 80,000 - 120,000",
      description: "Join our team as a fresh graduate and grow your career in civil engineering."
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 180,000 - 250,000",
      description: "Manage multiple engineering projects and coordinate with clients and teams."
    }
  ];

  const testimonials = [
    {
      quote: "The best thing about my job at Terrene is the opportunity to work with talented people all over the world who all lean in and drive one goal.",
      author: "Zoe Leach-Leeson",
      title: "Communications Officer, United Kingdom"
    },
    {
      quote: "I've grown more here in two years than I did in five years at my previous company. The mentorship and hands-on project experience are unparalleled.",
      author: "Aarav Sharma",
      title: "Senior Structural Engineer, Colombo"
    },
    {
      quote: "Terrene's commitment to sustainability isn't just a talking point; it's integrated into every project we undertake. It's rewarding work.",
      author: "Priya Singh",
      title: "Environmental Consultant, India"
    },
    {
      quote: "The collaborative environment and the freedom to innovate make every day exciting. We are truly building the future, together.",
      author: "Johnathan Chen",
      title: "Lead MEP Engineer, Singapore"
    }
  ];


  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY.current || window.scrollY < 10);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#212121]">
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header mode="transparent" />
      </div>
      
      <div className="relative w-full min-h-[100vh] flex flex-col items-start justify-center text-left overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-700/90 to-black/80 z-10 "></div>
        <div className="relative z-20 container mx-auto px-4 md:px-8 pt-24 pb-16 mb-[5vh]">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg ">
            Build Your Career with Terrene
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 drop-shadow-md">
            Be part of an innovative team shaping the future of infrastructure and design. We value innovation, growth, and work-life balance.
          </p>
          <a href="#open-positions">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-5 rounded-md shadow-md transition-transform hover:scale-105">
              Explore Open Positions
            </Button>
          </a>
        </div>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full z-20">
          <path d="M0 150V0L480 90L960 0L1440 80V320H0Z" fill="#212121"/>
        </svg>
      </div>
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <section className="mb-20 md:mb-32">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    We get things done - <br /> <span className="text-blue-400">together!</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At Terrene, we are a dynamic, growing company where innovation thrives, and collaboration drives success. We empower you to take on challenges your way, with a strong, supportive community behind you. Here, every voice matters, and you have the freedom to shape your role and make a real impact.
                  </p>
                </div>
                <div className="relative h-80 md:h-96">
                  <img 
                    src={whyWorkWithUsImage}
                    alt="Collaborative office environment" 
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ clipPath: "ellipse(110% 80% at 90% 50%)" }}
                  />
                </div>
              </div>
            </section>

            <section className="relative w-[95vw] left-1/2 right-1/2 -mx-[47.5vw] py-16 md:py-24 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 mb-20 md:mb-32 overflow-hidden">
                <div className="embla relative max-w-4xl mx-auto overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                                <div className="text-center px-8 md:px-4">
                                    <Quote className="w-16 h-16 text-white/50 mx-auto mb-6" fill="currentColor"/>
                                    <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl mx-auto">
                                        “{testimonial.quote}”
                                    </p>
                                    <footer className="mt-8">
                                        <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                                        <p className="text-white/80">{testimonial.title}</p>
                                    </footer>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex justify-center items-center gap-3 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === selectedIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </section>

            <section id="open-positions" className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Open Positions</h2>
                <div className="space-y-5">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-[95vw] relative left-1/2 right-1/2 -mx-[47.5vw]"
                    >
                      <div className="p-8 md:p-10 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{position.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-200 mb-4">
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Briefcase className="w-5 h-5" />{position.department}</span>
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="w-5 h-5" />{position.location}</span>
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Clock className="w-5 h-5" />{position.type}</span>
                            </div>
                            <p className="text-gray-200 text-base max-w-2xl">{position.description}</p>
                          </div>
                          <div className="text-white bg-white/10 px-6 py-4 rounded-lg font-medium text-lg mt-4 md:mt-0 flex-shrink-0">
                            {position.salary}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Get In Touch</h2>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-[95vw] relative left-1/2 right-1/2 -mx-[47.5vw]">
                <div className="p-8 md:p-12 max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 text-white">Contact Our HR Team</h3>
                      <p className="text-gray-300 mb-8">Have questions about our openings or the application process? Reach out to our recruitment team directly.</p>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4"><div className="mt-1 bg-white/10 p-3 rounded-full"><Phone className="w-6 h-6 text-white" /></div><div><h4 className="font-medium text-white">Call Us</h4><p className="text-gray-200">+94 77 523 5572</p></div></div>
                        <div className="flex items-start gap-4"><div className="mt-1 bg-white/10 p-3 rounded-full"><Mail className="w-6 h-6 text-white" /></div><div><h4 className="font-medium text-white">Email Us</h4><p className="text-gray-200">info@terreneengineering.com</p></div></div>
                        
                      </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-white/5 p-6 md:p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
                      <form className="space-y-5">
                        <div><label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name</label><input type="text" id="name" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name"/></div>
                        <div><label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label><input type="email" id="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="your.email@example.com"/></div>
                        <div><label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label><textarea id="message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="How can we help?"></textarea></div>
                        <Button type="submit" className="w-full bg-white hover:bg-gray-100 text-[#0E75A0] font-bold transition-colors flex items-center justify-center gap-2 py-6 text-base"><Send className="w-4 h-4" />Send Message</Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;