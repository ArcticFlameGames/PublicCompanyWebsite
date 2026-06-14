import React, { useState } from 'react';

interface NavBarProps {
  logoPath: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex-shrink-0">
        <img src={logoPath} alt="Arctic Flame Games logo" className="max-h-[50px]" />
      </div>
      <ul className="hidden md:flex space-x-8 mx-auto">
        <li><a href="#home" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium">Home</a></li>
        <li><a href="#games" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium">Games</a></li>
        <li><a href="#story" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium">Our Story</a></li>
        <li><a href="#founders" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium">About Us</a></li>
      </ul>
      <button
        className="md:hidden ml-auto p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      {menuOpen && (
        <ul className="w-full flex flex-col items-center space-y-4 py-4 md:hidden border-t border-slate-800 mt-4">
          <li><a href="#home" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#games" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium" onClick={() => setMenuOpen(false)}>Games</a></li>
          <li><a href="#story" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium" onClick={() => setMenuOpen(false)}>Our Story</a></li>
          <li><a href="#founders" className="text-slate-300 hover:text-sky-400 transition-colors duration-200 font-medium" onClick={() => setMenuOpen(false)}>About Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
