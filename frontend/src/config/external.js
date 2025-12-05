// External Integrations Configuration

export const EXTERNAL_CONFIG = {
  // Tally Form
  TALLY_URL: "https://tally.so/r/q4L452",
  ENABLE_TALLY_EMBED: false,
  // Se quiser embed, use o formato abaixo (o id do seu form é q4L452):
  // https://tally.so/embed/q4L452?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1
  TALLY_IFRAME_SRC: "https://tally.so/embed/q4L452?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",

  // WhatsApp (somente números: país+DDD+número)
  WHATSAPP_NUMBER: "5511987654321",
  WHATSAPP_MESSAGE: "Oi Rodrigo! Acabei de enviar o diagnóstico e quero agendar a triagem.",

  // Contact Info
  SUPPORT_EMAIL: "contato@rodrigopenachio.com",
  DPO_EMAIL: "privacidade@rodrigopenachio.com",

  // Social Media (optional)
  LINKEDIN_URL: "",
  INSTAGRAM_URL: ""
};

export const getWhatsAppLink = () => {
  const phone = String(EXTERNAL_CONFIG.WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const msg = String(EXTERNAL_CONFIG.WHATSAPP_MESSAGE || "");
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const isTallyConfigured = () => {
  const url = String(EXTERNAL_CONFIG.TALLY_URL || "").trim();
  if (!url) return false;

  if (EXTERNAL_CONFIG.ENABLE_TALLY_EMBED) {
    const src = String(EXTERNAL_CONFIG.TALLY_IFRAME_SRC || "").trim();
    return !!src;
  }

  return true;
};

export const isWhatsAppConfigured = () => {
  const phone = String(EXTERNAL_CONFIG.WHATSAPP_NUMBER || "").replace(/\D/g, "");
  return phone.length >= 10 && phone.length <= 15;
};
