import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, ChevronRight, Sun, Moon, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenBooking, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { modelInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Motion Reels', href: '#motion' },
    { label: 'Measurements', href: '#stats' },
    { label: 'Comp Card', href: '#comp-card' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl transition-all duration-300">
      {/* Capsule / Floating Pill Navigation Bar */}
      <div 
        className={`w-full rounded-full glass-nav-capsule px-3 sm:px-6 py-2 sm:py-3 shadow-2xl flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'ring-1 ring-gold-500/20' : ''
        }`}
      >
        {/* Brand / Logo - Strictly single line with whitespace-nowrap */}
        <a 
          href="#" 
          className="group flex flex-col items-start focus:outline-none pl-1 sm:pl-2 shrink-0 min-w-0"
        >
          <span className="font-serif text-base sm:text-2xl font-normal tracking-[0.12em] sm:tracking-[0.2em] text-[#1c130e] dark:text-white uppercase group-hover:text-amber-700 dark:group-hover:text-gold-400 transition-colors duration-300 whitespace-nowrap">
            {modelInfo.name}
          </span>
          <span className="text-[6.5px] sm:text-[8px] tracking-[0.22em] sm:tracking-[0.3em] text-[#7a6455] dark:text-neutral-400 uppercase font-sans -mt-0.5 whitespace-nowrap">
            Kashmir • Portfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-[#4a382c] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-white relative py-1 transition-colors duration-200 group font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#991b1b] dark:bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Action / Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
          {/* Dark / Bright Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 sm:p-2.5 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-gold-400 transition-colors shrink-0"
            title={theme === 'dark' ? 'Switch to Bright Mode (Kashmir Theme)' : 'Switch to Dark Mode'}
            aria-label="Toggle Bright/Dark Mode"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-gold-400 hover:rotate-45 transition-transform sm:w-[17px] sm:h-[17px]" />
            ) : (
              <Moon size={15} className="text-[#991b1b] hover:-rotate-12 transition-transform sm:w-[17px] sm:h-[17px]" />
            )}
          </button>

          {/* Instagram Button */}
          <a
            href={modelInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-2.5 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-white transition-colors shrink-0"
            title="Follow on Instagram"
          >
            <Instagram size={16} />
          </a>

          {/* Bookings Button */}
          <button
            onClick={onOpenBooking}
            className="text-[9px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#991b1b] text-white hover:bg-[#801414] dark:bg-gold-500 dark:text-black dark:hover:bg-gold-400 transition-all duration-300 font-semibold shadow-md shrink-0 whitespace-nowrap"
          >
            Bookings
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#1c130e] dark:text-white p-1.5 sm:p-2 rounded-full glass-card focus:outline-none shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Drawer Attached below Capsule */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-3xl glass-panel px-6 py-6 flex flex-col space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 border border-[#c59b27]/25 dark:border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.25em] text-[#4a382c] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-gold-400 transition-colors flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3 font-medium"
            >
              <span>{link.label}</span>
              <ChevronRight size={14} className="text-neutral-400" />
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center text-xs tracking-[0.25em] uppercase py-3 rounded-full bg-[#991b1b] text-white dark:bg-gold-500 dark:text-black font-semibold shadow-lg"
            >
              Inquire / Bookings
            </button>
            <div className="flex items-center justify-between pt-1 px-1">
              <a
                href={modelInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-[#7a6455] dark:text-neutral-400 flex items-center space-x-2"
              >
                <Instagram size={15} />
                <span>{modelInfo.instagramHandle}</span>
              </a>

              <button
                onClick={onToggleTheme}
                className="text-xs tracking-wider uppercase flex items-center space-x-1.5 px-3 py-1 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300"
              >
                {theme === 'dark' ? <Sun size={13} className="text-gold-400" /> : <Moon size={13} className="text-[#991b1b]" />}
                <span>{theme === 'dark' ? 'Bright' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
