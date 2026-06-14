import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoPath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, logoPath }) => {
  return (
    <section className="min-h-[85vh] bg-cover bg-center justify-center items-center text-black flex flex-col sm:flex-row px-8 gap-8">
      <div className="flex-shrink-0">
        <img src={logoPath} alt="Arctic Flame Games logo" className="max-h-[200px]" />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
