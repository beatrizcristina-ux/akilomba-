import React from 'react';

const GovernancePage = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Governança</h1>
        <p className="content-subtitle">Processos, responsabilidades e diretrizes para evolução do Design System</p>
      </div>

      <div className="section">
        <h2 className="section-title">Modelo de Governança</h2>
        <div className="section-content">
          <p>
            Nossa governança garante que o Design System evolua de forma consistente, 
            atendendo às necessidades dos usuários e mantendo a qualidade técnica.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Papéis e Responsabilidades</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <div className="token-preview" style={{ 
                backgroundColor: 'var(--color-brand-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-text-on-primary)',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                CORE TEAM
              </div>
              <h3 className="token-name">Equipe Principal</h3>
              <p className="token-description">
                Responsável pela estratégia, roadmap e decisões arquiteturais do sistema. 
                Inclui designers e desenvolvedores dedicados.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ 
                backgroundColor: 'var(--color-brand-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-text-on-primary)',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                CONTRIBUTORS
              </div>
              <h3 className="token-name">Contribuidores</h3>
              <p className="token-description">
                Designers e desenvolvedores dos produtos que contribuem com feedback, 
                propostas e implementações.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ 
                backgroundColor: 'var(--color-status-info)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-text-on-primary)',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
              USERS
              </div>
              <h3 className="token-name">Usuários</h3>
              <p className="token-description">
                Todos que utilizam o Design System em seus projetos. 
                Fornecem feedback e reportam issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Processo de Contribuição</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Fluxo de Contribuição</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-status-info)'
              }}>
                <strong>1. Proposta</strong> - Identificação de necessidade e criação de RFC (Request for Comments)
              </div>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-status-warning)'
              }}>
                <strong>2. Discussão</strong> - Análise pela comunidade e equipe principal
              </div>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-brand-primary)'
              }}>
                <strong>3. Design</strong> - Criação de especificações visuais e funcionais
              </div>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-brand-secondary)'
              }}>
                <strong>4. Implementação</strong> - Desenvolvimento e testes
              </div>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>5. Revisão</strong> - Code review e aprovação final
              </div>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'var(--color-background-field)', 
                borderRadius: '4px',
                borderLeft: '4px solid var(--color-text-alt)'
              }}>
                <strong>6. Release</strong> - Publicação e documentação
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Critérios de Qualidade</h2>
        <div className="section-content">
          <p>Toda contribuição deve atender aos seguintes critérios:</p>
          <ul style={{ marginLeft: '20px', marginTop: '16px' }}>
            <li><strong>Acessibilidade:</strong> Conformidade com WCAG 2.1 AA</li>
            <li><strong>Performance:</strong> Impacto mínimo no bundle size</li>
            <li><strong>Compatibilidade:</strong> Suporte aos browsers definidos</li>
            <li><strong>Testes:</strong> Cobertura de testes unitários e visuais</li>
            <li><strong>Documentação:</strong> Exemplos e diretrizes de uso</li>
            <li><strong>Consistência:</strong> Alinhamento com tokens e padrões existentes</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Versionamento</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Semantic Versioning</h4>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-status-negative-alt)', borderRadius: '4px' }}>
                <strong>Major (X.0.0):</strong> Breaking changes que requerem migração
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-status-warning-alt)', borderRadius: '4px' }}>
                <strong>Minor (0.X.0):</strong> Novos componentes e funcionalidades
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-status-positive-alt)', borderRadius: '4px' }}>
                <strong>Patch (0.0.X):</strong> Bug fixes e melhorias menores
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Canais de Comunicação</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <h3 className="token-name">GitHub Issues</h3>
              <p className="token-description">
                Para reportar bugs, solicitar features e discussões técnicas.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Slack #design-system</h3>
              <p className="token-description">
                Canal para dúvidas rápidas, anúncios e discussões informais.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Office Hours</h3>
              <p className="token-description">
                Sessões semanais para suporte direto e alinhamentos.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Newsletter</h3>
              <p className="token-description">
                Updates mensais sobre releases, roadmap e melhores práticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernancePage;