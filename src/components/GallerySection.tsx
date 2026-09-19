import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  gallery: GalleryItem[];
}

type CategoryTab = 'all' | 'gym' | 'equipment' | 'interior' | 'training';

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories: { id: CategoryTab; label: string }[] = [
    { id: 'all', label: 'ALL' },
    { id: 'gym', label: 'GYM' },
    { id: 'equipment', label: 'EQUIPMENT' },
    { id: 'interior', label: 'INTERIOR' },
    { id: 'training', label: 'TRAINING' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-theme-surface/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
            Real Atmosphere
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary uppercase tracking-tight mt-2"
          >
            Club Gallery
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary mt-3">
            Explore the spacious bi-level workout floors, modern machines, and dedicated strength zones.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`gallery-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-theme-accent text-theme-contrast shadow-md'
                    : 'bg-theme-surface border border-theme-subtle text-theme-secondary hover:text-theme-primary hover:border-theme-accent/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              id={`gallery-item-${image.id}`}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-theme-subtle bg-theme-card shadow-md cursor-pointer hover:border-theme-accent/70 hover:shadow-xl transition-all duration-300"
            >
              {/* Image with zoom effect */}
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-theme-surface relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floor Badge if available */}
                {image.floor && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {image.floor}
                  </span>
                )}

                {/* Zoom Icon Button overlay */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-theme-accent" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-theme-accent">
                    {image.category}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total images footnote */}
        <div className="mt-8 text-center">
          <p className="text-xs text-theme-muted">
            Click any photograph to view high-resolution full screen.
          </p>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
