import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/details";
import Linkedin from "./icons/Linkedin";

const Contact = () => (
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
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-6"
        >
          <div className="bg-[#0f1626] border border-white/5 rounded-2xl p-6 flex items-center group hover:border-blue-500/30 transition-all">
            <div className=" bg-blue-500/10 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-all">
              <Mail size={24} className="text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Email Me</h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
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
              <a
                href={`tel:${personalInfo.phone.replace(/ /g, "")}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
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
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {personalInfo.linkedin.replace("linkedin.com/in/", "")}
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
          {/* <form className="bg-[#0f1626] border border-white/5 rounded-2xl p-8 space-y-6 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 grow flex flex-col">
              <label className="text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none p-3 rounded-lg text-white text-sm grow"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-linear-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25"
            >
              Send Message
            </button>
          </form> */}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;