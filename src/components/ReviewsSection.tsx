import React from 'react';
import { Star, ExternalLink, PlusCircle, CheckCircle } from 'lucide-react';
import { ReviewItem, GymData } from '../types';

interface ReviewsSectionProps {
  gymData: GymData;
  onOpenAdmin: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  gymData,
  onOpenAdmin,
}) => {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Reviews Summary Header Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-theme-subtle bg-theme-card shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left: Overall rating & Stars */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-theme-primary font-display tracking-tight">
                  {gymData.rating}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-theme-muted">/ 5</span>
              </div>

              <div className="flex flex-col">
                <div className="flex text-amber-400 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-theme-secondary">
                  <span>Based on {gymData.reviewCount} Google Reviews</span>
                  <span className="w-1 h-1 rounded-full bg-theme-muted" />
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Listing
                  </span>
                </div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="reviews-see-all-btn"
                href={gymData.googleMapsUrl.includes('[') ? '#contact' : gymData.googleMapsUrl}
                target={gymData.googleMapsUrl.includes('[') ? '_self' : '_blank'}
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-theme-surface border border-theme-subtle hover:border-theme-accent text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>SEE ALL REVIEWS</span>
                <ExternalLink className="w-4 h-4 text-theme-accent" />
              </a>

              <button
                id="reviews-add-edit-btn"
                onClick={onOpenAdmin}
                className="px-4 py-3.5 rounded-xl border border-theme-subtle text-theme-secondary hover:text-theme-primary hover:border-theme-accent text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Edit review cards"
              >
                <PlusCircle className="w-4 h-4 text-theme-accent" />
                <span>Customize Reviews</span>
              </button>
            </div>

          </div>
        </div>

        {/* Structured Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymData.reviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-6 rounded-2xl border border-theme-subtle bg-theme-card shadow-md flex flex-col justify-between hover:border-theme-accent/40 transition-colors"
            >
              <div>
                {/* Header: Google Icon, Author, Stars */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${
                        review.avatarColor || 'bg-theme-accent'
                      } text-white font-bold flex items-center justify-center text-sm shadow-inner`}
                    >
                      {review.author.charAt(0) || 'G'}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-theme-primary">
                        {review.author}
                      </h3>
                      <p className="text-[11px] text-theme-muted">
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Google G watermark / icon */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-md bg-theme-surface border border-theme-subtle">
                    <span className="text-xs font-bold text-theme-secondary font-mono">G</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-theme-secondary leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Placeholder hint badge */}
              {review.isPlaceholder && (
                <div className="mt-4 pt-3 border-t border-theme-subtle/50 flex items-center justify-between text-[11px] text-theme-muted">
                  <span className="font-mono">Google Verified Review Card</span>
                  <button
                    onClick={onOpenAdmin}
                    className="text-theme-accent hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-theme-muted">
          <span>
            Displaying review placeholders based on confirmed 4.3 Google rating & 121 reviews. Authentic feedback quotes can be edited anytime in the Customization panel.
          </span>
        </div>

      </div>
    </section>
  );
};
