import React from 'react';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-sky-950/20 to-slate-900 border-y border-slate-800/50">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-3">Stay Connected</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the Community</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto mb-10 rounded-full" />
        <div className="flex justify-center gap-8">
          <a
            href="https://discord.gg/k44Sfuaxxr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-indigo-500 group-hover:bg-indigo-950/50 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-500/20 group-hover:scale-110">
              <FaDiscord size={40} className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-200" />
            </div>
            <span className="text-slate-400 group-hover:text-indigo-400 font-medium transition-colors duration-200">Discord</span>
          </a>
          <a
            href="https://youtube.com/@arctic-flame-games?si=nMmQGsdKhYDB7Qax"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-red-500 group-hover:bg-red-950/50 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-red-500/20 group-hover:scale-110">
              <FaYoutube size={40} className="text-slate-400 group-hover:text-red-500 transition-colors duration-200" />
            </div>
            <span className="text-slate-400 group-hover:text-red-400 font-medium transition-colors duration-200">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
