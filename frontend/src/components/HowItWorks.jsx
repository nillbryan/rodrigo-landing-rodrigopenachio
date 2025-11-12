import React from 'react';
import { Search, BarChart3, ListChecks, RefreshCcw } from 'lucide-react';
import { howItWorks } from '../data/mock';

const HowItWorks = () => {
  const iconMap = [Search, BarChart3, ListChecks, RefreshCcw];

  return (
    <section
      id="como-funciona"
      className="relative py-24"
      style={{ background: 'var(--bg-elevated-1)' }}
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
            Como funciona
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Processo simples em 4 etapas para estruturar sua carteira
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5"
            style={{ background: 'var(--border-subtle)' }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = iconMap[index];
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div
                    className="glass-effect p-6 transition-all duration-300 hover:translate-y-[-4px] h-full"
                    style={{
                      borderRadius: '2px',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="relative z-10 w-16 h-16 flex items-center justify-center font-bold text-2xl"
                        style={{
                          background: 'var(--gradient-primary)',
                          color: 'var(--bg-primary)',
                          borderRadius: '2px',
                          boxShadow: 'var(--shadow-glow-primary)'
                        }}
                      >
                        {step.step}
                      </div>
                      <Icon
                        size={28}
                        style={{ color: 'var(--primary)' }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector - Desktop */}
                  {index < howItWorks.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5"
                      style={{ background: 'var(--primary)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple Chart Visualization */}
        <div
          className="mt-16 glass-effect p-8"
          style={{ borderRadius: '2px' }}
        >
          <h4
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Exemplo de Alocação de Portfólio
          </h4>
          <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Renda Fixa', value: 40, color: 'var(--accent-info)' },
              { label: 'Ações/FIIs', value: 35, color: 'var(--primary)' },
              { label: 'ETFs Globais', value: 20, color: 'var(--accent-warning)' },
              { label: 'Cripto', value: 5, color: 'var(--secondary)' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="h-32 mb-3 transition-transform duration-300 hover:scale-105 flex items-end"
                >
                  <div
                    className="w-full transition-all duration-500"
                    style={{
                      height: `${item.value * 2}%`,
                      background: item.color,
                      borderRadius: '2px 2px 0 0'
                    }}
                  />
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.label}
                </div>
                <div
                  className="text-2xl font-bold mt-1"
                  style={{ color: item.color }}
                >
                  {item.value}%
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-sm text-center mt-6"
            style={{ color: 'var(--text-dim)' }}
          >
            *Exemplo ilustrativo. Alocação real varia conforme perfil e objetivos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;