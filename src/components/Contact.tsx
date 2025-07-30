import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      info: "+94 11 234 5678",
      subtitle: "Mon-Fri 8am-6pm"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      info: "info@terreneengineering.com",
      subtitle: "24/7 Support"
    },
   
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      info: "Mon- Sun: 7:00 AM - 10:00 PM",
      
    }
  ];

  return (
    // The `bg-[#212121]` has been removed to allow the video background to show.
    <section id="contact" className="py-2 md:py-4 w-full relative overflow-hidden">
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

      {/* The content is given a relative z-index to appear on top of the video */}
      <div className="w-full max-w-9xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Section */}
          <div className="lg:order-2">
            <div className="bg-[#0E75A0] p-6 rounded-lg shadow-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-200">+94 77 523 5572</p>
                    <p className="text-gray-200">+94 74 022 6660</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-200">info@terreneengineering.com</p>
                    <p className="text-gray-200">projects@terreneengineering.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Business Hours</h3>
                    <p className="text-gray-200">
                      Monday - Sunday: 7:00 AM - 10:00 PM<br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inquiry Form Section */}
          <div className="lg:col-span-2">
            <form className="bg-[#0E75A0] p-6 rounded-lg shadow-lg border border-[#0e86b8]">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Get In Touch</h1>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-white">Service Required</label>
                <select
                  name="service"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm"
                >
                  <option value="" className="bg-[#12121]">Select a service</option>
                  <option value="structural-design" className="bg-[#212121]">Structural Design</option>
                  <option value="civil-engineering" className="bg-[#212121]">Civil Engineering</option>
                  <option value="architectural-consulting" className="bg-[#212121]">Architectural Consulting</option>
                  <option value="project-management" className="bg-[#212121]">Project Management</option>
                  <option value="other" className="bg-[#212121]">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-white">Project Details *</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                  placeholder="Please describe your project requirements..."
                  required
                />
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;