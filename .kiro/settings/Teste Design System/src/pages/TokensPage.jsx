import React from 'react';
import { colorTokens } from '../data/tokens';

const TokensPage = () => {
  // Função para criar fundo quadriculado para transparências
  const getCheckerboardBackground = () => {
    return `
      linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
      linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
      linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
    `;
  };

  const tokenCategories = {
    brand: 'Marca',
    background: 'Fundos',
    text: 'Texto',
    border: 'Bordas',
    status: 'Status',
    chart: 'Gráficos',
    support: 'Suporte',
    platform: 'Plataforma'
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
        <h1 className="content-title">Tokens Disponíveis</h1>
        <p className="content-subtitle">Catálogo completo de design tokens do sistema</p>
        <p className="content-description">
          Design tokens são os valores fundamentais do nosso sistema de design. 
          Eles garantem consistência e facilitam a manutenção em escala.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">O que são Design Tokens?</h2>
        <div className="section-content">
          <p>
            Design tokens são pares nome-valor que armazenam decisões de design visual. 
            Eles servem como fonte única da verdade para propriedades como cores, 
            espaçamentos, tipografia e outros elementos visuais.
          </p>
          
          <div className="component-preview" style={{ marginTop: '24px' }}>
            <h4 style={{ marginBottom: '16px' }}>Benefícios dos Tokens</h4>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>Consistência:</strong> Mesmos valores em todos os produtos e plataformas
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>Manutenibilidade:</strong> Mudanças centralizadas propagam automaticamente
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-background-field)', borderRadius: '4px' }}>
                <strong>Escalabilidade:</strong> Fácil adição de novos temas e variações
              </div>
            </div>
          </div>
        </div>
      </div>

      {Object.entries(groupedTokens).map(([category, tokens]) => (
        <div key={category} className="section">
          <h2 className="section-title">{tokenCategories[category] || category}</h2>
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
      ))}

      <div className="section">
        <h2 className="section-title">Como Usar</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Implementação em CSS</h4>
            <pre style={{ 
              backgroundColor: 'var(--color-background-field)', 
              padding: '16px', 
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'Monaco, Menlo, monospace',
              overflow: 'auto'
            }}>
{`/* Usando CSS Custom Properties */
.button-primary {
  background-color: var(--color-brand-primary);
  color: var(--color-text-on-primary);
  border: 1px solid var(--color-border-default);
}

/* Usando tokens em JavaScript */
const theme = {
  colors: {
    primary: 'var(--color-brand-primary)',
    background: 'var(--color-background-default)'
  }
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Próximos Passos</h2>
        <div className="section-content">
          <p>Explore as seções de Foundations para ver como estes tokens são aplicados em:</p>
          <ul style={{ marginLeft: '20px', marginTop: '16px' }}>
            <li><strong>Cores:</strong> Paleta completa e diretrizes de uso</li>
            <li><strong>Tipografia:</strong> Escalas tipográficas e hierarquia</li>
            <li><strong>Espaçamentos:</strong> Sistema de grid e espaçamentos</li>
            <li><strong>Elevação:</strong> Sombras e profundidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokensPage;