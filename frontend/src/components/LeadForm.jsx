import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { formOptions } from '../data/mock';
import { trackEvent } from '../utils/analytics';
import { EXTERNAL_CONFIG, isTallyConfigured } from '../config/external';

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    objective: '',
    patrimony: '',
    experience: '',
    international: '',
    crypto: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.phone.trim()) newErrors.phone = 'WhatsApp é obrigatório';
    if (!formData.city.trim()) newErrors.city = 'Cidade/UF é obrigatório';
    if (!formData.objective) newErrors.objective = 'Selecione um objetivo';
    if (!formData.patrimony) newErrors.patrimony = 'Selecione uma faixa de patrimônio';
    if (!formData.experience) newErrors.experience = 'Selecione seu nível de experiência';
    if (!formData.international) newErrors.international = 'Selecione uma opção';
    if (!formData.crypto) newErrors.crypto = 'Selecione uma opção';
    if (!formData.consent) newErrors.consent = 'Você deve aceitar os termos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-effect p-8 space-y-6"
          style={{ borderRadius: '2px' }}
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.name ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              />
              {errors.name && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.email ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              />
              {errors.email && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone & City */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                WhatsApp (com DDI) *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+55 11 99999-9999"
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.phone ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              />
              {errors.phone && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Cidade/UF *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="São Paulo/SP"
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.city ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              />
              {errors.city && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.city}
                </p>
              )}
            </div>
          </div>

          {/* Objective */}
          <div>
            <label
              htmlFor="objective"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Objetivo principal *
            </label>
            <select
              id="objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
              style={{
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                border: `1px solid ${errors.objective ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                borderRadius: '0px',
                '--tw-ring-color': 'var(--secondary)'
              }}
            >
              <option value="">Selecione...</option>
              {formOptions.objectives.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {errors.objective && (
              <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                {errors.objective}
              </p>
            )}
          </div>

          {/* Patrimony & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="patrimony"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Patrimônio investivel aproximado *
              </label>
              <select
                id="patrimony"
                name="patrimony"
                value={formData.patrimony}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.patrimony ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              >
                <option value="">Selecione...</option>
                {formOptions.patrimony.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.patrimony && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.patrimony}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Experiência *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base transition-colors duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: `1px solid ${errors.experience ? 'var(--accent-danger)' : 'var(--border-subtle)'}`,
                  borderRadius: '0px',
                  '--tw-ring-color': 'var(--secondary)'
                }}
              >
                <option value="">Selecione...</option>
                {formOptions.experience.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.experience && (
                <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                  {errors.experience}
                </p>
              )}
            </div>
          </div>

          {/* International Exposure */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
              Interessa ter exposição internacional (S&P 500/ETFs)? *
            </label>
            <div className="flex gap-6">
              {['Sim', 'Não'].map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="international"
                    value={option}
                    checked={formData.international === option}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                    style={{
                      accentColor: 'var(--secondary)'
                    }}
                  />
                  <span style={{ color: 'var(--text-secondary)' }}>{option}</span>
                </label>
              ))}
            </div>
            {errors.international && (
              <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                {errors.international}
              </p>
            )}
          </div>

          {/* Crypto Exposure */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
              Aceita pequena exposição a cripto (BTC/ETH)? *
            </label>
            <div className="flex gap-6">
              {['Sim', 'Não'].map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="crypto"
                    value={option}
                    checked={formData.crypto === option}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                    style={{
                      accentColor: 'var(--secondary)'
                    }}
                  />
                  <span style={{ color: 'var(--text-secondary)' }}>{option}</span>
                </label>
              ))}
            </div>
            {errors.crypto && (
              <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                {errors.crypto}
              </p>
            )}
          </div>

          {/* Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 cursor-pointer flex-shrink-0"
                style={{
                  accentColor: 'var(--secondary)'
                }}
              />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Autorizo o uso dos meus dados conforme LGPD e aceito receber comunicações sobre a consultoria.
                Sem spam. Cancelar inscrição a qualquer momento.
              </span>
            </label>
            {errors.consent && (
              <p className="text-sm mt-1" style={{ color: 'var(--accent-danger)' }}>
                {errors.consent}
              </p>
            )}
          </div>

          {/* Error Message */}
          {errors.general && (
            <div
              className="p-4 text-center"
              style={{
                background: 'rgba(255, 90, 113, 0.1)',
                border: '1px solid var(--accent-danger)',
                borderRadius: '2px',
                color: 'var(--accent-danger)'
              }}
            >
              {errors.general}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: 'var(--gradient-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '0px',
              boxShadow: 'var(--shadow-glow-primary)'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar Solicitação
                <Send size={20} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;