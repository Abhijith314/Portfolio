import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/details";
import Linkedin from "./icons/Linkedin";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50 relative scroll-mt-16">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-400 max-w-xl">
            Ready to contribute to enterprise projects as a Graduate Engineer
            Trainee. Let's build something together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Email Card */}
            <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-blue-500/30 transition-all shadow-xl backdrop-blur-md">
              <div className="p-3 bg-blue-500/10 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-all shrink-0">
                <Mail size={24} className="text-blue-400" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-white">Email Me</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-teal-500/30 transition-all shadow-xl backdrop-blur-md">
              <div className="p-3 bg-teal-500/10 rounded-xl mr-4 group-hover:bg-teal-500/20 transition-all shrink-0">
                <Phone size={24} className="text-teal-400" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-white">Call Me</h4>
                <a
                  href={`tel:${personalInfo.phone.replace(/ /g, "")}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors block truncate"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-purple-500/30 transition-all shadow-xl backdrop-blur-md">
              <div className="p-3 bg-purple-500/10 rounded-xl mr-4 group-hover:bg-purple-500/20 transition-all shrink-0">
                <Linkedin size={24} className="text-purple-400" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-white">LinkedIn</h4>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors block truncate"
                >
                  {personalInfo.linkedin.replace("linkedin.com/in/", "")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;