import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DPO_EMAIL = process.env.REACT_APP_DPO_EMAIL || 'privacidade@seu-dominio.com';
  const SUPORTE_EMAIL = process.env.REACT_APP_SUPORTE_EMAIL || 'contato@seu-dominio.com';

  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-sm transition-colors hover:text-[var(--primary)]"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ArrowLeft size={16} />
          Voltar para home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Shield size={48} style={{ color: 'var(--primary)' }} />
          <div>
            <h1
              className="text-4xl lg:text-5xl font-bold"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              Política de Privacidade
            </h1>
            <p
              className="text-sm mt-2"
              style={{ color: 'var(--text-dim)' }}
            >
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="glass-effect p-8 space-y-6"
          style={{ borderRadius: '2px' }}
        >
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              1. Introdução
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A Rodrigo Penachio Consultoria de Investimentos ("nós", "nosso") está comprometida com a proteção 
              da privacidade e dos dados pessoais de nossos clientes e visitantes do site. Esta Política de Privacidade 
              descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com 
              a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              2. Dados Coletados
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Coletamos os seguintes tipos de dados pessoais:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li><strong>Dados de Identificação:</strong> nome, e-mail, telefone, cidade/UF</li>
              <li><strong>Dados Financeiros:</strong> objetivo de investimento, patrimônio aproximado, experiência, tolerância a risco</li>
              <li><strong>Dados de Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, origem de acesso (UTM parameters)</li>
              <li><strong>Cookies:</strong> dados de análise de comportamento (apenas com seu consentimento)</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              3. Finalidade do Tratamento
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Utilizamos seus dados pessoais para:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Prestar serviços de consultoria de investimentos</li>
              <li>Realizar diagnóstico inicial e proposta personalizada</li>
              <li>Comunicação sobre serviços, agendamentos e atualizações</li>
              <li>Análise e melhoria de nossos serviços</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Marketing (apenas com seu consentimento explícito)</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              4. Base Legal
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              O tratamento de seus dados pessoais é fundamentado em:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li><strong>Consentimento:</strong> você autoriza expressamente o uso de seus dados</li>
              <li><strong>Execução de contrato:</strong> necessário para prestação dos serviços contratados</li>
              <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e comunicação</li>
              <li><strong>Obrigação legal:</strong> cumprimento de requisitos regulatórios</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              5. Compartilhamento de Dados
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Prestadores de serviços (e-mail, CRM, análise) sob contrato de confidencialidade</li>
              <li>Autoridades legais, quando exigido por lei</li>
              <li>Parceiros de negócios, apenas com seu consentimento explícito</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              6. Seus Direitos (LGPD)
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Você tem os seguintes direitos sobre seus dados pessoais:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li><strong>Acesso:</strong> confirmar se tratamos seus dados e solicitar cópia</li>
              <li><strong>Correção:</strong> solicitar atualização de dados incompletos ou incorretos</li>
              <li><strong>Exclusão:</strong> solicitar eliminação de dados desnecessários ou tratados em desconformidade</li>
              <li><strong>Portabilidade:</strong> solicitar transferência de dados para outro fornecedor</li>
              <li><strong>Revogação de consentimento:</strong> retirar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> opor-se ao tratamento de dados</li>
              <li><strong>Informação:</strong> solicitar informações sobre compartilhamento</li>
            </ul>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Para exercer seus direitos, entre em contato: <a href={`mailto:${DPO_EMAIL}`} className="underline hover:text-[var(--primary)]">{DPO_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              7. Segurança
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, 
              perda, destruição ou alteração. No entanto, nenhum sistema é 100% seguro, e não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              8. Retenção de Dados
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política, 
              ou conforme exigido por lei. Após esse período, os dados serão anonimizados ou excluídos de forma segura.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              9. Cookies
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Utilizamos cookies para melhorar sua experiência no site. Você pode gerenciar suas preferências de cookies 
              através do banner que aparece na primeira visita. Para mais informações, consulte nossa Política de Cookies.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              10. Alterações nesta Política
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização será sempre 
              indicada no topo da página. Recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              11. Contato
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Para dúvidas sobre esta Política de Privacidade ou exercer seus direitos:
            </p>
            <ul
              className="list-none space-y-2 text-base mt-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li><strong>E-mail DPO:</strong> <a href={`mailto:${DPO_EMAIL}`} className="underline hover:text-[var(--primary)]">{DPO_EMAIL}</a></li>
              <li><strong>E-mail Geral:</strong> <a href={`mailto:${SUPORTE_EMAIL}`} className="underline hover:text-[var(--primary)]">{SUPORTE_EMAIL}</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;