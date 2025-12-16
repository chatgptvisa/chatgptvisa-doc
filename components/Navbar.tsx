'use client';

import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { ChevronDown, Github, Sun, Moon } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="font-bold text-2xl flex items-center gap-2">
            <span className="text-slate-900">VisaMate</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">

            {/* Immigration Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('immigrant')}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium"
              >
                Immigration <ChevronDown size={14} />
              </button>
              {openDropdown === 'immigrant' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  <Link href="/docs/eb1a" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">EB-1A (Extraordinary)</Link>
                  <Link href="/docs/eb2niw" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">EB-2 NIW</Link>
                  <Link href="/docs/eb1b" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">EB-1B (Professors)</Link>
                  <Link href="/docs/eb5" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">EB-5 (Investors)</Link>
                </div>
              )}
            </div>

            {/* Non-Immigration Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('nonimmigrant')}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium z-10"
              >
                NonImmigration <ChevronDown size={14} />
              </button>
              {openDropdown === 'nonimmigrant' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-20">
                  <Link href="/docs/o1" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">O-1 (Talent)</Link>
                  <Link href="/docs/h1b" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">H-1B (Work)</Link>
                  <Link href="/docs/l1" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">L-1 (Transfer)</Link>
                  <Link href="/docs/f1" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">F-1 (Student)</Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
              About
            </Link>
            <Link href="/cases" className="text-slate-600 hover:text-slate-900 font-medium">
              Success Stories
            </Link>
            <Link href="https://github.com/chatgptvisa/chatgptvisa-doc" target="_blank" className="text-slate-400 hover:text-slate-900">
              <Github size={20} />
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
