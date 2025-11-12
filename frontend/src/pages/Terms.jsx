import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <FileText size={48} style={{ color: 'var(--primary)' }} />
          <div>
            <h1
              className="text-4xl lg:text-5xl font-bold"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              Termos de Uso
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
              1. Aceitação dos Termos
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Ao acessar e usar o site da Rodrigo Penachio Consultoria de Investimentos, você concorda em cumprir 
              e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
              não deve usar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              2. Serviços Oferecidos
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Oferecemos serviços de consultoria de investimentos de caráter educacional e informativo. 
              Nossos serviços incluem:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Diagnóstico de perfil e objetivos de investimento</li>
              <li>Elaboração de estratégias personalizadas de alocação de ativos</li>
              <li>Acompanhamento periódico de carteiras</li>
              <li>Orientação sobre produtos de investimento</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              3. Natureza da Consultoria
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong>IMPORTANTE:</strong> Os serviços prestados têm caráter educacional e consultivo. 
              Não constituem recomendação individual de compra ou venda de ativos específicos. 
              O cliente é o único responsável pelas decisões de investimento.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Não garantimos rentabilidade ou resultados específicos. Todo investimento envolve riscos, 
              incluindo a possibilidade de perda do capital investido.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              4. Responsabilidades do Cliente
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Ao contratar nossos serviços, o cliente se compromete a:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Fornecer informações precisas e completas sobre sua situação financeira</li>
              <li>Manter reserva de emergência adequada antes de iniciar investimentos</li>
              <li>Compreender os riscos envolvidos em cada tipo de investimento</li>
              <li>Avaliar sua própria tolerância a risco e horizonte de investimento</li>
              <li>Não investir recursos que necessitará no curto prazo</li>
              <li>Buscar esclarecimentos quando tiver dúvidas</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              5. Limitações de Responsabilidade
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A Rodrigo Penachio Consultoria não se responsabiliza por:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Perdas financeiras resultantes de decisões de investimento do cliente</li>
              <li>Variações de mercado, crises econômicas ou eventos imprevisíveis</li>
              <li>Informações incorretas ou incompletas fornecidas pelo cliente</li>
              <li>Falhas técnicas de corretoras, bancos ou sistemas de terceiros</li>
              <li>Mudanças na legislação tributária ou regulatória</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              6. Propriedade Intelectual
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones e metodologias, 
              é propriedade da Rodrigo Penachio Consultoria e está protegido pelas leis de propriedade intelectual. 
              É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              7. Privacidade e Proteção de Dados
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              O tratamento de dados pessoais é regido por nossa{' '}
              <Link
                to="/politica-de-privacidade"
                className="underline hover:text-[var(--primary)] transition-colors"
              >
                Política de Privacidade
              </Link>
              , em conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              8. Pagamento e Cancelamento
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong>Pagamento:</strong> Os valores e condições de pagamento serão especificados 
              na proposta comercial individual.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong>Cancelamento:</strong> Serviços recorrentes podem ser cancelados a qualquer momento, 
              conforme termos do contrato individual. Não há reembolso de valores já pagos por serviços prestados.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              9. Independência
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A Rodrigo Penachio Consultoria atua de forma independente, sem vínculo com instituições financeiras 
              ou recebimento de comissões pela indicação de produtos. Nosso único compromisso é com o interesse do cliente.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              10. Uso do Site
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Você concorda em usar este site apenas para fins legítimos e de maneira que não viole direitos de terceiros 
              ou restrinja o uso do site por outros. É proibido:
            </p>
            <ul
              className="list-disc list-inside space-y-2 text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Interferir ou interromper o funcionamento do site</li>
              <li>Transmitir vírus, malware ou código malicioso</li>
              <li>Coletar dados de outros usuários sem permissão</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              11. Links Externos
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, 
              políticas de privacidade ou práticas de sites externos.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              12. Modificações dos Termos
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entram em vigor imediatamente após sua publicação no site. 
              O uso continuado do site após mudanças constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              13. Lei Aplicável e Jurisdição
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
              nos tribunais brasileiros, renunciando a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              14. Contato
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Para dúvidas sobre estes Termos de Uso:
            </p>
            <p
              className="text-base mt-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong>E-mail:</strong>{' '}
              <a
                href={`mailto:${SUPORTE_EMAIL}`}
                className="underline hover:text-[var(--primary)] transition-colors"
              >
                {SUPORTE_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              15. Aviso Legal Específico sobre Investimentos
            </h2>
            <div
              className="p-4"
              style={{
                background: 'rgba(255, 158, 71, 0.1)',
                border: '1px solid var(--accent-warning)',
                borderRadius: '2px'
              }}
            >
              <p
                className="text-base leading-relaxed font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                AVISO IMPORTANTE:
              </p>
              <p
                className="text-base leading-relaxed mt-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Consultoria não garante rentabilidade
                <br />
                • Investimentos envolvem riscos, inclusive perda do principal
                <br />
                • Conteúdo informativo, não recomendação individual
                <br />
                • Desempenho passado não garante resultados futuros
                <br />
                • Mantenha reserva de emergência antes de investir
                <br />
                • Diversifique e invista conforme seu perfil e objetivos
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
