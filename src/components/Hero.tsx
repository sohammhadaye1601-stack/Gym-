import React from 'react';
import { Star, ArrowRight, ShieldCheck, Dumbbell, MapPin, Sparkles } from 'lucide-react';
import { GymData } from '../types';

interface HeroProps {
  gymData: GymData;
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  gymData,
  onJoinClick,
  onExploreClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden"
    >
      {/* Subtle atmospheric backdrop gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-theme-accent opacity-[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-theme-accent opacity-[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-subtle bg-theme-surface/70 backdrop-blur-sm self-start mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-ping" />
              <span className="w-2 h-2 -ml-4 rounded-full bg-theme-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
                {gymData.heroBadge}
              </span>
              <span className="text-xs text-theme-muted">|</span>
              <span className="text-xs font-hindi text-theme-secondary font-medium">
                {gymData.hindiName}
              </span>
            </div>

            {/* Large Headline */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-theme-primary leading-[1.08] uppercase"
            >
              {gymData.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-theme-accent tracking-wide"
            >
              {gymData.heroSubtext}
            </p>

            {/* Short Business Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-theme-secondary mt-4 max-w-2xl leading-relaxed font-normal"
            >
              {gymData.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="hero-cta-join-btn"
                onClick={onJoinClick}
                className="px-7 py-4 rounded-xl bg-theme-accent text-theme-contrast font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl hover:opacity-95 active:scale-98 transition-all group cursor-pointer"
              >
                <span>JOIN THE CLUB</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-explore-btn"
                onClick={onExploreClick}
                className="px-7 py-4 rounded-xl border border-theme-subtle bg-theme-surface/80 hover:bg-theme-surface hover:border-theme-accent text-theme-primary font-bold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Dumbbell className="w-4 h-4 text-theme-accent" />
                <span>EXPLORE THE GYM</span>
              </button>
            </div>

            {/* Small Trust Indicator */}
            <div
              id="hero-trust-indicator"
              className="mt-10 pt-6 border-t border-theme-subtle flex flex-wrap items-center gap-6"
            >
              {/* Google Rating badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-surface border border-theme-subtle shadow-inner">
                  {/* Google 'G' icon stylized */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-extrabold text-theme-primary">
                      ★ {gymData.rating}
                    </span>
                    <span className="text-xs text-theme-muted">/ 5</span>
                    <div className="flex text-amber-400 ml-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-medium text-theme-secondary">
                    {gymData.reviewCount} Google Reviews
                  </p>
                </div>
              </div>

              {/* Verified Features Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold text-theme-secondary">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-theme-surface border border-theme-subtle">
                  <ShieldCheck className="w-3.5 h-3.5 text-theme-accent" />
                  <span>2 Floors</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-theme-surface border border-theme-subtle">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Closes 10 PM</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Gym Interior Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[var(--accent)]/30 to-transparent blur-lg opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-theme-subtle bg-theme-card shadow-2xl group">
                <img
                  src={gymData.gallery[0]?.url || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop'}
                  alt="Fitness Club interior - Modern two floor gym facility"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-black/30 pointer-events-none" />

                {/* Floating Top Chip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Daily Until 10:00 PM</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wider">
                    <MapPin className="w-3 h-3 text-theme-accent" />
                    <span>2 FLOORS</span>
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-theme-subtle shadow-xl pointer-events-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                        Facility Atmosphere
                      </p>
                      <h2 className="text-sm sm:text-base font-bold text-theme-primary">
                        Comfortable Environment • 2 Floors
                      </h2>
                      <p className="text-[11px] text-theme-muted mt-0.5">
                        Well-maintained equipment & active female turnout
                      </p>
                    </div>
                    <div className="flex -space-x-1.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                        4.3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
