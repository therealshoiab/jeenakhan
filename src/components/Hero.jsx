import React from 'react';
import { ArrowDown, Play, FileText, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenLightbox, onOpenBooking }) {
  const { modelInfo, photos, videos } = portfolioData;

  const heroPhoto = photos.find(p => p.src === modelInfo.heroImage) || photos[0];
  const secondaryPhoto = photos.find(p => p.src === modelInfo.heroSecondary) || photos[1];
  const previewVideo = videos[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 pb-16 px-5 sm:px-8 md:px-12 w-full">
      {/* Editorial Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] h-[400px] bg-gradient-to-tr from-amber-600/10 via-rose-700/5 to-transparent dark:from-amber-500/10 dark:via-neutral-800/15 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 text-left z-10">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1.5px] w-8 bg-[#991b1b] dark:bg-gold-400"></span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#991b1b] dark:text-gold-400 font-semibold">
              Kashmir • High Fashion & Editorial
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-[0.14em] text-[#1c130e] dark:text-white leading-none uppercase">
              {modelInfo.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#5c4b40] dark:text-neutral-300 font-light max-w-lg leading-relaxed pt-1">
              {modelInfo.headline}
            </p>
          </div>

          {/* Key Vitals Quick Strip with Glassmorphism */}
          <div className="pt-2 pb-2">
            <div className="glass-card p-4 sm:p-5 rounded-2xl grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
              <div className="text-center sm:text-left">
                <span className="block text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans">Height</span>
                <span className="text-xs sm:text-base font-serif text-[#1c130e] dark:text-white font-medium">{modelInfo.vitals.height.imperial}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans">Bust</span>
                <span className="text-xs sm:text-base font-serif text-[#1c130e] dark:text-white font-medium">{modelInfo.vitals.bust.imperial}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans">Waist</span>
                <span className="text-xs sm:text-base font-serif text-[#1c130e] dark:text-white font-medium">{modelInfo.vitals.waist.imperial}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans">Hips</span>
                <span className="text-xs sm:text-base font-serif text-[#1c130e] dark:text-white font-medium">{modelInfo.vitals.hips.imperial}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <a
              href="#portfolio"
              className="inline-flex items-center space-x-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#991b1b] text-white hover:bg-[#801414] dark:bg-white dark:text-black dark:hover:bg-gold-400 text-xs uppercase tracking-[0.25em] font-semibold rounded-full transition-all duration-300 shadow-xl group"
            >
              <span>Explore Works</span>
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#comp-card"
              className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 sm:py-4 glass-card text-[#2a1d15] dark:text-neutral-200 text-xs uppercase tracking-[0.22em] font-medium rounded-full hover:border-[#991b1b] dark:hover:border-gold-400 hover:text-[#991b1b] dark:hover:text-white transition-all duration-300"
            >
              <FileText size={15} className="text-[#991b1b] dark:text-gold-400" />
              <span>Comp Card</span>
            </a>
          </div>

          {/* Agency & Representation Note */}
          <div className="pt-1 text-xs text-[#7a6455] dark:text-neutral-400 tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{modelInfo.agency}</span>
          </div>
        </div>

        {/* Right High-Fashion Image Showcase */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4] group">
            {/* Ambient Shadow Layer */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/15 to-rose-700/10 dark:from-gold-500/15 dark:to-amber-600/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none"></div>

            {/* Main Featured Editorial Photo - Completely Uncovered on Mobile */}
            <div 
              onClick={() => onOpenLightbox(0)}
              className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-[#c59b27]/30 dark:border-white/10 shadow-2xl cursor-pointer bg-[#141419]"
            >
              <img
                src={heroPhoto.thumb || heroPhoto.src}
                alt={`${modelInfo.name} Editorial Portrait`}
                className="w-full h-full object-cover object-center img-editorial"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Tag Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold-400 font-sans block">Cover Story</span>
                  <span className="text-xs sm:text-sm font-serif text-white tracking-wider">Jeena Khan</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-neutral-300">
                  Enlarge
                </span>
              </div>
            </div>

            {/* Floating Editorial Look Card - Clean edge-to-edge rounded-2xl design matching motion reel */}
            <div 
              onClick={() => onOpenLightbox(1)}
              className="hidden xl:block absolute -bottom-6 -left-6 w-36 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform border border-white/20 hover:border-gold-400/80 bg-neutral-900 z-20 group/card"
              title="View Editorial Look"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={secondaryPhoto.thumb || secondaryPhoto.src}
                  alt="Editorial Secondary Look"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover/card:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-1.5 inset-x-0 text-center text-[8px] uppercase tracking-widest text-white/90 font-sans">
                  Couture Look
                </div>
              </div>
            </div>

            {/* Floating Video Reel Peek - Clean border as originally requested, NO extra glass padding wrapper */}
            {previewVideo && (
              <a
                href="#motion"
                className="hidden lg:block absolute -top-5 -right-5 w-36 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform border border-white/20 hover:border-gold-400/80 bg-neutral-900 group/video"
                title="Watch Motion Reels"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <video
                    src={previewVideo.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-85 group-hover/video:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover/video:text-gold-400 group-hover/video:border-gold-400 transition-colors">
                      <Play size={12} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-1.5 inset-x-0 text-center text-[8px] uppercase tracking-widest text-white/90 font-sans">
                    Motion Reel
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#portfolio"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-[#7a6455] dark:text-neutral-400 hover:text-[#991b1b] dark:hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-sans">Scroll</span>
        <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform animate-bounce" />
      </a>
    </section>
  );
}
