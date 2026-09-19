import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Phone, MessageSquare, Send } from 'lucide-react';
import { GymData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymData: GymData;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  gymData,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredFloor, setPreferredFloor] = useState('both');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div
      id="enquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-theme-subtle bg-[var(--bg-card)] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-theme-subtle text-theme-secondary hover:text-theme-primary hover:bg-theme-surface transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-theme-primary uppercase tracking-tight">
              Enquiry Submitted!
            </h3>
            <p className="text-sm text-theme-secondary mt-2 max-w-sm mx-auto">
              Thank you, <strong className="text-theme-primary">{name}</strong>. The {gymData.brandName} team will get in touch with you at <strong className="text-theme-primary">{phone}</strong>.
            </p>
            
            <div className="mt-6 p-4 rounded-xl bg-theme-surface border border-theme-subtle text-left text-xs text-theme-secondary space-y-1.5">
              <p className="font-bold text-theme-primary uppercase tracking-wider">
                Gym Quick Summary
              </p>
              <p>• Rating: 4.3/5 ★ (121 Google Reviews)</p>
              <p>• Facility: 2 Floors • Open until 10:00 PM</p>
              <p>• Well-maintained equipment & welcoming atmosphere</p>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-6 w-full py-3.5 rounded-xl bg-theme-accent text-theme-contrast font-bold text-sm uppercase tracking-wider transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-subtle mb-3">
              <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
                {gymData.brandName}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-primary uppercase tracking-tight">
              Join The Club
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary mt-1">
              Start your fitness routine in a comfortable 2-floor workout space.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-theme-secondary mb-1.5">
                  Workout Area Preference
                </label>
                <select
                  value={preferredFloor}
                  onChange={(e) => setPreferredFloor(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-theme-subtle bg-theme-input text-theme-primary text-sm focus:outline-none focus:border-theme-accent transition-colors"
                >
                  <option value="both">Both Floors (Full Access)</option>
                  <option value="strength">Floor 1 - Strength & Heavy Resistance</option>
                  <option value="conditioning">Floor 2 - Conditioning & Mobility</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-xl bg-theme-accent text-theme-contrast font-extrabold text-sm uppercase tracking-wider shadow-xl hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Request Call Back</span>
              </button>
            </form>

            {/* Direct Instant Action alternatives */}
            <div className="mt-6 pt-5 border-t border-theme-subtle flex items-center justify-between text-xs text-theme-muted">
              <span>Need immediate assistance?</span>
              <div className="flex items-center gap-3">
                <a
                  href={gymData.phone.includes('[') ? '#contact' : `tel:${gymData.phone}`}
                  className="font-bold text-theme-primary hover:text-theme-accent transition-colors"
                >
                  Call Reception
                </a>
                <span>•</span>
                <a
                  href={
                    gymData.whatsappNumber.includes('[')
                      ? '#contact'
                      : `https://wa.me/${gymData.whatsappNumber.replace(/[^0-9]/g, '')}`
                  }
                  target={gymData.whatsappNumber.includes('[') ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="font-bold text-emerald-400 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
