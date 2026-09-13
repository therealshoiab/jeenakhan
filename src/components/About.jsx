import React from 'react';
import { Award, Globe2, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenBooking }) {
  const { modelInfo, photos } = portfolioData;
  // Use Photo #14: Royal Kashmiri bridal & traditional couture
  const portrait = photos.find(p => p.src.includes('3699494630078783500')) || photos[14] || photos[0];

  return (
    <section id="about" className="py-24 sm:py-28 px-5 sm:px-8 md:px-12 relative bg-[#faf6f0] dark:bg-[#0b0b0f] border-t border-[#c59b27]/20 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Editorial Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#c59b27]/25 dark:border-white/10 shadow-2xl bg-[#f0e8dc] dark:bg-neutral-900 group">
              <img
                src={portrait.src}
                alt={`${modelInfo.fullName} Editorial Portrait`}
                className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-sans block mb-1">
                  Heritage & High Fashion
                </span>
                <span className="text-xl font-serif text-white tracking-wider block">
                  Kashmir to the World
                </span>
                <span className="text-xs text-neutral-300 font-sans tracking-widest mt-1 block">
                  Traditional Royal Couture & Contemporary Runway
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Story & Career Highlights */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#991b1b] dark:text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                <MapPin size={13} />
                <span>Origin: Kashmir, India</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase leading-tight">
                About {modelInfo.fullName}
              </h2>
            </div>

            <div className="space-y-4 text-[#5c4b40] dark:text-neutral-300 font-light text-base md:text-lg leading-relaxed">
              <p>
                Hailing from the picturesque valley of <strong className="text-[#1c130e] dark:text-white font-medium">Kashmir, India</strong>,{' '}
                <strong className="text-[#1c130e] dark:text-white font-medium">{modelInfo.fullName}</strong> embodies an effortless blend of classical Himalayan grace, porcelain features, and contemporary high-fashion runway poise.
              </p>
              <p className="text-[#7a6455] dark:text-neutral-400 text-sm md:text-base">
                With a signature versatility bridging intricate traditional Kashmiri royal aesthetics (Tilla, Aari, and heirloom textiles) with avant-garde European minimalism, Jeena brings commanding presence to international campaigns, Milan & Paris fashion presentations, and commercial beauty shoots worldwide.
              </p>
            </div>

            {/* Cultural & Industry Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#991b1b] dark:text-gold-400 font-sans font-semibold block">Cultural Roots</span>
                <p className="text-sm font-serif text-[#1c130e] dark:text-white">Kashmir Valley Heritage</p>
                <p className="text-xs text-[#7a6455] dark:text-neutral-400">Authentic grace, traditional embroidery & regional artistry.</p>
              </div>

              <div className="p-4 rounded-xl glass-card space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#991b1b] dark:text-gold-400 font-sans font-semibold block">Global Presence</span>
                <p className="text-sm font-serif text-[#1c130e] dark:text-white">International Fashion Weeks</p>
                <p className="text-xs text-[#7a6455] dark:text-neutral-400">Runway, commercial campaigns & editorial publications.</p>
              </div>
            </div>

            {/* Experience / Fashion Week Appearances - Redesigned with responsive alignment */}
            <div className="border-t border-[#c59b27]/20 dark:border-white/10 pt-6 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#991b1b] dark:text-gold-400 font-sans font-semibold">
                Select Credits & Runway Presentations
              </h3>
              <div className="space-y-3">
                {modelInfo.experiences.map((exp, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-b border-[#c59b27]/15 dark:border-white/5 gap-1 sm:gap-4 text-sm"
                  >
                    <div className="flex items-baseline space-x-3 min-w-0">
                      <span className="text-xs text-[#991b1b] dark:text-gold-400 font-mono font-medium shrink-0">{exp.year}</span>
                      <span className="text-[#1c130e] dark:text-white font-serif tracking-wide">{exp.client}</span>
                    </div>
                    <span className="text-[#7a6455] dark:text-neutral-400 text-xs tracking-wider shrink-0 sm:text-right">{exp.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking CTA - Responsive flex wrap to prevent overflow */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#991b1b] text-white hover:bg-[#801414] dark:bg-white dark:text-black dark:hover:bg-gold-400 text-xs uppercase tracking-[0.22em] font-semibold rounded-full transition-all duration-300 shadow-xl text-center shrink-0"
              >
                Inquire For Bookings
              </button>
              <a
                href={modelInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-center sm:text-left text-[#5c4b40] hover:text-[#991b1b] dark:text-neutral-300 dark:hover:text-white transition-colors py-2 font-medium"
              >
                Follow {modelInfo.instagramHandle} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
