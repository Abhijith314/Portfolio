import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/details";

const Experience = () => (
  <section
    id="experience"
    className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16"
  >
    <div className="flex flex-col items-center text-center mb-12">
      <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">
        My Career Path
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Internships & Professional Growth
      </h2>
    </div>

    <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-blue-500 before:to-transparent">
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
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/5 h-full">
          {/*bg-[#0f1626] border border-white/5 rounded-2xl flex flex-col overflow-hidden group hover:border-white/20 transition-all hover:shadow-xl hover:shadow-blue-500/5 h-full */}
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
);

export default Experience;