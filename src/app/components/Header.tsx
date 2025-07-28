'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-6 flex items-center justify-between ${
        isHome ? 'text-white' : 'text-black'
      }`}
    >
      {/* Logo (header only, conditionally white/dark) */}
      <div className="relative w-32 h-10">
        <Image
          src={isHome ? '/white_logo.png' : '/dark_logo.png'}
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 uppercase text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black z-40">
          {/* Top bar: fixed dark logo and close button */}
          <div className="flex items-center justify-between px-6 py-6">
            {/* Dark logo (always dark in mobile menu) */}
            <div className="relative w-32 h-10">
              <Image
                src="/dark_logo.png"
                alt="Mobile Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Close button (always dark) */}
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={28} className="text-black" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-left gap-6 text-lg mt-10 px-6">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/projects" onClick={toggleMenu}>Projects</Link>
            <Link href="/careers" onClick={toggleMenu}>Careers</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
