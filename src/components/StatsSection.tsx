import React, { useEffect, useRef, useState } from 'react';
import { Star, MessageSquare, Layers, Clock } from 'lucide-react';
import { GymData } from '../types';

interface StatsSectionProps {
  gymData: GymData;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ gymData }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [floorsCount, setFloorsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Rating (e.g., 0 to 4.3)
          const targetRating = gymData.rating;
          const ratingDuration = 1200;
          const ratingStart = performance.now();
          const animateRating = (now: number) => {
            const progress = Math.min((now - ratingStart) / ratingDuration, 1);
            setRatingCount(+(progress * targetRating).toFixed(1));
            if (progress < 1) {
              requestAnimationFrame(animateRating);
            }
          };
          requestAnimationFrame(animateRating);

          // Animate Reviews (0 to 121)
          const targetReviews = gymData.reviewCount;
          const reviewsDuration = 1400;
          const reviewsStart = performance.now();
          const animateReviews = (now: number) => {
            const progress = Math.min((now - reviewsStart) / reviewsDuration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setReviewsCount(Math.floor(easeProgress * targetReviews));
            if (progress < 1) {
              requestAnimationFrame(animateReviews);
            }
          };
          requestAnimationFrame(animateReviews);

          // Animate Floors (0 to 2)
          const targetFloors = gymData.floors;
          const floorsDuration = 1000;
          const floorsStart = performance.now();
          const animateFloors = (now: number) => {
            const progress = Math.min((now - floorsStart) / floorsDuration, 1);
            setFloorsCount(Math.round(progress * targetFloors));
            if (progress < 1) {
              requestAnimationFrame(animateFloors);
            }
          };
          requestAnimationFrame(animateFloors);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, gymData.rating, gymData.reviewCount, gymData.floors]);

  const stats = [
    {
      id: 'stat-rating',
      value: hasAnimated ? `${ratingCount}` : '4.3',
      suffix: '',
      label: 'Google Rating',
      detail: 'Verified customer feedback',
      icon: Star,
      iconColor: 'text-amber-400',
    },
    {
      id: 'stat-reviews',
      value: hasAnimated ? `${reviewsCount}` : '121',
      suffix: '+',
      label: 'Reviews',
      detail: 'Active local community',
      icon: MessageSquare,
      iconColor: 'text-theme-accent',
    },
    {
      id: 'stat-floors',
      value: hasAnimated ? `${floorsCount}` : '2',
      suffix: '',
      label: 'Floors',
      detail: 'Spacious bi-level layout',
      icon: Layers,
      iconColor: 'text-blue-400',
    },
    {
      id: 'stat-closing',
      value: '10 PM',
      suffix: '',
      label: 'Closes',
      detail: 'Open daily for late workouts',
      icon: Clock,
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      className="relative z-20 py-10 border-y border-theme-subtle bg-theme-surface/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-theme-subtle">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center text-center group ${
                  idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${stat.iconColor} transition-transform group-hover:scale-110`} />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-theme-primary tracking-tight font-display">
                    {stat.value}
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-theme-accent">
                  {stat.label}
                </h3>
                <p className="text-xs text-theme-muted mt-1 font-medium">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
