import React from 'react';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Follow Us</h2>
      <div className="flex justify-center space-x-8">
        <a href="https://discord.gg/k44Sfuaxxr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaDiscord size={40} />
        </a>
        <a href="https://youtube.com/@arctic-flame-games?si=nMmQGsdKhYDB7Qax" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaYoutube size={40} />
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
