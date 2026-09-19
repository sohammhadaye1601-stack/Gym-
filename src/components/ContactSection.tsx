import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Send,
  CheckCircle,
  Settings2,
  AlertCircle,
} from 'lucide-react';
import { GymData } from '../types';

interface ContactSectionProps {
  gymData: GymData;
  onOpenAdmin: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  gymData,
  onOpenAdmin,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'general-fitness',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isPhonePlaceholder = gymData.phone.includes('[');
  const isAddressPlaceholder = gymData.address.includes('[');
  const isHoursPlaceholder = gymData.openingHoursDetails.includes('[');
  const isMapsPlaceholder = gymData.googleMapsUrl.includes('[');
  const isWhatsappPlaceholder = gymData.whatsappNumber.includes('[');

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-theme-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
              Connect & Visit
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary uppercase tracking-tight mt-2"
            >
              Contact & Location
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="contact-edit-placeholders-btn"
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-theme-subtle text-xs font-semibold text-theme-secondary hover:text-theme-primary hover:border-theme-accent bg-theme-card transition-all cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5 text-theme-accent" />
              <span>Update Contact Details</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Gym Name & Category */}
              <div className="p-6 rounded-2xl border border-theme-subtle bg-theme-card">
                <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
                  Gym Name
                </span>
                <h3 className="text-2xl font-extrabold text-theme-primary mt-1">
                  {gymData.brandName}
                </h3>
                <p className="text-xs font-hindi text-theme-secondary font-medium mt-0.5">
                  {gymData.hindiName}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-theme-muted">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Category: {gymData.category} • Two-Floor Facility</span>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-2xl border border-theme-subtle bg-theme-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-subtle flex items-center justify-center text-theme-accent flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-theme-muted">
                        Address
                      </span>
                      <p className={`text-base font-semibold mt-1 ${isAddressPlaceholder ? 'text-amber-400/90 font-mono text-sm' : 'text-theme-primary'}`}>
                        {gymData.address}
                      </p>
                      {isAddressPlaceholder && (
                        <p className="text-[11px] text-theme-muted mt-1">
                          Placeholder: Provide exact street/locality in the Customization panel.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl border border-theme-subtle bg-theme-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-subtle flex items-center justify-center text-theme-accent flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-theme-muted">
                      Phone Number
                    </span>
                    <p className={`text-base font-semibold mt-1 ${isPhonePlaceholder ? 'text-amber-400/90 font-mono text-sm' : 'text-theme-primary'}`}>
                      {gymData.phone}
                    </p>
                    {isPhonePlaceholder && (
                      <p className="text-[11px] text-theme-muted mt-1">
                        Placeholder: Add your gym reception phone number in Customization.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="p-6 rounded-2xl border border-theme-subtle bg-theme-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-subtle flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-theme-muted">
                      Opening Hours
                    </span>
                    <p className="text-base font-bold text-theme-primary mt-1">
                      {gymData.openingHoursDetails}
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      ✓ Confirmed: Open daily until {gymData.closingTime}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Contact Action Buttons */}
            <div className="mt-8 pt-6 border-t border-theme-subtle grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Call button */}
              <a
                id="contact-call-btn"
                href={isPhonePlaceholder ? '#' : `tel:${gymData.phone}`}
                onClick={(e) => {
                  if (isPhonePlaceholder) {
                    e.preventDefault();
                    onOpenAdmin();
                  }
                }}
                className="py-3 px-4 rounded-xl border border-theme-subtle bg-theme-card hover:border-theme-accent text-theme-primary text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-theme-accent" />
                <span>Call Button</span>
              </a>

              {/* WhatsApp button */}
              <a
                id="contact-whatsapp-btn"
                href={
                  isWhatsappPlaceholder
                    ? '#'
                    : `https://wa.me/${gymData.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Fitness%20Club,%20I%20would%20like%20to%20enquire%20about%20gym%20membership`
                }
                target={isWhatsappPlaceholder ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => {
                  if (isWhatsappPlaceholder) {
                    e.preventDefault();
                    onOpenAdmin();
                  }
                }}
                className="py-3 px-4 rounded-xl border border-theme-subtle bg-theme-card hover:border-emerald-500 text-theme-primary text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Google Maps button */}
              <a
                id="contact-maps-btn"
                href={isMapsPlaceholder ? '#' : gymData.googleMapsUrl}
                target={isMapsPlaceholder ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => {
                  if (isMapsPlaceholder) {
                    e.preventDefault();
                    onOpenAdmin();
                  }
                }}
                className="py-3 px-4 rounded-xl border border-theme-subtle bg-theme-card hover:border-blue-400 text-theme-primary text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Google Maps</span>
              </a>

            </div>
          </div>

          {/* Right: Direct Enquiry Card & Map Preview */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Quick Enquiry Form Card */}
            <div className="p-7 sm:p-8 rounded-3xl border border-theme-subtle bg-theme-card shadow-xl">
              <h3 className="text-xl font-extrabold text-theme-primary uppercase tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-theme-secondary mt-1">
                Have questions about workout hours, female timings, or facilities? Get in touch.
              </p>

              {submitted ? (
                <div className="mt-6 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-theme-primary">
                    Enquiry Received!
                  </h4>
                  <p className="text-xs text-theme-secondary mt-1">
                    Thank you! The Fitness Club team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', goal: 'general-fitness', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-theme-surface text-xs font-bold text-theme-primary border border-theme-subtle"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-theme-secondary uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-theme-secondary uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-theme-secondary uppercase tracking-wider mb-1.5">
                      Primary Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                    >
                      <option value="general-fitness">General Fitness & Health</option>
                      <option value="muscle-building">Muscle & Strength Building</option>
                      <option value="weight-loss">Weight Management & Conditioning</option>
                      <option value="facility-tour">Visit 2-Floor Facility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-theme-secondary uppercase tracking-wider mb-1.5">
                      Optional Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific questions or preferred time to visit?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-theme-accent text-theme-contrast font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 active:scale-98 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Visual Preview Box */}
            <div className="p-6 rounded-3xl border border-theme-subtle bg-theme-card relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Location</span>
                </span>
                <span className="text-[11px] font-mono text-theme-muted">
                  {isMapsPlaceholder ? 'Placeholder Active' : 'Live Link Ready'}
                </span>
              </div>

              <div className="h-36 rounded-xl bg-theme-surface border border-theme-subtle relative flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-theme-accent mb-2 animate-bounce" />
                <p className="text-sm font-bold text-theme-primary">
                  {gymData.brandName} • {gymData.address}
                </p>
                <p className="text-xs text-theme-muted mt-1">
                  Click below to open direct location directions in Google Maps
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a
                  href={isMapsPlaceholder ? '#' : gymData.googleMapsUrl}
                  target={isMapsPlaceholder ? '_self' : '_blank'}
                  rel="noreferrer"
                  onClick={(e) => {
                    if (isMapsPlaceholder) {
                      e.preventDefault();
                      onOpenAdmin();
                    }
                  }}
                  className="text-xs font-bold text-theme-accent hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>→</span>
                </a>

                <button
                  onClick={onOpenAdmin}
                  className="text-[11px] text-theme-muted hover:text-theme-primary underline cursor-pointer"
                >
                  Edit Maps Link
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
