import React from 'react';

const IntroductionPage = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Introdução ao Design System</h1>
        <p className="content-subtitle">Entenda os fundamentos e objetivos do nosso sistema de design</p>
      </div>

      <div className="section">
        <h2 className="section-title">O que é um Design System?</h2>
        <div className="section-content">
          <p>
            Um Design System é uma coleção de componentes reutilizáveis, diretrizes e padrões 
            que garantem consistência visual e funcional em todos os produtos digitais de uma organização.
          </p>
          <p style={{ marginTop: '16px' }}>
            Nosso sistema serve como fonte única da verdade para designers e desenvolvedores, 
            promovendo eficiência, escalabilidade e uma experiência de usuário coesa.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Objetivos</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <h3 className="token-name">Consistência</h3>
              <p className="token-description">
                Garantir uma experiência visual e funcional uniforme em todos os produtos e plataformas.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Eficiência</h3>
              <p className="token-description">
                Acelerar o processo de design e desenvolvimento através de componentes reutilizáveis.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Escalabilidade</h3>
              <p className="token-description">
                Facilitar o crescimento e evolução dos produtos mantendo a qualidade e consistência.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Colaboração</h3>
              <p className="token-description">
                Criar uma linguagem comum entre designers, desenvolvedores e stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Estrutura do Sistema</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Hierarquia dos Elementos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>1. Design Tokens</strong> - Valores fundamentais (cores, espaçamentos, tipografia)
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>2. Foundations</strong> - Elementos base do sistema visual
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>3. Componentes</strong> - Elementos de interface reutilizáveis
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>4. Patterns</strong> - Combinações de componentes para casos específicos
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Benefícios</h2>
        <div className="section-content">
          <ul style={{ marginLeft: '20px' }}>
            <li><strong>Para Designers:</strong> Foco na experiência do usuário ao invés de elementos visuais repetitivos</li>
            <li><strong>Para Desenvolvedores:</strong> Componentes testados e documentados, reduzindo tempo de implementação</li>
            <li><strong>Para Produtos:</strong> Consistência que fortalece a identidade da marca</li>
            <li><strong>Para Usuários:</strong> Interface familiar e previsível, melhorando a usabilidade</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Como Usar Esta Documentação</h2>
        <div className="section-content">
          <p>Esta documentação está organizada para facilitar tanto a consulta rápida quanto o aprendizado aprofundado:</p>
          <ul style={{ marginLeft: '20px', marginTop: '16px' }}>
            <li><strong>Navegação lateral:</strong> Acesso rápido a todas as seções</li>
            <li><strong>Exemplos visuais:</strong> Demonstrações práticas de cada elemento</li>
            <li><strong>Código de exemplo:</strong> Implementações prontas para uso</li>
            <li><strong>Diretrizes de uso:</strong> Quando e como usar cada elemento</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;