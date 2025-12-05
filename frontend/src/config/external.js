// trigger deploy // External Integrations Configuration

export const EXTERNAL_CONFIG = {
  // Tally Form
  TALLY_URL: "https://tally.so/r/q4L452",
  ENABLE_TALLY_EMBED: false,
  TALLY_IFRAME_SRC: "",
  
  // WhatsApp
  WHATSAPP_NUMBER: "5511987654321",
  WHATSAPP_MESSAGE: "Oi Rodrigo! Acabei de enviar o diagnóstico e quero agendar a triagem.",
  
  // Contact Info
  SUPPORT_EMAIL: "contato@rodrigopenachio.com",
  DPO_EMAIL: "privacidade@rodrigopenachio.com",
  
  // Social Media (optional)
  LINKEDIN_URL: "",
  INSTAGRAM_URL: ""
};

// Helper function to get WhatsApp link
export const getWhatsAppLink = () => {
  const { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } = EXTERNAL_CONFIG;
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Helper function to check if Tally is configured
export const isTallyConfigured = () => {
  return true;
};

// Helper function to check if WhatsApp is configured
export const isWhatsAppConfigured = () => {
  return true;
};
