import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/details";

const Projects = () => (
  <section id="projects" className="py-20 bg-slate-900/50 relative scroll-mt-16">
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Building projects using web technologies, IoT and Machine Learning.
          Here's a showcase of some of my works.
        </p>
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
            <div className="p-6 grow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  {project.type}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
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
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-md"
                  >
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
);

export default Projects;