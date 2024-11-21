import React from 'react';

interface NavBarProps {
  logoPath: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath }) => {
  return (
    <nav className="bg-sky-900 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logoPath} alt="Logo" className="max-h-[50px]" />
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-8 mx-auto">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#games" className="hover:text-gray-400">Games</a></li>
        <li><a href="#founders" className="hover:text-gray-400">About Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
