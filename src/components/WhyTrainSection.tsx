import React from 'react';
import { Layers, ShieldCheck, HeartHandshake, Users } from 'lucide-react';

export const WhyTrainSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'SPACE TO TRAIN',
      description:
        'A two-floor facility designed to give members room to move and train.',
      icon: Layers,
      highlight: '2 Dedicated Floors',
    },
    {
      number: '02',
      title: 'QUALITY EQUIPMENT',
      description:
        'Well-maintained equipment for a comfortable workout experience.',
      icon: ShieldCheck,
      highlight: 'Regular Maintenance',
    },
    {
      number: '03',
      title: 'COMFORTABLE ENVIRONMENT',
      description:
        'A welcoming atmosphere that makes regular training easier.',
      icon: HeartHandshake,
      highlight: 'Clean & Welcoming',
    },
    {
      number: '04',
      title: 'WELCOMING COMMUNITY',
      description:
        'A comfortable environment with strong female member participation.',
      icon: Users,
      highlight: 'Good Female Turnout',
    },
  ];

  return (
    <section id="why-train" className="py-20 lg:py-24 bg-theme-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
              Core Member Advantages
            </span>
            <h2
              id="why-train-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary uppercase tracking-tight mt-2"
            >
              Why Train Here
            </h2>
          </div>
          <p className="text-sm sm:text-base text-theme-secondary max-w-md">
            Built on verified club strengths: ample space, reliable equipment, and an inclusive training culture.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                id={`why-card-${card.number}`}
                className="group relative p-7 rounded-2xl border border-theme-subtle bg-theme-card hover:border-theme-accent/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Accent top edge light indicator */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-theme-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-display tracking-tight text-theme-muted/50 group-hover:text-theme-accent transition-colors">
                      {card.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-theme-surface border border-theme-subtle flex items-center justify-center text-theme-accent group-hover:border-theme-accent/40 group-hover:bg-theme-accent/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold uppercase tracking-wide text-theme-primary mb-3">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-theme-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom badge */}
                <div className="mt-8 pt-4 border-t border-theme-subtle/80 flex items-center justify-between text-xs font-semibold text-theme-muted group-hover:text-theme-primary transition-colors">
                  <span>{card.highlight}</span>
                  <span className="text-theme-accent font-mono text-sm">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
