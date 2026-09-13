import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Gallery from './components/Gallery';
import MotionReels from './components/MotionReels';
import CompCard from './components/CompCard';
import About from './components/About';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'bright' : 'dark');
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleScrollToBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] dark:bg-[#09090c] text-[#1c130e] dark:text-white flex flex-col font-sans selection:bg-[#991b1b] selection:text-white dark:selection:bg-gold-500 dark:selection:text-black transition-colors duration-300">
      {/* Top Floating Navigation */}
      <Navbar 
        onOpenBooking={handleScrollToBooking} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Editorial Cover & Quick Vitals */}
        <Hero 
          onOpenLightbox={handleOpenLightbox} 
          onOpenBooking={handleScrollToBooking} 
        />

        {/* Selected Works Editorial Gallery (89 photos, categorized) */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* Video Motion Reels (12 extracted MP4 clips) */}
        <MotionReels />

        {/* Model Vitals & Measurements Specifications (Metric & Imperial) */}
        <StatsSection />

        {/* Agency Composite Card (Printable & Downloadable) */}
        <CompCard />

        {/* Editorial Bio & Career Highlights */}
        <About onOpenBooking={handleScrollToBooking} />

        {/* Casting & Booking Inquiries */}
        <BookingContact />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </div>
  );
}
