import React from 'react';
import NavBar from './components/NavBar.tsx';
import HeroSection from './components/HeroSection.tsx';
import GameSection from './components/GameSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="font-sans">
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
      <Footer />
    </div>
  );
};

export default App;
