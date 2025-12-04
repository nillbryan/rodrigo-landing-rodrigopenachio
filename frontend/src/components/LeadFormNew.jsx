import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { EXTERNAL_CONFIG, isTallyConfigured } from '../config/external';

const LeadForm = () => {
  const handleTallyOpen = () => {
    if (isTallyConfigured()) {
      // Track event
      trackEvent('tally_form_opened', {
        source: 'lead_form_section'
      });
      
      // Open Tally in new tab
      window.open(EXTERNAL_CONFIG.TALLY_URL, '_blank', 'noopener,noreferrer');
    } else {
      alert('Formulário ainda não configurado. Configure TALLY_URL em /src/config/external.js');
    }
  };

  // Check if should use embed or button
  const useEmbed = EXTERNAL_CONFIG.ENABLE_TALLY_EMBED && EXTERNAL_CONFIG.TALLY_IFRAME_SRC;

  return (
    <section
      id="contato"
      className="relative py-24"
      style={{ background: 'var(--bg-elevated-1)' }}
    >
      <div className="max-w-[800px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Comece sua jornada
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Preencha o formulário e receba seu diagnóstico inicial gratuito
          </p>
        </div>

        {/* Tally Integration */}
        {useEmbed ? (
          /* Tally Embed (iframe) */
          <div
            className="glass-effect p-8"
            style={{ borderRadius: '2px' }}
          >
            <iframe
              src={EXTERNAL_CONFIG.TALLY_IFRAME_SRC}
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulário de Contato"
              style={{ borderRadius: '2px' }}
            >
              Carregando...
            </iframe>
          </div>
        ) : (
          /* Tally Button (default) */
          <div
            className="glass-effect p-12 text-center space-y-6"
            style={{ borderRadius: '2px' }}
          >
            {/* Icon */}
            <div
              className="w-20 h-20 mx-auto flex items-center justify-center mb-6"
              style={{
                background: 'rgba(245, 194, 66, 0.1)',
                borderRadius: '2px',
                border: '1px solid var(--primary)'
              }}
            >
              <CheckCircle2 size={40} style={{ color: 'var(--primary)' }} />
            </div>

            {/* Title */}
            <h3
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Formulário de Diagnóstico
            </h3>

            {/* Description */}
            <p
              className="text-base max-w-md mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Responda algumas perguntas rápidas sobre seus objetivos e perfil de investimento.
              Leva menos de 3 minutos.
            </p>

            {/* Benefits List */}
            <div className="text-left max-w-sm mx-auto space-y-3 pt-4">
              {[
                'Diagnóstico personalizado',
                'Sem compromisso',
                'Resposta em até 24h',
                '100% gratuito'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--secondary)' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleTallyOpen}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-8"
              style={{
                background: 'var(--gradient-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '0px',
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              Preencher Formulário
              <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Privacy note */}
            <p
              className="text-xs mt-6"
              style={{ color: 'var(--text-dim)' }}
            >
              Seus dados estão protegidos conforme nossa{' '}
              <a
                href="/politica-de-privacidade"
                className="underline hover:text-[var(--primary)] transition-colors"
              >
                Política de Privacidade
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadForm;
