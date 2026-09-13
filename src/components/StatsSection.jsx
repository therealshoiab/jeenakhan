import React, { useState } from 'react';
import { Ruler, Sparkles, Check, Copy, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function StatsSection() {
  const [unit, setUnit] = useState('imperial'); // 'imperial' or 'metric'
  const [copied, setCopied] = useState(false);
  const { modelInfo } = portfolioData;
  const { vitals } = modelInfo;

  const statsList = [
    { label: 'Height', val: unit === 'imperial' ? vitals.height.imperial : vitals.height.metric },
    { label: 'Bust / Chest', val: unit === 'imperial' ? vitals.bust.imperial : vitals.bust.metric },
    { label: 'Waist', val: unit === 'imperial' ? vitals.waist.imperial : vitals.waist.metric },
    { label: 'Hips', val: unit === 'imperial' ? vitals.hips.imperial : vitals.hips.metric },
    { label: 'Shoe Size', val: unit === 'imperial' ? vitals.shoes.imperial : vitals.shoes.metric },
    { label: 'Dress Size', val: unit === 'imperial' ? vitals.dress.imperial : vitals.dress.metric },
    { label: 'Eye Color', val: vitals.eyes.label },
    { label: 'Hair Color', val: vitals.hair.label },
  ];

  const handleCopyStats = () => {
    const text = `MODEL: ${modelInfo.name} (${modelInfo.fullName})
Origin: ${modelInfo.origin}
Height: ${vitals.height.imperial} (${vitals.height.metric})
Bust: ${vitals.bust.imperial} (${vitals.bust.metric})
Waist: ${vitals.waist.imperial} (${vitals.waist.metric})
Hips: ${vitals.hips.imperial} (${vitals.hips.metric})
Shoes: ${vitals.shoes.imperial} / ${vitals.shoes.metric}
Eyes: ${vitals.eyes.label} | Hair: ${vitals.hair.label}
Representation: ${modelInfo.agency}
Instagram: ${modelInfo.instagramUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="stats" className="py-24 px-5 sm:px-8 md:px-12 relative border-t border-[#c59b27]/20 dark:border-white/5 bg-[#faf6f0] dark:bg-[#0b0b0e] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#c59b27]/20 dark:border-white/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] dark:text-gold-400 font-semibold block mb-2">
              Model Specifications • Kashmir
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase">
              Vitals & Measurements
            </h2>
          </div>

          {/* Controls: Unit Toggle & Copy Stats */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Imperial / Metric Toggle */}
            <div className="inline-flex p-1 glass-card rounded-full">
              <button
                onClick={() => setUnit('imperial')}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                  unit === 'imperial'
                    ? 'bg-[#991b1b] text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'text-[#7a6455] dark:text-neutral-400 hover:text-[#1c130e] dark:hover:text-white'
                }`}
              >
                Imperial (in/ft)
              </button>
              <button
                onClick={() => setUnit('metric')}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                  unit === 'metric'
                    ? 'bg-[#991b1b] text-white dark:bg-white dark:text-black font-semibold shadow-md'
                    : 'text-[#7a6455] dark:text-neutral-400 hover:text-[#1c130e] dark:hover:text-white'
                }`}
              >
                Metric (cm)
              </button>
            </div>

            {/* Copy Button for Casting Directors */}
            <button
              onClick={handleCopyStats}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-[#5c4b40] dark:text-neutral-300 hover:border-[#991b1b] dark:hover:border-gold-400 hover:text-[#991b1b] dark:hover:text-white text-xs uppercase tracking-wider transition-colors"
              title="Copy model specifications to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Specs</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stats Grid with Glassmorphism */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
          {statsList.map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl glass-card flex flex-col justify-between group"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#7a6455] dark:text-neutral-400 font-sans group-hover:text-[#991b1b] dark:group-hover:text-gold-400 transition-colors">
                {stat.label}
              </span>
              <div className="mt-4">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[#1c130e] dark:text-white tracking-wide">
                  {stat.val}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Casting Info Ribbon with Glassmorphism */}
        <div className="mt-8 p-6 rounded-2xl glass-panel flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#991b1b]/10 dark:bg-gold-500/10 border border-[#991b1b]/30 dark:border-gold-400/30 flex items-center justify-center text-[#991b1b] dark:text-gold-400 shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="text-sm font-serif text-[#1c130e] dark:text-white tracking-wide">
                Representation & Worldwide Travel
              </div>
              <div className="text-xs text-[#5c4b40] dark:text-neutral-400 font-sans">
                Valid passport, international visas & immediate availability for global placements.
              </div>
            </div>
          </div>

          <div className="text-xs tracking-widest text-[#7a6455] dark:text-neutral-400 uppercase font-sans">
            Base: <span className="text-[#1c130e] dark:text-white font-medium">{modelInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
