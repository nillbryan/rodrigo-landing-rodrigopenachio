import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/mock';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24"
      style={{ background: 'var(--bg-elevated-1)' }}
    >
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Perguntas & Respostas
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Respostas diretas e honestas sobre a consultoria
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect overflow-hidden transition-all duration-300"
              style={{
                borderRadius: '2px',
                border: openIndex === index ? '1px solid var(--primary)' : '1px solid var(--border-subtle)'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-300 hover:bg-white/5"
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-lg font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: openIndex === index ? 'var(--primary)' : 'var(--text-secondary)',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div
                  className="px-6 pb-5 pt-2 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;