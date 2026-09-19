import React from 'react';
import { ArrowUp, Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { GymData } from '../types';

interface FooterProps {
  gymData: GymData;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ gymData, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Train Here', href: '#why-train' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-theme-subtle bg-theme-surface/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-theme-subtle">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-theme-primary tracking-tight">
                {gymData.brandName}
              </span>
              <span className="text-xs font-hindi text-theme-secondary px-2 py-0.5 rounded border border-theme-subtle">
                {gymData.hindiName}
              </span>
            </div>
            
            <p className="text-lg font-bold text-theme-accent tracking-wide mt-2">
              "Train. Improve. Repeat."
            </p>

            <p className="text-sm text-theme-secondary mt-3 max-w-sm leading-relaxed">
              A modern fitness environment spread across two floors with well-maintained equipment and a comfortable training atmosphere.
            </p>

            {/* Social & Messaging links */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                id="footer-instagram-link"
                href={gymData.instagramUrl.includes('[') ? '#contact' : gymData.instagramUrl}
                target={gymData.instagramUrl.includes('[') ? '_self' : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-theme-subtle bg-theme-card hover:border-theme-accent text-theme-primary text-xs font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4 text-theme-accent" />
                <span>Instagram: {gymData.instagramUrl}</span>
              </a>

              {/* WhatsApp */}
              <a
                id="footer-whatsapp-link"
                href={
                  gymData.whatsappNumber.includes('[')
                    ? '#contact'
                    : `https://wa.me/${gymData.whatsappNumber.replace(/[^0-9]/g, '')}`
                }
                target={gymData.whatsappNumber.includes('[') ? '_self' : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-theme-subtle bg-theme-card hover:border-emerald-500 text-theme-primary text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {gymData.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-theme-muted mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-theme-secondary hover:text-theme-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info & Location */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-theme-muted mb-4">
              Contact & Hours
            </h4>
            
            <div className="space-y-3 text-sm text-theme-secondary">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-theme-primary">Address: </span>
                  <span className="font-mono text-xs text-theme-muted">{gymData.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-theme-primary">Phone: </span>
                  <span className="font-mono text-xs text-theme-muted">{gymData.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-theme-primary">Timing: </span>
                  <span>{gymData.openingHoursDetails}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-theme-subtle flex items-center justify-between">
              <a
                href={gymData.googleMapsUrl.includes('[') ? '#contact' : gymData.googleMapsUrl}
                target={gymData.googleMapsUrl.includes('[') ? '_self' : '_blank'}
                rel="noreferrer"
                className="text-xs font-bold text-theme-accent hover:underline"
              >
                Google Maps: {gymData.googleMapsUrl}
              </a>

              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-theme-muted hover:text-theme-primary underline"
              >
                Edit Info
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <p>© 2026 Fitness Club™. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Rating 4.3 ★ (121 Reviews)</span>
            <span>Two-Floor Gym Facility</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-theme-subtle hover:border-theme-accent hover:text-theme-primary transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
