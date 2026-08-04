"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  School,
  Star,
  Users,
  X
} from 'lucide-react';
import React, { useState } from 'react';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

// ─── DATA ──────────────────────────────────────────────────────────────

const CLASSES = [
  {
    icon: <School className="w-8 h-8 text-mustard" />,
    title: "Kindergarten",
    age: "Ages 3-6",
    desc: "Our Bamburi campus offers a nurturing environment for early learners following the CBC system, with a focus on play-based learning."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-mustard" />,
    title: "Lower Primary",
    age: "Grades 1-3",
    desc: "Building foundational skills in literacy, numeracy, and creativity through engaging activities and supportive teaching."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-mustard" />,
    title: "Upper Primary",
    age: "Grades 4-6",
    desc: "Preparing students for higher learning with a robust curriculum, critical thinking, and co-curricular excellence."
  }
];
const GALLERY_ITEMS = [
  {
    id: 1,
    type: 'campus',
    title: 'Main Campus',
    img: './landing.jpg',
  },
  {
    id: 2,
    type: '',
    title: '',
    img: './other_13.jpg',
  },

  {
    id: 3,
    type: 'events',
    title: 'Annual Sports Day',
    img: './sports_1.jpg',
  },

  {
    id: 4,
    type: '',
    title: '',
    img: './other_11.jpg',
  },


  {
    id: 6,
    type: '',
    title: '',
    img: './other_8.jpg',
  },
  {
    id: 7,
    type: '',
    title: '',
    img: './other_7.jpg',
  },
  {
    id: 8,
    type: '',
    title: '',
    img: './other_6.jpg',
  },
  {
    id: 9,
    type: '',
    title: '',
    img: './other_5.jpg',
  },
  {
    id: 10,
    type: '',
    title: '',
    img: './other_4.jpg',
  },
  {
    id: 11,
    type: 'sports',
    title: 'Football Training',
    img: './sports.jpg',
  },
  {
    id: 12,
    type: 'swimming',
    title: 'Swimming Lessons',
    img: './swimming.jpg',
  },
  {
    id: 13,
    type: 'assembly',
    title: 'Morning Assembly',
    img: './assembly.jpg',
  },
  {
    id: 14,
    type: 'clubs',
    title: 'Debate Club',
    img: './debate.jpg',
  },
  {
    id: 15,
    type: 'excursion',
    title: 'Educational Trip',
    img: './trip.jpg',
  },
  {
    id: 16,
    type: 'kindergarten',
    title: 'Early Learning Centre',
    img: './other_9.jpg',
  },
  {
    id: 17,
    type: '',
    title: '',
    img: './other_2.jpg',
  },
  {
    id: 18,
    type: '',
    title: '',
    img: './other_3.jpg',
  },
  {
    id: 19,
    type: 'awards',
    title: 'Academic Awards',
    img: './awards.jpg',
  },
  {
    id: 20,
    type: '',
    title: '',
    img: './other_1.jpg',
  },


  {
    id: 22,
    type: '',
    title: '',
    img: './other_17.jpg',
  },

  {
    id: 24,
    type: '',
    title: '',
    img: './more_2.jpg',
  },
  {
    id: 23,
    type: '',
    title: '',
    img: './more_1.jpg',
  },
  {
    id: 25,
    type: '',
    title: '',
    img: './more_3.jpg',
  },
  {
    id: 21,
    type: '',
    title: '',
    img: './other_15.jpg',
  },
  {
    id: 26,
    type: '',
    title: '',
    img: './more_4.jpg',
  },
  {
    id: 27,
    type: '',
    title: '',
    img: './other_2.jpg',
  },
  {
    id: 28,
    type: '',
    title: '',
    img: './another.jpg',
  },

];


const TEAM_LEADERS = [
  {
    name: "Dr. Evans Ochieng",
    role: "Founder & Executive Director",
    bio: "Robotics pioneer with 12+ years in STEM education. Former MIT Media Lab guest researcher and advocate for tech literacy in Africa.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    specialty: "AI & Strategic Vision",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Amina Hassan",
    role: "Head of Robotics Curriculum",
    bio: "Mechatronics engineer specializing in youth STEM methodology. Led Kenyan youth teams to international robotics olympiads.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    specialty: "LEGO Mindstorms & IoT",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kevin Kamau",
    role: "Lead Software & Game Dev Instructor",
    bio: "Full-stack engineer passionate about gamified learning. Inspires young coders to build full-scale games and web applications.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    specialty: "Python, JS & Unity",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Grace Wanjiru",
    role: "Student Success & Mentorship Lead",
    bio: "Educational psychologist committed to building supportive, inclusive tech learning environments for boys and girls.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    specialty: "Student Well-being & Mentorship",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  }
];

const EVENTS = [
  {
    title: "Annual Sports Day",
    date: "15th August 2026",
    location: "Kiembeni Campus Grounds",
    desc: "Join us for a day of athletics, games, and family fun. All students and parents are invited."
  },
  {
    title: "Science Fair 2026",
    date: "10th October 2026",
    location: "Bamburi Campus Hall",
    desc: "Students showcase their innovative projects. Winners will represent Deansbrook at the regional level."
  },
  {
    title: "Graduation Ceremony",
    date: "5th December 2026",
    location: "Mombasa Convention Centre",
    desc: "Celebrating our Grade 6 graduates as they transition to secondary school."
  }
];

const FAQS = [
  {
    q: "What curriculum does Deansbrook Schools follow?",
    a: "We follow the Competency-Based Curriculum (CBC) as set by the Kenya Institute of Curriculum Development (KICD)."
  },
  {
    q: "What are the school hours?",
    a: "Our school day runs from 8:00 am to 3:30 pm, Monday to Friday. We offer after-school clubs and activities until 4:30 pm."
  },
  {
    q: "How can I enroll my child?",
    a: "You can fill out the enrollment form on our website or visit either campus for a tour and registration. We accept students throughout the year."
  },
  {
    q: "Do you offer transportation?",
    a: "Yes, we have a dedicated school bus service covering major areas in Mombasa. Contact the admissions office for routes and fees."
  }
];

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: FaFacebook, url: '#', color: '#1877f2' },
  { name: 'Twitter', icon: FaTwitter, url: '#', color: '#000000' },
  { name: 'Instagram', icon: FaInstagram, url: '#', color: '#e4405f' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: '#0a66c2' },
  { name: 'YouTube', icon: FaYoutube, url: '#', color: '#ff0000' },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mary Akinyi",
    child: "Parent of Ethan (Grade 3)",
    text: "Deansbrook has been a wonderful place for my son. The teachers are caring and the learning environment is top-notch. He has grown academically and socially.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "David Mwangi",
    child: "Parent of Aisha (Grade 5)",
    text: "The school's commitment to holistic education is impressive. My daughter loves the sports and arts programs as much as her classes. I highly recommend Deansbrook.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

// ─── MAIN COMPONENT ────────────────────────────────────────────────────

export default function DeansBrookSchoolLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.type === galleryFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => setFeedbackSubmitted(false), 5000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-mustard selection:text-white">

      {/* ─── 1. NAVBAR ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-mustard/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-mustard text-navy p-1.5 rounded-xl shadow-md shadow-mustard/30">
                <Image src="/deansbrook.png" alt="Deansbrook logo" width={60} height={60} className="rounded" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-navy">
                  Deans<span className="text-mustard">Brook</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-navy/50 font-bold -mt-1">Schools</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 font-semibold text-sm tracking-wide">
              <a href="#about" className="text-navy/70 hover:text-mustard transition-colors">About Us</a>
              <a href="#classes" className="text-navy/70 hover:text-mustard transition-colors">Admission Classes</a>
              <a href="#events" className="text-navy/70 hover:text-mustard transition-colors">Our Events</a>
              <a href="#gallery" className="text-navy/70 hover:text-mustard transition-colors">News & Gallery</a>
              <a href="#contact" className="text-navy/70 hover:text-mustard transition-colors">Contact Us</a>
              <span className="text-navy/30">|</span>
              <a href="tel:+254733576385" className="text-navy/70 hover:text-mustard transition-colors text-xs">
                +254733576385
              </a>
              <a
                href="#contact"
                className="bg-mustard hover:bg-mustard/90 text-navy font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-mustard/30 transform hover:-translate-y-0.5"
              >
                Join Us
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-navy hover:text-mustard p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-mustard/20 px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">About Us</a>
            <a href="#classes" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Admission Classes</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Our Events</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">News & Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Contact Us</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-mustard text-navy font-extrabold py-3 rounded-xl shadow-md"
            >
              Join Us
            </a>
          </div>
        )}
      </nav>

      {/* ─── 2. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./landing.jpg"
            alt="Deansbrook School"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />

        {/* Optional mustard tint */}
        <div className="absolute inset-0 bg-mustard/10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-center lg:text-left space-y-8">

            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
              <span>🏫 Our Motto: Knowledge for Life</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
              PLAY,
              <br />
              <span className="text-mustard">LEARN & GROW</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Deansbrook Schools is a leading CBC institution in Mombasa,
              providing quality education in a nurturing environment where every
              learner is inspired to achieve excellence academically,
              socially, and morally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#classes"
                className="bg-mustard hover:bg-mustard/90 text-navy font-bold px-8 py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-xl"
              >
                Explore More
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#about"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-xl font-bold transition duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/20 max-w-lg">
              <div>
                <h3 className="text-3xl font-black text-mustard">2</h3>
                <p className="text-white/80 text-sm">Campuses</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-mustard">500+</h3>
                <p className="text-white/80 text-sm">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-mustard">98%</h3>
                <p className="text-white/80 text-sm">Parent Satisfaction</p>
              </div>
            </div>

          </div>
        </div>


      </section>


      {/* ─── 3. ADMISSION CLASSES ────────────────────────────── */}
      <section id="classes" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Our Programs</h2>
            <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
              Admission Classes
            </p>
            <p className="text-navy/60 font-medium">We offer a comprehensive CBC curriculum across all levels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLASSES.map((cls, index) => (
              <div
                key={index}
                className="bg-white border border-navy/10 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-mustard/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-mustard/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {cls.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-mustard bg-mustard/10 px-2.5 py-1 rounded-md">
                      {cls.age}
                    </span>
                    <h3 className="text-xl font-bold text-navy mt-2">{cls.title}</h3>
                  </div>
                  <p className="text-navy/70 text-sm leading-relaxed">
                    {cls.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-navy/10 mt-6 flex items-center justify-between text-sm font-bold text-navy">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-mustard group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. TEAM LEADERS SECTION */}
      <section id="team" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-black text-amber-400 tracking-widest">Leadership & Educators</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Meet Our Team Leaders
            </p>
            <p className="text-slate-400 font-medium">Passionate educators, engineers, and mentors guiding your children every step of the way.</p>
            <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_LEADERS.map((leader, index) => (
              <div
                key={index}
                className="bg-blue-950 rounded-3xl border border-amber-400/30 overflow-hidden shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-amber-400 text-blue-950 font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                      {leader.specialty}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-bold text-amber-300">{leader.role}</p>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">Connect:</span>
                  <div className="flex space-x-3">
                    <a
                      href={leader.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-blue-950 transition-colors"
                      title="Facebook Profile"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-blue-950 transition-colors"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* ─── 5. OUR EVENTS ────────────────────────────────────── */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Upcoming</h2>
            <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
              Our Events
            </p>
            <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((event, idx) => (
              <div key={idx} className="bg-navy/5 rounded-2xl p-6 border border-navy/10 hover:border-mustard/40 transition-all hover:shadow-lg group">
                <div className="flex items-start space-x-4">
                  <div className="bg-mustard/10 p-3 rounded-xl">
                    <Calendar className="w-6 h-6 text-mustard" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy text-lg">{event.title}</h4>
                    <p className="text-xs text-navy/50 font-medium">{event.date}</p>
                    <p className="text-xs text-navy/50">{event.location}</p>
                    <p className="text-navy/70 text-sm mt-2 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. NEWS & GALLERY ────────────────────────────────── */}
      <section id="gallery" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Life at Deansbrook</h2>
            <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
              News & Gallery
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'campus', 'classroom', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryFilter(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${galleryFilter === tab
                  ? 'bg-mustard text-navy shadow-lg shadow-mustard/30'
                  : 'bg-white text-navy/60 hover:bg-navy/10'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-md bg-navy/5 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-mustard uppercase tracking-widest">{item.type}</span>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. SOCIAL MEDIA LINKS ────────────────────────────── */}
      <section id="social" className="py-16 bg-white border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Connect With Us</h2>
            <p className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Follow Our Journey
            </p>
            <p className="text-navy/60 text-sm">Stay updated with school news, events, and student achievements.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-2 p-6 bg-navy/5 rounded-2xl border border-navy/10 hover:border-mustard/40 transition-all hover:-translate-y-1 hover:shadow-lg w-24"
                >
                  <div
                    className="p-3 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                    style={{ color: social.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-navy/70 group-hover:text-mustard transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* ─── 4. ABOUT US ──────────────────────────────────────── */}
          <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Welcome To Deansbrook Schools</h2>
                <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                  About Us
                </p>
                <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy">Our Vision</h3>
                    <p className="text-navy/70 text-base leading-relaxed mt-2">
                      To be the preferred school of choice empowering students with knowledge, skills and values that enable them achieve their full potential and become responsible global citizens.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy">Our Mission</h3>
                    <p className="text-navy/70 text-base leading-relaxed mt-2">
                      We provide students with a broad range of learning experiences that enable them to develop their full potential in a caring environment where everyone is valued and respected.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy">Our Campuses</h3>
                    <ul className="space-y-3 text-navy/70 text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-mustard font-bold">•</span>
                        <span><strong>Bamburi Campus</strong> – opposite Bamburi Cement Factory. Kindergarten school offering CBC system with qualified teachers.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-mustard font-bold">•</span>
                        <span><strong>Kiembeni Campus</strong> – past the Police Post. Spacious classrooms, well‑equipped outdoor playground, and secured perimeter wall.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-mustard/5 p-6 rounded-2xl border border-mustard/20">
                    <p className="text-navy/80 text-sm italic">
                      &quot;We don’t just teach – we inspire. Every day is fresh and inspiring, and our efforts are geared towards keeping our students enthralled, hungry and engaged.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Inspiring Environment</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">
                    A happy and friendly environment that enables learners to develop self‑confidence, self‑esteem and achieve their personal best.
                  </p>
                </div>

                <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Dedicated Team</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">
                    A dedicated and talented team of staff, hard‑working learners, and supportive parents working together for excellence.
                  </p>
                </div>

                <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Holistic Development</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">
                    We deliver a curriculum enhanced with robust co‑curricular, sport and enrichment programs that stretch students&apos; abilities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Facebook Page Card */}
          <div className="mt-12 max-w-md mx-auto bg-navy text-white rounded-2xl p-6 border border-mustard/30 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <FaFacebook className="w-8 h-8 text-mustard" />
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-lg">Deansbrook Schools</h4>
                <p className="text-white/70 text-sm">Join our Facebook community</p>
                <a
                  href="#"
                  className="inline-block mt-3 bg-mustard text-navy font-extrabold text-sm px-5 py-2 rounded-xl hover:bg-mustard/90 transition"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FEEDBACK / HELP ────────────────────────────────── */}
      <section id="feedback" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Testimonials */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">What Parents Say</h2>
                <p className="text-3xl font-black text-navy tracking-tight mt-2">
                  Real Feedback from Real Families
                </p>
                <div className="w-16 h-1 bg-mustard rounded-full mt-4" />
              </div>

              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-2xl border border-navy/10 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-mustard/30"
                    />
                    <div>
                      <div className="flex items-center space-x-1 text-mustard">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-mustard" />
                        ))}
                      </div>
                      <p className="font-bold text-navy">{t.name}</p>
                      <p className="text-xs text-navy/50">{t.child}</p>
                    </div>
                  </div>
                  <div className="mt-3 relative">
                    <Quote className="w-6 h-6 text-mustard/30 absolute -top-1 -left-1" />
                    <p className="text-navy/70 text-sm pl-6 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Feedback Form + FAQ */}
            <div className="lg:col-span-7 space-y-8">

              {/* Feedback Form */}
              <div className="bg-white p-8 rounded-2xl border border-navy/10 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-mustard/10 p-2 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-mustard" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy">Share Your Feedback</h3>
                </div>

                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                  </div>
                  <select className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard bg-white transition text-sm">
                    <option>Feedback Type</option>
                    <option>General Feedback</option>
                    <option>Help / Support</option>
                    <option>Suggestion</option>
                    <option>Compliment</option>
                  </select>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your experience or ask for help…"
                    required
                    className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-mustard hover:bg-mustard/90 text-navy font-extrabold py-3 rounded-xl transition shadow-lg shadow-mustard/20"
                  >
                    Send Feedback
                  </button>
                  {feedbackSubmitted && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold text-center animate-fade-in">
                      ✓ Thank you! Your feedback helps us improve.
                    </div>
                  )}
                </form>
              </div>

              {/* FAQ / Help */}
              <div className="bg-white p-8 rounded-2xl border border-navy/10 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-mustard/10 p-2 rounded-xl">
                    <HelpCircle className="w-5 h-5 text-mustard" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <div key={index} className="border border-navy/10 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-navy/5 transition"
                      >
                        <span className="font-bold text-navy text-sm">{faq.q}</span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-mustard flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-navy/40 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-4 pb-4 text-navy/70 text-sm leading-relaxed border-t border-navy/10 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* ─── 9. CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[2.5rem] border border-mustard/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">

            <div className="lg:col-span-5 bg-navy text-white p-8 sm:p-12 flex flex-col justify-between space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight">Get in Touch</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Have questions about admissions, campus tours, or fees? Reach out to us – we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Address</h4>
                    <p className="text-white/50 text-xs mt-0.5">Bamburi, Mombasa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Call / WhatsApp</h4>
                    <p className="text-white/50 text-xs mt-0.5">+254733576385</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Email</h4>
                    <p className="text-white/50 text-xs mt-0.5">info@deansbrook.sc.ke</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-white/30 font-medium">
                © 2026 Deansbrook Schools. All rights reserved.
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Parent Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mwangi Onyango"
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Child's Age / Grade</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 7 years, Grade 2"
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="0712345678"
                      className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Campus Preference</label>
                  <select className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard bg-white transition text-sm">
                    <option>Bamburi Campus</option>
                    <option>Kiembeni Campus</option>
                    <option>Either</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Additional Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your child's interests or any specific questions..."
                    className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-mustard hover:bg-mustard/90 text-navy font-extrabold py-4 rounded-xl transition shadow-lg shadow-mustard/30"
                >
                  Submit Inquiry
                </button>

                {formSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold text-center animate-fade-in">
                    ✓ Awesome! We received your details. An admissions officer will contact you shortly.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 10. FOOTER ────────────────────────────────────────── */}
      <footer className="bg-navy border-t border-mustard/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="flex items-center space-x-2">
              <div className="bg-mustard text-navy p-2 rounded-lg">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="font-black text-lg text-white">Deans<span className="text-mustard">Brook</span></span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-white/60 uppercase tracking-widest">
              <a href="#about" className="hover:text-mustard transition-colors">About</a>
              <a href="#classes" className="hover:text-mustard transition-colors">Classes</a>
              <a href="#events" className="hover:text-mustard transition-colors">Events</a>
              <a href="#gallery" className="hover:text-mustard transition-colors">Gallery</a>
              <a href="#feedback" className="hover:text-mustard transition-colors">Feedback</a>
              <a href="#contact" className="hover:text-mustard transition-colors">Contact</a>
            </div>

            <div className="flex space-x-4">
              {SOCIAL_LINKS.slice(0, 3).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-mustard transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </div>
          <div className="text-center text-white/30 text-xs font-medium mt-8">
            Knowledge for life • PLAY, LEARN &amp; GROW
          </div>
        </div>
      </footer>

      {/* ─── GLOBAL STYLES ────────────────────────────────────── */}
      <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out;
                }
                .text-navy { color: #1A2A4A; }
                .bg-navy { background: #1A2A4A; }
                .border-navy { border-color: #1A2A4A; }
                .text-mustard { color: #D4A017; }
                .bg-mustard { background: #D4A017; }
                .border-mustard { border-color: #D4A017; }
                .shadow-mustard { --tw-shadow-color: #D4A017; }
                .bg-navy\\/5 { background: rgba(26, 42, 74, 0.05); }
                .bg-navy\\/10 { background: rgba(26, 42, 74, 0.10); }
                .bg-navy\\/20 { background: rgba(26, 42, 74, 0.20); }
                .bg-navy\\/60 { background: rgba(26, 42, 74, 0.60); }
                .bg-navy\\/80 { background: rgba(26, 42, 74, 0.80); }
                .text-navy\\/30 { color: rgba(26, 42, 74, 0.30); }
                .text-navy\\/40 { color: rgba(26, 42, 74, 0.40); }
                .text-navy\\/50 { color: rgba(26, 42, 74, 0.50); }
                .text-navy\\/60 { color: rgba(26, 42, 74, 0.60); }
                .text-navy\\/70 { color: rgba(26, 42, 74, 0.70); }
                .border-navy\\/10 { border-color: rgba(26, 42, 74, 0.10); }
                .border-navy\\/20 { border-color: rgba(26, 42, 74, 0.20); }
                .bg-mustard\\/5 { background: rgba(212, 160, 23, 0.05); }
                .bg-mustard\\/10 { background: rgba(212, 160, 23, 0.10); }
                .bg-mustard\\/20 { background: rgba(212, 160, 23, 0.20); }
                .border-mustard\\/20 { border-color: rgba(212, 160, 23, 0.20); }
                .border-mustard\\/30 { border-color: rgba(212, 160, 23, 0.30); }
                .border-mustard\\/40 { border-color: rgba(212, 160, 23, 0.40); }
                .shadow-mustard\\/10 { --tw-shadow-color: rgba(212, 160, 23, 0.10); }
                .shadow-mustard\\/20 { --tw-shadow-color: rgba(212, 160, 23, 0.20); }
                .shadow-mustard\\/30 { --tw-shadow-color: rgba(212, 160, 23, 0.30); }
                .hover\\:bg-mustard\\/90:hover { background: rgba(212, 160, 23, 0.90); }
                .hover\\:border-mustard\\/40:hover { border-color: rgba(212, 160, 23, 0.40); }
                .hover\\:text-mustard:hover { color: #D4A017; }
                .hover\\:shadow-mustard\\/20:hover { --tw-shadow-color: rgba(212, 160, 23, 0.20); }
                .focus\\:border-mustard:focus { border-color: #D4A017; }
                .from-mustard { --tw-gradient-from: #D4A017; }
                .to-mustard\\/70 { --tw-gradient-to: rgba(212, 160, 23, 0.70); }
                .from-mustard\\/10 { --tw-gradient-from: rgba(212, 160, 23, 0.10); }
                .via-mustard\\/40 { --tw-gradient-to: rgba(212, 160, 23, 0.40); }
                .fill-mustard { fill: #D4A017; }
            `}</style>
    </div>
  );
}