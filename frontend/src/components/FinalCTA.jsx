import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, var(--primary-glow) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}
        >
          Pronto para investir com método — sem promessas?
        </h2>
        <p
          className="text-xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Comece com um diagnóstico gratuito. Se gostar, seguimos com o plano.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'var(--gradient-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '0px',
              boxShadow: 'var(--shadow-glow-primary)'
            }}
          >
            <Calendar size={20} />
            Agendar triagem gratuita
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white/10"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-medium)',
              borderRadius: '0px'
            }}
          >
            Receber diagnóstico inicial por e-mail
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;