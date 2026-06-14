import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoPath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, logoPath }) => {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-slate-950 via-sky-950/40 to-slate-950 flex flex-col sm:flex-row justify-center items-center px-8 gap-10 md:gap-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-orange-900/10 pointer-events-none" />
      <div className="flex-shrink-0 relative drop-shadow-2xl">
        <div className="absolute inset-0 bg-sky-400/10 rounded-full blur-3xl scale-150" />
        <img src={logoPath} alt="Arctic Flame Games logo" className="relative max-h-[220px] drop-shadow-2xl" />
      </div>
      <div className="text-center sm:text-left relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-white to-orange-400 bg-clip-text text-transparent leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a href="#games" className="px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25 text-center">
            Explore Our Games
          </a>
          <a href="#story" className="px-8 py-3 border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200 text-center">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
