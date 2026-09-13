import React, { useState, useMemo, useRef } from 'react';
import { Maximize2, Sparkles, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(24);
  const scrollContainerRef = useRef(null);
  const { photos } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Works', count: photos.length },
    { id: 'editorial', label: 'Editorial', count: photos.filter(p => p.category === 'editorial').length },
    { id: 'high-fashion', label: 'High Fashion', count: photos.filter(p => p.category === 'high-fashion').length },
    { id: 'commercial', label: 'Commercial & Beauty', count: photos.filter(p => p.category === 'commercial').length },
    { id: 'polaroids', label: 'Polaroids & Digitals', count: photos.filter(p => p.category === 'polaroids').length },
  ];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [activeCategory, photos]);

  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredPhotos.length));
  };

  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-28 px-5 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header & Category Nav */}
        <div className="flex flex-col space-y-6 sm:space-y-8 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#c59b27]/20 dark:border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] dark:text-gold-400 font-semibold block mb-2">
                Selected Works • Kashmir & Global
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase">
                Editorial Portfolio
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5c4b40] dark:text-neutral-400 max-w-sm font-light">
              Featuring runway, campaign editorials, high fashion stories, and natural digitals.
            </p>
          </div>

          {/* Category Filter Pills: HORIZONTALLY SCROLLABLE (Left-Right) as requested */}
          <div className="relative w-full flex items-center">
            {/* Left Scroll Button for Desktop */}
            <button
              onClick={() => scrollCategories('left')}
              className="hidden md:flex p-2 mr-2 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-gold-400 shrink-0 z-10"
              aria-label="Scroll Categories Left"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Horizontal Scrollable Categories Track */}
            <div
              ref={scrollContainerRef}
              className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-2.5 sm:gap-3 py-1 px-1 w-full"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#991b1b] text-white shadow-lg dark:bg-white dark:text-black dark:shadow-white/10'
                        : 'glass-card text-[#4a382c] dark:text-neutral-300 hover:border-[#991b1b]/50 dark:hover:border-gold-400/50'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-white/20 text-white dark:bg-black/10 dark:text-neutral-900 font-bold' 
                        : 'text-[#7a6455] dark:text-neutral-400 bg-black/5 dark:bg-white/5'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Button for Desktop */}
            <button
              onClick={() => scrollCategories('right')}
              className="hidden md:flex p-2 ml-2 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#991b1b] dark:hover:text-gold-400 shrink-0 z-10"
              aria-label="Scroll Categories Right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Masonry / Column Editorial Grid: High Performance WebP Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedPhotos.map((photo) => {
            const originalIndex = photos.findIndex((p) => p.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(originalIndex)}
                className="group relative aspect-[3/4] bg-[#121217] rounded-2xl overflow-hidden cursor-pointer border border-[#c59b27]/15 dark:border-white/5 hover:border-[#991b1b] dark:hover:border-gold-400/60 transition-all duration-500 shadow-md hover:shadow-2xl"
              >
                {/* Fast-loading WebP thumbnail with full fallback */}
                <img
                  src={photo.thumb || photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top img-editorial"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6">
                  <div className="self-end">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-gold-400 transition-colors">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans block mb-1">
                      {photo.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-sm sm:text-base font-serif text-white tracking-wide leading-snug">
                      {photo.title}
                    </h3>
                    <span className="text-[10px] text-neutral-300 tracking-widest mt-1 block">
                      {photo.year}
                    </span>
                  </div>
                </div>

                {/* Corner Indicator in Default State */}
                <div className="absolute bottom-3 right-3 opacity-60 group-hover:opacity-0 transition-opacity">
                  <span className="text-[8px] uppercase tracking-widest text-neutral-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                    3:4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="mt-14 sm:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center space-x-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-[#c59b27]/30 dark:border-white/20 text-[#1c130e] dark:text-white text-xs uppercase tracking-[0.25em] hover:bg-[#991b1b] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-xl group font-semibold glass-card"
            >
              <span>Load More Works ({filteredPhotos.length - visibleCount} remaining)</span>
              <ChevronDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
