// External Integrations Configuration
// Update these values before deploying

export const EXTERNAL_CONFIG = {
  // Tally Form
  TALLY_URL: "COLE_AQUI_DEPOIS", // Replace with your Tally form URL
  ENABLE_TALLY_EMBED: false, // Set to true to use iframe embed instead of popup
  TALLY_IFRAME_SRC: "", // If using embed, paste iframe src here
  
  // WhatsApp
  WHATSAPP_NUMBER: "55SEUNUMERO", // Format: 55 + DDD + Number (e.g., 5511999999999)
  WHATSAPP_MESSAGE: "Quero agendar minha triagem gratuita",
  
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
  return EXTERNAL_CONFIG.TALLY_URL !== "COLE_AQUI_DEPOIS" && EXTERNAL_CONFIG.TALLY_URL !== "";
};

// Helper function to check if WhatsApp is configured
export const isWhatsAppConfigured = () => {
  return EXTERNAL_CONFIG.WHATSAPP_NUMBER !== "55SEUNUMERO" && EXTERNAL_CONFIG.WHATSAPP_NUMBER !== "";
};
