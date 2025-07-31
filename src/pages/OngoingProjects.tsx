import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- Placeholder Images ---
// You should replace these with your actual project images
import project1Image from '../assert/projects/project1.jpg';
import project2Image from '../assert/projects/project2.jpg';
import project3Image from '../assert/projects/project3.jpg';
import project4Image from '../assert/projects/project4.jpg';
import project5Image from '../assert/projects/project5.jpg';
import schematicBg from '../assert/projects/bg.jpg';

// --- Project Data ---
const ongoingProjects = [
  {
    id: 1,
    title: "Design, construction & financing of the housing project at Elliot Place, Borella.",
    description: "A landmark residential development focused on providing modern living spaces with sustainable design principles in the heart of Borella.",
    image: project1Image,
  },
  {
    id: 2,
    title: "Design, construction and financing of Affordable Houses for middle income category at Orugodawatte.",
    description: "This key initiative addresses the housing demand for the middle-income sector, featuring efficient design and community-focused amenities.",
    image: project2Image,
  },
  {
    id: 3,
    title: "Construction of the Japanese Cultural Center and Nursery School.",
    description: "A specialized construction project to create an architectural space that fosters cultural exchange and early childhood education, blending Japanese aesthetics with modern safety standards.",
    image: project3Image,
  },
  {
    id: 4,
    title: "Design and Construction of Marina Square – Uptown Colombo.",
    description: "A premier mixed-use development project, Marina Square combines luxury residential towers with commercial spaces, setting a new standard for urban living in Colombo.",
    image: project4Image,
  },
  {
    id: 5,
    title: "Construction of the Colombo West International Terminal (CWIT).",
    description: "A major infrastructure project to expand Colombo's port capacity, involving state-of-the-art marine engineering and construction techniques.",
    image: project5Image,
  },
];

const OngoingProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black/50">
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
              src="/pro.mp4"
          />
          {/* Blue Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">ONGOING PROJECTS</h1>
          <p className="mt-2 text-white/80">
            Explore our current projects that are shaping the future of urban development.
          </p>
        </div>
      </section>

      {/* --- Projects List Section --- */}
      <main className="py-20">
        <div className="container px-4 w-[500vh]">
          <div className="space-y-16">
            {ongoingProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gradient-to-r from-cyan-500 to-blue-700 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg overflow-hidden max-w-8xl mx-auto transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Image Banner */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-100 object-cover"
                />
                
                {/* Text Details */}
                <div className="p-8 text-left">
                  <span className="text-3xl font-bold text-white/50">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-semibold text-white mt-2 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    {project.description}
                  </p>
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

export default OngoingProjects;