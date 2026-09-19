import React from 'react';
import { Dumbbell, Layers, Sparkles, Shield, Users, Clock, Plus, Settings2 } from 'lucide-react';
import { Facility } from '../types';

interface FacilitiesSectionProps {
  facilities: Facility[];
  onOpenAdmin: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  facilities,
  onOpenAdmin,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-6 h-6 text-theme-accent" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-theme-accent" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-theme-accent" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-theme-accent" />;
      case 'users':
        return <Users className="w-6 h-6 text-theme-accent" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-theme-accent" />;
      default:
        return <Dumbbell className="w-6 h-6 text-theme-accent" />;
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
              Explore Our Space
            </span>
            <h2
              id="facilities-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary uppercase tracking-tight mt-2"
            >
              Gym Facilities
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <p className="text-sm text-theme-secondary hidden sm:block max-w-xs">
              Every area is kept clean, organized, and focused on members’ daily consistency.
            </p>
            <button
              id="facilities-manage-btn"
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-theme-subtle text-theme-secondary hover:text-theme-primary bg-theme-surface hover:border-theme-accent transition-all cursor-pointer"
              title="Add or Edit Facility Cards"
            >
              <Settings2 className="w-3.5 h-3.5 text-theme-accent" />
              <span>Edit Facilities</span>
            </button>
          </div>
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              id={`facility-card-${facility.id}`}
              className="group p-6 rounded-2xl border border-theme-subtle bg-theme-card hover:border-theme-accent/60 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-theme-surface border border-theme-subtle flex items-center justify-center group-hover:bg-theme-accent/10 group-hover:border-theme-accent/30 transition-colors">
                    {getIcon(facility.iconName)}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-theme-surface text-theme-secondary border border-theme-subtle">
                    {facility.floorBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-theme-primary mb-2 group-hover:text-theme-accent transition-colors">
                  {facility.title}
                </h3>

                <p className="text-sm text-theme-secondary leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              {facility.highlights && facility.highlights.length > 0 && (
                <div className="pt-4 border-t border-theme-subtle/70 flex flex-wrap gap-1.5">
                  {facility.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded bg-theme-surface text-theme-muted"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
