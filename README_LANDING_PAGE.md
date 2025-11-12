# Landing Page Rodrigo Penachio - Documentação Completa

## 🎯 Visão Geral

Landing page premium de alta conversão para Consultoria de Investimentos Rodrigo Penachio, construída com React + Vite, otimizada para captura de leads qualificados com dois funis distintos.

---

## ✅ Implementações Completas

### 1. Design Premium
- ✅ Tema escuro (#0B0D12) + dourado (#F5C242) + ciano-verde (#00FFD1)
- ✅ Sharp corners (border-radius: 0px) conforme guidelines
- ✅ Glass-morphism effects com backdrop-filter
- ✅ Micro-animations e hover states
- ✅ 100% Responsivo (mobile/tablet/desktop)
- ✅ Fonte Inter (body text) disponível

### 2. Estrutura de Páginas
- ✅ `/` - Landing page principal (todas as seções)
- ✅ `/obrigado` - Página de confirmação com lógica condicional
- ✅ `/politica-de-privacidade` - Política LGPD completa
- ✅ `/termos` - Termos de Uso completos

### 3. Seções da Landing Page
- ✅ Navbar sticky com navegação suave
- ✅ Hero (headline + foto + 2 CTAs distintos)
- ✅ Sobre o Rodrigo (badges de credenciais)
- ✅ Benefícios (6 cards com ícones lucide-react)
- ✅ Como funciona (4 etapas + gráfico SVG de alocação)
- ✅ Planos e Preços (3 planos com "Essencial" destacado)
- ✅ Depoimentos (3 testimonials + trust badges)
- ✅ FAQ (7 perguntas com accordion animado)
- ✅ CTA Final (urgência ética)
- ✅ Formulário de Captação Qualificada
- ✅ Footer (contatos + links legais + aviso)

### 4. Dois Funis Distintos

#### Funil 1: Agendar Triagem (Calendly)
- **Trigger**: Botão "Agendar triagem gratuita"
- **Ação**: Abre Calendly com UTM tracking
- **Tracking**: `lead_source=triage_agendada`
- **Thank You**: `/obrigado?source=triage_agendada`

#### Funil 2: Diagnóstico por E-mail (Formspree)
- **Trigger**: Formulário "Receber diagnóstico inicial"
- **Ação**: Envia via Formspree + Zapier → Google Sheets + HubSpot (opcional)
- **Tracking**: `lead_source=email_diagnostico`
- **Thank You**: `/obrigado?source=email_diagnostico`

### 5. LGPD & Compliance
- ✅ Banner de Cookies com 3 opções (Aceitar/Rejeitar/Configurar)
- ✅ Consentimento granular (Necessários/Analytics/Marketing)
- ✅ Google Analytics 4 só carrega após consentimento
- ✅ Meta Pixel só carrega após consentimento
- ✅ Política de Privacidade completa (LGPD Art. 13.709/2018)
- ✅ Termos de Uso completos
- ✅ Aviso Legal sobre investimentos em todas as páginas

### 6. Integrações (Sem Backend)
- ✅ **Formspree**: Captura de formulário
- ✅ **Zapier Webhook**: Envio para Google Sheets
- ✅ **HubSpot Forms API**: CRM opcional
- ✅ **Calendly**: Agendamento de triagem
- ✅ **Google Analytics 4**: Métricas (condicional)
- ✅ **Meta Pixel**: Marketing (condicional)

### 7. Tracking & Analytics
- ✅ UTM parameters (captura e persistência em sessionStorage)
- ✅ Hidden fields no formulário (lead_source, UTMs, referrer, timestamp)
- ✅ Event tracking (lead_submitted, calendly_clicked)
- ✅ Respeitando LGPD (só rastreia após consentimento)

---

## 🔧 Configuração

### Variáveis de Ambiente (.env)

Copie `.env.example` para `.env` e preencha:

```bash
# Form Submission
REACT_APP_FORM_ENDPOINT=https://formspree.io/f/SEU_ID
REACT_APP_SHEET_ZAPIER_WEBHOOK=https://hooks.zapier.com/hooks/catch/XXXX/XXXX

# HubSpot (opcional)
REACT_APP_HUBSPOT_PORTAL_ID=XXXXXX
REACT_APP_HUBSPOT_FORM_GUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

# Calendly
REACT_APP_CALENDLY_URL=https://calendly.com/SEU-USUARIO/triagem-15min

# Analytics (só carrega após consentimento)
REACT_APP_GA_ID=G-XXXXXXX
REACT_APP_META_PIXEL_ID=XXXXXXXXX

# Contatos
REACT_APP_SUPORTE_EMAIL=contato@SEU-DOMINIO.com
REACT_APP_DPO_EMAIL=privacidade@SEU-DOMINIO.com
REACT_APP_WHATSAPP_LINK=https://wa.me/55XXXXXXXXXXX

# Backend (existente)
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Passos para Produção

#### 1. Preencher .env
```bash
cd /app/frontend
cp .env.example .env
# Editar .env com seus valores reais
```

#### 2. Criar Integrações

**Formspree:**
1. Criar conta em https://formspree.io
2. Criar novo form
3. Copiar endpoint: `https://formspree.io/f/SEU_ID`

**Zapier:**
1. Criar Zap: Webhooks by Zapier → Google Sheets
2. Copiar Webhook URL
3. Mapear campos do formulário para colunas da planilha

**HubSpot (opcional):**
1. Criar conta gratuita em https://hubspot.com
2. Settings → Forms → Create Form → Embed
3. Copiar Portal ID e Form GUID

**Calendly:**
1. Criar evento em https://calendly.com
2. Configurar duração 15 min
3. Copiar link público

**Google Analytics:**
1. Criar propriedade GA4
2. Copiar Measurement ID (G-XXXXXXX)

**Meta Pixel:**
1. Business Manager → Events Manager
2. Create Pixel
3. Copiar Pixel ID

#### 3. Trocar Foto do Rodrigo
```bash
# Substituir placeholder atual
cp SUA_FOTO.jpg /app/frontend/public/assets/rodrigo-penachio.jpg
```

Ou atualizar URL em `/app/frontend/src/data/mock.js`:
```javascript
export const hero = {
  profileImage: "/assets/rodrigo-penachio.jpg" // ou URL externa
};
```

---

## 📊 Fluxo de Dados

### Lead via Formulário (email_diagnostico)
```
Frontend Form Submit
  ↓
Formspree (captura)
  ↓
Zapier Webhook (Google Sheets)
  ↓
HubSpot API (opcional)
  ↓
Redirect: /obrigado?source=email_diagnostico
```

### Lead via Calendly (triage_agendada)
```
Click "Agendar triagem"
  ↓
Calendly (com UTMs)
  ↓
Usuário agenda
  ↓
Calendly webhook → Zapier → Google Sheets
  ↓
Redirect manual: /obrigado?source=triage_agendada
```

---

## 🎨 Personalização

### Cores (tokens.css)
```css
--bg-primary: #0B0D12;           /* Fundo principal */
--primary: #F5C242;              /* Dourado (premium) */
--secondary: #00FFD1;            /* Ciano-verde (tech) */
```

### Conteúdos (mock.js)
Todos os textos estão centralizados em `/app/frontend/src/data/mock.js`:
- Hero (headline, bullets, CTAs)
- About (bio, badges)
- Benefits (6 cards)
- How It Works (4 steps)
- Plans (3 planos)
- FAQs (7 perguntas)
- Testimonials (3 depoimentos)

### Adicionar Nova Seção
1. Criar component em `/app/frontend/src/components/NovaSecao.jsx`
2. Adicionar ao `/app/frontend/src/pages/LandingPage.jsx`
3. Adicionar link na Navbar se necessário

---

## 🧪 Testes

### Checklist QA (✅ = Obrigatório antes de publicar)
- ✅ Formulário envia para Formspree
- ✅ Dados aparecem no Google Sheets (via Zapier)
- ✅ HubSpot recebe leads (se ativado)
- ✅ CTAs Calendly abrem com UTMs corretos
- ✅ `/obrigado?source=email_diagnostico` mostra mensagem correta
- ✅ `/obrigado?source=triage_agendada` mostra mensagem correta
- ✅ Cookie banner aparece na primeira visita
- ✅ GA4/Meta Pixel NÃO carregam sem consentimento
- ✅ GA4/Meta Pixel carregam após "Aceitar tudo"
- ✅ Links legais funcionam (Política, Termos)
- ✅ Navbar sticky funciona
- ✅ Smooth scroll nas âncoras
- ✅ Mobile responsivo (360px, 768px, 1280px)
- ✅ Lighthouse mobile ≥ 90

### Testar Formulário Localmente
```bash
# Console do navegador após submit
# Deve mostrar: "Form submitted:" + dados
```

### Testar Analytics
```bash
# Console do navegador após consentir cookies
# Deve mostrar: gtag/fbq functions loaded
```

---

## 🚀 Deploy

### Build para Produção
```bash
cd /app/frontend
yarn build
```

### Deploy na Emergent
A aplicação já está configurada para rodar na Emergent. Após preencher `.env`, basta:
1. Commit das mudanças
2. Push para repositório
3. Emergent auto-deploy

### Deploy Externo (Netlify/Vercel)
1. Conectar repositório
2. Build command: `yarn build`
3. Publish directory: `build`
4. Adicionar environment variables (copiar do .env)

---

## 📝 Estrutura de Arquivos

```
/app/frontend/
├── public/
│   └── assets/
│       └── rodrigo-penachio.jpg    # Foto profissional
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navegação sticky
│   │   ├── Hero.jsx                # Hero com 2 CTAs
│   │   ├── About.jsx               # Sobre o Rodrigo
│   │   ├── Benefits.jsx            # 6 benefícios
│   │   ├── HowItWorks.jsx          # 4 etapas + gráfico
│   │   ├── Pricing.jsx             # 3 planos
│   │   ├── Testimonials.jsx        # Depoimentos
│   │   ├── FAQ.jsx                 # 7 FAQs
│   │   ├── FinalCTA.jsx            # CTA final
│   │   ├── LeadForm.jsx            # Formulário qualificado
│   │   ├── Footer.jsx              # Footer completo
│   │   └── CookieBanner.jsx        # LGPD consent
│   ├── pages/
│   │   ├── LandingPage.jsx         # Página principal
│   │   ├── ThankYou.jsx            # /obrigado
│   │   ├── PrivacyPolicy.jsx       # /politica-de-privacidade
│   │   └── Terms.jsx               # /termos
│   ├── data/
│   │   └── mock.js                 # Todos os conteúdos
│   ├── utils/
│   │   └── analytics.js            # UTM + GA4 + Meta Pixel
│   ├── styles/
│   │   └── tokens.css              # Design tokens
│   ├── App.js                      # Router
│   ├── App.css                     # Global styles
│   └── index.css                   # Tailwind + base
├── .env                             # ⚠️ NÃO COMMITAR
├── .env.example                     # Template
└── package.json
```

---

## 📧 E-mails (Textos Prontos)

### E-mail 1: "Lead recebido – diagnóstico"
**Assunto:** Recebemos seu pedido de diagnóstico

```
Olá {{NOME}},

Obrigado pelo interesse na Consultoria de Investimentos Rodrigo Penachio.

Em até 1 dia útil enviaremos seu diagnóstico inicial com próximos passos.

Se preferir acelerar, agende uma triagem de 15 min:
{{CALENDLY_URL}}

Abraços,
Rodrigo Penachio
```

### E-mail 2: "Confirmação de triagem"
**Assunto:** Triagem confirmada – {{DATA/HORA}}

```
Olá {{NOME}},

Sua triagem está confirmada para {{DATA/HORA}}.

Link da reunião: {{LINK_CALENDLY}}

Sugestão: tenha objetivos, prazo e dúvidas em mãos.

Até já,
Rodrigo Penachio
```

**Configuração no Calendly:**
- Settings → Event Types → Sua Triagem → Email Notifications
- Customizar templates acima

---

## 🔍 SEO

### Meta Tags (Adicionar ao index.html)
```html
<title>Rodrigo Penachio | Consultoria de Investimentos</title>
<meta name="description" content="Consultoria independente para montar e evoluir seu portfólio com foco em crescimento, renda e proteção. Diagnóstico gratuito.">
<meta property="og:title" content="Rodrigo Penachio | Consultoria de Investimentos">
<meta property="og:description" content="Investir com clareza. Crescer com método.">
<meta property="og:image" content="URL_DA_IMAGEM_OG">
<meta property="og:url" content="https://seu-dominio.com">
```

---

## 🛠️ Troubleshooting

### Formulário não envia
1. Verificar `REACT_APP_FORM_ENDPOINT` no .env
2. Verificar Console do navegador (erros?)
3. Testar Formspree endpoint manualmente (Postman/curl)

### Google Sheets não recebe dados
1. Verificar Zapier Webhook URL
2. Testar webhook manualmente
3. Verificar mapeamento de campos no Zap

### Calendly não abre
1. Verificar `REACT_APP_CALENDLY_URL` no .env
2. Verificar se link Calendly é público
3. Verificar Console (erros?)

### Analytics não rastreia
1. Verificar consentimento de cookies (aceitar banner)
2. Verificar GA_ID e META_PIXEL_ID no .env
3. Abrir Console e verificar: `window.gtag` e `window.fbq`

---

## 📚 Recursos

- **Formspree**: https://formspree.io/docs
- **Zapier**: https://zapier.com/learn
- **HubSpot Forms API**: https://developers.hubspot.com/docs/api/marketing/forms
- **Calendly**: https://help.calendly.com
- **Google Analytics 4**: https://support.google.com/analytics
- **Meta Pixel**: https://developers.facebook.com/docs/meta-pixel

---

## ⚠️ Avisos Importantes

### Nunca Commitar
- `.env` (contém API keys)
- `node_modules/`
- `build/`

### LGPD
- Cookie banner é OBRIGATÓRIO antes de carregar analytics
- Usuários devem poder revogar consentimento
- Manter logs de consentimento (HubSpot/Formspree fazem isso)

### Investimentos
- Aviso Legal presente em todas as páginas
- Nunca prometer retornos garantidos
- Deixar claro: "consultoria não garante rentabilidade"

---

## 🎯 Próximos Passos Sugeridos

1. ✅ Preencher `.env` com credenciais reais
2. ✅ Trocar foto do Rodrigo (`/public/assets/rodrigo-penachio.jpg`)
3. ✅ Testar formulário → Google Sheets
4. ✅ Testar Calendly → recebe agendamento
5. ✅ Configurar e-mails de confirmação (Formspree + Calendly)
6. ⏳ Apontar domínio próprio
7. ⏳ Configurar SSL (HTTPS)
8. ⏳ Monitorar leads no Google Sheets
9. ⏳ Configurar funil de follow-up (HubSpot/Mailchimp)

---

## 📞 Suporte

Para dúvidas sobre implementação:
- Consultar `/app/contracts.md` (detalhes de backend se precisar)
- Verificar Console do navegador (erros detalhados)
- Testar integrações manualmente (Postman/curl)

---

**Landing page pronta para captar leads qualificados! 🚀**
