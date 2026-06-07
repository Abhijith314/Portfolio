import { motion } from "framer-motion";
import { skills } from "../data/details";

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900/50 relative scroll-mt-16">
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">
          My Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Technical Expertise
        </h2>
        <p className="text-slate-400 max-w-2xl">
          A curated list of my hard skills and tools that I use to bring ideas
          to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0f1626] border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all hover:shadow-xl hover:shadow-blue-500/5 h-full duration-300 flex flex-col group"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              {/* Updated gradient class */}
              <span className="w-1.5 h-6 bg-linear-to-b from-blue-500 to-teal-400 rounded-full mr-3"></span>
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#0f1626] group-hover:bg-blue-600/10 text-slate-300 group-hover:text-blue-300 text-sm rounded-lg border border-white/5 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;