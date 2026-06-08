import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications, involvements } from "../data/details";

const Certifications = () => (
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
          <span className="text-sm text-teal-400 font-bold uppercase tracking-wider">
            Achievements
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-6">
          Certifications & Workshops
        </h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 divide-y divide-white/5 backdrop-blur-lg">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 py-4 first:pt-0 last:pb-0 group"
            >
              <Award
                size={20}
                className="text-blue-400 group-hover:text-teal-400 transition-colors shrink-0"
              />
              <span className="text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base">
                {cert}
              </span>
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
          <span className="text-sm text-purple-400 font-bold uppercase tracking-wider">
            Leadership
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-6">
          Extracurricular & Volunteering
        </h2>
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {involvements.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">
                {item.role}
              </h3>
              <p className="text-sm text-slate-400">{item.organization}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Certifications;