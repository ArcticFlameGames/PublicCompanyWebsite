import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 text-center">
      <p className="text-white font-semibold mb-1">Arctic Flame Games</p>
      <p className="text-sm mb-3">© 2026 Arctic Flame Games Inc. All rights reserved.</p>
      <a href="mailto:contactus@arcticflamegames.com" className="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-200">
        contactus@arcticflamegames.com
      </a>
    </footer>
  );
};

export default Footer;
