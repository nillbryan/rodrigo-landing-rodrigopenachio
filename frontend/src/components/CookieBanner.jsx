import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { getConsent, saveConsent, initAnalytics } from '../utils/analytics';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setShowBanner(true);
    } else {
      // Initialize analytics if already consented
      initAnalytics();
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    saveConsent(allConsent);
    initAnalytics();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    saveConsent(minimalConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    saveConsent(consent);
    initAnalytics();
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-6"
      style={{ background: 'rgba(11, 13, 18, 0.98)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        {!showSettings ? (
          // Main Banner
          <div className="glass-effect-strong p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <Cookie size={32} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <div className="flex-1">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Cookies e Privacidade
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Usamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo.
                Ao clicar em "Aceitar tudo", você concorda com nosso uso de cookies conforme nossa{' '}
                <a
                  href="/politica-de-privacidade"
                  className="underline hover:text-[var(--primary)] transition-colors"
                >
                  Política de Privacidade
                </a>.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px'
                }}
              >
                <Settings size={16} className="inline mr-2" />
                Configurar
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px'
                }}
              >
                Rejeitar
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--bg-primary)',
                  borderRadius: '0px'
                }}
              >
                Aceitar tudo
              </button>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="glass-effect-strong p-6">
            <div className="flex items-center justify-between mb-6">
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Configurações de Cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-white/5 transition-colors"
                style={{ borderRadius: '0px' }}
              >
                <X size={24} style={{ color: 'var(--text-secondary)' }} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4 p-4 glass-effect" style={{ borderRadius: '0px' }}>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1"
                  style={{ accentColor: 'var(--secondary)' }}
                />
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Cookies Necessários
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Essenciais para o funcionamento do site. Sempre ativos.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 glass-effect" style={{ borderRadius: '0px' }}>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1"
                  style={{ accentColor: 'var(--secondary)' }}
                />
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Cookies de Métricas
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Ajudam a entender como os visitantes usam o site (Google Analytics).
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4 p-4 glass-effect" style={{ borderRadius: '0px' }}>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1"
                  style={{ accentColor: 'var(--secondary)' }}
                />
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Cookies de Marketing
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Usados para rastrear visitantes e exibir anúncios relevantes (Meta Pixel, LinkedIn).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px'
                }}
              >
                Rejeitar Todos
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--bg-primary)',
                  borderRadius: '0px'
                }}
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;