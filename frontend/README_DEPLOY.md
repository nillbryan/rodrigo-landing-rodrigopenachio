# 🚀 Deploy na Vercel - Guia Completo

## ✅ Pré-requisitos
- [ ] Projeto salvo no GitHub (use o botão "Save to GitHub" na Emergent)
- [ ] Conta na [Vercel](https://vercel.com) (pode usar login do GitHub)
- [ ] URLs do Tally e WhatsApp preenchidas (ver Configuração abaixo)

---

## 📝 Passo 1: Configurar Links Externos

**ANTES de fazer o deploy**, edite o arquivo `/frontend/src/config/external.js`:

```javascript
export const EXTERNAL_CONFIG = {
  // Tally Form
  TALLY_URL: "https://tally.so/r/SEU_FORM_ID", // ⚠️ Substituir
  
  // WhatsApp
  WHATSAPP_NUMBER: "5511999999999", // ⚠️ Formato: 55 + DDD + número
  WHATSAPP_MESSAGE: "Quero agendar minha triagem gratuita",
  
  // Contato
  SUPPORT_EMAIL: "contato@rodrigopenachio.com",
  DPO_EMAIL: "privacidade@rodrigopenachio.com"
};
```

**Salve e faça commit** das alterações no GitHub.

---

## 🌐 Passo 2: Deploy na Vercel

### 2.1 Importar Projeto
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Git Repository"**
3. Selecione seu repositório do GitHub
4. Clique em **"Import"**

### 2.2 Configurar Build
Na tela de configuração, ajuste:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Create React App |
| **Root Directory** | `frontend` ← **IMPORTANTE** |
| **Build Command** | `yarn build` |
| **Output Directory** | `build` |
| **Install Command** | `yarn install` |

### 2.3 Deploy
1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos
3. Vercel vai gerar uma URL tipo: `https://seu-projeto.vercel.app`

---

## 🔗 Passo 3: Domínio Personalizado (Opcional)

### 3.1 Adicionar Domínio
1. No painel da Vercel, vá em **Settings → Domains**
2. Clique em **"Add Domain"**
3. Digite seu domínio (ex: `rodrigopenachio.com`)

### 3.2 Configurar DNS
Na sua provedora de domínio (Registro.br, GoDaddy, etc.), adicione:

**Para domínio raiz (`rodrigopenachio.com`):**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

**Para subdomínio (`www.rodrigopenachio.com`):**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Aguarde 24-48h** para propagação DNS.

---

## ✅ Verificação Pós-Deploy

Teste estas URLs no site publicado:

- [ ] Página inicial: `/`
- [ ] FAQ: `/#faq`
- [ ] Planos: `/#planos`
- [ ] Termos: `/termos`
- [ ] Privacidade: `/politica-de-privacidade`
- [ ] Botão WhatsApp (canto inferior direito)
- [ ] Formulário Tally (clique em "Agendar triagem")

---

## 🔄 Atualizações Futuras

**Para atualizar o site:**
1. Edite os arquivos no GitHub
2. Faça commit e push
3. Vercel faz **deploy automático** a cada push!

**Atalho:** Use o VS Code Web direto do GitHub (tecla `.` no repositório)

---

## ⚙️ Configurações Avançadas

### Variáveis de Ambiente (se necessário)
1. Vercel Dashboard → Settings → Environment Variables
2. Adicione chaves API se integrar Tally via iframe

### Domínios Múltiplos
Você pode adicionar vários domínios (ex: `www`, sem `www`, domínio `.com.br`)

### Analytics
Vercel oferece analytics gratuito. Ative em Settings → Analytics.

---

## 🆘 Problemas Comuns

### ❌ Build Failed
- Verifique se **Root Directory = frontend**
- Confirme que `package.json` e `yarn.lock` estão no repo

### ❌ Página 404
- Verifique se `vercel.json` existe na pasta `frontend`
- Confirme que rotas estão em `App.js`

### ❌ WhatsApp não abre
- Verifique formato do número: `5511999999999` (sem espaços, parênteses ou hífens)

### ❌ Tally não carrega
- Confirme URL no formato: `https://tally.so/r/SEU_ID`
- Verifique se o form está publicado no Tally

---

## 📞 Suporte

- **Vercel Docs:** https://vercel.com/docs
- **Tally Help:** https://help.tally.so
- **Emergent Support:** support@emergentagent.com

---

**✨ Bom deploy!**
