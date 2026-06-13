import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail } from "lucide-react";
import { personalInfo } from "../data/details";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";

const Hero = ({ scrollTo }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-400 to-cyan-400">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
            {personalInfo.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Turning complex problems into elegant, real-world solutions. 
            {/* B.Tech Computer Science student with a focus on Frontend Engineering, Python,
            and AI integration. */}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-linear-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center group"
            >
              View My Work
              <ChevronRight
                size={18}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-4 text-slate-400">
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
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
          <div className="relative w-92 h-92 sm:w-90 sm:h-90 group">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-teal-400 rounded-3xl rotate-6 blur-lg opacity-40 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl -rotate-6 blur-lg opacity-20 group-hover:-rotate-12 transition-all duration-500"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-3xl border border-white/10 flex flex-col justify-center items-center p-6 text-center backdrop-blur-3xl">
              {/* Profile Picture - Fixed hidden/flex conflict */}
              <div className="relative mb-4">
                <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-linear-to-br from-blue-500/20 to-teal-400/20 border-4 border-white/10 flex items-center justify-center overflow-hidden">
                  {/* {imgError ? ( */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                      <div className="text-center">
                        <img
                          src="/profile-picture.jpg"
                          alt="Abhijith Pratheesh"
                        />
                        {/* <div className="text-4xl font-bold text-white mb-1">AP</div>
                        <div className="text-xs text-slate-400">Profile Picture</div> */}
                      </div>
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Abhijith Pratheesh
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                 Full-Stack Developer & BTech CS Graduate
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">
                  React
                </span>
                <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">
                  Python
                </span>
                <span className="px-2 py-1 bg-white/5 text-xs text-slate-300 rounded-md">
                  AI/ML
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;