import { Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/details";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Footer = () => (
  <footer className="py-6 border-t border-white/5 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-lg">
          AP
        </div>
        <span className="font-bold text-white">Abhijith Pratheesh</span>
      </div>
      <p className="text-sm text-slate-400 flex items-center">
        Designed and built with{" "}
        <Heart
          size={16}
          className="text-red-500 mx-1 fill-red-500"
        />{" "}
        by Abhijith Pratheesh
      </p>
      <div className="flex space-x-4 text-slate-400">
        <a
          href={`https://${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href={`https://${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;