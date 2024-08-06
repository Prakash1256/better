import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-green-900 text-white fixed top-0 left-0 z-50">
      <h1 className="text-2xl">Better</h1>
      <button className="hamburger md:hidden" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-container ${isMenuOpen ? 'open' : ''} md:flex`}>
        <Link href="/" className="px-4" onClick={closeMenu}>Home</Link>
        <Link href="/about-us" className="px-4" onClick={closeMenu}>About Us</Link>
        <Link href="/mortgage-calculator" className="px-4" onClick={closeMenu}>Mortgage Calculator</Link>
        <Link href="/start" className="px-4" onClick={closeMenu}>Start</Link>
        <Link href="/signin" className="px-4" onClick={closeMenu}>Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
