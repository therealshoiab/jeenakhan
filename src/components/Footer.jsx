import React from 'react';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { modelInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 sm:py-16 px-4 sm:px-8 md:px-12 bg-[#f0e8dc] dark:bg-[#060608] border-t border-[#c59b27]/20 dark:border-white/5 no-print text-[#5c4b40] dark:text-neutral-400 text-xs transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 w-full text-center md:text-left">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-[#1c130e] dark:text-white uppercase whitespace-nowrap">
            {modelInfo.name}
          </span>
          <p className="text-[#7a6455] dark:text-neutral-500 text-[11px] tracking-wider font-light max-w-xs sm:max-w-none">
            © {new Date().getFullYear()} {modelInfo.fullName}. All editorial & campaign rights reserved.
          </p>
        </div>

        {/* Center Links - Fully wrapped and centered so text NEVER runs off screen */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7 gap-y-2 uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] max-w-full px-2 text-center">
          <a href="#portfolio" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">Portfolio</a>
          <a href="#motion" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">Motion</a>
          <a href="#stats" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">Vitals</a>
          <a href="#comp-card" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">Comp Card</a>
          <a href="#about" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">About</a>
          <a href="#contact" className="hover:text-[#991b1b] dark:hover:text-white transition-colors py-1">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center space-x-3">
          <a
            href={modelInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-white transition-colors"
            title="Instagram"
          >
            <Instagram size={15} />
          </a>
          <a
            href={`mailto:${modelInfo.email}`}
            className="p-2.5 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-white transition-colors"
            title="Email"
          >
            <Mail size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-gold-400 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
