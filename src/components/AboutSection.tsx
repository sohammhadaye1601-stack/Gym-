import React from 'react';
import { CheckCircle2, Award, Users2, Sparkles } from 'lucide-react';
import { GymData } from '../types';

interface AboutSectionProps {
  gymData: GymData;
  onExploreFacilities: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  gymData,
  onExploreFacilities,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Gym Photo with layered badges */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle back accent border */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-theme-subtle pointer-events-none hidden sm:block" />
              
              <div className="relative rounded-2xl overflow-hidden border border-theme-subtle shadow-2xl bg-theme-card group">
                <img
                  src={gymData.gallery[2]?.url || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'}
                  alt="Fitness Club two-floor training environment"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating highlight badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-theme-surface/90 backdrop-blur-md border border-theme-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-theme-accent/15 border border-theme-accent/30 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-theme-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                        Confirmed Facility Standards
                      </p>
                      <p className="text-sm font-semibold text-theme-primary">
                        Well-Maintained Equipment & 2 Full Floors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-surface border border-theme-subtle self-start mb-4">
              <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
                About Fitness Club™
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary uppercase tracking-tight leading-tight"
            >
              {gymData.aboutHeadline}
            </h2>

            <p
              id="about-text"
              className="text-base sm:text-lg text-theme-secondary mt-5 leading-relaxed"
            >
              {gymData.aboutText}
            </p>

            {/* Highlights List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gymData.aboutHighlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-theme-subtle bg-theme-surface/50 hover:bg-theme-surface transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-theme-primary">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                id="about-explore-btn"
                onClick={onExploreFacilities}
                className="px-6 py-3.5 rounded-xl bg-theme-surface border border-theme-subtle hover:border-theme-accent text-theme-primary text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                View Facilities & Floors
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
