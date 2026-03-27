import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Menu, 
  X,
  Heart
} from 'lucide-react';

const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const personalInfo = {
  name: "Abhijith Pratheesh",
  title: "Full-Stack Developer & B.Tech CS Student",
  location: "Kochi, Kerala, India",
  phone: "+91 8848385318",
  email: "abhijithpratheesh3014@gmail.com",
  linkedin: "linkedin.com/in/abhijithpratheesh",
  github: "github.com/Abhijith314",
  summary: "A determined and self-motivated B.Tech Computer Science student with a strong foundation in C, Python, DSA, OOP, and web technologies. Experienced in full-stack development with hands-on internships and multiple projects. Passionate about problem-solving and ready to contribute to enterprise IT environments as a Graduate Engineer Trainee."
};

const skills = [
  { category: "Programming Languages", items: ["C", "Python", "Java (Basics)"] },
  { category: "Web Technologies", items: ["HTML", "CSS", "React", "Angular", "Flask"] },
  { category: "Databases & Cloud", items: ["SQL", "MySQL", "Supabase (PostgreSQL)"] },
  { category: "Core Computer Science", items: ["Data Structures & Algorithms", "OOP (C++/Java/Python)", "Problem Solving"] },
  { category: "OS & Tools", items: ["Linux", "Git", "GitHub", "Vite"] },
  { category: "Emerging Fields", items: ["AI/ML Basics", "Data Analytics", "Computer Vision (OpenCV)", "Gemini API"] }
];

const experiences = [
  {
    role: "AI Portfolio & Integration Intern",
    company: "Bumblebee Education – Kochi",
    period: "June 6 – June 13, 2025",
    description: [
      "Explored AI integration into websites for enhanced functionality using Flask and Gemini API.",
      "Worked with Google Analytics and Microsoft Clarity to track user behavior and collect data insights."
    ]
  },
  {
    role: "Frontend Development Intern",
    company: "NEST Digital – Kochi",
    period: "July 22 – July 26, 2024",
    description: [
      "Gained practical experience in Angular and Bootstrap for frontend development.",
      "Learned to build and style responsive web pages using Angular components and modules."
    ]
  }
];

const projects = [
  {
    title: "GaavSvaasthy",
    subtitle: "AI-Powered Rural Healthcare Platform",
    technologies: ["React", "Flask", "Supabase", "ML"],
    type: "Hackathon Project",
    description: "Developed full-stack healthcare web application serving rural communities with AI-driven disease prediction. Architected React frontend with Flask backend handling AI prediction engine.",
    link: "https://github.com/Abhijith314/GaavSvaasthy"
  },
  {
    title: "Smart Shopping Cart Web App",
    subtitle: "IoT Retail Solution Dashboard",
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase"],
    type: "Personal Project",
    description: "Developed a web-based dashboard for an automated smart shopping cart system to provide users with a real-time digital interface for purchases and live billing.",
    link: "https://github.com/Abhijith314/smart-cart-web-app"
  },
  {
    title: "Campus Management System",
    subtitle: "Educational ERP",
    technologies: ["React", "Supabase"],
    type: "Academic Project",
    description: "Developed mini Campus Management System with role-based access for students, faculty, and administrators using Supabase for secure authentication.",
    link: "https://github.com/Abhijith314/campus-management-system"
  },
  {
    title: "Automated Smart Shopping Cart",
    subtitle: "IoT Software with Computer Vision",
    technologies: ["Python", "OpenCV", "Pyzbar", "Supabase"],
    type: "Software/Hardware Project",
    description: "Built IoT software solution with real-time barcode scanning and automated billing using Python, OpenCV and Supabase PostgreSQL.",
    link: "https://github.com/Abhijith314/Automated-Smart-Shopping-Cart"
  },
  {
    title: "E-Commerce Website Frontend",
    subtitle: "Modern Store UI",
    technologies: ["Angular", "Bootstrap"],
    type: "Internship Project",
    description: "Developed responsive e-commerce frontend with reusable Angular components for product listings and cart management.",
    link: "https://github.com/Abhijith314/Task5-E_Commerce"
  },
  {
    title: "YouTube Downloader",
    subtitle: "Web-Based Media Tool",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    type: "Utility Tool",
    description: "Developed full-stack web app enabling browser-based YouTube video and audio downloads with Flask backend.",
    link: "https://github.com/Abhijith314/youtube_downloader"
  }
];

const certifications = [
  "Microsoft - Foundations of Coding Back-End",
  "Google AI Essentials",
  "Workshop in AI and ML",
  "Workshop on AI Mastermind",
  "Workshop in Flutter Application Development"
];

const involvements = [
  { role: "Campus Lead", organization: "MuLearn" },
  { role: "Platoon Commander", organization: "Student Police Cadet" },
  { role: "Volunteer", organization: "National Service Scheme (NSS)" },
  { role: "Active Volunteer", organization: "Student Volunteer Corps" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#0b0f19] text-slate-200 min-h-screen font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                AP
              </div>
              <span className="font-bold tracking-tight text-white hidden sm:inline-block">
                Abhijith.dev
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {sectionIds.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-white ${
                    activeSection === item ? 'text-blue-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a 
                href="mailto:abhijithpratheesh3014@gmail.com"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-500/25"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Nav Burger */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f1626] border-b border-white/5"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {sectionIds.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${
                      activeSection === item ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href="mailto:abhijithpratheesh3014@gmail.com"
                  className="block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-md"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                <span className="animate-pulse w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Available for Graduate Trainee Roles
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                {personalInfo.title}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Turning complex problems into elegant, real-world solutions. B.Tech Computer Science student with a focus on Frontend Engineering, Python, and AI integration.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center group"
                >
                  View My Work
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4 text-slate-400">
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Github size={22} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl rotate-6 blur-lg opacity-40 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl -rotate-6 blur-lg opacity-20 group-hover:-rotate-12 transition-all duration-500"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-3xl border border-white/10 flex flex-col justify-center items-center p-6 text-center backdrop-blur-3xl">
                  {/* Profile Picture */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 border-4 border-white/10 flex items-center justify-center overflow-hidden">
                      {/* Profile image with fallback */}
                      <img 
                        src="/profile-placeholder.jpg" 
                        alt="Abhijith Pratheesh"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.profile-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback if image fails to load */}
                      <div className="profile-fallback hidden w-full h-full flex items-center justify-center bg-slate-800/50">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white mb-1">AP</div>
                          <div className="text-xs text-slate-400">Profile Picture</div>
                        </div>
                      </div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Abhijith Pratheesh</h3>
                  <p className="text-sm text-slate-400 mb-4">Full-Stack Developer & CS Student</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">React</span>
                    <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">Python</span>
                    <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">AI/ML</span>
                  </div>
                  
                  {/* Upload/Change Picture Button */}
                  {/* <div className="mt-4 text-center">
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded-lg transition-all flex items-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Replace Photo
                    </button>
                    <p className="text-xs text-slate-500 mt-2">
                      Replace <code>public/profile-placeholder.jpg</code> with your photo
                    </p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About & Summary Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-10 bg-blue-500"></div>
                <span className="text-sm text-blue-400 font-bold uppercase tracking-wider">About Me</span>
              </div>
               <h2 className="text-3xl font-bold text-white">Engineering The Future.</h2>
               
               {/* Small Profile Picture in About Section */}
               <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                 <div className="relative">
                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 border-2 border-white/10 overflow-hidden">
                     <img 
                       src="/profile-placeholder.jpg" 
                       alt="Abhijith Pratheesh"
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         const fallback = target.parentElement?.querySelector('.about-profile-fallback');
                         if (fallback) fallback.classList.remove('hidden');
                       }}
                     />
                     <div className="about-profile-fallback hidden w-full h-full flex items-center justify-center bg-slate-800/50">
                       <div className="text-center">
                         <div className="text-lg font-bold text-white">AP</div>
                       </div>
                     </div>
                   </div>
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-slate-800"></div>
                 </div>
                 <div>
                   <h3 className="font-bold text-white">Abhijith Pratheesh</h3>
                   <p className="text-sm text-slate-400">B.Tech Computer Science</p>
                   <p className="text-xs text-slate-500">Graduating 2026</p>
                 </div>
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center text-slate-300">
                  <GraduationCap className="mr-3 text-teal-400" size={20} />
                  <div>
                    <div className="font-semibold text-white">B.Tech in CSE</div>
                    <div className="text-sm text-slate-400">CGPA: 7.97 (Graduating 2026)</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="mr-3 text-teal-400" size={20} />
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-sm text-slate-400">Kochi, Kerala</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 flex flex-col justify-center"
            >
              <div className="bg-white/2 p-8 rounded-3xl border border-white/5 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {personalInfo.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-2xl font-bold text-white">90%</span>
                    <span className="text-sm text-slate-400">Higher Secondary Education</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-2xl font-bold text-white">95%</span>
                    <span className="text-sm text-slate-400">Secondary Education (10th)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-900/50 relative scroll-mt-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">My Toolkit</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
              <p className="text-slate-400 max-w-2xl">A curated list of my hard skills and tools that I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col h-full group"
                >
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full mr-3"></span>
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-[#0f1626] group-hover:bg-blue-600/10 text-slate-300 group-hover:text-blue-300 text-sm rounded-lg border border-white/5 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">My Career Path</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Internships & Professional Growth</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border-2 border-blue-500 text-teal-400 shadow-xl shadow-blue-500/20">
                  <Briefcase size={18} />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-teal-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-slate-300">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900/50 relative scroll-mt-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">My Work</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-2xl">Building projects using web technologies, IoT and Machine Learning. Here's a showcase of some of my works.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0f1626] border border-white/5 rounded-2xl flex flex-col overflow-hidden group hover:border-white/20 transition-all hover:shadow-xl hover:shadow-blue-500/5 h-full"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                        {project.type}
                      </span>
                      <a href={project.link} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">{project.subtitle}</p>
                    <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications and Activities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-10 bg-teal-500"></div>
                <span className="text-sm text-teal-400 font-bold uppercase tracking-wider">Achievements</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Certifications & Workshops</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 divide-y divide-white/5">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 py-4 first:pt-0 last:pb-0 group">
                    <Award size={20} className="text-blue-400 group-hover:text-teal-400 transition-colors flex-shrink-0" />
                    <span className="text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Involvements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-10 bg-purple-500"></div>
                <span className="text-sm text-purple-400 font-bold uppercase tracking-wider">Leadership</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Extracurricular & Volunteering</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {involvements.map((item, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">{item.role}</h3>
                    <p className="text-sm text-slate-400">{item.organization}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900/50 relative scroll-mt-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-slate-400 max-w-xl">
                Ready to contribute to enterprise projects as a Graduate Engineer Trainee. Let's build something together!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-5 space-y-6"
              >
                <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-blue-500/30 transition-all">
                  <div className="p-3 bg-blue-500/10 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-all">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Me</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-teal-500/30 transition-all">
                  <div className="p-3 bg-teal-500/10 rounded-xl mr-4 group-hover:bg-teal-500/20 transition-all">
                    <Phone size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Call Me</h4>
                    <a href={`tel:${personalInfo.phone.replace(/ /g, '')}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-purple-500/30 transition-all">
                  <div className="p-3 bg-purple-500/10 rounded-xl mr-4 group-hover:bg-purple-500/20 transition-all">
                    <Linkedin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {personalInfo.linkedin.replace('linkedin.com/in/', '')}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-7"
              >
                <form className="bg-[#0f1626] border border-white/5 rounded-2xl p-8 space-y-6 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2 flex-grow flex flex-col">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm flex-grow" placeholder="Your message..."></textarea>
                  </div>
                  <button type="button" className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-white/5 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-lg">
              AP
            </div>
            <span className="font-bold text-white">Abhijith Pratheesh</span>
          </div>
          <p className="text-sm text-slate-400 flex items-center">
            Designed and built with <Heart size={16} className="text-red-500 mx-1 fill-red-500" /> by Abhijith Pratheesh
          </p>
          <div className="flex space-x-4 text-slate-400">
            <a href={`https://${personalInfo.github}`} target="_blank" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
