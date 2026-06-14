import React from 'react';

const CompanyStorySection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-sky-950/30 to-slate-900 border-y border-slate-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-3">Montreal, Canada</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Story</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto mb-8 rounded-full" />
        <p className="text-lg leading-8 mb-6 text-slate-300">
          Arctic Flame Games was born in Montreal out of a shared passion for creating unforgettable gaming experiences.
          Founded by two dedicated friends, our mission is to ignite the spark of adventure in every player.
        </p>
        <p className="text-lg leading-8 text-slate-400">
          With each game, we aim to push the boundaries of creativity and innovation, crafting immersive worlds
          where players can explore, build, and forge their own path. Join us on this journey, and become a part
          of the Arctic Flame family!
        </p>
      </div>
    </section>
  );
};

export default CompanyStorySection;
