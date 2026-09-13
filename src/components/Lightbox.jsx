import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Lightbox({ currentIndex, onClose, onNavigate }) {
  const [zoomed, setZoomed] = useState(false);
  const { photos } = portfolioData;

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, onClose, onNavigate, photos.length]);

  if (!currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none animate-in fade-in duration-200">
      {/* Lightbox Top Control Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 z-20">
        <div className="flex items-center space-x-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-sans">
            {currentPhoto.category.replace('-', ' ')}
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-xs tracking-widest text-neutral-400 font-mono">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setZoomed(!zoomed)}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            title={zoomed ? 'Fit to Screen' : 'Zoom In'}
          >
            {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>

          <a
            href={currentPhoto.src}
            download
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            title="Download Image"
          >
            <Download size={18} />
          </a>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            title="Close (Esc)"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div 
        className="relative flex-1 flex items-center justify-center p-4 md:p-10 overflow-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Navigation Arrow Previous */}
        <button
          onClick={() => {
            setZoomed(false);
            onNavigate((currentIndex - 1 + photos.length) % photos.length);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all z-20 shadow-2xl"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Current Image */}
        <div className={`relative transition-all duration-300 ${zoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title}
            onClick={() => setZoomed(!zoomed)}
            className="max-h-[82vh] max-w-[90vw] md:max-w-[80vw] object-contain rounded-lg shadow-2xl mx-auto"
          />
        </div>

        {/* Navigation Arrow Next */}
        <button
          onClick={() => {
            setZoomed(false);
            onNavigate((currentIndex + 1) % photos.length);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all z-20 shadow-2xl"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Lightbox Bottom Caption Bar */}
      <div className="px-6 py-4 border-t border-white/10 bg-black/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 z-20 text-center sm:text-left">
        <div>
          <h4 className="text-base font-serif text-white tracking-wide">
            {currentPhoto.title}
          </h4>
          <span className="text-[10px] tracking-widest text-neutral-400 font-sans uppercase">
            Model: {portfolioData.modelInfo.name} • Fashion Story {currentPhoto.year}
          </span>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
          Use ← and → arrows to navigate
        </div>
      </div>
    </div>
  );
}
