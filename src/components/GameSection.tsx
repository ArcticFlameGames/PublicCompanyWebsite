import React from 'react';

interface GameSectionProps {
  gameTitle: string;
  description: string;
  image: string;
  linkText: string;
  link: string;
}

const GameSection: React.FC<GameSectionProps> = ({ gameTitle, description, image, linkText, link }) => {
  return (
    <section className="flex flex-col md:flex-row items-center py-8 px-4 md:px-16">
      <img className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 md:mr-8" src={image} alt={gameTitle} />
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">{gameTitle}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <a className="bg-slate-500 text-white rounded p-4 hover:bg-slate-600" href={link}>{linkText}</a>
      </div>
    </section>
  );
};

export default GameSection;
