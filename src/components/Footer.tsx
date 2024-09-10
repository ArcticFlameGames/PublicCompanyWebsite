import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© 2024 Arctic Flame Games</p>
      <p className="mt-2">
        <a href="mailto:contactus@arcticflamegames.com" className="hover:text-gray-400">Contact</a> | <a href="#home" className="hover:text-gray-400">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
