import React, { useState } from 'react';
import { Mail, Instagram, Phone, Send, CheckCircle2, MapPin, Calendar, Globe, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BookingContact() {
  const { modelInfo } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    brand: '',
    projectType: 'Editorial',
    dates: '',
    location: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 px-5 sm:px-8 md:px-12 relative bg-[#faf6f0] dark:bg-[#09090c] border-t border-[#c59b27]/20 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#991b1b] dark:text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                <Sparkles size={13} />
                <span>Direct Representation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase leading-tight">
                Bookings & Inquiries
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5c4b40] dark:text-neutral-400 font-light leading-relaxed">
              For commercial campaigns, editorial assignments, fashion weeks, and international direct bookings, please reach out through the booking brief or direct channels.
            </p>

            {/* Direct Cards with Glassmorphism */}
            <div className="space-y-3.5 pt-2">
              <a
                href={`mailto:${modelInfo.email}`}
                className="flex items-center space-x-4 p-4 sm:p-5 rounded-2xl glass-card group"
              >
                <div className="w-11 h-11 rounded-full bg-[#991b1b]/10 dark:bg-white/5 border border-[#991b1b]/20 dark:border-white/10 flex items-center justify-center text-[#991b1b] dark:text-white group-hover:text-gold-400 group-hover:border-gold-400/40 transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans block">Official Email</span>
                  <span className="text-xs sm:text-sm font-medium text-[#1c130e] dark:text-white group-hover:text-[#991b1b] dark:group-hover:text-gold-400 transition-colors break-all">{modelInfo.email}</span>
                </div>
              </a>

              <a
                href={modelInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 sm:p-5 rounded-2xl glass-card group"
              >
                <div className="w-11 h-11 rounded-full bg-[#991b1b]/10 dark:bg-white/5 border border-[#991b1b]/20 dark:border-white/10 flex items-center justify-center text-[#991b1b] dark:text-white group-hover:text-gold-400 group-hover:border-gold-400/40 transition-colors shrink-0">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans block">Instagram Official</span>
                  <span className="text-xs sm:text-sm font-medium text-[#1c130e] dark:text-white group-hover:text-[#991b1b] dark:group-hover:text-gold-400 transition-colors">{modelInfo.instagramHandle}</span>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 sm:p-5 rounded-2xl glass-card">
                <div className="w-11 h-11 rounded-full bg-[#991b1b]/10 dark:bg-white/5 border border-[#991b1b]/20 dark:border-white/10 flex items-center justify-center text-[#991b1b] dark:text-white shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans block">Hometown & Global Base</span>
                  <span className="text-xs sm:text-sm font-medium text-[#1c130e] dark:text-white">{modelInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Inquiry Form with Glassmorphism */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl w-full">
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-[#1c130e] dark:text-white">Inquiry Received</h3>
                  <p className="text-[#5c4b40] dark:text-neutral-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Management will review your project brief and respond within 24–48 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full glass-card text-xs uppercase tracking-widest text-[#5c4b40] dark:text-neutral-300 hover:text-[#1c130e] dark:hover:text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Producer / Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alessandro Rossi"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. casting@fashionbrand.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Brand / Agency
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vogue / Chanel / Independent"
                      value={formState.brand}
                      onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Project Classification
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none bg-[#faf6f0] dark:bg-[#121217]"
                    >
                      <option value="Editorial">Editorial / Magazine</option>
                      <option value="High Fashion Runway">Runway / Fashion Week</option>
                      <option value="Commercial Campaign">Commercial / Ad Campaign</option>
                      <option value="Beauty / Lookbook">Beauty / Lookbook</option>
                      <option value="Fitting / Showroom">Fitting / Showroom</option>
                      <option value="Other">Other Creative Project</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Shoot Date(s)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. October 2026 / Flexible"
                      value={formState.dates}
                      onChange={(e) => setFormState({ ...formState, dates: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                      Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kashmir / Mumbai / Milan"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7a6455] dark:text-neutral-400 font-sans mb-2">
                    Creative Brief & Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Brief description of mood, usage rights, team, call times..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full glass-input rounded-xl px-4 py-3 text-sm focus:outline-none resize-none placeholder:text-[#a8998c] dark:placeholder:text-neutral-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#991b1b] text-white hover:bg-[#801414] dark:bg-white dark:text-black dark:hover:bg-gold-400 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={15} />
                  <span>Submit Booking Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
