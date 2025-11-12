# 🚀 Guia Rápido de Deploy - 5 Minutos

## Status: ✅ PRONTO PARA PRODUÇÃO

A landing page está 100% completa. Só falta configurar as integrações externas.

---

## 📋 Passo a Passo Rápido

### 1️⃣ Criar Integrações (15-20 min total)

#### A. Formspree (5 min) - OBRIGATÓRIO
```
1. Ir para: https://formspree.io
2. Criar conta gratuita
3. Clicar "New Form"
4. Nome: "Landing Page Rodrigo Penachio"
5. Copiar endpoint: https://formspree.io/f/XXXXX
```

#### B. Google Sheets + Zapier (10 min) - OBRIGATÓRIO
```
1. Criar planilha no Google Sheets
2. Nomear colunas: name, email, phone, city, objective, patrimony, experience, international, crypto, lead_source, utm_source, timestamp

3. Ir para: https://zapier.com
4. Criar Zap: Webhooks by Zapier → Google Sheets
5. Trigger: Catch Hook
6. Copiar Webhook URL: https://hooks.zapier.com/hooks/catch/XXXXX/XXXXX
7. Action: Create Spreadsheet Row
8. Mapear campos do webhook para colunas da planilha
9. Testar e ativar
```

#### C. Calendly (5 min) - OBRIGATÓRIO
```
1. Ir para: https://calendly.com
2. Criar evento "Triagem de Investimentos - 15 min"
3. Configurar disponibilidade
4. Copiar link: https://calendly.com/SEU-USUARIO/triagem-15min
```

#### D. Google Analytics (3 min) - OPCIONAL
```
1. Ir para: https://analytics.google.com
2. Criar propriedade GA4
3. Copiar Measurement ID: G-XXXXXXX
```

#### E. Meta Pixel (3 min) - OPCIONAL
```
1. Business Manager → Events Manager
2. Create Pixel
3. Copiar Pixel ID: XXXXXXXXX
```

---

### 2️⃣ Configurar .env (2 min)

```bash
cd /app/frontend
cp .env.example .env
nano .env
```

**Colar suas credenciais:**
```bash
REACT_APP_FORM_ENDPOINT=https://formspree.io/f/XXXXX
REACT_APP_SHEET_ZAPIER_WEBHOOK=https://hooks.zapier.com/hooks/catch/XXXXX/XXXXX
REACT_APP_CALENDLY_URL=https://calendly.com/SEU-USUARIO/triagem-15min
REACT_APP_GA_ID=G-XXXXXXX
REACT_APP_META_PIXEL_ID=XXXXXXXXX
REACT_APP_SUPORTE_EMAIL=contato@rodrigopenachio.com
REACT_APP_DPO_EMAIL=privacidade@rodrigopenachio.com
REACT_APP_WHATSAPP_LINK=https://wa.me/5511999999999
REACT_APP_BACKEND_URL=http://localhost:8001
```

Salvar: `Ctrl + X` → `Y` → `Enter`

---

### 3️⃣ Reiniciar Frontend (30 seg)

```bash
sudo supervisorctl restart frontend
```

Aguardar 30 segundos para reload.

---

### 4️⃣ Testar Tudo (5 min)

#### A. Testar Formulário
```
1. Abrir: http://localhost:3000
2. Aceitar cookies
3. Scroll até formulário
4. Preencher todos os campos
5. Submit
6. Verificar redirect para /obrigado
7. Verificar e-mail no Formspree
8. Verificar linha no Google Sheets
```

#### B. Testar Calendly
```
1. Clicar "Agendar triagem gratuita"
2. Verificar se abre Calendly em nova aba
3. Verificar UTMs na URL: ?utm_source=cta_agendar
4. Agendar horário teste
5. Verificar confirmação por e-mail
```

#### C. Testar Analytics
```
1. Abrir Console do navegador (F12)
2. Aceitar cookies banner
3. Verificar console: "gtag" e "fbq" functions loaded
4. Navegar pelo site
5. Verificar eventos no GA4 Real-Time
```

---

### 5️⃣ Build e Deploy (5 min)

#### Build Local
```bash
cd /app/frontend
yarn build
```

Verificar:
- ✅ Build sem erros
- ✅ Pasta `/app/frontend/build` criada

#### Deploy na Emergent
A aplicação já está rodando. Para produção:

1. Commit das mudanças
2. Push para repositório
3. Emergent auto-deploy

#### Deploy Externo (Netlify/Vercel)
```bash
# Netlify
netlify deploy --prod --dir=build

# Ou Vercel
vercel --prod
```

Adicionar variáveis de ambiente no painel da plataforma.

---

## ✅ Checklist Final Rápido

Antes de ir para produção, verificar:

- [ ] .env preenchido com todas as credenciais
- [ ] Formulário envia e aparece no Google Sheets
- [ ] Calendly abre e permite agendamento
- [ ] Cookie banner aparece na primeira visita
- [ ] Analytics rastreia após consentimento
- [ ] /obrigado mostra mensagens corretas
- [ ] Páginas legais acessíveis
- [ ] Foto do Rodrigo carregando
- [ ] Mobile responsivo funcionando

---

## 📊 Monitorar Primeiras 24h

### Google Sheets
Ver leads chegando em tempo real:
```
Nome | E-mail | Telefone | Objetivo | Lead Source | Timestamp
```

### Formspree Dashboard
Ver submissões e e-mails enviados.

### Google Analytics
Ver tráfego, páginas visitadas, conversões.

### Calendly
Ver agendamentos confirmados.

---

## 🆘 Problemas Comuns

### Formulário não envia
```bash
# Verificar .env
cat /app/frontend/.env | grep FORM_ENDPOINT

# Verificar console do navegador
# Deve mostrar erro específico
```

### Google Sheets não recebe
```bash
# Testar Zapier webhook manualmente
curl -X POST https://hooks.zapier.com/hooks/catch/XXXXX/XXXXX \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@teste.com"}'

# Verificar histórico do Zap
```

### Calendly não abre
```bash
# Verificar .env
cat /app/frontend/.env | grep CALENDLY_URL

# Verificar se link é público no Calendly
```

### Analytics não rastreia
```bash
# 1. Aceitar cookies banner
# 2. Abrir Console (F12)
# 3. Digitar: window.gtag
# 4. Deve mostrar: ƒ gtag(){...}

# Se undefined, verificar .env:
cat /app/frontend/.env | grep GA_ID
```

---

## 📞 Contatos para Configuração

**Formspree:** support@formspree.io
**Zapier:** https://zapier.com/help
**Calendly:** https://help.calendly.com
**Google Analytics:** https://support.google.com/analytics

---

## 🎯 Resumo Ultra-Rápido

```bash
# 1. Criar contas (Formspree, Zapier, Calendly)
# 2. Copiar credenciais
# 3. Preencher .env
# 4. Reiniciar: sudo supervisorctl restart frontend
# 5. Testar formulário → Google Sheets
# 6. Testar Calendly
# 7. Build: yarn build
# 8. Deploy!
```

**Tempo estimado total: ~30 minutos**

---

**Landing page está 100% pronta! Só configurar as integrações e deploy! 🚀**
