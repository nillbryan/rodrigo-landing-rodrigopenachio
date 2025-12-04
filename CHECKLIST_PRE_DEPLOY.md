# ✅ Checklist Pré-Deploy - Rodrigo Penachio

## 🎯 Status: **OK PARA PRODUÇÃO**

---

## ✅ Verificações Realizadas

### 1. Build de Produção
- ✅ `yarn build` executado com sucesso
- ✅ Bundle otimizado: 91.57 kB (JS) + 10.58 kB (CSS)
- ✅ Sem erros ou warnings de compilação

### 2. Smoke Test Completo
- ✅ Página inicial (Hero) carrega corretamente
- ✅ Seção Planos renderiza com valores corretos
- ✅ Depoimentos sem nomes/avatares (apenas profissão + cidade)
- ✅ FAQ funcional
- ✅ Rota `/termos` acessível (sem 404)
- ✅ Rota `/politica-de-privacidade` acessível (sem 404)
- ✅ Formulário Tally integrado na seção de contato

### 3. Rotas SPA (Vercel)
- ✅ `vercel.json` criado com rewrite rules
- ✅ Rotas testadas localmente (React Router funciona)

### 4. Configuração Externa
- ✅ Arquivo `src/config/external.js` preparado
- ✅ Placeholders claramente marcados para edição
- ✅ Helpers de validação implementados (isWhatsAppConfigured, isTallyConfigured)

### 5. Ajustes de Conteúdo
- ✅ **Planos corrigidos:**
  - Start: R$ 2.500/ano
  - Essencial: R$ 3.500/ano (com WhatsApp entre parênteses)
  - Wealth: a partir de R$ 800 mil (0,5% do patrimônio/ano)
- ✅ **Depoimentos simplificados:**
  - Removidos nomes (author)
  - Formato: "Profissão — Cidade/UF"
  - Sem avatares ou imagens

### 6. Documentação
- ✅ `README_DEPLOY.md` criado com instruções para Vercel
- ✅ Checklist de pré-requisitos incluído
- ✅ Troubleshooting de problemas comuns

---

## 📋 O QUE VOCÊ PRECISA FAZER ANTES DO DEPLOY

### Passo 1: Editar Configuração Externa
Abra o arquivo `/frontend/src/config/external.js` e preencha:

```javascript
TALLY_URL: "https://tally.so/r/SEU_FORM_ID"  // ← Substituir
WHATSAPP_NUMBER: "5511999999999"              // ← Substituir (formato: 55 + DDD + número)
```

### Passo 2: Salvar no GitHub
1. Use o botão **"Save to GitHub"** na interface da Emergent
2. Confirme que as mudanças foram commitadas

### Passo 3: Deploy na Vercel
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe seu repositório do GitHub
3. Configure:
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
4. Clique em **"Deploy"**

---

## 🔍 Verificação Pós-Deploy

Após o deploy na Vercel, teste:

- [ ] Página inicial: `https://seudominio.vercel.app`
- [ ] Rota Termos: `https://seudominio.vercel.app/termos`
- [ ] Rota Privacidade: `https://seudominio.vercel.app/politica-de-privacidade`
- [ ] Botão WhatsApp aparece (canto inferior direito, após scroll)
- [ ] Botão "Agendar Triagem" abre o Tally form
- [ ] Seção Planos exibe os 3 planos corretamente
- [ ] Depoimentos não mostram nomes

---

## 📦 Arquivos Criados/Modificados

### Arquivos Novos
- `/frontend/vercel.json` - Configuração de rotas SPA
- `/frontend/README_DEPLOY.md` - Guia de deploy

### Arquivos Modificados
- `/frontend/src/data/mock.js` - Planos e depoimentos atualizados
- `/frontend/src/components/Testimonials.jsx` - Layout simplificado
- `/frontend/src/config/external.js` - Já existia (não modificado)

---

## 🚨 Importante

**Componentes funcionam com placeholders:**
- ✅ O site carrega normalmente mesmo com `TALLY_URL: "COLE_AQUI_DEPOIS"`
- ✅ O botão WhatsApp **não aparece** até você preencher o número real
- ✅ O formulário Tally mostra um botão que leva para a URL configurada

**Após preencher os valores reais:**
- Faça commit no GitHub
- Vercel detecta automaticamente e faz redeploy

---

## 📞 Suporte

- **Dúvidas sobre Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Dúvidas sobre Tally:** [help.tally.so](https://help.tally.so)
- **Emergent:** support@emergentagent.com

---

**✨ Projeto pronto para produção!**
