# 🚀 Guia de Deploy - Landing Page Rodrigo Penachio

## 📋 Índice
1. [Configuração Inicial](#configuração-inicial)
2. [Desenvolvimento Local](#desenvolvimento-local)
3. [Configurar Integrações](#configurar-integrações)
4. [Build de Produção](#build-de-produção)
5. [Deploy na Vercel](#deploy-na-vercel)
6. [Deploy no Netlify](#deploy-no-netlify)
7. [Exportar como ZIP](#exportar-como-zip)
8. [Troubleshooting](#troubleshooting)

---

## 1. Configuração Inicial

### Pré-requisitos
- Node.js 16+ instalado
- Conta no GitHub (gratuita)
- Conta na Vercel ou Netlify (gratuita)
- Formulário Tally criado
- Número de WhatsApp Business

---

## 2. Desenvolvimento Local

### Instalar Dependências
```bash
cd frontend
yarn install
# ou
npm install
```

### Rodar em Desenvolvimento
```bash
yarn start
# ou
npm start
```

Acesse: `http://localhost:3000`

### Hot Reload
O servidor de desenvolvimento recarrega automaticamente ao salvar arquivos.

---

## 3. Configurar Integrações

### A. Tally (Formulário)

1. **Criar formulário no Tally:**
   - Acesse: https://tally.so
   - Crie conta gratuita
   - Crie novo formulário
   - Adicione campos: Nome, Email, WhatsApp, Objetivo, Patrimônio, Experiência
   - Publique o formulário

2. **Copiar URL do Tally:**
   - No Tally, clique em "Share"
   - Copie o link público (ex: `https://tally.so/r/XXXXXX`)

3. **Configurar no projeto:**
   
   Abra: `/src/config/external.js`
   
   ```javascript
   export const EXTERNAL_CONFIG = {
     // Tally Form
     TALLY_URL: "https://tally.so/r/XXXXXX", // ← Cole seu link aqui
     ENABLE_TALLY_EMBED: false, // true = iframe, false = popup
     TALLY_IFRAME_SRC: "", // Se ENABLE_TALLY_EMBED = true, cole o iframe src
     
     // ...resto do config
   };
   ```

4. **Opção Embed (opcional):**
   - Se quiser formulário incorporado na página:
   - No Tally → Share → Embed
   - Copie o `src` do iframe
   - Cole em `TALLY_IFRAME_SRC`
   - Mude `ENABLE_TALLY_EMBED` para `true`

---

### B. WhatsApp

1. **Obter número WhatsApp Business:**
   - Formato: `5511999999999` (DDI + DDD + Número)
   - Exemplo: `5511987654321`

2. **Configurar no projeto:**
   
   Em `/src/config/external.js`:
   
   ```javascript
   export const EXTERNAL_CONFIG = {
     // ...
     
     // WhatsApp
     WHATSAPP_NUMBER: "5511999999999", // ← Cole seu número aqui
     WHATSAPP_MESSAGE: "Quero agendar minha triagem gratuita",
     
     // ...
   };
   ```

3. **Testar:**
   - Rode `yarn start`
   - Scroll até aparecer botão flutuante verde
   - Clique e verifique se abre WhatsApp corretamente

---

### C. E-mails de Contato

Em `/src/config/external.js`:

```javascript
export const EXTERNAL_CONFIG = {
  // ...
  
  // Contact Info
  SUPPORT_EMAIL: "contato@rodrigopenachio.com", // ← Seu email
  DPO_EMAIL: "privacidade@rodrigopenachio.com", // ← Email LGPD
  
  // Social Media (opcional)
  LINKEDIN_URL: "https://linkedin.com/in/seu-perfil",
  INSTAGRAM_URL: "https://instagram.com/seu-perfil"
};
```

---

## 4. Build de Produção

### Gerar Build Otimizado
```bash
yarn build
# ou
npm run build
```

### Verificar Build
```bash
# Instalar serve globalmente (apenas uma vez)
npm install -g serve

# Testar build localmente
serve -s build
```

Acesse: `http://localhost:3000` (versão otimizada)

### Conteúdo do Build
Pasta `build/` contém:
- HTML/CSS/JS minificados
- Assets otimizados
- Service worker (PWA)
- Pronto para deploy

---

## 5. Deploy na Vercel

### Via GitHub (Recomendado)

#### Passo 1: Criar Repositório no GitHub
```bash
# No terminal, dentro da pasta /app
cd frontend
git init
git add .
git commit -m "Initial commit - Landing Page Rodrigo Penachio"

# Criar repo no GitHub (pelo site) e depois:
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

#### Passo 2: Importar na Vercel
1. Acesse: https://vercel.com
2. Clique "Add New..." → "Project"
3. Import Git Repository → Selecione seu repo
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `./` (ou `frontend` se for monorepo)
   - **Build Command:** `yarn build` ou `npm run build`
   - **Output Directory:** `build`
5. Clique "Deploy"

#### Passo 3: Configurar Domínio (Opcional)
1. Vercel Dashboard → Seu Projeto → Settings → Domains
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções

---

### Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
cd frontend
vercel

# Deploy de produção
vercel --prod
```

---

## 6. Deploy no Netlify

### Via GitHub

1. Acesse: https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. Selecione GitHub → Autorize → Escolha repositório
4. Configure:
   - **Base directory:** `frontend` (se monorepo) ou deixe vazio
   - **Build command:** `yarn build` ou `npm run build`
   - **Publish directory:** `build`
5. Clique "Deploy site"

### Via Netlify CLI

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Fazer login
netlify login

# Deploy
cd frontend
netlify init

# Deploy de produção
netlify deploy --prod --dir=build
```

---

## 7. Exportar como ZIP

### Opção A: Via Emergent (Recomendado)

1. No terminal Emergent:
```bash
cd /app
zip -r landing-rodrigo-penachio.zip frontend \
  -x "frontend/node_modules/*" \
  -x "frontend/build/*" \
  -x "frontend/.git/*"
```

2. Baixar o ZIP:
   - Emergent interface → Files → Download `landing-rodrigo-penachio.zip`

### Opção B: Manual (Localmente)

1. Clone ou baixe o projeto do GitHub
2. Navegue até a pasta `frontend`
3. Exclua manualmente:
   - `node_modules/`
   - `build/`
   - `.git/`
4. Compacte a pasta `frontend` em ZIP

### O que incluir no ZIP:
✅ Incluir:
- `src/` (código-fonte)
- `public/` (assets)
- `package.json`
- `package-lock.json` ou `yarn.lock`
- `README_DEPLOY.md` (este arquivo)
- `.env.example`
- `craco.config.js`
- `tailwind.config.js`

❌ Não incluir:
- `node_modules/` (muito grande)
- `build/` (gerado no deploy)
- `.git/` (histórico)
- `.env` (dados sensíveis)

### Descompactar e Usar:
```bash
# Extrair ZIP
unzip landing-rodrigo-penachio.zip
cd frontend

# Instalar dependências
yarn install

# Configurar integrações
# Edite /src/config/external.js

# Rodar
yarn start

# Build
yarn build
```

---

## 8. Troubleshooting

### Erro: "Module not found"
```bash
# Deletar node_modules e reinstalar
rm -rf node_modules
yarn install
```

### Erro: "Port 3000 already in use"
```bash
# Matar processo na porta 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Ou rodar em outra porta
PORT=3001 yarn start
```

### Build falha no Vercel/Netlify
- Verifique `package.json` → `"react-scripts": "5.0.1"`
- Limpe cache: Vercel Dashboard → Settings → Clear Cache
- Tente build local primeiro: `yarn build`

### WhatsApp não abre
- Verifique formato do número: `5511999999999`
- Teste manualmente: `https://wa.me/5511999999999`

### Tally não funciona
- Verifique se URL está correta (sem espaços)
- Teste URL diretamente no navegador
- Verifique console do navegador (F12) por erros

### Imagens não carregam
- Verifique se estão em `/public/assets/`
- Paths devem começar com `/` (ex: `/assets/rodrigo.png`)

### CSS não aplica
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique `tailwind.config.js` → `content` paths
- Verifique imports no `index.css`

---

## 📊 Checklist Pré-Deploy

Antes de fazer deploy, verifique:

### Configuração
- [ ] `TALLY_URL` configurado em `/src/config/external.js`
- [ ] `WHATSAPP_NUMBER` configurado
- [ ] E-mails de contato atualizados
- [ ] Foto profissional no caminho correto

### Testes Locais
- [ ] `yarn start` roda sem erros
- [ ] `yarn build` compila com sucesso
- [ ] Botão WhatsApp funciona
- [ ] Tally abre corretamente
- [ ] Todas as seções aparecem
- [ ] Mobile responsivo OK

### SEO & Meta Tags
- [ ] Title tag atualizado (`public/index.html`)
- [ ] Meta description preenchida
- [ ] Open Graph image configurado
- [ ] Favicon adicionado

### Legal
- [ ] Política de Privacidade atualizada
- [ ] Termos de Uso revisados
- [ ] Avisos legais presentes

---

## 🎯 Performance Tips

### Otimizações Aplicadas
✅ Lazy loading de imagens
✅ Code splitting automático
✅ CSS minificado
✅ JavaScript otimizado
✅ Font display optimized
✅ Service Worker (PWA)

### Para Melhorar Ainda Mais
1. **Comprimir imagens:**
   - Use TinyPNG ou Squoosh
   - Converta para WebP quando possível

2. **Adicionar CDN:**
   - Vercel/Netlify já incluem CDN global
   - Para assets pesados, considere Cloudinary

3. **Lazy load components:**
   - FAQ, Testimonials podem ser lazy loaded
   - Use `React.lazy()` e `Suspense`

---

## 📞 Suporte

### Documentação Adicional
- React: https://react.dev
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Tally: https://tally.so/help

### Recursos do Projeto
- `/app/README_LANDING_PAGE.md` - Documentação completa
- `/app/DEPLOYMENT_READY_REPORT.md` - Report de prontidão
- `/app/contracts.md` - API contracts (se precisar backend)

---

## 🎉 Conclusão

Seguindo este guia, você terá a landing page:
- ✅ Rodando localmente
- ✅ Integrada com Tally e WhatsApp
- ✅ Pronta para deploy
- ✅ Publicada na Vercel ou Netlify
- ✅ Exportável como ZIP

**Boa sorte com sua landing page! 🚀**

---

**Criado para:** Landing Page Rodrigo Penachio - Consultoria de Investimentos  
**Stack:** React + Tailwind CSS  
**Deploy:** Vercel / Netlify  
**Versão:** 1.0 (Production Ready)
