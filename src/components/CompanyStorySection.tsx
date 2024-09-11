import React from 'react';

const CompanyStorySection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-7 mb-6">
          Arctic Flame Games was born in Montreal out of a shared passion for creating unforgettable gaming experiences.
          Founded by two dedicated friends, our mission is to ignite the spark of adventure in every player.
        </p>
        <p className="text-lg leading-7">
          With each game, we aim to push the boundaries of creativity and innovation, crafting immersive worlds 
          where players can explore, build, and forge their own path. Join us on this journey, and become a part 
          of the Arctic Flame family!
        </p>
      </div>
    </section>
  );
};

export default CompanyStorySection;
