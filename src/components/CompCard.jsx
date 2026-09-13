import React from 'react';
import { Printer, Download, Instagram, Mail, MapPin, Sparkles, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CompCard() {
  const { modelInfo } = portfolioData;
  const { compCard, vitals } = modelInfo;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="comp-card" className="py-24 sm:py-28 px-5 sm:px-8 md:px-12 relative bg-[#faf6f0] dark:bg-[#09090c] border-t border-[#c59b27]/20 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header (Hidden in Print) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#c59b27]/20 dark:border-white/10 gap-6 no-print">
          <div>
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] dark:text-gold-400 font-semibold">
                Official Agency Composite Card
              </span>
              <span className="text-[#c59b27] dark:text-neutral-500">•</span>
              <span className="text-xs uppercase tracking-widest text-[#7a6455] dark:text-neutral-400">
                Kashmir, India
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase">
              Digital Comp Card
            </h2>
            <p className="text-sm text-[#5c4b40] dark:text-neutral-400 font-light mt-1">
              Standard agency composite portfolio sheet featuring uncropped beauty headshot, profile, 3/4 pose, and full-length body.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-2.5 px-6 py-3 bg-[#991b1b] text-white hover:bg-[#801414] dark:bg-white dark:text-black dark:hover:bg-gold-400 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl self-start md:self-auto"
          >
            <Printer size={16} />
            <span>Print / Save Comp Card</span>
          </button>
        </div>

        {/* The Comp Card Printable Canvas with Glassmorphic Luxury Styling */}
        <div className="comp-card-print glass-panel rounded-2xl overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 text-[#1c130e] dark:text-white w-full">
          {/* Card Top Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#c59b27]/20 dark:border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#991b1b] dark:text-gold-400 font-sans font-semibold block mb-1">
                Agency Spec Sheet • Kashmir Heritage
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-[0.16em] sm:tracking-[0.18em] text-[#1c130e] dark:text-white uppercase">
                {modelInfo.name}
              </h1>
              <span className="text-xs uppercase tracking-[0.25em] text-[#7a6455] dark:text-neutral-400 font-sans">
                {modelInfo.title}
              </span>
            </div>

            <div className="text-left sm:text-right text-xs text-[#5c4b40] dark:text-neutral-400 space-y-1">
              <div className="font-sans text-[#1c130e] dark:text-white tracking-wider font-medium">{modelInfo.agency}</div>
              <div className="tracking-widest flex sm:justify-end items-center space-x-1.5">
                <MapPin size={12} className="text-[#991b1b] dark:text-gold-400" />
                <span>{modelInfo.location}</span>
              </div>
              <div className="text-[#991b1b] dark:text-gold-400 font-sans tracking-widest">{modelInfo.instagramHandle}</div>
            </div>
          </div>

          {/* 4-Image Standard Agency Layout: Completely Uncropped 4-Look Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {/* Look 1: Primary Headshot */}
            <div className="relative group rounded-xl overflow-hidden glass-card aspect-[3/4]">
              <img
                src={compCard.headshot}
                alt={`${modelInfo.name} Primary Headshot`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/30">
                <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-medium">
                  01 • Headshot
                </span>
              </div>
              <div className="absolute bottom-3 inset-x-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2.5 rounded-lg flex items-center justify-between">
                <span className="text-xs font-serif text-white tracking-wide">Natural Light</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">Beauty</span>
              </div>
            </div>

            {/* Look 2: Profile Study */}
            <div className="relative group rounded-xl overflow-hidden glass-card aspect-[3/4]">
              <img
                src={compCard.profile}
                alt={`${modelInfo.name} Profile`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[9px] uppercase tracking-widest text-white/90 font-sans font-medium">
                  02 • Profile
                </span>
              </div>
              <div className="absolute bottom-3 inset-x-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2.5 rounded-lg flex items-center justify-between">
                <span className="text-xs font-serif text-white tracking-wide">Couture Silhouette</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">Profile</span>
              </div>
            </div>

            {/* Look 3: 3/4 Angle Editorial */}
            <div className="relative group rounded-xl overflow-hidden glass-card aspect-[3/4]">
              <img
                src={compCard.threeQuarter}
                alt={`${modelInfo.name} 3/4 Editorial Pose`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[9px] uppercase tracking-widest text-white/90 font-sans font-medium">
                  03 • 3/4 Angle
                </span>
              </div>
              <div className="absolute bottom-3 inset-x-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2.5 rounded-lg flex items-center justify-between">
                <span className="text-xs font-serif text-white tracking-wide">Editorial Form</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">Pose</span>
              </div>
            </div>

            {/* Look 4: Full Length Body */}
            <div className="relative group rounded-xl overflow-hidden glass-card aspect-[3/4]">
              <img
                src={compCard.fullLength}
                alt={`${modelInfo.name} Full Length Body`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/30">
                <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-medium">
                  04 • Full Length
                </span>
              </div>
              <div className="absolute bottom-3 inset-x-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2.5 rounded-lg flex items-center justify-between">
                <span className="text-xs font-serif text-white tracking-wide">Head to Toe</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">Proportions</span>
              </div>
            </div>
          </div>

          {/* Bottom Measurements Table with Glassmorphism */}
          <div className="border-t border-[#c59b27]/20 dark:border-white/10 pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Height</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.height.imperial} / {vitals.height.metric}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Bust</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.bust.imperial} / {vitals.bust.metric}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Waist</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.waist.imperial} / {vitals.waist.metric}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Hips</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.hips.imperial} / {vitals.hips.metric}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Shoes</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.shoes.imperial}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Dress</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.dress.imperial}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Eyes</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.eyes.label}</span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 block font-sans">Hair</span>
                <span className="text-xs sm:text-sm md:text-base font-serif font-medium text-[#1c130e] dark:text-white">{vitals.hair.label}</span>
              </div>
            </div>

            {/* Direct Contact Footer within the Comp Card */}
            <div className="mt-6 flex flex-wrap items-center justify-between text-xs text-[#5c4b40] dark:text-neutral-400 border-t border-[#c59b27]/15 dark:border-white/5 pt-4 gap-3 sm:gap-4">
              <div>Inquiries: <span className="text-[#1c130e] dark:text-white font-medium">{modelInfo.email}</span></div>
              <div>Instagram: <span className="text-[#1c130e] dark:text-white font-medium">{modelInfo.instagramHandle}</span></div>
              <div>WhatsApp: <span className="text-[#1c130e] dark:text-white font-medium">{modelInfo.whatsapp}</span></div>
              <div>Hometown: <span className="text-[#991b1b] dark:text-gold-400 font-medium">{modelInfo.origin}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
