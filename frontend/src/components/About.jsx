import React from 'react';
import { Award, TrendingUp, Globe, MessageCircle } from 'lucide-react';
import { about } from '../data/mock';

const About = () => {
  const iconMap = {
    'Independente': Award,
    'Carteiras por objetivo': TrendingUp,
    'Brasil + Exterior': Globe,
    'Linguagem clara': MessageCircle
  };

  return (
    <section
      id="sobre"
      className="relative py-24"
      style={{ background: 'var(--bg-elevated-1)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              {about.title}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {about.description}
            </p>
          </div>

          {/* Right - Badges Grid */}
          <div className="grid grid-cols-2 gap-4">
            {about.badges.map((badge, index) => {
              const Icon = iconMap[badge] || Award;
              return (
                <div
                  key={index}
                  className="glass-effect p-6 transition-all duration-300 hover:translate-y-[-4px]"
                  style={{
                    borderRadius: '0px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Icon
                    size={32}
                    className="mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {badge}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;