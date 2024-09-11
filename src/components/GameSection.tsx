import React from 'react';
import { SiGoogleplay } from 'react-icons/si';

interface GameSectionProps {
  gameTitle: string;
  description: string;
  image: string;
  linkText: string;
  link: string;
  isGooglePlayLink: boolean;
}

const GameSection: React.FC<GameSectionProps> = ({ gameTitle, description, image, linkText, link, isGooglePlayLink }) => {
  return (
    <section className="flex flex-col md:flex-row items-center py-8 px-4 md:px-16">
      <img className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 md:mr-8" src={image} alt={gameTitle} />
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">{gameTitle}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        {isGooglePlayLink ? (
          <a className="inline-flex items-center border border-black bg-white-500 text-black rounded px-4 py-2 hover:bg-gray-400 justify-center" href={link} target="_blank" rel="noopener noreferrer">
            <SiGoogleplay size={24} className="text-green-500 hover:text-green-700 mr-2" />
            {linkText}
          </a>
        ) : (
          <a className="bg-slate-500 text-white rounded p-4 hover:bg-slate-600" href={link}>{linkText}</a>
        )}
      </div>
    </section>
  );
};

export default GameSection;
