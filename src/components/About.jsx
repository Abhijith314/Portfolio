import { useState } from "react"; // Added useState
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "../data/details";

const About = () => {
  const [imgError, setImgError] = useState(false); // Added state for image fallback

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 space-y-6"
        >
          <div className="flex items-center space-x-2">
            <div className="h-0.5 w-10 bg-blue-500"></div>
            <span className="text-sm text-blue-400 font-bold uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            Engineering The Future.
          </h2>

          {/* Small Profile Picture in About Section - Fixed hidden/flex conflict */}
          <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500/20 to-teal-400/20 border-2 border-white/10 overflow-hidden">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">AP</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/profile-picture.jpg"
                    alt="Abhijith Pratheesh"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-slate-800"></div>
            </div>
            <div>
              <h3 className="font-bold text-white">Abhijith Pratheesh</h3>
              <p className="text-sm text-slate-400">B.Tech Computer Science</p>
              <p className="text-xs text-slate-500">2026 Graduate</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center text-slate-300">
              <GraduationCap className="mr-3 text-teal-400" size={20} />
              <div>
                <div className="font-semibold text-white">B.Tech in CSE</div>
                <div className="text-sm text-slate-400">
                  CGPA: 8.0 (2026 Graduate)
                </div>
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
                <span className="text-sm text-slate-400">
                  Higher Secondary Education
                </span>
              </div>
              <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-2xl font-bold text-white">95%</span>
                <span className="text-sm text-slate-400">
                  Secondary Education (10th)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;