import React from 'react';
import { Phone, Navigation, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { GymData } from '../types';

interface MembershipCTAProps {
  gymData: GymData;
  onEnquireClick: () => void;
}

export const MembershipCTA: React.FC<MembershipCTAProps> = ({
  gymData,
  onEnquireClick,
}) => {
  const isPhonePlaceholder = gymData.phone.includes('[');
  const isAddressPlaceholder = gymData.address.includes('[');
  const isMapsPlaceholder = gymData.googleMapsUrl.includes('[');

  return (
    <section id="join" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-theme-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl border border-theme-subtle bg-theme-card text-center shadow-2xl relative overflow-hidden group">
          
          {/* Subtle accent corner glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-theme-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-subtle mb-5">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
              Start Today
            </span>
          </div>

          {/* Headline */}
          <h2
            id="cta-headline"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-theme-primary uppercase tracking-tight"
          >
            {gymData.ctaHeadline}
          </h2>

          {/* Text */}
          <p
            id="cta-subtext"
            className="text-base sm:text-xl text-theme-secondary mt-4 max-w-xl mx-auto font-medium"
          >
            {gymData.ctaSubtext}
          </p>

          {/* 3 Main Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            
            {/* CALL NOW */}
            <a
              id="cta-call-now-btn"
              href={isPhonePlaceholder ? '#contact' : `tel:${gymData.phone}`}
              className="px-7 py-4 rounded-xl bg-theme-surface border border-theme-subtle hover:border-theme-accent text-theme-primary text-sm font-extrabold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98"
            >
              <Phone className="w-4 h-4 text-theme-accent" />
              <span>CALL NOW</span>
            </a>

            {/* GET DIRECTIONS */}
            <a
              id="cta-get-directions-btn"
              href={isMapsPlaceholder ? '#contact' : gymData.googleMapsUrl}
              target={isMapsPlaceholder ? '_self' : '_blank'}
              rel="noreferrer"
              className="px-7 py-4 rounded-xl bg-theme-surface border border-theme-subtle hover:border-theme-accent text-theme-primary text-sm font-extrabold tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98"
            >
              <Navigation className="w-4 h-4 text-theme-accent" />
              <span>GET DIRECTIONS</span>
            </a>

            {/* ENQUIRE NOW */}
            <button
              id="cta-enquire-now-btn"
              onClick={onEnquireClick}
              className="px-8 py-4 rounded-xl bg-theme-accent text-theme-contrast text-sm font-extrabold tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl hover:opacity-95 active:scale-98 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE NOW</span>
            </button>

          </div>

          {/* Information notes */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-theme-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Open Daily Until 10:00 PM
            </span>
            <span>•</span>
            <span>Two-Floor Gym Facility</span>
            <span>•</span>
            <span>Comfortable Environment</span>
          </div>

        </div>
      </div>
    </section>
  );
};
