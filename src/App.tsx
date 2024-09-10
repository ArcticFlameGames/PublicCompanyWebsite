import React from 'react';
import NavBar from './components/NavBar.tsx';
import HeroSection from './components/HeroSection.tsx';
import GameSection from './components/GameSection.tsx';
import FoundersSection from './components/FounderSection.tsx';
import Footer from './components/Footer.tsx';

const foundersData = [
  {
    name: 'Matthieu Smith',
    title: 'Co-Founder & CTO',
    description: 'Matthieu is an accomplished leader in tech, proven track record of leading high-performing teams and managers to success. With 10 years of experience in software development, I possess a strong background in mobile native development, game development, front-end development and backend development.',
    image: '/images/MattPic.jpg',
  },
  {
    name: 'Simon Tremblay',
    title: 'Co-Founder & CCO',
    description: 'Simon Tremblay, a passionate 3D animator with over 4 years of hands-on experience in bringing imagination to life through animation. In addition to his expertise in animation, also honed his skills as a marketing coordinator over 5 years, blending creativity with strategic thinking to deliver impactful campaigns.',
    image: '/images/SimonPic.png',
  },
];

const App: React.FC = () => {
  return (
    <div className="font-sans" id="home">
      <NavBar logoPath="/images/LogoWithText.png" />
      <HeroSection 
        title="Arctic Flame Games Inc."
        subtitle="Ignite Your Journey, Embrace the Flame!"
        logoPath="/images/ArcticFlameGames-Logo-NoBackground.png"
      />
      <div className="bg-gray-100" id="games">
        <GameSection 
          gameTitle="Arcanus Legends"
          description="A new online co-op action RPG dungeon crawler where you are a creation of a fallen god, craft any spell imaginable and rebuild villages while facing epic challenges in a magical universe."
          image="/images/arcanuslegends.jpg"
        />
        <GameSection 
          gameTitle="Pack It!"
          description="Get ready to test your packing skills in Pack It, the ultimate puzzle game! We've added exciting new features to enhance your gaming experience."
          image="/images/packit-featured.png"
        />
      </div>
      <div className="bg-gray-100" id="founders">
        <FoundersSection founders={foundersData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
