import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Settings, Sparkles } from 'lucide-react';
import { GymData, ThemeId } from '../types';

interface NavbarProps {
  gymData: GymData;
  currentTheme: ThemeId;
  onOpenAdmin: () => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  gymData,
  onOpenAdmin,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[var(--nav-bg)] backdrop-blur-md border-b border-theme-subtle shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Hindi badge */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex flex-col focus:outline-none"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-theme-primary transition-colors group-hover:text-theme-accent">
                {gymData.brandName}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-medium rounded border border-theme-subtle text-theme-secondary font-hindi">
                {gymData.hindiName}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-theme-muted tracking-wider uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{gymData.statusText}</span>
              <span className="text-theme-muted/50">•</span>
              <span>2 Floors</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-theme-secondary hover:text-theme-accent transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-theme-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Customize / Settings trigger */}
            <button
              id="header-customize-btn"
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-theme-subtle text-theme-secondary hover:text-theme-primary hover:border-theme-accent bg-theme-surface/50 transition-all cursor-pointer"
              title="Customize Website / Switch Theme"
            >
              <Settings className="w-3.5 h-3.5 text-theme-accent" />
              <span>Customize</span>
            </button>

            {/* Call action button if phone exists or opens modal */}
            <a
              id="header-call-btn"
              href={gymData.phone.includes('[') ? '#contact' : `tel:${gymData.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-theme-subtle text-theme-primary hover:border-theme-accent bg-theme-surface transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-theme-accent" />
              <span className="hidden md:inline">
                {gymData.phone.includes('[') ? 'Call' : gymData.phone}
              </span>
            </a>

            {/* Main CTA */}
            <button
              id="header-join-now-btn"
              onClick={onOpenEnquiry}
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg bg-theme-accent text-theme-contrast hover:opacity-95 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>JOIN NOW</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-customize-trigger-btn"
              onClick={onOpenAdmin}
              className="p-2 rounded-lg border border-theme-subtle text-theme-secondary hover:text-theme-primary bg-theme-surface"
              aria-label="Customize Website"
            >
              <Settings className="w-4 h-4 text-theme-accent" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-theme-subtle text-theme-primary bg-theme-surface focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-theme-accent" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden border-b border-theme-subtle bg-[var(--bg-card)] px-4 pt-4 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-3">
            <div className="pb-2 border-b border-theme-subtle flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-theme-secondary">
                  {gymData.brandName} • {gymData.hindiName}
                </p>
                <p className="text-[11px] text-theme-muted mt-0.5">
                  ★ {gymData.rating} Rating • {gymData.reviewCount} Google Reviews
                </p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {gymData.statusText}
              </span>
            </div>

            <nav className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-theme-primary hover:bg-theme-surface hover:text-theme-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-theme-muted font-mono">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-theme-subtle flex flex-col gap-2">
              <button
                id="mobile-drawer-join-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 px-4 rounded-lg bg-theme-accent text-theme-contrast font-bold text-sm tracking-wider uppercase text-center shadow-md active:scale-98 transition-all"
              >
                JOIN THE CLUB
              </button>

              <button
                id="mobile-drawer-customize-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2.5 px-4 rounded-lg border border-theme-subtle text-theme-secondary hover:text-theme-primary text-xs font-semibold text-center flex items-center justify-center gap-2 bg-theme-surface"
              >
                <Settings className="w-3.5 h-3.5 text-theme-accent" />
                <span>Customize Colors & Details</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
