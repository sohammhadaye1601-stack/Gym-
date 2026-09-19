import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono tracking-wider text-neutral-200">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-300 hidden sm:inline">
            {currentImage.title}
          </span>
          {currentImage.floor && (
            <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-bold uppercase hidden sm:inline">
              {currentImage.floor}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Prev Button */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full px-4 sm:px-12 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
        />

        <div className="mt-4 text-center">
          <h4 className="text-white text-base sm:text-lg font-bold">
            {currentImage.title}
          </h4>
          <p className="text-neutral-400 text-xs mt-1 uppercase tracking-wider">
            Category: {currentImage.category} {currentImage.floor ? `• ${currentImage.floor}` : ''}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
};
