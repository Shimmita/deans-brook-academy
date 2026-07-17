"use client";

import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Code, 
  Rocket, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  Award,
  Users,
  Lightbulb
} from 'lucide-react';

// Mock data for DeansBrook
const PROGRAMS = [
  {
    icon: <Bot className="w-8 h-8 text-orange-500" />,
    title: "Junior Robotics",
    age: "Ages 6-9",
    desc: "Building basic motor skills and spatial logic using LEGO Education and fun mechanical blocks."
  },
  {
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    title: "Advanced AI & Hardware",
    age: "Ages 10-14",
    desc: "Diving into Arduino microcontrollers, IoT projects, sensor integrations, and core electronics."
  },
  {
    icon: <Code className="w-8 h-8 text-orange-500" />,
    title: "Coding & Game Dev",
    age: "Ages 8-15",
    desc: "Transitioning from Scratch visual blocks to real-world language mastery in Python and JavaScript."
  },
];

const GALLERY_ITEMS = [
  { id: 1, type: 'robotics', title: 'LEGO EV3 Assembly', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600' },
  { id: 2, type: 'coding', title: 'Python Hackathon', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600' },
  { id: 3, type: 'events', title: 'Nairobi Tech Expo 2026', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600' },
  { id: 4, type: 'robotics', title: 'Drone Obstacle Course', img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=600' },
  { id: 5, type: 'coding', title: 'Minecraft Modding Class', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600' },
  { id: 6, type: 'events', title: 'Mombasa BootCamp', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
];

export default function DeansBrookLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === galleryFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-orange-500 text-white p-2.5 rounded-xl shadow-md shadow-orange-500/20 animate-pulse">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  Deans<span className="text-orange-500">Brook</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold -mt-1">Tech Academy</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 font-semibold text-sm tracking-wide">
              <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#programs" className="text-slate-600 hover:text-orange-500 transition-colors">Programs</a>
              <a href="#gallery" className="text-slate-600 hover:text-orange-500 transition-colors">Gallery</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors">Contact</a>
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-orange-500 p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">About Us</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Programs</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Contact Us</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-orange-500 text-white py-3 rounded-xl font-bold shadow-md"
            >
              Enroll Now
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                <span>🇰🇪 Shaping Kenya's Future Inventors</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Where Young Minds <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Build Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                DeansBrook is Kenya's premier Robotics & Coding Academy built specifically for kids and teens. We turn screen time into dynamic engineering and innovation sessions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#programs" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center space-x-2 group text-base"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#about" 
                  className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 font-bold px-8 py-4 rounded-2xl transition-all text-base text-center"
                >
                  Learn Our Method
                </a>
              </div>
              
              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-slate-100">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">1,200+</p>
                  <p className="text-xs text-slate-500 font-medium">Students Certified</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">45+</p>
                  <p className="text-xs text-slate-500 font-medium">Custom Robots Built</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">98%</p>
                  <p className="text-xs text-slate-500 font-medium">Parent Approval</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-full blur-3xl opacity-20 -z-10 transform scale-90" />
              <div className="relative bg-white border-4 border-orange-500/10 p-4 rounded-[2.5rem] shadow-2xl shadow-orange-500/10 max-w-sm sm:max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800" 
                  alt="Kids assembling smart rovers at DeansBrook Kenya" 
                  className="rounded-[2rem] object-cover w-full h-[350px] sm:h-[420px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-orange-50 flex items-center space-x-3 max-w-[220px]">
                  <div className="bg-orange-500 text-white p-2.5 rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">STEM Accredited</p>
                    <p className="text-sm font-extrabold text-slate-900">Global Standards</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold text-orange-500 tracking-widest">Our Mission</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Inspiring the Next Generation of Tech Leaders in East Africa
            </p>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Creative Learning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We don't do boring lectures. Students dive into practical, hands-on challenges where failure is just a step towards a cooler solution.
              </p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Expert Mentorship</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guided by seasoned tech experts and software engineers in Kenya who understand how to connect with and challenge kids safely.
              </p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Future Proofing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipping kids early with logic, algorithmic reasoning, and hardware assembly strategies essential for 21st-century opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS SECTION */}
      <section id="programs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold text-orange-500 tracking-widest">Curriculum</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Age-Appropriate Learning Paths
            </p>
            <p className="text-slate-500 font-medium">Progressive tracks engineered to foster confidence from kindergarten to high school.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {prog.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">
                      {prog.age}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{prog.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-sm font-bold text-slate-900">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-xs uppercase font-extrabold text-orange-500 tracking-widest">Life at DeansBrook</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Labs & Innovation Hubs
            </p>
          </div>

          {/* Filter System */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'robotics', 'coding', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryFilter(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  galleryFilter === tab 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-2xl shadow-md bg-slate-100 aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{item.type}</span>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT US */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Quick Contact Info */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 sm:p-12 flex flex-col justify-between space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight">Let's Build Something Great</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Have questions about schedules, pricing tiers, or customized group camps? Get in touch with our admissions hub.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-400 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Main Campus Location</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Kilimani Area, Ngong Road, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-400 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Call / WhatsApp Info</h4>
                    <p className="text-slate-400 text-xs mt-0.5">+254 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-400 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Email Inquiries</h4>
                    <p className="text-slate-400 text-xs mt-0.5">admissions@deansbrook.ac.ke</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                © 2026 DeansBrook Academy. Dedicated to high STEM standards.
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Parent Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Mwangi Onyango"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Child's Age</label>
                    <input 
                      type="number" 
                      required
                      placeholder="e.g. 10"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0712345678"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Preferred Program Track</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 bg-white transition-colors text-sm">
                    <option>Junior Robotics (Ages 6-9)</option>
                    <option>Advanced AI & Hardware (Ages 10-14)</option>
                    <option>Coding & Game Dev (Ages 8-15)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Additional Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your child's interests or any prior experience..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20"
                >
                  Submit Booking Request
                </button>

                {formSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold text-center animate-fade-in">
                    ✓ Awesome! We received your details. An admissions guide will call you within 24 hours.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <Rocket className="w-4 h-4" />
            </div>
            <span className="font-black text-lg text-slate-900">Deans<span className="text-orange-500">Brook</span></span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#programs" className="hover:text-orange-500 transition-colors">Programs</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Admissions</a>
          </div>

          <div className="text-slate-400 text-xs font-medium">
            Designed for the future tech pioneers of Kenya.
          </div>
        </div>
      </footer>

    </div>
  );
}