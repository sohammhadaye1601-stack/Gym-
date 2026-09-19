export type ThemeId = 'dark-power' | 'black-gold' | 'clean-fitness' | 'graphite-red';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  badge: string;
  bgHex: string;
  accentHex: string;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: 'dumbbell' | 'layers' | 'sparkles' | 'users' | 'shield' | 'clock';
  floorBadge: string;
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: 'gym' | 'equipment' | 'interior' | 'training';
  title: string;
  floor?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  isPlaceholder: boolean;
  avatarColor?: string;
}

export interface GymData {
  brandName: string;
  hindiName: string;
  category: string;
  rating: number;
  reviewCount: number;
  closingTime: string;
  statusText: string;
  floors: number;
  
  // Placeholders / Editable contact info
  address: string;
  phone: string;
  openingHoursDetails: string;
  googleMapsUrl: string;
  instagramUrl: string;
  whatsappNumber: string;

  // Hero section
  heroBadge: string;
  heroHeadline: string;
  heroSubtext: string;
  heroDescription: string;

  // About section
  aboutHeadline: string;
  aboutText: string;
  aboutHighlights: string[];

  // CTA
  ctaHeadline: string;
  ctaSubtext: string;

  // Dynamic collections
  facilities: Facility[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
}
