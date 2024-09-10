import React from 'react';

interface NavBarProps {
  logoPath: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logoPath} alt="Logo" className="max-h-[25px]" />
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-4 mx-auto">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#games" className="hover:text-gray-400">Games</a></li>
        <li><a href="#" className="hover:text-gray-400">News</a></li>
        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
