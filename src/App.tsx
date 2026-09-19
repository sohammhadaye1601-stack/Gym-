/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GymData, ThemeId } from './types';
import { INITIAL_GYM_DATA, THEMES } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { WhyTrainSection } from './components/WhyTrainSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { MembershipCTA } from './components/MembershipCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { AdminDrawer } from './components/AdminDrawer';
import { Palette, Settings, Check } from 'lucide-react';

const STORAGE_THEME_KEY = 'fitness_club_theme_v1';
const STORAGE_DATA_KEY = 'fitness_club_data_v1';

export default function App() {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    if (
      saved &&
      ['dark-power', 'black-gold', 'clean-fitness', 'graphite-red'].includes(saved)
    ) {
      return saved as ThemeId;
    }
    return 'dark-power';
  });

  // Gym data state with localStorage persistence
  const [gymData, setGymData] = useState<GymData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_DATA_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse gym data from localStorage', e);
    }
    return INITIAL_GYM_DATA;
  });

  // Modals & Panels state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showThemePill, setShowThemePill] = useState(false);

  // Sync theme class with body / html
  useEffect(() => {
    document.documentElement.classList.remove(
      'theme-dark-power',
      'theme-black-gold',
      'theme-clean-fitness',
      'theme-graphite-red'
    );
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem(STORAGE_THEME_KEY, theme);
  }, [theme]);

  // Persist gymData changes
  const handleUpdateGymData = (updated: GymData) => {
    setGymData(updated);
    try {
      localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save gym data to localStorage', e);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all details, images, and reviews to default verified placeholders?')) {
      setGymData(INITIAL_GYM_DATA);
      localStorage.removeItem(STORAGE_DATA_KEY);
    }
  };

  const handleSelectTheme = (newTheme: ThemeId) => {
    setTheme(newTheme);
  };

  const handleExploreGym = () => {
    const el = document.getElementById('facilities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-theme-main text-theme-primary theme-${theme} selection:bg-[var(--accent)] selection:text-white transition-colors duration-250`}>
      {/* 1. Header Navigation */}
      <Navbar
        gymData={gymData}
        currentTheme={theme}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero
          gymData={gymData}
          onJoinClick={() => setIsEnquiryOpen(true)}
          onExploreClick={handleExploreGym}
        />

        {/* 3. Horizontal Stats Section */}
        <StatsSection gymData={gymData} />

        {/* 4. About Fitness Club */}
        <AboutSection
          gymData={gymData}
          onExploreFacilities={handleExploreGym}
        />

        {/* 5. Why Train Here (4 Premium Cards) */}
        <WhyTrainSection />

        {/* 6. Facilities Section */}
        <FacilitiesSection
          facilities={gymData.facilities}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 7. Gallery Section (Masonry + Fullscreen Lightbox) */}
        <GallerySection gallery={gymData.gallery} />

        {/* 8. Reviews Section (Google Reviews Inspired) */}
        <ReviewsSection
          gymData={gymData}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 9. Membership CTA */}
        <MembershipCTA
          gymData={gymData}
          onEnquireClick={() => setIsEnquiryOpen(true)}
        />

        {/* 10. Contact Section */}
        <ContactSection
          gymData={gymData}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        gymData={gymData}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 12. Membership Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        gymData={gymData}
      />

      {/* 13. Admin / Customization Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        gymData={gymData}
        onUpdateGymData={handleUpdateGymData}
        currentTheme={theme}
        onSelectTheme={handleSelectTheme}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating Quick Theme & Customization Bar (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {showThemePill && (
          <div
            id="floating-theme-selector"
            className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-theme-surface/95 backdrop-blur-md border border-theme-subtle shadow-2xl animate-fade-in"
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  theme === t.id
                    ? 'bg-theme-accent text-theme-contrast shadow-sm'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-card'
                }`}
                title={t.description}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full border border-white/20"
                  style={{ backgroundColor: t.accentHex }}
                />
                <span className="hidden md:inline">{t.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        )}

        <button
          id="floating-theme-toggle-btn"
          onClick={() => setShowThemePill(!showThemePill)}
          className="p-3 rounded-2xl bg-theme-surface/90 backdrop-blur-md border border-theme-subtle text-theme-primary shadow-xl hover:border-theme-accent transition-all cursor-pointer group"
          title="Quick Switch Themes"
        >
          <Palette className="w-5 h-5 text-theme-accent group-hover:rotate-45 transition-transform" />
        </button>

        <button
          id="floating-customize-btn"
          onClick={() => setIsAdminOpen(true)}
          className="p-3 rounded-2xl bg-theme-accent text-theme-contrast shadow-xl hover:opacity-95 transition-all cursor-pointer"
          title="Customize Website Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
