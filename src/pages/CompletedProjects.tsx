import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, Calendar, User, Building } from 'lucide-react';

// --- Placeholder Images ---
// You should replace these with your actual project images
import project1Image from '../assert/projects/completed1.jpg';
import project2Image from '../assert/projects/completed2.jpg';
import project3Image from '../assert/projects/completed3.jpg';

// --- Project Data ---
const completedProjects = [
  {
    id: 1,
    title: "Luxury Apartment Complex - 'The Grand Monarch'",
    description: "Successfully designed and constructed a 30-story luxury residential tower, featuring state-of-the-art amenities, a multi-level car park, and a rooftop infinity pool. The project was completed ahead of schedule and under budget, setting a new benchmark for luxury living in the city.",
    image: project1Image,
    client: "Monarch Group Holdings",
    budget: "$75 Million",
    startDate: "Jan 2021",
    endDate: "Dec 2023",
  },
  {
    id: 2,
    title: "Corporate Headquarters for Innovatec Global",
    description: "This project involved the end-to-end construction of a 200,000 sq. ft. corporate campus, including office buildings, a research lab, and recreational facilities. The design focused on sustainability, achieving a LEED Platinum certification.",
    image: project2Image,
    client: "Innovatec Global Inc.",
    budget: "$120 Million",
    startDate: "Mar 2020",
    endDate: "Jun 2023",
  },
  {
    id: 3,
    title: "City Central Bridge & Infrastructure Upgrade",
    description: "A critical public infrastructure project that included the retrofitting of the main city bridge and upgrading the surrounding road network to ease traffic congestion. The project required complex logistical planning to minimize disruption to the public.",
    image: project3Image,
    client: "Ministry of Urban Development",
    budget: "$45 Million",
    startDate: "Feb 2022",
    endDate: "May 2024",
  },
];

const CompletedProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-blue-900">
      <Header mode="transparent" />

      {/* --- Hero Section --- */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center text-white mt-[-19vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero.mp4"
          />
          {/* Blue Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">COMPLETED PROJECTS</h1>
          <p className="mt-2 text-white/80">
            A showcase of our commitment to engineering excellence and innovation.
          </p>
        </div>
      </section>

      {/* --- Projects List Section --- */}
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="space-y-16">
            {completedProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gradient-to-r from-cyan-500 to-blue-700 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg overflow-hidden max-w-10xl mx-auto transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Image Banner */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Text Details */}
                <div className="p-8 text-left">
                  <span className="text-3xl font-bold text-white/50">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-semibold text-white mt-2 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Additional Project Details */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-white">
                      <User className="w-5 h-5 text-cyan-300" />
                      <div>
                        <p className="text-sm text-white/70">Client</p>
                        <p className="font-semibold">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <DollarSign className="w-5 h-5 text-cyan-300" />
                      <div>
                        <p className="text-sm text-white/70">Budget</p>
                        <p className="font-semibold">{project.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Calendar className="w-5 h-5 text-cyan-300" />
                      <div>
                        <p className="text-sm text-white/70">Start Date</p>
                        <p className="font-semibold">{project.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Calendar className="w-5 h-5 text-cyan-300" />
                      <div>
                        <p className="text-sm text-white/70">End Date</p>
                        <p className="font-semibold">{project.endDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompletedProjects;