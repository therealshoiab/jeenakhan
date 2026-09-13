import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Instagram, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function MotionReels() {
  const { videos, modelInfo } = portfolioData;
  const [playingId, setPlayingId] = useState(null);
  const [isMuted, setIsMuted] = useState(false); // Unmuted by default on user play!
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause all other videos
      Object.entries(videoRefs.current).forEach(([otherId, otherVideo]) => {
        if (otherVideo && otherId !== id) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
        }
      });
      // Ensure audio is unmuted when user explicitly clicks to play
      video.muted = isMuted;
      video.volume = 1.0;
      video.play().catch((err) => {
        // Fallback for strict browser autoplay restriction
        console.warn('Playback error, falling back to muted play:', err);
        video.muted = true;
        video.play();
      });
      setPlayingId(id);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) {
        v.muted = nextMuted;
        v.volume = 1.0;
      }
    });
  };

  return (
    <section id="motion" className="py-24 sm:py-28 px-5 sm:px-8 md:px-12 relative bg-[#faf6f0] dark:bg-[#0d0d12] border-t border-[#c59b27]/20 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c59b27]/20 dark:border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#991b1b] dark:bg-rose-500 animate-ping"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] dark:text-gold-400 font-semibold">
                Motion & Video Reels • Audio Enabled
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-[#1c130e] dark:text-white uppercase">
              Runway & Motion
            </h2>
            <p className="text-sm text-[#5c4b40] dark:text-neutral-400 font-light mt-1">
              Click any reel to play with original Instagram audio and motion choreography.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Global Audio Toggle */}
            <button
              onClick={toggleMute}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
                !isMuted
                  ? 'bg-[#991b1b] text-white border-[#991b1b] dark:bg-gold-500 dark:text-black dark:border-gold-400 font-semibold shadow-gold-500/20'
                  : 'glass-card text-[#5c4b40] dark:text-neutral-300 hover:text-[#1c130e] dark:hover:text-white'
              }`}
            >
              {!isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{!isMuted ? 'Sound Active (100%)' : 'Sound Muted'}</span>
            </button>

            <a
              href={modelInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass-card text-[#5c4b40] dark:text-white hover:text-[#991b1b] text-xs uppercase tracking-wider transition-colors"
            >
              <Instagram size={15} />
              <span>{modelInfo.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Video Reels Grid (9:16 Aspect Ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => {
            const isCurrentPlaying = playingId === video.id;
            return (
              <div
                key={video.id}
                onClick={() => togglePlay(video.id)}
                className={`group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 shadow-xl ${
                  isCurrentPlaying
                    ? 'border-gold-400 ring-2 ring-gold-400/30 shadow-2xl scale-[1.01]'
                    : 'border-white/10 hover:border-gold-400/60'
                }`}
              >
                {/* Video Element */}
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none ${
                  isCurrentPlaying ? 'opacity-20 group-hover:opacity-40' : 'opacity-70'
                }`} />

                {/* Center Play/Pause Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  isCurrentPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-gold-400 group-hover:text-gold-400 transition-all shadow-2xl">
                    {isCurrentPlaying ? (
                      <Pause size={24} fill="currentColor" />
                    ) : (
                      <Play size={24} fill="currentColor" className="translate-x-0.5" />
                    )}
                  </div>
                </div>

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-neutral-300">
                    Reel {idx + 1}
                  </span>

                  {isCurrentPlaying && (
                    <div className="flex items-center space-x-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold-400/40">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[8px] uppercase tracking-widest text-gold-400 font-mono">
                        {!isMuted ? 'Playing Audio' : 'Muted'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Dedicated Audio Toggle on Video Card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isCurrentPlaying) {
                      togglePlay(video.id);
                    } else {
                      toggleMute(e);
                    }
                  }}
                  className="absolute bottom-16 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-colors shadow-lg"
                  title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
                >
                  {!isMuted && isCurrentPlaying ? (
                    <Volume2 size={16} className="text-gold-400" />
                  ) : (
                    <VolumeX size={16} />
                  )}
                </button>

                {/* Bottom Title & Tags */}
                <div className="absolute bottom-4 left-4 right-14 pointer-events-none z-10">
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    {video.tags.map((tag) => (
                      <span key={tag} className="text-[8px] uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-serif text-white tracking-wide leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
