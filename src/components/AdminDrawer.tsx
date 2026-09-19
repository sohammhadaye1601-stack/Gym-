import React, { useState } from 'react';
import {
  X,
  Palette,
  Edit3,
  Image as ImageIcon,
  Layers,
  Star,
  RotateCcw,
  Check,
  Plus,
  Trash2,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { GymData, ThemeId, ThemeConfig } from '../types';
import { THEMES } from '../data/initialData';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  gymData: GymData;
  onUpdateGymData: (updated: GymData) => void;
  currentTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
  onResetDefaults: () => void;
}

type TabType = 'theme' | 'general' | 'contact' | 'facilities' | 'reviews' | 'gallery';

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  gymData,
  onUpdateGymData,
  currentTheme,
  onSelectTheme,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('theme');
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleFieldChange = <K extends keyof GymData>(field: K, value: GymData[K]) => {
    onUpdateGymData({
      ...gymData,
      [field]: value,
    });
    showSavedNotification();
  };

  const showSavedNotification = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  // Facility handlers
  const handleUpdateFacility = (id: string, field: string, value: string) => {
    const updated = gymData.facilities.map((f) => {
      if (f.id === id) {
        return { ...f, [field]: value };
      }
      return f;
    });
    handleFieldChange('facilities', updated);
  };

  const handleAddFacility = () => {
    const newFacility = {
      id: `f-${Date.now()}`,
      title: 'New Facility Area',
      description: 'Well-maintained space for members to train consistently.',
      iconName: 'dumbbell' as const,
      floorBadge: 'Floor 1',
      highlights: ['Clean space', 'Open access'],
    };
    handleFieldChange('facilities', [...gymData.facilities, newFacility]);
  };

  const handleDeleteFacility = (id: string) => {
    handleFieldChange(
      'facilities',
      gymData.facilities.filter((f) => f.id !== id)
    );
  };

  // Review handlers
  const handleUpdateReview = (id: string, field: string, value: any) => {
    const updated = gymData.reviews.map((r) => {
      if (r.id === id) {
        return { ...r, [field]: value };
      }
      return r;
    });
    handleFieldChange('reviews', updated);
  };

  const handleAddReview = () => {
    const newReview = {
      id: `r-${Date.now()}`,
      author: 'Google Review',
      rating: 5,
      timeAgo: 'Just now',
      text: 'Add customer review here',
      isPlaceholder: true,
      avatarColor: 'bg-emerald-600',
    };
    handleFieldChange('reviews', [...gymData.reviews, newReview]);
  };

  const handleDeleteReview = (id: string) => {
    handleFieldChange(
      'reviews',
      gymData.reviews.filter((r) => r.id !== id)
    );
  };

  // Gallery handlers
  const handleUpdateGallery = (id: string, field: string, value: string) => {
    const updated = gymData.gallery.map((g) => {
      if (g.id === id) {
        return { ...g, [field]: value };
      }
      return g;
    });
    handleFieldChange('gallery', updated);
  };

  const handleAddGalleryImage = () => {
    const newImg = {
      id: `g-${Date.now()}`,
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Fitness Club equipment area',
      category: 'gym' as const,
      title: 'Training Floor View',
      floor: 'Floor 1',
    };
    handleFieldChange('gallery', [...gymData.gallery, newImg]);
  };

  const handleDeleteGallery = (id: string) => {
    handleFieldChange(
      'gallery',
      gymData.gallery.filter((g) => g.id !== id)
    );
  };

  return (
    <div
      id="admin-customize-drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl h-full bg-[var(--bg-card)] border-l border-theme-subtle flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-theme-subtle flex items-center justify-between bg-theme-surface">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-theme-primary uppercase tracking-tight">
                Customize Website
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-theme-accent/20 text-theme-accent">
                Local Prototype
              </span>
            </div>
            <p className="text-xs text-theme-secondary mt-0.5">
              Live edits apply immediately and persist in localStorage.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-theme-subtle text-theme-secondary hover:text-theme-primary hover:bg-theme-card transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-theme-subtle bg-theme-surface/50 px-4 scrollbar-none">
          {[
            { id: 'theme', label: 'Theme Style', icon: Palette },
            { id: 'general', label: 'Headlines', icon: Edit3 },
            { id: 'contact', label: 'Contact & Links', icon: ExternalLink },
            { id: 'facilities', label: 'Facilities', icon: Layers },
            { id: 'reviews', label: 'Reviews', icon: Star },
            { id: 'gallery', label: 'Gallery', icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-1.5 py-3 px-3.5 border-b-2 text-xs font-bold uppercase whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-theme-accent text-theme-accent'
                    : 'border-transparent text-theme-muted hover:text-theme-primary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Drawer Body with Tab Contents */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: THEME SELECTOR */}
          {activeTab === 'theme' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
                  Select Visual Theme
                </h4>
                <p className="text-xs text-theme-secondary mt-0.5">
                  All 4 requested styles adapt colors, surfaces, typography, and contrast instantly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {THEMES.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  return (
                    <div
                      key={theme.id}
                      id={`theme-option-${theme.id}`}
                      onClick={() => onSelectTheme(theme.id)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-theme-accent bg-theme-surface shadow-md'
                          : 'border-theme-subtle bg-theme-surface/40 hover:border-theme-accent/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black uppercase text-theme-primary">
                          {theme.name}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-theme-accent text-theme-contrast flex items-center justify-center text-xs">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      {/* Color swatch previews */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <div
                          className="w-5 h-5 rounded border border-white/20"
                          style={{ backgroundColor: theme.bgHex }}
                          title="Background"
                        />
                        <div
                          className="w-5 h-5 rounded border border-white/20"
                          style={{ backgroundColor: theme.accentHex }}
                          title="Accent"
                        />
                      </div>

                      <p className="text-[11px] text-theme-muted line-clamp-2">
                        {theme.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl border border-theme-subtle bg-theme-surface/40 text-xs text-theme-muted space-y-1">
                <p className="font-semibold text-theme-primary">Theme System Note:</p>
                <p>• Defaults to <strong>DARK POWER</strong></p>
                <p>• Powered by CSS custom properties and instant class switching</p>
                <p>• Remembers your choice on page reload via localStorage</p>
              </div>
            </div>
          )}

          {/* TAB 2: GENERAL HEADLINES & ABOUT */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Gym Brand Name
                </label>
                <input
                  type="text"
                  value={gymData.brandName}
                  onChange={(e) => handleFieldChange('brandName', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Hindi Name (ब्रैंड नाम)
                </label>
                <input
                  type="text"
                  value={gymData.hindiName}
                  onChange={(e) => handleFieldChange('hindiName', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm font-hindi focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={gymData.heroHeadline}
                  onChange={(e) => handleFieldChange('heroHeadline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Hero Supporting Text
                </label>
                <input
                  type="text"
                  value={gymData.heroSubtext}
                  onChange={(e) => handleFieldChange('heroSubtext', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Hero Business Description
                </label>
                <textarea
                  rows={3}
                  value={gymData.heroDescription}
                  onChange={(e) => handleFieldChange('heroDescription', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  About Section Headline
                </label>
                <input
                  type="text"
                  value={gymData.aboutHeadline}
                  onChange={(e) => handleFieldChange('aboutHeadline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  About Section Text
                </label>
                <textarea
                  rows={3}
                  value={gymData.aboutText}
                  onChange={(e) => handleFieldChange('aboutText', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Membership CTA Headline
                </label>
                <input
                  type="text"
                  value={gymData.ctaHeadline}
                  onChange={(e) => handleFieldChange('ctaHeadline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Membership CTA Text
                </label>
                <input
                  type="text"
                  value={gymData.ctaSubtext}
                  onChange={(e) => handleFieldChange('ctaSubtext', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT & SOCIAL LINKS */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-300">
                <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Per instruction, unconfirmed contact details were strictly initialized with editable placeholders like <code>[ADD PHONE NUMBER]</code>. You can replace them with your actual numbers and URLs here.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Gym Address
                </label>
                <input
                  type="text"
                  value={gymData.address}
                  onChange={(e) => handleFieldChange('address', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={gymData.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Opening Hours Details
                </label>
                <input
                  type="text"
                  value={gymData.openingHoursDetails}
                  onChange={(e) => handleFieldChange('openingHoursDetails', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Google Maps URL
                </label>
                <input
                  type="text"
                  value={gymData.googleMapsUrl}
                  onChange={(e) => handleFieldChange('googleMapsUrl', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  Instagram Link
                </label>
                <input
                  type="text"
                  value={gymData.instagramUrl}
                  onChange={(e) => handleFieldChange('instagramUrl', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  value={gymData.whatsappNumber}
                  onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent"
                />
              </div>
            </div>
          )}

          {/* TAB 4: FACILITIES */}
          {activeTab === 'facilities' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
                    Facility Cards
                  </h4>
                  <p className="text-xs text-theme-secondary">
                    Initial cards only use verified information. Add or update as desired.
                  </p>
                </div>
                <button
                  onClick={handleAddFacility}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-theme-accent text-theme-contrast text-xs font-bold uppercase cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              <div className="space-y-3">
                {gymData.facilities.map((fac) => (
                  <div
                    key={fac.id}
                    className="p-4 rounded-xl border border-theme-subtle bg-theme-surface/60 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={fac.title}
                        onChange={(e) => handleUpdateFacility(fac.id, 'title', e.target.value)}
                        className="font-bold text-sm bg-transparent border-b border-theme-subtle focus:border-theme-accent text-theme-primary w-2/3 focus:outline-none"
                      />
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={fac.floorBadge}
                          onChange={(e) =>
                            handleUpdateFacility(fac.id, 'floorBadge', e.target.value)
                          }
                          className="text-[11px] px-2 py-0.5 rounded border border-theme-subtle bg-theme-input text-theme-secondary w-24 text-right focus:outline-none"
                        />
                        <button
                          onClick={() => handleDeleteFacility(fac.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <textarea
                      rows={2}
                      value={fac.description}
                      onChange={(e) =>
                        handleUpdateFacility(fac.id, 'description', e.target.value)
                      }
                      className="w-full text-xs text-theme-secondary bg-theme-input p-2 rounded-lg border border-theme-subtle focus:outline-none focus:border-theme-accent"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
                    Google Review Placeholders
                  </h4>
                  <p className="text-xs text-theme-secondary">
                    Populate with verified customer quotes.
                  </p>
                </div>
                <button
                  onClick={handleAddReview}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-theme-accent text-theme-contrast text-xs font-bold uppercase cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              <div className="space-y-3">
                {gymData.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-xl border border-theme-subtle bg-theme-surface/60 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={rev.author}
                        onChange={(e) => handleUpdateReview(rev.id, 'author', e.target.value)}
                        className="font-bold text-sm bg-transparent border-b border-theme-subtle focus:border-theme-accent text-theme-primary w-1/2 focus:outline-none"
                      />
                      <div className="flex items-center gap-2">
                        <select
                          value={rev.rating}
                          onChange={(e) =>
                            handleUpdateReview(rev.id, 'rating', parseInt(e.target.value))
                          }
                          className="text-xs bg-theme-input border border-theme-subtle text-amber-400 font-bold px-2 py-0.5 rounded"
                        >
                          <option value="5">★ 5 Stars</option>
                          <option value="4">★ 4 Stars</option>
                          <option value="3">★ 3 Stars</option>
                        </select>
                        <button
                          onClick={() => handleDeleteReview(rev.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <textarea
                      rows={2}
                      value={rev.text}
                      onChange={(e) => handleUpdateReview(rev.id, 'text', e.target.value)}
                      className="w-full text-xs text-theme-secondary bg-theme-input p-2 rounded-lg border border-theme-subtle focus:outline-none focus:border-theme-accent"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
                    Gallery Images
                  </h4>
                  <p className="text-xs text-theme-secondary">
                    Update photo URLs or change categories.
                  </p>
                </div>
                <button
                  onClick={handleAddGalleryImage}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-theme-accent text-theme-contrast text-xs font-bold uppercase cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Image</span>
                </button>
              </div>

              <div className="space-y-3">
                {gymData.gallery.map((img) => (
                  <div
                    key={img.id}
                    className="p-3.5 rounded-xl border border-theme-subtle bg-theme-surface/60 flex items-start gap-3"
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-16 h-16 rounded-lg object-cover border border-theme-subtle flex-shrink-0"
                    />
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={img.title}
                          onChange={(e) => handleUpdateGallery(img.id, 'title', e.target.value)}
                          className="font-bold text-xs bg-transparent border-b border-theme-subtle text-theme-primary w-2/3 focus:outline-none"
                        />
                        <button
                          onClick={() => handleDeleteGallery(img.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={img.url}
                        onChange={(e) => handleUpdateGallery(img.id, 'url', e.target.value)}
                        placeholder="Image URL"
                        className="w-full text-[11px] font-mono text-theme-secondary bg-theme-input px-2 py-1 rounded border border-theme-subtle focus:outline-none"
                      />

                      <div className="flex items-center gap-2">
                        <select
                          value={img.category}
                          onChange={(e) =>
                            handleUpdateGallery(img.id, 'category', e.target.value)
                          }
                          className="text-[10px] uppercase font-bold bg-theme-input text-theme-secondary px-2 py-0.5 rounded border border-theme-subtle"
                        >
                          <option value="gym">GYM</option>
                          <option value="equipment">EQUIPMENT</option>
                          <option value="interior">INTERIOR</option>
                          <option value="training">TRAINING</option>
                        </select>
                        <input
                          type="text"
                          value={img.floor || ''}
                          onChange={(e) => handleUpdateGallery(img.id, 'floor', e.target.value)}
                          placeholder="e.g. Floor 1"
                          className="text-[10px] bg-theme-input text-theme-secondary px-2 py-0.5 rounded border border-theme-subtle w-20"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-theme-subtle bg-theme-surface flex items-center justify-between">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-theme-subtle text-xs font-semibold text-theme-muted hover:text-theme-primary transition-colors cursor-pointer"
            title="Restore original confirmed data & placeholders"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            {saveToast && (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-theme-accent text-theme-contrast text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
