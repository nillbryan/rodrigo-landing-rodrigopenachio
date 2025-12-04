import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, isWhatsAppConfigured } from '../config/external';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if WhatsApp is not configured
  if (!isWhatsAppConfigured()) {
    return null;
  }

  const whatsappLink = getWhatsAppLink();

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed z-40 transition-all duration-300 ${
          isVisible ? 'bottom-8 opacity-100' : '-bottom-20 opacity-0'
        }`}
        style={{
          right: '2rem'
        }}
      >
        {/* Expanded tooltip */}
        {isExpanded && (
          <div
            className="absolute bottom-20 right-0 glass-effect p-4 min-w-[250px] animate-fadeIn"
            style={{
              borderRadius: '2px',
              border: '1px solid var(--border-medium)'
            }}
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 p-1 hover:bg-white/10 transition-colors"
              style={{ borderRadius: '2px' }}
              aria-label="Fechar"
            >
              <X size={16} style={{ color: 'var(--text-secondary)' }} />
            </button>
            <p
              className="text-sm mb-3 pr-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Agende sua triagem gratuita via WhatsApp
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 text-sm font-medium transition-all hover:scale-[1.02]"
              style={{
                background: '#25D366',
                color: '#FFFFFF',
                borderRadius: '2px'
              }}
            >
              Enviar Mensagem
            </a>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setIsExpanded(true)}
          className="relative group flex items-center justify-center w-16 h-16 transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: '#25D366',
            borderRadius: '50%',
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)'
          }}
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle size={28} color="#FFFFFF" />
          
          {/* Pulse animation */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ background: '#25D366' }}
          />
        </button>
      </div>

      {/* CSS for fade animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
