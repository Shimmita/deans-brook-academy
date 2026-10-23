"use client";

import {
    ArrowRight,
    Award,
    BookOpen,
    Calendar,
    CalendarDays,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Clock,
    Drama,
    GraduationCap,
    Lightbulb,
    Mail,
    MapPin,
    Menu,
    Monitor,
    Music,
    Phone,
    Rocket,
    School,
    User,
    Users,
    X
} from 'lucide-react';
import React, { useState } from 'react';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

// ─── DATA ──────────────────────────────────────────────────────────────

const CLASSES = [
    {
        id: 'grade1-6',
        icon: <GraduationCap className="w-8 h-8 text-mustard" />,
        title: "Grade 1 – 6",
        subtitle: "creative and innovative Primary school.",
        age: "6+ years",
        days: "5 Days",
        time: "7:30am – 4pm",
        img: './festiv1.jpg',
        desc: "A comprehensive primary program that builds strong academic foundations while nurturing creativity, critical thinking, and character development."
    },
    {
        id: 'playgroup',
        icon: <School className="w-8 h-8 text-mustard" />,
        title: "Playgroup",
        subtitle: "creative and innovative school for children aged…",
        age: "3 years",
        days: "5 Days",
        time: "7:30am – 12:30pm",
        img: './other_9.jpg',
        desc: "A nurturing introduction to formal education through play-based learning, social interaction, and age-appropriate activities."
    },
    {
        id: 'pp1',
        icon: <BookOpen className="w-8 h-8 text-mustard" />,
        title: "PP1",
        subtitle: "creative and innovative school for children aged…",
        age: "4 years",
        days: "5 Days",
        time: "7:30am – 12:30pm",
        img: './other_2.jpg',
        desc: "Pre-primary education that develops foundational literacy, numeracy, and social skills in a fun and engaging environment."
    },
    {
        id: 'pp2',
        icon: <Award className="w-8 h-8 text-mustard" />,
        title: "PP2",
        subtitle: "creative and innovative school for children aged…",
        age: "5 years",
        days: "5 Days",
        time: "7:30am – 12:30pm",
        img: './other_3.jpg',
        desc: "A bridge to primary education, preparing children with the skills and confidence needed for a smooth transition to Grade 1."
    }
];

type GalleryCategory = 'campus' | 'classroom' | 'events' | 'sports' | 'arts-culture' | 'student-life' | 'videos';

type GalleryItem =
    | {
        id: number;
        type: Exclude<GalleryCategory, 'videos'>;
        title: string;
        description: string;
        img: string;
    }
    | {
        id: number;
        type: 'videos';
        title: string;
        description: string;
        video: string;
        poster: string;
    };

const GALLERY_FILTERS: { id: 'all' | GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'sports', label: 'Sports' },
    { id: 'arts-culture', label: 'Arts & Culture' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'videos', label: 'Videos' },
];

const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, type: 'campus', title: 'School Building', description: 'A view of the Deansbrook school building.', img: '/landing.jpg' },
    { id: 2, type: 'campus', title: 'Kindergarten Entrance', description: 'The welcoming entrance to the Deansbrook Kindergarten.', img: '/other_9.jpg' },
    { id: 3, type: 'campus', title: 'School Grounds', description: 'Green outdoor space around the school.', img: '/more_3.jpg' },
    { id: 4, type: 'campus', title: 'Campus Building Details', description: 'A colourful view of the school buildings.', img: '/more_2.jpg' },

    { id: 5, type: 'classroom', title: 'A Colourful Classroom Activity', description: 'Learners explore colours and patterns together at a classroom table.', img: '/image1.jpeg' },
    { id: 6, type: 'classroom', title: 'Hands-on Learning', description: 'Young learners work together on a practical classroom activity.', img: '/image2.jpeg' },
    { id: 7, type: 'classroom', title: 'Learning Through Play', description: 'Children practise early learning skills through a playful activity.', img: '/image3.jpeg' },
    { id: 8, type: 'classroom', title: 'Creative Outdoor Learning', description: 'Children take part in a hands-on creative activity outdoors.', img: '/image4.jpeg' },
    { id: 9, type: 'classroom', title: 'Classroom Collaboration', description: 'Learners share materials and ideas during a group activity.', img: '/other_7.jpg' },
    { id: 10, type: 'classroom', title: 'Creative Class Activity', description: 'Young learners work together at a table on a classroom project.', img: '/other_17.jpg' },

    { id: 11, type: 'events', title: 'School Assembly', description: 'Learners gather with their teachers for a school assembly.', img: '/assembly.jpg' },
    { id: 12, type: 'events', title: 'Learners at Assembly', description: 'Students listen together during a school gathering.', img: '/learning1.jpg' },
    { id: 13, type: 'events', title: 'Debate Club Gathering', description: 'Students take part in a debate and public-speaking session.', img: '/debate.jpg' },
    { id: 14, type: 'events', title: 'School Awards Celebration', description: 'Learners celebrate an achievement together at school.', img: '/awards.jpg' },
    { id: 15, type: 'events', title: 'Learning Beyond the Classroom', description: 'Students enjoy a shared learning experience outside the classroom.', img: '/trip.jpg' },
    { id: 16, type: 'events', title: 'A Day Together at the Pool', description: 'Learners enjoy time together beside the swimming pool.', img: '/more_1.jpg' },
    { id: 17, type: 'events', title: 'School Community Celebration', description: 'Children share a cheerful celebration with their school community.', img: '/arts.jpg' },
    { id: 18, type: 'events', title: 'Celebrating Together', description: 'Learners gather for a colourful school celebration.', img: '/other_3.jpg' },
    { id: 19, type: 'events', title: 'A Special School Celebration', description: 'Children take part in a joyful celebration at school.', img: '/other_4.jpg' },
    { id: 20, type: 'events', title: 'Learners Celebrate', description: 'Students enjoy a lively school event with colourful displays.', img: '/other_5.jpg' },
    { id: 21, type: 'events', title: 'Classroom Celebration', description: 'Children gather around a decorated table for a special celebration.', img: '/other_10.jpg' },
    { id: 22, type: 'events', title: 'Sharing a Special Moment', description: 'Young learners celebrate together in a decorated classroom.', img: '/other_11.jpg' },
    { id: 23, type: 'events', title: 'A Celebration for Young Learners', description: 'Children enjoy a cheerful celebration with balloons.', img: '/other_12.jpg' },
    { id: 24, type: 'events', title: 'School Gathering', description: 'Learners come together for a group gathering at school.', img: '/other_13.jpg' },
    { id: 25, type: 'events', title: 'Students Gather Outdoors', description: 'Students assemble together in the school grounds.', img: '/other_15.jpg' },
    { id: 26, type: 'arts-culture', title: 'Music Festival Performance', description: 'Deansbrook learners perform at a music festival.', img: '/festiv1.jpg' },
    { id: 27, type: 'events', title: 'Festival Day', description: 'Learners gather together at a school festival.', img: '/festiv9.jpg' },
    { id: 28, type: 'events', title: 'Festival Gathering', description: 'Students and families come together for a school event.', img: '/festiv11.jpg' },

    { id: 29, type: 'sports', title: 'Outdoor Sports Day', description: 'Children take part in outdoor games and activities.', img: '/sports_1.jpg' },
    { id: 30, type: 'sports', title: 'Swimming Lessons', description: 'Learners practise swimming with support in the pool.', img: '/swimming.jpg' },
    { id: 31, type: 'sports', title: 'Track and Field Activity', description: 'Students take part in a running activity on the school grounds.', img: '/other_14.jpg' },
    { id: 32, type: 'sports', title: 'Outdoor Play', description: 'Children enjoy an active play session on the school field.', img: '/more_4.jpg' },
    { id: 33, type: 'sports', title: 'Team Spirit', description: 'Students stand together outdoors in their school sports uniform.', img: '/sports.jpg' },

    { id: 34, type: 'arts-culture', title: 'Music Festival', description: 'Deansbrook learners take the stage at a music festival.', img: '/festiv2.jpg' },
    { id: 35, type: 'arts-culture', title: 'Festival Performers', description: 'Learners pose together after a festival performance.', img: '/festiv3.jpg' },
    { id: 36, type: 'arts-culture', title: 'Celebrating Music', description: 'Students share a moment from their music festival performance.', img: '/festiv4.jpg' },
    { id: 37, type: 'arts-culture', title: 'On the Festival Stage', description: 'Young performers represent Deansbrook at a music festival.', img: '/festiv5.jpg' },
    { id: 38, type: 'arts-culture', title: 'Festival Memories', description: 'Learners celebrate their participation in a music festival.', img: '/festiv6.jpg' },
    { id: 39, type: 'arts-culture', title: 'Music and Performance', description: 'Students gather for a group photo at a music festival.', img: '/festiv7.jpg' },
    { id: 40, type: 'arts-culture', title: 'Young Performers', description: 'Deansbrook learners come together for a festival performance.', img: '/festiv8.jpg' },
    { id: 41, type: 'arts-culture', title: 'Festival Showcase', description: 'Learners take part in a music and culture showcase.', img: '/festiv10.jpg' },
    { id: 42, type: 'arts-culture', title: 'Festival Parade', description: 'Students celebrate music and culture in a colourful parade.', img: '/festiv12.jpg' },
    { id: 43, type: 'arts-culture', title: 'Music Festival Highlights', description: 'Learners perform together at a school music festival.', img: '/festiv13.jpg' },

    { id: 44, type: 'student-life', title: 'Friends Outdoors', description: 'Learners spend time together in the shade outdoors.', img: '/other_1.jpg' },
    { id: 49, type: 'student-life', title: 'Playtime Together', description: 'Children enjoy a ride together on the playground.', img: '/other_2.jpg' },
    { id: 45, type: 'student-life', title: 'Playground Fun', description: 'Children enjoy time together on the playground.', img: '/another.jpg' },
    { id: 46, type: 'student-life', title: 'Students Together', description: 'Learners pose together in their school uniforms.', img: '/other_6.jpg' },
    { id: 47, type: 'student-life', title: 'School Community', description: 'Students come together outdoors as a school community.', img: '/other_8.jpg' },
    { id: 48, type: 'student-life', title: 'School Community Gathering', description: 'Learners gather together outside the school buildings.', img: '/other_16.jpg' },

    { id: 50, type: 'videos', title: 'About Deansbrook', description: 'An introduction to Deansbrook School and its learning community.', video: '/videos/about_deansbrook.mp4', poster: '/landing.jpg' },
    { id: 51, type: 'videos', title: 'Our School Staff', description: 'Meet the people who support teaching and learning at Deansbrook.', video: '/videos/staff_vocation.mp4', poster: '/principal.png' },
    { id: 52, type: 'videos', title: 'Student Creativity', description: 'A look at creative activities and ideas from Deansbrook learners.', video: '/videos/students_creativity.mp4', poster: '/image4.jpeg' },
    { id: 53, type: 'videos', title: 'Games & Sports', description: 'Students take part in games and sports at Deansbrook.', video: '/videos/students_games_sports.mp4', poster: '/sports_1.jpg' },
    { id: 54, type: 'videos', title: 'Science Lab Practicals', description: 'Learners take part in practical science activities.', video: '/videos/students_lab_practicals.mp4', poster: '/image1.jpeg' },
    { id: 55, type: 'videos', title: 'Learning in the Classroom', description: 'A glimpse of students learning together in class.', video: '/videos/students_in_class.mp4', poster: '/image3.jpeg' },
    { id: 56, type: 'videos', title: 'Deansbrook School Moments', description: 'A video from the Deansbrook School community.', video: '/videos/VID-20261008-WA0009.mp4', poster: '/landing.jpg' },
];

const TEAM_LEADERS = [
    {
        name: "Mr. Toney Ongugo",
        role: "School Principal",
        bio: `The academic landscape in Kenya continues to evolve, with changes in curriculum, learners' needs, and parental involvement. Schools therefore play a vital role in providing the infrastructure, qualified faculty, facilities, and resources needed to achieve national education goals. Deansbrook Group of Schools offers a serene learning environment with 21st-century facilities designed to support the holistic development of every learner. Our approach aligns with the CBE mission of “Nurturing every learner's potential”, preparing students with the knowledge, skills, and values needed to thrive in the global market.`,
        img: "./principal.png",
        specialty: "BEd. Arts / MBA",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Mrs. Sally Tanui",
        role: "School Principal",
        bio: `The first six years of a child’s life are crucial for brain development. What children see, hear, learn, and experience during these early years shapes their confidence, abilities, and approach to learning for years to come. Investing in the preschool years is investing in a child’s future.

At Deansbrook School, learning goes beyond ABCs. We nurture happy, confident, and curious learners in a safe, caring, and stimulating environment where every child feels valued, heard, and encouraged to explore their talents.

At Deansbrook School, we don’t just educate children—we build strong foundations for lifelong success.`,
        img: "./principal2.jpeg",
        specialty: "School Principal",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com"
    },

];

const EVENTS = [
    {
        title: "Annual Sports Day",
        date: "TBA",
        location: "Kiembeni Campus Grounds",
        desc: "Join us for a day of athletics, games, and family fun. All students and parents are invited."
    },
    {
        title: "Science Fair 2026",
        date: "TBA",
        location: "Bamburi Campus Hall",
        desc: "Students showcase their innovative projects. Winners will represent Deansbrook at the regional level."
    },
    {
        title: "Graduation Ceremony",
        date: "TBA",
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
    { name: 'Facebook', icon: FaFacebook, url: 'https://web.facebook.com/Deansbrookschool?sfnsn=wa&mibextid=RUbZ1f&_rdc=1&_rdr', color: '#1877f2' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/Deansbrook83254?t=aMY2a51Pg_v5_rqy7czhOQ&s=08', color: '#000000' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: '#e4405f' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: '#0a66c2' },
    { name: 'YouTube', icon: FaYoutube, url: '#', color: '#ff0000' },
];

// ─── MAIN COMPONENT ────────────────────────────────────────────────────

export default function DeansBrookSchoolLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState('all');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [enrolModalOpen, setEnrolModalOpen] = useState(false);
    const [enrolFormSubmitted, setEnrolFormSubmitted] = useState(false);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [registrationSubmitted, setRegistrationSubmitted] = useState(false);

    const filteredGallery = galleryFilter === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.type === galleryFilter);

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const parentName = (form.querySelector('#parent-name') as HTMLInputElement)?.value || '';
        const childAgeGrade = (form.querySelector('#child-age-grade') as HTMLInputElement)?.value || '';
        const email = (form.querySelector('#email') as HTMLInputElement)?.value || '';
        const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || '';
        const campusPreference = (form.querySelector('#campus-preference') as HTMLSelectElement)?.value || '';
        const additionalMessage = (form.querySelector('#additional-message') as HTMLTextAreaElement)?.value || '';
        const subject = 'Inquiry Submission';
        const body= `Parent Name: ${parentName}\nChild's Age/Grade: ${childAgeGrade}\nEmail: ${email}\nPhone: ${phone}\nCampus Preference: ${campusPreference}\nAdditional Message: ${additionalMessage}`;
        window.location.href = `mailto:deansbrookkiembeni@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setFormSubmitted(true);
        setTimeout (() => { 
            setFormSubmitted(false);
        }, 5000);

    };

    const handleEnrolSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const childName = (form.querySelector('#enrol-child-name') as HTMLInputElement)?.value || '';
        const childAge = (form.querySelector('#enrol-child-age') as HTMLInputElement)?.value || '';
        const fatherName = (form.querySelector('#enrol-father-name') as HTMLInputElement)?.value || '';
        const motherName = (form.querySelector('#enrol-mother-name') as HTMLInputElement)?.value || '';
        const email = (form.querySelector('#enrol-email') as HTMLInputElement)?.value || '';
        const phone = (form.querySelector('#enrol-phone') as HTMLInputElement)?.value || '';

        const subject = 'New Registration Submission';
        const body = `Child's Name: ${childName}\nChild's Age: ${childAge}\nFather's Name: ${fatherName}\nMother's Name: ${motherName}\nEmail: ${email}\nPhone: ${phone}\nClass Interested: ${selectedClass || 'Not specified'}`;
        window.location.href = `mailto:deansbrookkiembeni@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setRegistrationSubmitted(true);
        setTimeout(() => {
            setRegistrationSubmitted(false);
            setEnrolModalOpen(false);
            setSelectedClass(null);
        }, 5000);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const openEnrolModal = (classId?: string) => {
        setSelectedClass(classId || null);
        setEnrolModalOpen(true);
        setRegistrationSubmitted(false);
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
                            <button
                                onClick={() => openEnrolModal()}
                                className="bg-mustard hover:bg-mustard/90 text-navy font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-mustard/30 transform hover:-translate-y-0.5"
                            >
                                Join Us
                            </button>
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
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openEnrolModal();
                            }}
                            className="block w-full text-center bg-mustard text-navy font-extrabold py-3 rounded-xl shadow-md"
                        >
                            Join Us
                        </button>
                    </div>
                )}
            </nav>

            {/* ─── 2. HERO ──────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="./landing.jpg"
                        alt="Deansbrook School"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
                <div className="absolute inset-0 bg-mustard/10" />

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

                            <button
                                onClick={() => openEnrolModal()}
                                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-xl font-bold transition duration-300"
                            >
                                Get in Touch
                            </button>
                        </div>

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

            {/* ─── 3. ABOUT US ──────────────────────────────────────── */}
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
                                    To be the premier school of choice.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-navy">Our Mission</h3>
                                <p className="text-navy/70 text-base leading-relaxed mt-2">
                                    To provide students with a broad range of learning experiences that enable them to develop their full potential and become responsible global citizens.
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
                                        <span><strong>Kiembeni Campus</strong> – Our kiembeni campus is located past the Kiembeni police post and it offers quality education in pre-school, primary school and junior secondary school supporting learners through their early years and secondary education.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-mustard/5 p-6 rounded-2xl border border-mustard/20">
                                <p className="text-navy/80 text-sm italic">
                                    &quot;We don't just teach – we inspire. Every day is fresh and inspiring, and our efforts are geared towards keeping our students enthralled, hungry and engaged.&quot;
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


            {/* ─── 4. DIRECTORS' MESSAGE ──────────────────────────── */}
            <section id="directors" className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold text-amber-400 tracking-widest">Message from the Directors</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                FROM THE DIRECTORS’ DESK
            </p>
            <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        <div className="bg-blue-950 rounded-3xl shadow-xl border border-amber-400/30 overflow-hidden">
            <div className="p-8 sm:p-12 space-y-8">
                <div>
                    <p className="text-2xl font-black text-white">Paul & Caroline</p>
                    <p className="text-amber-400 font-bold text-sm">Directors, Deansbrook Schools</p>
                </div>

                <p className="text-lg font-semibold text-white">
                    It is our pleasure to welcome you to Deansbrook Schools.
                </p>

                {/* Mission Section */}
                <div className="space-y-2 border-l-4 border-amber-400 pl-4">
                    <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                        To provide diverse learning experiences that empower every student to reach their full potential and become responsible global citizens.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
                    <p className="text-base text-slate-300">To be a leading school of choice through:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        {[
                            'Academic excellence',
                            'Holistic student development',
                            'Exceptional teaching and leadership',
                            'A safe, supportive learning environment',
                            'Strong parent and community engagement',
                            'Modern learning resources and infrastructure',
                            'Strong values, good governance and continuous innovation'
                        ].map((point, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base">
                                <span className="text-amber-400 font-bold mt-0.5">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Core Values Section */}
                <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-white">Our Core Values</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Professionalism', 'Integrity', 'Teamwork', 'Trust', 'Excellence', 'Respect'].map((value, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-900/40 text-amber-300 font-semibold text-xs rounded-lg border border-amber-400/20"
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Closing Messages */}
                <div className="space-y-4 pt-2 border-t border-blue-900/80 text-slate-300 text-base sm:text-lg leading-relaxed">
                    <blockquote className="border-l-4 border-amber-400/40 pl-4">
                        &ldquo;At Deansbrook Schools, we are committed to living these values in all our interactions. We celebrate academic achievement while nurturing creativity, character, leadership and personal growth.&rdquo;
                    </blockquote>
                    <blockquote className="border-l-4 border-amber-400/20 pl-4">
                        &ldquo;As we look to the future, we remain committed to continuous improvement, innovation and excellence. Together with our students, parents and community, we look forward to building a strong foundation for lifelong success.&rdquo;
                    </blockquote>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-blue-900/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center">
                            <School className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="text-xs text-slate-400 font-medium">Deansbrook Schools • With warm regards, Paul & Caroline</span>
                    </div>
                    <button
                        onClick={() => openEnrolModal()}
                        className="ml-auto bg-amber-400 hover:bg-amber-400/90 text-blue-950 font-bold px-6 py-2 rounded-xl transition shadow-lg shadow-amber-400/20 text-sm"
                    >
                        Enrol Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>



            {/* ─── 5. ADMISSION CLASSES ────────────────────────────── */}
            <section id="classes" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Our Programs</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            Admission Classes
                        </p>
                        <p className="text-navy/60 font-medium">We offer a comprehensive CBC curriculum across all levels.</p>
                        <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {CLASSES.map((cls) => (
                            <div
                                key={cls.id}
                                className="bg-white border border-navy/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-mustard/40 transition-all group flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={cls.img}
                                        alt={cls.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent flex items-end p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-mustard/20 backdrop-blur-sm rounded-xl text-mustard">
                                                {cls.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-white">{cls.title}</h3>
                                                <p className="text-white/80 text-xs font-medium">{cls.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="text-center p-2 bg-navy/5 rounded-xl">
                                            <User className="w-4 h-4 text-mustard mx-auto mb-1" />
                                            <p className="text-[10px] font-bold text-navy/60 uppercase">Age</p>
                                            <p className="text-sm font-extrabold text-navy">{cls.age}</p>
                                        </div>
                                        <div className="text-center p-2 bg-navy/5 rounded-xl">
                                            <CalendarDays className="w-4 h-4 text-mustard mx-auto mb-1" />
                                            <p className="text-[10px] font-bold text-navy/60 uppercase">Weekly</p>
                                            <p className="text-sm font-extrabold text-navy">{cls.days}</p>
                                        </div>
                                        <div className="text-center p-2 bg-navy/5 rounded-xl">
                                            <Clock className="w-4 h-4 text-mustard mx-auto mb-1" />
                                            <p className="text-[10px] font-bold text-navy/60 uppercase">Time</p>
                                            <p className="text-sm font-extrabold text-navy">{cls.time}</p>
                                        </div>
                                    </div>

                                    <p className="text-navy/70 text-sm leading-relaxed flex-1">
                                        {cls.desc}
                                    </p>

                                    <div className="pt-4 border-t border-navy/10 mt-4 flex items-center justify-between">
                                        <span className="text-xs font-bold text-navy/40 uppercase tracking-wider">CBC Curriculum</span>
                                        <button
                                            onClick={() => openEnrolModal(cls.id)}
                                            className="flex items-center gap-2 bg-mustard/10 hover:bg-mustard text-navy font-bold px-4 py-2 rounded-xl transition text-sm"
                                        >
                                            Enrol Now
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 6. TEAM LEADERS SECTION ──────────────────────────── */}
            <section id="team" className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <h2 className="text-xs uppercase font-black text-amber-400 tracking-widest">Leadership & Educators</h2>
                        <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Meet Our Other Team Leaders
                        </p>
                        <p className="text-slate-400 font-medium">
                            Passionate educators, and mentors guiding your children every step of the way.
                        </p>
                        <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full" />
                    </div>

                    {/* Team Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {TEAM_LEADERS.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-blue-950 rounded-3xl border border-amber-400/30 overflow-hidden shadow-xl hover:border-amber-400 transition-all group flex flex-col sm:flex-row"
                            >
                                {/* LEFT COLUMN: Image & Designation/Specialty */}
                                <div className="sm:w-2/5 p-6 bg-blue-900/40 border-b sm:border-b-0 sm:border-r border-amber-400/20 flex flex-col items-center text-center shrink-0">
                                    {/* Image */}
                                    <div className="relative w-full aspect-square max-w-[220px] rounded-2xl overflow-hidden shadow-md">
                                        <img
                                            src={leader.img}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Designation & Specialty Below Image */}
                                    <div className="mt-4 w-full space-y-1">
                                        <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                                            {leader.role}
                                        </p>
                                        {leader.specialty && (
                                            <div className="pt-2">
                                                <span className="inline-block bg-amber-400 text-blue-950 font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                                                    {leader.specialty}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Content, Bio & Connect Links */}
                                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                                    <div className="space-y-3">
                                        {/* Name */}
                                        <div>
                                            <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                                                {leader.name}
                                            </h3>
                                        </div>

                                        {/* Bio Content */}
                                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                            {leader.bio}
                                        </p>
                                    </div>

                                    {/* Social Footer */}
                                    <div className="pt-4 border-t border-blue-900/80 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                            Connect:
                                        </span>
                                        <div className="flex space-x-2">
                                            {leader.facebook && (
                                                <a
                                                    href={leader.facebook}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-blue-950 transition-colors"
                                                    title="Facebook Profile"
                                                >
                                                    <FaFacebook className="w-4 h-4" />
                                                </a>
                                            )}
                                            {leader.linkedin && (
                                                <a
                                                    href={leader.linkedin}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-blue-950 transition-colors"
                                                    title="LinkedIn Profile"
                                                >
                                                    <FaLinkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 7. OUR EVENTS ────────────────────────────────────── */}
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

            {/* ─── 8. NEWS & GALLERY ────────────────────────────────── */}
            <section id="gallery" className="py-20 bg-navy/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                        <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Life at Deansbrook</h2>
                        <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                            News & Gallery
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {GALLERY_FILTERS.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                aria-pressed={galleryFilter === tab.id}
                                onClick={() => setGalleryFilter(tab.id)}
                                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${galleryFilter === tab.id
                                    ? 'bg-mustard text-navy shadow-lg shadow-mustard/30'
                                    : 'bg-white text-navy/60 hover:bg-navy/10'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {filteredGallery.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredGallery.map((item) => (
                                item.type === 'videos' ? (
                                    <article key={item.id} className="overflow-hidden rounded-2xl shadow-md bg-white">
                                        <div className="aspect-video bg-black">
                                            <video
                                                controls
                                                preload="metadata"
                                                poster={item.poster}
                                                aria-label={item.description}
                                                className="w-full h-full object-contain"
                                            >
                                                <source src={item.video} type="video/mp4" />
                                                Your browser does not support the video element.
                                            </video>
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs font-bold text-mustard uppercase tracking-widest">Video</span>
                                            <h4 className="text-navy font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-navy/70 mt-1">{item.description}</p>
                                        </div>
                                    </article>
                                ) : (
                                    <article key={item.id} className="overflow-hidden rounded-2xl shadow-md bg-white">
                                        <div className="group relative overflow-hidden aspect-[4/3] bg-navy/5">
                                            <Image
                                                src={item.img}
                                                alt={item.description}
                                                fill
                                                loading={item.img === '/image4.jpeg' ? 'eager' : 'lazy'}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs font-bold text-mustard uppercase tracking-widest">{GALLERY_FILTERS.find((filter) => filter.id === item.type)?.label}</span>
                                            <h4 className="text-navy font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-navy/70 mt-1">{item.description}</p>
                                        </div>
                                    </article>
                            )))}
                        </div>
                    ) : null}
                </div>
            </section>

            {/* ─── 9. SOCIAL MEDIA LINKS ────────────────────────────── */}
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

            {/* ─── 10. FAQ / HELP ────────────────────────────────────── */}
            <section id="faq" className="py-20 bg-navy/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center space-y-4 mb-12">
                            <h2 className="text-xs uppercase font-extrabold text-mustard tracking-widest">Help & Support</h2>
                            <p className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                                Frequently Asked Questions
                            </p>
                            <div className="w-16 h-1 bg-mustard mx-auto rounded-full" />
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-navy/10 shadow-sm">
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
            </section>

            {/* ─── 11. CONTACT ────────────────────────────────────────── */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-navy rounded-[2.5rem] border border-mustard/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">

                        <div className="lg:col-span-5 bg-navy text-white p-8 sm:p-12 flex flex-col justify-between space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black tracking-tight">Get in Touch</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Have questions about admissions, campus tours, or fees? Reach out to us – we're here to help.
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

                                {/* add target links to the contact info */}

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Call / WhatsApp</h4>
                                        <a
                                            href="https://wa.me/254733576385"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/50 text-xs mt-0.5 hover:text-mustard transition-colors"
                                        >
                                            +254733576385
                                        </a>
                                    </div>
                                </div>

                                {/* 1st email  */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Email</h4>
                                        <a
                                            href="mailto:info@deansbrook.sc.ke"
                                            className="text-white/50 text-xs mt-0.5 hover:text-mustard transition-colors"
                                        >
                                            info@deansbrook.sc.ke
                                        </a>
                                    </div>
                                </div>

                                {/* 2nd email  */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Email</h4>
                                        <a
                                            href="mailto:deansbrookkenya@gmail.com"
                                            className="text-white/50 text-xs mt-0.5 hover:text-mustard transition-colors"
                                        >
                                            deansbrookkenya@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* 3rd email  */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-mustard mt-1">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Email</h4>
                                        <a
                                            href="mailto:deansbrookkiembeni@gmail.com"
                                            className="text-white/50 text-xs mt-0.5 hover:text-mustard transition-colors"
                                        >
                                            deansbrookkiembeni@gmail.com
                                        </a>
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
                                            id='parent-name'
                                            required
                                            placeholder="e.g. Mwangi Onyango"
                                            className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Child's Age / Grade</label>
                                        <input
                                            type="text"
                                            id='child-age-grade'
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
                                            id='email'
                                            required
                                            placeholder="name@domain.com"
                                            className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number</label>
                                        <input
                                            type="tel"
                                            id='phone'
                                            required
                                            placeholder="0712345678"
                                            className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard transition text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Campus Preference</label>
                                    <select id='campus-preference' className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard bg-white transition text-sm">
                                        <option>Bamburi Campus</option>
                                        <option>Kiembeni Campus</option>
                                        <option>Either</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Additional Message</label>
                                    <textarea
                                        id='additional-message'
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
                                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl">
                                        Thank you! Your inquiry has been submitted successfully.
                                    </div>
                                )}

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── 12. ENROLMENT / REGISTRATION MODAL ────────────────── */}
            {enrolModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setEnrolModalOpen(false);
                                setSelectedClass(null);
                                setRegistrationSubmitted(false);
                            }}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-mustard hover:text-white transition-all flex items-center justify-center text-navy/60"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-5">
                            {/* Left: Image & Info */}
                            <div className="md:col-span-2 relative min-h-[200px] md:min-h-full">
                                <img
                                    src="./landing.jpg"
                                    alt="Deansbrook School"
                                    className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                                    <h3 className="text-white font-black text-2xl">Registration</h3>
                                    <p className="text-white/70 text-sm">Apply for Admission at Deansbrook Schools</p>
                                    {selectedClass && (
                                        <div className="mt-2 inline-block bg-mustard/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Applying for: {CLASSES.find(c => c.id === selectedClass)?.title || selectedClass}
                                        </div>
                                    )}
                                </div>

                                {/* Why Deansbrook - Shown on desktop */}
                                <div className="hidden md:block absolute bottom-20 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                    <h4 className="text-white font-bold text-sm mb-2">Why Deansbrook School</h4>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center gap-2 text-white/80 text-xs">
                                            <CheckCircle className="w-3 h-3 text-mustard" /> Highly trained teachers
                                        </li>
                                        <li className="flex items-center gap-2 text-white/80 text-xs">
                                            <CheckCircle className="w-3 h-3 text-mustard" /> Age appropriate activities
                                        </li>
                                        <li className="flex items-center gap-2 text-white/80 text-xs">
                                            <CheckCircle className="w-3 h-3 text-mustard" /> Spacious classes
                                        </li>
                                        <li className="flex items-center gap-2 text-white/80 text-xs">
                                            <CheckCircle className="w-3 h-3 text-mustard" /> Enclosed outdoor playground
                                        </li>
                                        <li className="flex items-center gap-2 text-white/80 text-xs">
                                            <CheckCircle className="w-3 h-3 text-mustard" /> Van service available
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div className="md:col-span-3 p-6 md:p-8">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black text-navy">Apply For Admission</h2>
                                    <p className="text-navy/60 text-sm">Fill in the details below to register your child.</p>
                                </div>

                                <form onSubmit={handleEnrolSubmit} className="space-y-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Child's Name <span className="text-red-500">*</span></label>
                                        <input
                                            id="enrol-child-name"
                                            type="text"
                                            required
                                            placeholder="Child's Name"
                                            className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Child's Age (Year) <span className="text-red-500">*</span></label>
                                        <input
                                            id="enrol-child-age"
                                            type="text"
                                            required
                                            placeholder="Child's Age"
                                            className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-navy uppercase tracking-wider">Father's Name <span className="text-red-500">*</span></label>
                                            <input
                                                id="enrol-father-name"
                                                type="text"
                                                required
                                                placeholder="Father's Name"
                                                className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-navy uppercase tracking-wider">Mother's Name <span className="text-red-500">*</span></label>
                                            <input
                                                id="enrol-mother-name"
                                                type="text"
                                                required
                                                placeholder="Mother's Name"
                                                className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                id="enrol-email"
                                                type="email"
                                                required
                                                placeholder="Email"
                                                className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                                            <input
                                                id="enrol-phone"
                                                type="tel"
                                                required
                                                placeholder="Phone"
                                                className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:outline-none focus:border-mustard focus:ring-2 focus:ring-mustard/20 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Extra Curriculum */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Which Extra Curriculum will my child learn?</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            <label className="flex items-center gap-2 p-2 border border-navy/10 rounded-xl hover:bg-navy/5 transition cursor-pointer">
                                                <input type="checkbox" className="accent-mustard" /> <Monitor className="w-4 h-4 text-navy/60" /> <span className="text-xs font-medium text-navy/70">Computer</span>
                                            </label>
                                            <label className="flex items-center gap-2 p-2 border border-navy/10 rounded-xl hover:bg-navy/5 transition cursor-pointer">
                                                <input type="checkbox" className="accent-mustard" /> <span className="text-sm">🏊</span> <span className="text-xs font-medium text-navy/70">Swimming</span>
                                            </label>
                                            <label className="flex items-center gap-2 p-2 border border-navy/10 rounded-xl hover:bg-navy/5 transition cursor-pointer">
                                                <input type="checkbox" className="accent-mustard" /> <Music className="w-4 h-4 text-navy/60" /> <span className="text-xs font-medium text-navy/70">Music</span>
                                            </label>
                                            <label className="flex items-center gap-2 p-2 border border-navy/10 rounded-xl hover:bg-navy/5 transition cursor-pointer">
                                                <input type="checkbox" className="accent-mustard" /> <Drama className="w-4 h-4 text-navy/60" /> <span className="text-xs font-medium text-navy/70">Drama</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Why Deansbrook - Mobile only */}
                                    <div className="md:hidden bg-navy/5 rounded-xl p-4 border border-navy/10">
                                        <h4 className="font-bold text-navy text-sm mb-2">Why Deansbrook School</h4>
                                        <ul className="grid grid-cols-1 gap-1.5">
                                            <li className="flex items-center gap-2 text-navy/70 text-xs">
                                                <CheckCircle className="w-3 h-3 text-mustard" /> Highly trained teachers
                                            </li>
                                            <li className="flex items-center gap-2 text-navy/70 text-xs">
                                                <CheckCircle className="w-3 h-3 text-mustard" /> Age appropriate activities
                                            </li>
                                            <li className="flex items-center gap-2 text-navy/70 text-xs">
                                                <CheckCircle className="w-3 h-3 text-mustard" /> Spacious classes
                                            </li>
                                            <li className="flex items-center gap-2 text-navy/70 text-xs">
                                                <CheckCircle className="w-3 h-3 text-mustard" /> Enclosed outdoor playground
                                            </li>
                                            <li className="flex items-center gap-2 text-navy/70 text-xs">
                                                <CheckCircle className="w-3 h-3 text-mustard" /> Van service available
                                            </li>
                                        </ul>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-mustard hover:bg-mustard/90 text-navy font-extrabold py-4 rounded-xl transition shadow-lg shadow-mustard/30 text-base"
                                    >
                                        Submit Now
                                    </button>

                                    {registrationSubmitted && (
                                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold text-center animate-fade-in">
                                            ✓ Registration submitted! We'll contact you shortly at schooldeans@go.ke
                                        </div>
                                    )}

                                    <p className="text-[10px] text-navy/30 text-center font-medium">
                                        By submitting, you agree to our privacy policy. We'll notify your child for weekly progress.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ─── 13. FOOTER ────────────────────────────────────────── */}
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
                            <a href="#faq" className="hover:text-mustard transition-colors">FAQ</a>
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