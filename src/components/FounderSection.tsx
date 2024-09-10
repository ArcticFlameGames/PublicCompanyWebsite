import React from 'react';

interface FounderProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const Founder: React.FC<FounderProps> = ({ name, title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center md:text-left px-4">
      <img className="w-full max-h-[200px] object-cover mb-4 rounded-full grayscale" src={image} alt={name} />
      <h3 className="text-2xl font-semibold mb-1">{name}</h3>
      <h4 className="text-lg font-medium mb-2 text-gray-600">{title}</h4>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  );
};

interface FoundersSectionProps {
  founders: FounderProps[];
}

const FoundersSection: React.FC<FoundersSectionProps> = ({ founders }) => {
  return (
    <section className="w-1/2 mx-auto py-8 px-4 md:px-16">
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
    </section>
  );
};

export default FoundersSection;