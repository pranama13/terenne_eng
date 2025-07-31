import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock } from 'lucide-react';

// Import the phone input library and its required CSS
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Import the custom Select component from your UI library for the services dropdown
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Contact = () => {
    // State to hold the phone number value
    const [phone, setPhone] = useState('');
    // State to hold the selected service value
    const [service, setService] = useState('');

    // Array for the list of services for easier management
    const services = [
        { value: "structural-design", label: "Structural Design" },
        { value: "civil-engineering", label: "Civil Engineering" },
        { value: "architectural-consulting", label: "Architectural Consulting" },
        { value: "project-management", label: "Project Management" },
        { value: "other", label: "Other" },
    ];

    return (
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
                                    <Input
                                        name="name"
                                        className="w-full bg-white/10 text-white border-white/30 focus:ring-1 focus:ring-white placeholder-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-white">Email Address *</label>
                                    <Input
                                        type="email"
                                        name="email"
                                        className="w-full bg-white/10 text-white border-white/30 focus:ring-1 focus:ring-white placeholder-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                                    <PhoneInput
                                        country={'lk'}
                                        value={phone}
                                        onChange={setPhone}
                                        containerClass="w-full"
                                        inputClass="w-full px-4 py-2 !bg-white/10 !text-white !border-white/30 !rounded-md focus:!ring-1 focus:!ring-blue-400 !shadow-sm !placeholder-blue-300/90"
                                        buttonClass="!bg-white/10 hover:!bg-white/20 !border-white/30"
                                        dropdownClass="!bg-[#0E75A0] !text-black !border-blue-900"
                                        searchClass="!bg-white/10 !text-white"
                                        
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-white">Company</label>
                                    <Input
                                        name="company"
                                        className="w-full bg-white/10 text-white border-white/30 focus:ring-1 focus:ring-white placeholder-gray-300"
                                    />
                                </div>
                            </div>
                            
                            {/* --- NEW CUSTOM SELECT FOR SERVICES --- */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-white">Service Required</label>
                                <Select name="service" value={service} onValueChange={setService}>
                                    <SelectTrigger className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0E75A0] text-white border-white/30">
                                        {services.map((s) => (
                                            <SelectItem 
                                                key={s.value} 
                                                value={s.value} 
                                                className="focus:bg-[rgba(59,130,246,0.3)] focus:text-white"
                                            >
                                                {s.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-white">Project Details *</label>
                                <Textarea
                                    name="message"
                                    rows={5}
                                    className="w-full bg-white/10 text-white border-white/30 focus:ring-1 focus:ring-white placeholder-gray-300"
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