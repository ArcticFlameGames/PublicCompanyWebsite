import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoPath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, logoPath }) => {
  return (
    <section className="h-[calc(100vh-200px)] bg-cover bg-center justify-center items-center text-black flex">
      {/* Logo */}
      <div className="flex-shrink-0 mr-4">
        <img src={logoPath} alt="Logo" className="max-h-[200px]" />
      </div>
      {/* Text Content */}
      <div className="text-left">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
