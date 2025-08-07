'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'underline underline-offset-4 font-semibold'
      : 'hover:opacity-80';

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-20 py-6 flex items-center justify-between transition-all duration-300 ${
        isHome && !scrolled ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      {/* Logo */}
      <div className="relative w-32 h-10">
        <Image
          src={
            isHome && !scrolled ? '/white_logo.png' : '/dark_logo.png'
          }
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 uppercase text-sm">
        {navLinks.map(({ name, path }) => (
          <Link key={path} href={path} className={getLinkClass(path)}>
            {name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
        {menuOpen ? (
          <X size={24} className="text-black" />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black z-40">
          <div className="flex items-center justify-between px-4 py-6">
            <div className="relative w-32 h-10">
              <Image
                src="/dark_logo.png"
                alt="Mobile Logo"
                fill
                className="object-contain"
              />
            </div>
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={28} className="text-black" />
            </button>
          </div>

          <div className="flex flex-col items-start gap-6 text-lg mt-10 px-4">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                onClick={toggleMenu}
                className={getLinkClass(path)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
