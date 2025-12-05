import React from 'react';
import { Check, Star } from 'lucide-react';
import { plans } from '../data/mock';
import { EXTERNAL_CONFIG } from '../config/external';
import { trackEvent } from '../utils/analytics';

const Pricing = () => {
  const handlePlanClick = (planName) => {
    trackEvent('cta_clicked', {
      location: 'pricing',
      plan: planName
    });
    window.open(EXTERNAL_CONFIG.TALLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="planos"
      className="relative py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Planos e Preços
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Escolha o plano que melhor se adapta aos seus objetivos
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="glass-effect p-8 transition-all duration-300 hover:translate-y-[-8px] relative"
              style={{
                borderRadius: '2px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >

              {/* Plan Name */}
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {plan.name}
              </h3>

              {/* Subtitle (for Wealth plan) */}
              {plan.subtitle && (
                <p
                  className="text-sm mb-3"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {plan.subtitle}
                </p>
              )}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--secondary)' }}
                    />
                    <span
                      className="text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePlanClick(plan.name)}
                className="w-full py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: plan.recommended ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.08)',
                  color: plan.recommended ? 'var(--bg-primary)' : 'var(--text-primary)',
                  border: plan.recommended ? 'none' : '1px solid var(--border-medium)',
                  borderRadius: '0px'
                }}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center text-sm mt-12 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dim)' }}
        >
          Todos os planos incluem consultoria personalizada sem conflitos de interesse.
          Preços sujeitos a ajustes conforme complexidade do portfólio.
        </p>
      </div>
    </section>
  );
};

export default Pricing;