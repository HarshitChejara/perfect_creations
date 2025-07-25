'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-6 flex items-center justify-between ${
        isHome ? 'text-white' : 'text-black'
      }`}
    >
      {/* Logo */}
      <div className="relative w-32 h-10">
        <Image
          src={isHome ? '/white_logo.png' : '/dark_logo.png'}
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Nav */}
      <nav className="hidden md:flex gap-8 uppercase text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
