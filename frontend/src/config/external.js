// frontend/src/config/external.js
// External Integrations Configuration
// Dica: no Vercel, configure por Environment Variables (REACT_APP_*)

const env = (typeof process !== "undefined" && process.env) ? process.env : {};

const asBool = (v) => String(v || "").toLowerCase() === "true";
const asStr = (v) => String(v || "").trim();
const normalizePhone = (v) => asStr(v).replace(/[^\d]/g, "");

export const EXTERNAL_CONFIG = {
  // Tally
  TALLY_URL: asStr(env.REACT_APP_TALLY_URL) || "https://tally.so/r/q4L452",
  ENABLE_TALLY_EMBED: asBool(env.REACT_APP_ENABLE_TALLY_EMBED) || false,
  TALLY_IFRAME_SRC: asStr(env.REACT_APP_TALLY_IFRAME_SRC) || "",

  // WhatsApp
  WHATSAPP_NUMBER: asStr(env.REACT_APP_WHATSAPP_NUMBER) || "5511987654321",
  WHATSAPP_MESSAGE:
    asStr(env.REACT_APP_WHATSAPP_MESSAGE) ||
    "Oi Rodrigo! Acabei de enviar o diagnóstico e quero agendar a triagem.",

  // Contact Info
  SUPPORT_EMAIL: asStr(env.REACT_APP_SUPPORT_EMAIL) || "contato@rodrigopenachio.com",
  DPO_EMAIL: asStr(env.REACT_APP_DPO_EMAIL) || "privacidade@rodrigopenachio.com",

  // Social (optional)
  LINKEDIN_URL: asStr(env.REACT_APP_LINKEDIN_URL) || "",
  INSTAGRAM_URL: asStr(env.REACT_APP_INSTAGRAM_URL) || ""
};

export const getWhatsAppLink = () => {
  const number = normalizePhone(EXTERNAL_CONFIG.WHATSAPP_NUMBER);
  const msg = asStr(EXTERNAL_CONFIG.WHATSAPP_MESSAGE);
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
};

export const isTallyConfigured = () => {
  const url = asStr(EXTERNAL_CONFIG.TALLY_URL);
  return url.startsWith("http");
};

export const isWhatsAppConfigured = () => {
  return normalizePhone(EXTERNAL_CONFIG.WHATSAPP_NUMBER).length >= 10;
};
