import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Calendar, HelpCircle, ArrowLeft } from 'lucide-react';

const CALENDLY_URL = process.env.REACT_APP_CALENDLY_URL;

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    email_diagnostico: {
      title: 'Recebemos seu pedido de diagnóstico',
      description: 'Em até 1 dia útil você receberá um e-mail com a análise inicial e próximos passos.',
      cta: {
        text: 'Agendar triagem de 15 min',
        link: `${CALENDLY_URL}?utm_source=thank_you_page`,
        external: true
      }
    },
    triage_agendada: {
      title: 'Triagem agendada com sucesso',
      description: 'Você receberá confirmação e lembretes no e-mail/WhatsApp. Traga: objetivos, prazo, tolerância a risco e corretoras que utiliza.',
      cta: {
        text: 'Ver Perguntas Frequentes',
        link: '/#faq',
        external: false
      }
    }
  };

  const currentContent = content[source] || content.email_diagnostico;

  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 px-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-[700px] w-full">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-sm transition-colors hover:text-[var(--primary)]"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ArrowLeft size={16} />
          Voltar para home
        </Link>

        {/* Success Card */}
        <div
          className="glass-effect p-12 text-center"
          style={{
            borderRadius: '2px',
            border: '1px solid var(--secondary)',
            boxShadow: 'var(--shadow-glow-secondary)'
          }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
            style={{
              background: 'rgba(0, 255, 209, 0.1)',
              borderRadius: '2px',
              border: '1px solid var(--secondary)'
            }}
          >
            <CheckCircle2 size={48} style={{ color: 'var(--secondary)' }} />
          </div>

          {/* Title */}
          <h1
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            {currentContent.title}
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {currentContent.description}
          </p>

          {/* CTA */}
          {currentContent.cta.external ? (
            <a
              href={currentContent.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium transition-all hover:scale-[1.02]"
              style={{
                background: 'var(--gradient-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '0px',
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              <Calendar size={20} />
              {currentContent.cta.text}
            </a>
          ) : (
            <Link
              to={currentContent.cta.link}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium transition-all hover:scale-[1.02]"
              style={{
                background: 'var(--gradient-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '0px',
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              <HelpCircle size={20} />
              {currentContent.cta.text}
            </Link>
          )}

          {/* Additional Info */}
          <div
            className="mt-8 pt-8 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <p
              className="text-sm"
              style={{ color: 'var(--text-dim)' }}
            >
              Dúvidas? Entre em contato pelo e-mail{' '}
              <a
                href={`mailto:${process.env.REACT_APP_SUPORTE_EMAIL}`}
                className="underline hover:text-[var(--primary)] transition-colors"
              >
                {process.env.REACT_APP_SUPORTE_EMAIL}
              </a>
              {' '}ou WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;