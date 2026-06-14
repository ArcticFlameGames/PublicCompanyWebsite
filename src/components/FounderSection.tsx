import React from 'react';

interface FounderProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const Founder: React.FC<FounderProps> = ({ name, title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
        <img
          className="relative w-44 h-44 object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-slate-700 group-hover:ring-sky-500"
          src={image}
          alt={name}
        />
      </div>
      <h3 className="text-2xl font-bold mb-1 text-white">{name}</h3>
      <h4 className="text-sm font-semibold mb-4 text-sky-400 tracking-wide uppercase">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

interface FoundersSectionProps {
  founders: FounderProps[];
}

const FoundersSection: React.FC<FoundersSectionProps> = ({ founders }) => {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-3">The Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Meet the Founders</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <Founder
              key={index}
              name={founder.name}
              title={founder.title}
              description={founder.description}
              image={founder.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
