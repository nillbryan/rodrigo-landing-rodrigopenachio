import React from 'react';
import { Target, FileText, Calendar, Shield, GraduationCap, Eye } from 'lucide-react';
import { benefits } from '../data/mock';

const Benefits = () => {
  const iconMap = [
    Target,
    FileText,
    Calendar,
    Shield,
    GraduationCap,
    Eye
  ];

  return (
    <section
      id="beneficios"
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
            O que você recebe
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Consultoria completa com foco em clareza, execução e resultados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="glass-effect p-8 group transition-all duration-300 hover:translate-y-[-4px] hover:border-[var(--primary)]"
                style={{
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(245, 194, 66, 0.1)',
                    borderRadius: '2px',
                    border: '1px solid var(--primary)'
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--primary)' }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;