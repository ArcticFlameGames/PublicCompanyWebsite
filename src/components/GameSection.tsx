import React from 'react';
import { SiGoogleplay, SiSteam } from 'react-icons/si';

interface GameSectionProps {
  gameTitle: string;
  description: string;
  image: string;
  linkText: string;
  link: string;
  isGooglePlayLink: boolean;
  reversed?: boolean;
}

const GameSection: React.FC<GameSectionProps> = ({ gameTitle, description, image, linkText, link, isGooglePlayLink, reversed }) => {
  return (
    <section className={`flex flex-col ${reversed ? 'md:flex-row-reverse bg-slate-900' : 'md:flex-row bg-slate-950'} items-center py-16 px-4 md:px-20 gap-10 md:gap-16 border-b border-slate-800/50`}>
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          className="w-full h-auto object-cover rounded-2xl shadow-2xl ring-1 ring-slate-700 hover:ring-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/10"
          src={image}
          alt={gameTitle}
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{gameTitle}</h2>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">{description}</p>
        {isGooglePlayLink ? (
          <a
            className="inline-flex items-center gap-3 border border-slate-600 hover:border-green-500 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/10"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleplay size={22} className="text-green-400" />
            {linkText}
          </a>
        ) : (
          <a
            className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSteam size={22} className="text-white" />
            {linkText}
          </a>
        )}
      </div>
    </section>
  );
};

export default GameSection;
