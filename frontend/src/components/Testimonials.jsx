import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
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
            O que dizem os clientes
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Exemplos ilustrativos de perfis atendidos (para referência)
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                borderRadius: '2px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="mb-6 opacity-50"
                style={{ color: 'var(--primary)' }}
              />

              {/* Text */}
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {testimonial.role} — {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          {[
            { label: '100% Independente', icon: '✓' },
            { label: 'Sem Conflitos', icon: '✓' },
            { label: 'Consultoria Ética', icon: '✓' },
            { label: 'Educação Prática', icon: '✓' }
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 glass-effect"
              style={{ borderRadius: '2px' }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: 'var(--secondary)' }}
              >
                {badge.icon}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;