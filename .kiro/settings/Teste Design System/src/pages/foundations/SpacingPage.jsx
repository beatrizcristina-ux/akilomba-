import React from 'react';
import { spacingTokens } from '../../data/tokens';

const SpacingPage = () => {
  const spacingExamples = [
    { token: 'spacing-xs', size: '4px', usage: 'Espaçamento mínimo entre elementos relacionados' },
    { token: 'spacing-sm', size: '8px', usage: 'Padding interno de componentes pequenos' },
    { token: 'spacing-md', size: '12px', usage: 'Espaçamento entre elementos próximos' },
    { token: 'spacing-lg', size: '16px', usage: 'Espaçamento padrão entre elementos' },
    { token: 'spacing-xl', size: '20px', usage: 'Separação entre elementos relacionados' },
    { token: 'spacing-2xl', size: '24px', usage: 'Separação entre seções relacionadas' },
    { token: 'spacing-3xl', size: '28px', usage: 'Espaçamento entre grupos de elementos' },
    { token: 'spacing-4xl', size: '32px', usage: 'Espaçamento entre seções principais' },
    { token: 'spacing-5xl', size: '36px', usage: 'Separação entre blocos de conteúdo' },
    { token: 'spacing-6xl', size: '40px', usage: 'Espaçamento entre seções principais grandes' },
    { token: 'spacing-7xl', size: '44px', usage: 'Separação entre grandes blocos de conteúdo' },
    { token: 'spacing-8xl', size: '48px', usage: 'Separação entre seções principais da página' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Espaçamentos</h1>
        <p className="content-subtitle">Sistema de espaçamentos e grid</p>
        <p className="content-description">
          Spacing faz referência aos espaçamentos padrões adotados entre os elementos. 
          É importante que sejam padronizados para que todos os elementos tenham um mesmo espaço entre si, 
          criando organização dentro de cada tela. Nossos spacings seguem o padrão de distância de múltiplos de 4px.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Princípios do Espaçamento</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <h3 className="token-name">Base 4px</h3>
              <p className="token-description">
                Sistema baseado em múltiplos de 4px para garantir alinhamento perfeito e flexibilidade.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Ritmo Visual</h3>
              <p className="token-description">
                Progressão harmônica que cria ritmo e hierarquia visual consistente.
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Flexibilidade</h3>
              <p className="token-description">
                Adaptável a diferentes contextos e tamanhos de tela mantendo proporções.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Escala de Espaçamentos</h2>
        <div className="section-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {spacingExamples.map((spacing, index) => (
              <div key={index} className="component-preview">
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '12px' }}>
                  <div style={{ 
                    width: spacing.size,
                    height: '32px',
                    backgroundColor: 'var(--color-brand-primary)',
                    borderRadius: '2px'
                  }}></div>
                  <div>
                    <div style={{ 
                      fontSize: '16px', 
                      fontWeight: '600',
                      color: 'var(--color-text-default)',
                      marginBottom: '4px'
                    }}>
                      {spacing.token}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: 'var(--color-text-alt)',
                      fontFamily: 'Monaco, Menlo, monospace'
                    }}>
                      {spacing.size}
                    </div>
                  </div>
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-alt)', 
                  margin: 0 
                }}>
                  {spacing.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tokens de Espaçamento</h2>
        <div className="section-content">
          <div className="token-grid">
            {Object.entries(spacingTokens).map(([key, token]) => (
              <div key={key} className="token-card">
                <div className="token-preview" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: token.value,
                    height: token.value,
                    backgroundColor: 'var(--color-brand-primary)',
                    borderRadius: '2px'
                  }}></div>
                </div>
                <div className="token-name">{key}</div>
                <div className="token-value">{token.value}</div>
                <div className="token-description">{token.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Aplicações Práticas</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Exemplo: Card com Espaçamentos</h4>
            <div style={{
              backgroundColor: 'var(--color-background-container)',
              border: '1px solid var(--color-border-alt)',
              borderRadius: '8px',
              padding: '24px', // spacing-lg
              maxWidth: '400px'
            }}>
              <h3 style={{ 
                margin: '0 0 8px 0', // spacing-sm
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--color-text-default)'
              }}>
                Título do Card
              </h3>
              <p style={{ 
                margin: '0 0 16px 0', // spacing-md
                fontSize: '14px',
                color: 'var(--color-text-alt)',
                lineHeight: '1.5'
              }}>
                Descrição do conteúdo com espaçamento adequado para facilitar a leitura.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}> {/* spacing-sm */}
                <button style={{
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'var(--color-text-on-primary)',
                  border: 'none',
                  padding: '8px 16px', // spacing-sm e spacing-md
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}>
                  Ação
                </button>
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-alt)',
                  border: '1px solid var(--color-border-default)',
                  padding: '8px 16px', // spacing-sm e spacing-md
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <strong>✓ Faça:</strong> Use sempre os tokens definidos ao invés de valores arbitrários
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Faça:</strong> Mantenha consistência no espaçamento entre elementos similares
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Criar espaçamentos customizados sem justificativa
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Espaçamentos muito pequenos que prejudiquem a legibilidade
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Grid System</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Grid de 12 Colunas</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(12, 1fr)', 
              gap: '16px', // spacing-md
              marginBottom: '16px'
            }}>
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--color-brand-primary-alt)',
                  padding: '8px',
                  textAlign: 'center',
                  fontSize: '12px',
                  borderRadius: '4px'
                }}>
                  {i + 1}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-alt)' }}>
              Grid responsivo com gutters de 16px (spacing-md) entre colunas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacingPage;