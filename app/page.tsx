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
    Lightbulb,
    Star,
    MessageCircle,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    Quote,
    GraduationCap,
    Briefcase
} from 'lucide-react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import Image from 'next/image';

// ─── DATA ──────────────────────────────────────────────────────────────

const PROGRAMS = [{
    icon: <Bot className="w-8 h-8 text-mustard" />,
    title: "Junior Robotics",
    age: "Ages 6-9",
    desc: "Building basic motor skills and spatial logic using LEGO Education and fun mechanical blocks."
}, {
    icon: <Cpu className="w-8 h-8 text-mustard" />,
    title: "Advanced AI & Hardware",
    age: "Ages 10-14",
    desc: "Diving into Arduino microcontrollers, IoT projects, sensor integrations, and core electronics."
}, {
    icon: <Code className="w-8 h-8 text-mustard" />,
    title: "Coding & Game Dev",
    age: "Ages 8-15",
    desc: "Transitioning from Scratch visual blocks to real-world language mastery in Python and JavaScript."
}];

const GALLERY_ITEMS = [
    { id: 1, type: 'robotics', title: 'LEGO EV3 Assembly', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'coding', title: 'Python Hackathon', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'events', title: 'Nairobi Tech Expo 2026', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600' },
    { id: 4, type: 'robotics', title: 'Drone Obstacle Course', img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=600' },
    { id: 5, type: 'coding', title: 'Minecraft Modding Class', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600' },
    { id: 6, type: 'events', title: 'Mombasa BootCamp', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
];

const TEAM_LEADERS = [{
    id: 1,
    name: "Dr. Grace Muthoni",
    role: "Head of Robotics",
    bio: "PhD in Mechatronics from the University of Nairobi with 12+ years of experience in STEM education.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    social: { linkedin: "#", twitter: "#" }
}, {
    id: 2,
    name: "James Ochieng",
    role: "Lead Software Engineer",
    bio: "Full-stack developer and former Google Africa scholar passionate about teaching kids to code.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    social: { linkedin: "#", twitter: "#" }
}, {
    id: 3,
    name: "Sarah Wanjiru",
    role: "Curriculum Director",
    bio: "Educational psychologist and curriculum designer with a focus on age-appropriate tech learning.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    social: { linkedin: "#", twitter: "#" }
}, {
    id: 4,
    name: "Michael Kiprop",
    role: "Hardware & IoT Specialist",
    bio: "Electronics engineer with expertise in Arduino, Raspberry Pi, and sensor-based projects.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    social: { linkedin: "#", twitter: "#" }
}];

const FAQS = [{
    q: "What age groups do you accept?",
    a: "We welcome children from ages 6 to 15 across our three program tracks. Each track is designed for specific age ranges to ensure age-appropriate learning."
}, {
    q: "Do I need to buy any equipment?",
    a: "All hardware, robotics kits, and computing equipment are provided during class hours. For home practice, we recommend a basic laptop or tablet."
}, {
    q: "How long is each program?",
    a: "Our standard programs run for 12 weeks per term, with 2 sessions per week. We also offer intensive holiday bootcamps during school breaks."
}, {
    q: "What is the class size?",
    a: "We maintain a small class ratio of 1:8 to ensure personalized attention for every student."
}];

const SOCIAL_LINKS = [
    { name: 'Facebook', icon: FaFacebook, url: '#', color: '#1877f2' },
    { name: 'Twitter', icon: FaTwitter, url: '#', color: '#000000' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: '#e4405f' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: '#0a66c2' },
    { name: 'YouTube', icon: FaYoutube, url: '#', color: '#ff0000' },
];

const TESTIMONIALS = [{
    id: 1,
    name: "Mary Akinyi",
    child: "Mother of Ethan (age 10)",
    text: "My son has completely transformed. He went from being glued to games to building his own games and robots. DeansBrook ignited a passion I never thought possible.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
}, {
    id: 2,
    name: "David Mwangi",
    child: "Father of Aisha (age 12)",
    text: "The hands-on approach is incredible. Aisha now talks about circuits and sensors like a pro. The mentorship and small class sizes make all the difference.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
}];

// ─── MAIN COMPONENT ────────────────────────────────────────────────────

export default function DeansBrookLanding() {
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
                                <Image src={"/deansbrook.png"} alt='' width={60} height={60} className='rounded'/>
                            </div>
                            <div>
                                <span className="text-2xl font-black tracking-tight text-navy">
                                    Deans<span className="text-mustard">Brook</span>
                                </span>
                                <p className="text-[10px] uppercase tracking-widest text-navy/50 font-bold -mt-1">Tech Academy</p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm tracking-wide">
                            <a href="#about" className="text-navy/70 hover:text-mustard transition-colors">About Us</a>
                            <a href="#programs" className="text-navy/70 hover:text-mustard transition-colors">Programs</a>
                            <a href="#team" className="text-navy/70 hover:text-mustard transition-colors">Team</a>
                            <a href="#gallery" className="text-navy/70 hover:text-mustard transition-colors">Gallery</a>
                            <a href="#feedback" className="text-navy/70 hover:text-mustard transition-colors">Feedback</a>
                            <a href="#contact" className="text-navy/70 hover:text-mustard transition-colors">Contact</a>
                            <a
                                href="#contact"
                                className="bg-mustard hover:bg-mustard/90 text-navy font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-mustard/30 transform hover:-translate-y-0.5"
                            >
                                Enroll Now
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-navy hover:text-mustard p-2 focus:outline-none"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-mustard/20 px-4 pt-2 pb-6 space-y-3 shadow-inner">
                        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">About Us</a>
                        <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Programs</a>
                        <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Team</a>
                        <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Gallery</a>
                        <a href="#feedback" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Feedback</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-navy/70 font-medium">Contact</a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-center bg-mustard text-navy font-extrabold py-3 rounded-xl shadow-md"
                        >
                            Enroll Now
                        </a>
                    </div>
                )}
            </nav>

            {/* ─── 2. HERO ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-mustard/10 via-white to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-mustard/20 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                                <span>🇰🇪 Shaping Kenya's Future Inventors</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.1]">
                                Where Young Minds <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mustard to-mustard/70">
                                    Build Tomorrow
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-navy/70 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                DeansBrook is Kenya's premier Robotics &amp; Coding Academy built specifically for kids and teens.
                                We turn screen time into dynamic engineering and innovation sessions.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                                <a
                                    href="#programs"
                                    className="bg-mustard hover:bg-mustard/90 text-navy font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-mustard/30 transition-all flex items-center justify-center space-x-2 group text-base"
                                >
                                    <span>Explore Programs</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#about"
                                    className="bg-white hover:bg-slate-50 text-navy border-2 border-navy/20 font-bold px-8 py-4 rounded-2xl transition-all text-base text-center"
                                >
                                    Learn Our Method
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-navy/10">
                                <div>
                                    <p className="text-2xl font-extrabold text-navy">1,200+</p>
                                    <p className="text-xs text-navy/50 font-medium">Students Certified</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-navy">45+</p>
                                    <p className="text-xs text-navy/50 font-medium">Custom Robots Built</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-navy">98%</p>
                                    <p className="text-xs text-navy/50 font-medium">Parent Approval</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-mustard to-mustard/40 rounded-full blur-3xl opacity-20 -z-10 transform scale-90" />
                            <div className="relative bg-white border-4 border-mustard/30 p-4 rounded-[2.5rem] shadow-2xl shadow-mustard/10 max-w-sm sm:max-w-md">
                                <img
                                    src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800"
                                    alt="Kids assembling smart rovers at DeansBrook Kenya"
                                    className="rounded-[2rem] object-cover w-full h-[350px] sm:h-[420px]"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-mustard/20 flex items-center space-x-3 max-w-[220px]">
                                    <div className="bg-mustard text-navy p-2.5 rounded-xl">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-navy/50 uppercase tracking-wider">STEM Accredited</p>
                                        <p className="text-sm font-extrabold text-navy">Global Standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── 3. ABOUT US ──────────────────────────────────────── */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Our Mission</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            Inspiring the Next Generation of Tech Leaders in East Africa
                        </p>
                        <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-navy">Creative Learning</h3>
                            <p className="text-navy/70 text-sm leading-relaxed">
                                We don't do boring lectures. Students dive into practical, hands-on challenges where failure is
                                just a step towards a cooler solution.
                            </p>
                        </div>

                        <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-navy">Expert Mentorship</h3>
                            <p className="text-navy/70 text-sm leading-relaxed">
                                Guided by seasoned tech experts and software engineers in Kenya who understand how to connect
                                with and challenge kids safely.
                            </p>
                        </div>

                        <div className="bg-mustard/5 p-8 rounded-2xl border border-mustard/20 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-mustard text-navy flex items-center justify-center shadow-md">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-navy">Future Proofing</h3>
                            <p className="text-navy/70 text-sm leading-relaxed">
                                Equipping kids early with logic, algorithmic reasoning, and hardware assembly strategies
                                essential for 21st-century opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4. PROGRAMS ──────────────────────────────────────── */}
            <section id="programs" className="py-20 bg-navy/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Curriculum</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            Age-Appropriate Learning Paths
                        </p>
                        <p className="text-navy/60 font-medium">Progressive tracks engineered to foster confidence from kindergarten to high school.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PROGRAMS.map((prog, index) => (
                            <div
                                key={index}
                                className="bg-white border border-navy/10 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-mustard/40 transition-all group flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="p-3 bg-mustard/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                        {prog.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-mustard bg-mustard/10 px-2.5 py-1 rounded-md">
                                            {prog.age}
                                        </span>
                                        <h3 className="text-xl font-bold text-navy mt-2">{prog.title}</h3>
                                    </div>
                                    <p className="text-navy/70 text-sm leading-relaxed">
                                        {prog.desc}
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

            {/* ─── 5. TEAM LEADERS ──────────────────────────────────── */}
            <section id="team" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Meet Our Team</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            The Leaders Behind the Magic
                        </p>
                        <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
                        <p className="text-navy/60 font-medium">Passionate educators and engineers dedicated to nurturing young talent.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM_LEADERS.map((member) => (
                            <div
                                key={member.id}
                                className="group bg-navy/5 rounded-2xl overflow-hidden border border-navy/10 hover:border-mustard/40 transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                        <div className="flex space-x-3">
                                            <a href={member.social.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition">
                                                <FaLinkedin className="w-4 h-4 text-white" />
                                            </a>
                                            <a href={member.social.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition">
                                                <FaTwitter className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-extrabold text-navy text-lg">{member.name}</h4>
                                    <p className="text-xs font-bold text-mustard uppercase tracking-wider">{member.role}</p>
                                    <p className="text-navy/60 text-sm mt-2 leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 6. GALLERY ────────────────────────────────────────── */}
            <section id="gallery" className="py-20 bg-navy/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Life at DeansBrook</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            Our Labs &amp; Innovation Hubs
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {['all', 'robotics', 'coding', 'events'].map((tab) => (
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
                        <p className="text-navy/60 text-sm">Stay updated with behind-the-scenes, student projects, and upcoming events.</p>
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

                    {/* Facebook Page Card */}
                    <div className="mt-12 max-w-md mx-auto bg-navy text-white rounded-2xl p-6 border border-mustard/30 shadow-xl">
                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <FaFacebook className="w-8 h-8 text-mustard" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-extrabold text-lg">DeansBrook Academy</h4>
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
                                <h3 className="text-2xl font-black tracking-tight">Let's Build Something Great</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Have questions about schedules, pricing tiers, or customized group camps? Get in touch with our
                                    admissions hub.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Main Campus Location</h4>
                                        <p className="text-white/50 text-xs mt-0.5">Kilimani Area, Ngong Road, Nairobi, Kenya</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Call / WhatsApp Info</h4>
                                        <p className="text-white/50 text-xs mt-0.5">+254 700 000 000</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Email Inquiries</h4>
                                        <p className="text-white/50 text-xs mt-0.5">admissions@deansbrook.ac.ke</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xs text-white/30 font-medium">
                                © 2026 DeansBrook Academy. Dedicated to high STEM standards.
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
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Child's Age</label>
                                        <input
                                            type="number"
                                            required
                                            placeholder="e.g. 10"
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
                                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Preferred Program Track</label>
                                    <select className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard bg-white transition text-sm">
                                        <option>Junior Robotics (Ages 6-9)</option>
                                        <option>Advanced AI &amp; Hardware (Ages 10-14)</option>
                                        <option>Coding &amp; Game Dev (Ages 8-15)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Additional Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your child's interests or any prior experience..."
                                        className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-mustard hover:bg-mustard/90 text-navy font-extrabold py-4 rounded-xl transition shadow-lg shadow-mustard/30"
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
                            <a href="#programs" className="hover:text-mustard transition-colors">Programs</a>
                            <a href="#team" className="hover:text-mustard transition-colors">Team</a>
                            <a href="#gallery" className="hover:text-mustard transition-colors">Gallery</a>
                            <a href="#feedback" className="hover:text-mustard transition-colors">Feedback</a>
                            <a href="#contact" className="hover:text-mustard transition-colors">Admissions</a>
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
                        Designed for the future tech pioneers of Kenya.
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