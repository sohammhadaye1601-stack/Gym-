import { GymData, ThemeConfig } from '../types';

export const THEMES: ThemeConfig[] = [
  {
    id: 'dark-power',
    name: 'DARK POWER',
    tagline: 'Bold & Athletic',
    badge: 'DEFAULT',
    bgHex: '#0c0d10',
    accentHex: '#ff5e14',
    description: 'Near-black background, crisp white typography, and electric athletic orange accents.',
  },
  {
    id: 'black-gold',
    name: 'BLACK & GOLD',
    tagline: 'Luxury Fitness Club',
    badge: 'PREMIUM',
    bgHex: '#09090b',
    accentHex: '#e5b94c',
    description: 'Matte black canvas with refined champagne gold highlights for a high-end club feel.',
  },
  {
    id: 'clean-fitness',
    name: 'CLEAN FITNESS',
    tagline: 'Minimal & Contemporary',
    badge: 'FAMILY-FRIENDLY',
    bgHex: '#f8fafc',
    accentHex: '#ea580c',
    description: 'Crisp bright background, charcoal typography, and warm deep orange energy.',
  },
  {
    id: 'graphite-red',
    name: 'GRAPHITE RED',
    tagline: 'High-Energy Training',
    badge: 'INTENSE',
    bgHex: '#14161a',
    accentHex: '#ef233c',
    description: 'Dark graphite tones paired with energetic racing red for intense strength training.',
  },
];

export const INITIAL_GYM_DATA: GymData = {
  brandName: 'Fitness Club™',
  hindiName: 'फिटनेस क्लबटीएम',
  category: 'Gym',
  rating: 4.3,
  reviewCount: 121,
  closingTime: '10:00 PM',
  statusText: 'Open • Closes 10:00 PM',
  floors: 2,

  // Editable placeholders
  address: '[ADD GYM ADDRESS]',
  phone: '[ADD PHONE NUMBER]',
  openingHoursDetails: 'Open Daily: 6:00 AM – 10:00 PM',
  googleMapsUrl: '[ADD GOOGLE MAPS LINK]',
  instagramUrl: '[ADD LINK]',
  whatsappNumber: '[ADD NUMBER]',

  // Hero Section
  heroBadge: 'FITNESS CLUB™',
  heroHeadline: 'BUILD YOUR STRONGER SELF.',
  heroSubtext: 'Train smarter. Move stronger. Become better.',
  heroDescription:
    'A modern fitness environment designed to help you stay consistent, train with confidence and become stronger every day.',

  // About Section
  aboutHeadline: 'MORE THAN A GYM.',
  aboutText:
    'Fitness Club™ offers a comfortable and well-maintained training environment spread across two floors, giving members space to focus on their workouts.',
  aboutHighlights: [
    'Two-floor facility',
    'Well-maintained equipment',
    'Comfortable environment',
    'Welcoming atmosphere',
  ],

  // Membership CTA
  ctaHeadline: 'READY TO START?',
  ctaSubtext: 'Your stronger routine starts with your next workout.',

  // Facilities
  facilities: [
    {
      id: 'f1',
      title: 'Modern Training Space',
      description:
        'A thoughtfully laid out workout environment giving members ample room to train without feeling cramped.',
      iconName: 'dumbbell',
      floorBadge: 'Floor 1 & 2',
      highlights: ['Spacious layout', 'Dedicated functional zone'],
    },
    {
      id: 'f2',
      title: 'Well-Maintained Equipment',
      description:
        'Quality strength and fitness machines kept in smooth, clean, and reliable operating condition.',
      iconName: 'shield',
      floorBadge: 'Strength Deck',
      highlights: ['Regular maintenance', 'Free weights & machines'],
    },
    {
      id: 'f3',
      title: 'Two-Floor Facility',
      description:
        'Bi-level architecture effectively separating heavy resistance work from conditioning and mobility.',
      iconName: 'layers',
      floorBadge: '2 Complete Floors',
      highlights: ['Split training zones', 'Balanced traffic flow'],
    },
    {
      id: 'f4',
      title: 'Comfortable Environment',
      description:
        'Clean air circulation, welcoming community culture, and excellent female member participation.',
      iconName: 'sparkles',
      floorBadge: 'All Levels Welcome',
      highlights: ['Inclusive atmosphere', 'Supportive training vibe'],
    },
  ],

  // Gallery
  gallery: [
    {
      id: 'g1',
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Fitness Club main training floor with strength equipment',
      category: 'gym',
      title: 'Main Floor Training Area',
      floor: 'Floor 1',
    },
    {
      id: 'g2',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      alt: 'Well-maintained dumbbell and free weights section',
      category: 'equipment',
      title: 'Free Weights & Dumbbells',
      floor: 'Floor 1',
    },
    {
      id: 'g3',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      alt: 'Two-floor facility view and strength training setup',
      category: 'interior',
      title: 'Bi-Level Gym Interior',
      floor: 'Floor 2 Mezzanine',
    },
    {
      id: 'g4',
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Cardio and conditioning equipment zone',
      category: 'equipment',
      title: 'Conditioning Equipment',
      floor: 'Floor 2',
    },
    {
      id: 'g5',
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      alt: 'Dedicated strength workout station',
      category: 'training',
      title: 'Focused Strength Session',
      floor: 'Floor 1',
    },
    {
      id: 'g6',
      url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
      alt: 'Comfortable and clean gym interior environment',
      category: 'interior',
      title: 'Clean Workout Environment',
      floor: 'Floor 2',
    },
  ],

  // Google Reviews inspired placeholders
  reviews: [
    {
      id: 'r1',
      author: 'Google Review',
      rating: 5,
      timeAgo: 'Recent member',
      text: 'Add customer review here — Great two-floor gym space with clean equipment and comfortable environment for daily workouts.',
      isPlaceholder: true,
      avatarColor: 'bg-emerald-600',
    },
    {
      id: 'r2',
      author: 'Google Review',
      rating: 4,
      timeAgo: 'Regular member',
      text: 'Add customer review here — Very welcoming gym with well-maintained machines and good female turnout. Open till 10 PM is very convenient.',
      isPlaceholder: true,
      avatarColor: 'bg-blue-600',
    },
    {
      id: 'r3',
      author: 'Google Review',
      rating: 5,
      timeAgo: 'Local athlete',
      text: 'Add customer review here — Enough space to train across two floors. Equipment is always well-kept and friendly crowd.',
      isPlaceholder: true,
      avatarColor: 'bg-amber-600',
    },
  ],
};
