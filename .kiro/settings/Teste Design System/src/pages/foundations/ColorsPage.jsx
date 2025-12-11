import React from 'react';
import { colorTokens } from '../../data/tokens';

const ColorsPage = () => {
  // Função para criar fundo quadriculado para transparências
  const getCheckerboardBackground = () => {
    return `
      linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
      linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
      linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
    `;
  };

  const colorCategories = {
    brand: { title: 'Cores da Marca', description: 'Cores principais que representam nossa identidade visual' },
    background: { title: 'Fundos', description: 'Cores para diferentes tipos de superfícies e containers' },
    text: { title: 'Texto', description: 'Cores para diferentes hierarquias e contextos de texto' },
    border: { title: 'Bordas', description: 'Cores para bordas, divisores e contornos' },
    status: { title: 'Status', description: 'Cores para comunicar estados e feedback ao usuário' },
    chart: { title: 'Gráficos', description: 'Paleta para visualizações de dados e gráficos' },
    support: { title: 'Suporte', description: 'Cores decorativas para avatares, chips e elementos visuais' },
    platform: { title: 'Plataforma', description: 'Cores específicas para elementos da plataforma' }
  };

  const groupedTokens = Object.entries(colorTokens).reduce((acc, [key, token]) => {
    const category = token.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ key, ...token });
    return acc;
  }, {});

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Cores</h1>
        <p className="content-subtitle">Sistema de cores e paleta cromática</p>
        <p className="content-description">
          Nossa paleta de cores foi cuidadosamente desenvolvida para garantir acessibilidade, 
          consistência e uma identidade visual forte em todos os produtos.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Princípios das Cores</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-brand-primary)' }}></div>
              <h3 className="token-name">Acessibilidade</h3>
              <p className="token-description">
                Todas as combinações de cores atendem aos critérios WCAG 2.1 AA para contraste.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-brand-secondary)' }}></div>
              <h3 className="token-name">Semântica</h3>
              <p className="token-description">
                Cada cor tem um propósito específico e significado consistente em toda a interface.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ backgroundColor: 'var(--color-status-positive)' }}></div>
              <h3 className="token-name">Flexibilidade</h3>
              <p className="token-description">
                Sistema preparado para temas claros, escuros e personalizações futuras.
              </p>
            </div>
          </div>
        </div>
      </div>

      {Object.entries(groupedTokens).map(([category, tokens]) => (
        <div key={category} className="section">
          <h2 className="section-title">{colorCategories[category]?.title || category}</h2>
          <div className="section-content">
            <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
              {colorCategories[category]?.description}
            </p>
            <div className="token-grid">
              {tokens.map((token) => {
                const isGradient = token.value.includes('gradient');
                
                return (
                  <div key={token.key} className="token-card" style={{ padding: '0', overflow: 'hidden' }}>
                    {/* Color Swatch no topo do card */}
                    <div 
                      style={{ 
                        width: '100%',
                        height: '64px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px 8px 0 0',
                        backgroundColor: token.value,
                        background: isGradient ? token.value : token.value
                      }}
                    />
                    
                    {/* Conteúdo do card */}
                    <div style={{ padding: '16px' }}>
                      <div className="token-name">{token.key}</div>
                      <div className="token-value">{token.value}</div>
                      <div className="token-description">{token.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      <div className="section">
        <h2 className="section-title">Diretrizes de Uso</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Boas Práticas</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Faça:</strong> Use cores semânticas para comunicar estados (sucesso, erro, aviso)
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Faça:</strong> Mantenha contraste adequado entre texto e fundo
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Usar cores como única forma de comunicar informação
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Criar novas cores sem consultar o Design System
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Exemplos de Aplicação</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px' }}>Botão Primário</h4>
              <button style={{
                backgroundColor: 'var(--color-brand-primary)',
                color: 'var(--color-text-on-primary)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Ação Principal
              </button>
            </div>
            
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px' }}>Alert de Sucesso</h4>
              <div style={{
                backgroundColor: 'var(--color-status-positive-alt)',
                color: 'var(--color-status-positive)',
                padding: '12px 16px',
                borderRadius: '4px',
                border: '1px solid var(--color-status-positive)'
              }}>
                Operação realizada com sucesso!
              </div>
            </div>
            
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px' }}>Card com Borda</h4>
              <div style={{
                backgroundColor: 'var(--color-background-container)',
                border: '1px solid var(--color-border-alt)',
                padding: '16px',
                borderRadius: '8px'
              }}>
                <h5 style={{ margin: '0 0 8px 0', color: 'var(--color-text-default)' }}>Título do Card</h5>
                <p style={{ margin: 0, color: 'var(--color-text-alt)', fontSize: '14px' }}>
                  Conteúdo do card com texto secundário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorsPage;