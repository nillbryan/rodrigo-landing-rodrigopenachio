import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect-strong shadow-lg' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl"
               style={{ background: 'var(--gradient-primary)', color: 'var(--bg-primary)' }}>
            RP
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
              {siteConfig.name}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              {siteConfig.title}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base font-medium transition-colors duration-300 hover:text-[var(--primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => scrollToSection(e, '#contato')}
            className="btn-primary px-6 py-3 text-base font-medium"
            style={{
              background: 'var(--gradient-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '0px',
              transition: 'var(--transition-smooth)'
            }}
          >
            Agendar Triagem
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-sm transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'var(--text-primary)' }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden glass-effect-strong border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium py-2 transition-colors duration-300 hover:text-[var(--primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, '#contato')}
              className="btn-primary px-6 py-3 text-base font-medium text-center mt-2"
              style={{
                background: 'var(--gradient-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '0px'
              }}
            >
              Agendar Triagem
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;