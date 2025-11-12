import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { siteConfig } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 border-t"
      style={{
        background: 'var(--bg-elevated-2)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl"
                style={{ background: 'var(--gradient-primary)', color: 'var(--bg-primary)' }}
              >
                RP
              </div>
              <div>
                <div className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                  {siteConfig.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {siteConfig.title}
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Consultoria de investimentos independente com foco em clareza, método e transparência.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-[var(--primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Mail size={18} />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-[var(--primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center glass-effect transition-all duration-300 hover:border-[var(--primary)]"
                style={{ borderRadius: '0px' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center glass-effect transition-all duration-300 hover:border-[var(--primary)]"
                style={{ borderRadius: '0px' }}
                aria-label="Instagram"
              >
                <Instagram size={20} style={{ color: 'var(--text-secondary)' }} />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Legal
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm transition-colors duration-300 hover:text-[var(--primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="block text-sm transition-colors duration-300 hover:text-[var(--primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: 'var(--text-dim)' }}
          >
            <strong>Aviso Legal:</strong> Conteúdo educacional e consultivo. Não é recomendação individual de compra/venda.
            Retornos passados não garantem retornos futuros. Invista conforme seu perfil e objetivos.
            Utilize reserva de emergência e diversifique.
          </p>
          <p
            className="text-sm text-center"
            style={{ color: 'var(--text-dim)' }}
          >
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;