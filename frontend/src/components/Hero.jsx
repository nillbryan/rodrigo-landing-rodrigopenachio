import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { hero } from '../data/mock';
import { trackEvent } from '../utils/analytics';
import { EXTERNAL_CONFIG, isTallyConfigured, getWhatsAppLink, isWhatsAppConfigured } from '../config/external';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handlePrimaryCTA = () => {
    trackEvent('cta_clicked', {
      location: 'hero',
      cta: 'primary'
    });

    // Priority: WhatsApp > Tally > Scroll to form
    if (isWhatsAppConfigured()) {
      window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
    } else if (isTallyConfigured()) {
      window.open(EXTERNAL_CONFIG.TALLY_URL, '_blank', 'noopener,noreferrer');
    } else {
      scrollToContact();
    }
  };

  const handleSecondaryCTA = () => {
    trackEvent('cta_clicked', {
      location: 'hero',
      cta: 'secondary'
    });

    // Secondary CTA always scrolls to form section
    scrollToContact();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(244, 246, 251, 0.1) 1px, transparent 80px),
                            repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(244, 246, 251, 0.1) 1px, transparent 80px)`
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm glass-effect"
                 style={{ border: '1px solid var(--border-subtle)' }}>
              <Shield size={18} style={{ color: 'var(--secondary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Consultoria 100% Independente
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {hero.subheadline}
            </p>

            {/* Bullets */}
            <div className="space-y-3">
              {hero.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--secondary)' }}
                  />
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handlePrimaryCTA}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--bg-primary)',
                  borderRadius: '0px',
                  boxShadow: 'var(--shadow-glow-primary)'
                }}
              >
                {hero.ctaPrimary}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleSecondaryCTA}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px'
                }}
              >
                {hero.ctaSecondary}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div
              className="relative aspect-square max-w-[500px] mx-auto overflow-hidden"
              style={{
                borderRadius: '2px',
                border: '2px solid var(--border-medium)',
                boxShadow: '0 0 60px rgba(245, 194, 66, 0.15)'
              }}
            >
              <img
                src={hero.profileImage}
                alt="Rodrigo Penachio"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(20%)' }}
                loading="eager"
                decoding="sync"
                fetchpriority="high"
              />
              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'var(--gradient-overlay)' }}
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-effect-strong px-6 py-4 flex items-center gap-3"
              style={{
                borderRadius: '0px',
                border: '1px solid var(--primary)',
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--secondary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Disponível para novos clientes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;