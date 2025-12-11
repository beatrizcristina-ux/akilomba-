import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Design System</h1>
        <p className="content-subtitle">Sistema de design unificado para produtos digitais</p>
        <p className="content-description">
          Bem-vindo à documentação oficial do nosso Design System. Aqui você encontrará 
          todos os recursos, componentes, padrões e diretrizes necessários para criar 
          experiências consistentes e acessíveis.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">O que você encontrará aqui</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-brand-primary)' }}></div>
              <h3 className="token-name">Foundations</h3>
              <p className="token-description">
                Elementos fundamentais como cores, tipografia, espaçamentos e grid que formam a base do sistema.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-brand-secondary)' }}></div>
              <h3 className="token-name">Componentes</h3>
              <p className="token-description">
                Biblioteca de componentes reutilizáveis com suas variações, estados e diretrizes de uso.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-status-info)' }}></div>
              <h3 className="token-name">Patterns</h3>
              <p className="token-description">
                Padrões de interface que combinam múltiplos componentes para resolver problemas específicos.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-status-positive)' }}></div>
              <h3 className="token-name">Recursos</h3>
              <p className="token-description">
                Tokens de design, downloads, ferramentas e boas práticas para implementação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Começando</h2>
        <div className="section-content">
          <p>Para começar a usar o Design System:</p>
          <ol style={{ marginLeft: '20px', marginTop: '16px' }}>
            <li>Leia nossa <strong>Introdução</strong> para entender os conceitos fundamentais</li>
            <li>Explore os <strong>Princípios</strong> que guiam nossas decisões de design</li>
            <li>Conheça nossa <strong>Governança</strong> e processo de contribuição</li>
            <li>Navegue pelas <strong>Foundations</strong> para entender os elementos base</li>
            <li>Utilize os <strong>Componentes</strong> em seus projetos</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Status do Sistema</h2>
        <div className="section-content">
          <div className="component-preview">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-status-positive)' 
              }}></div>
              <span><strong>Versão 1.0</strong> - Sistema em desenvolvimento ativo</span>
            </div>
            <p style={{ marginTop: '12px', color: 'var(--color-text-alt)' }}>
              Última atualização: Dezembro 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;