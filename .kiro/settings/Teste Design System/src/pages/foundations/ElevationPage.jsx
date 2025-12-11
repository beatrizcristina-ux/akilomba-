import React from 'react';
import { elevationTokens } from '../../data/tokens';

const ElevationPage = () => {
  // Níveis de elevação baseados no Design System Majoris (Figma)
  const elevationLevels = [
    {
      name: 'Low',
      token: 'elevation-low',
      level: 1,
      usage: 'Pressed / "0" / Floor',
      description: 'Estados pressed, elementos no nível do chão',
      shadow: elevationTokens['elevation-low'].value,
      className: 'elevation-low'
    },
    {
      name: 'Default',
      token: 'elevation-default',
      level: 2,
      usage: 'Default',
      description: 'Cards, containers e elementos padrão da interface',
      shadow: elevationTokens['elevation-default'].value,
      className: 'elevation-default'
    },
    {
      name: 'High',
      token: 'elevation-high',
      level: 3,
      usage: 'Active',
      description: 'Estados ativos, elementos em foco, dropdowns',
      shadow: elevationTokens['elevation-high'].value,
      className: 'elevation-high'
    },
    {
      name: 'Modal',
      token: 'elevation-modal',
      level: 4,
      usage: 'Modal',
      description: 'Modais, overlays e elementos que ficam acima de tudo',
      shadow: elevationTokens['elevation-modal'].value,
      className: 'elevation-modal'
    }
  ];

  // Cores de sombra disponíveis
  const shadowColors = [
    { name: 'Primary', token: 'shadow-color-primary', opacity: '0.08' },
    { name: 'Secondary', token: 'shadow-color-secondary', opacity: '0.12' },
    { name: 'Tertiary', token: 'shadow-color-tertiary', opacity: '0.14' },
    { name: 'Accent', token: 'shadow-color-accent', opacity: '0.16' },
    { name: 'Strong', token: 'shadow-color-strong', opacity: '0.2' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Elevações</h1>
        <p className="content-subtitle">Sistema de elevação e profundidade visual</p>
        <p className="content-description">
          As elevações criam hierarquia visual através de sombras, simulando profundidade 
          e ajudando os usuários a entender a importância e interatividade dos elementos.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Níveis de Elevação</h2>
        <div className="section-content">
          <p style={{ marginBottom: '32px', color: 'var(--color-text-alt)' }}>
            O Design System Majoris define 4 níveis de elevação, cada um com propósito específico 
            e valores de sombra otimizados para diferentes contextos de uso.
          </p>
          
          <div style={{ display: 'grid', gap: '32px' }}>
            {elevationLevels.map((elevation, index) => (
              <div key={index} className="component-preview" style={{ 
                borderBottom: '1px dashed rgba(31,31,31,0.4)', 
                paddingBottom: '24px' 
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                  {/* Preview da elevação */}
                  <div style={{ 
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '12px',
                    boxShadow: elevation.shadow,
                    flexShrink: 0
                  }} />
                  
                  {/* Informações da elevação */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ 
                        backgroundColor: 'var(--color-background-surface)',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '500',
                        fontFamily: "'Bradesco Sans', sans-serif"
                      }}>
                        elevation
                      </div>
                      {elevation.name !== 'Default' && (
                        <div style={{ 
                          backgroundColor: 'var(--color-background-surface)',
                          padding: '4px 8px',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontWeight: '500',
                          fontFamily: "'Bradesco Sans', sans-serif"
                        }}>
                          {elevation.name.toLowerCase()}
                        </div>
                      )}
                    </div>
                    <p style={{ 
                      fontSize: '16px', 
                      color: 'var(--color-text-alt)', 
                      margin: 0,
                      fontFamily: "'Bradesco Sans', sans-serif"
                    }}>
                      {elevation.usage}
                    </p>
                  </div>
                </div>
                
                {/* Detalhes técnicos */}
                <div style={{ marginLeft: '100px' }}>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-text-default)', 
                    marginBottom: '8px',
                    fontFamily: "'Bradesco Sans', sans-serif"
                  }}>
                    <strong>Uso:</strong> {elevation.description}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-text-alt)', 
                    marginBottom: '8px',
                    fontFamily: "'Bradesco Sans', sans-serif"
                  }}>
                    <strong>Nível:</strong> {elevation.level}
                  </p>
                  <code style={{ 
                    fontSize: '12px', 
                    color: 'var(--color-brand-primary)',
                    backgroundColor: 'var(--color-background-field)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontFamily: 'Monaco, Menlo, monospace',
                    display: 'block',
                    marginTop: '8px',
                    wordBreak: 'break-all'
                  }}>
                    {elevation.token}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Comparação Visual</h2>
        <div className="section-content">
          <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
            Visualização comparativa dos diferentes níveis de elevação para facilitar a escolha 
            do nível apropriado para cada contexto.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px',
            padding: '40px',
            backgroundColor: 'var(--color-background-default)',
            borderRadius: '12px'
          }}>
            {elevationLevels.map((elevation, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px',
                  height: '120px',
                  backgroundColor: 'var(--color-background-container)',
                  borderRadius: '12px',
                  boxShadow: elevation.shadow,
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--color-text-default)',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Level {elevation.level}
                </div>
                <h4 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  {elevation.name}
                </h4>
                <p style={{ 
                  fontSize: '12px', 
                  color: 'var(--color-text-alt)', 
                  margin: 0,
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  {elevation.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Cores de Sombra</h2>
        <div className="section-content">
          <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
            Tokens individuais das cores de sombra utilizadas nas elevações. 
            Úteis para customizações específicas ou criação de novos níveis.
          </p>
          
          <div className="token-grid">
            {shadowColors.map((color, index) => (
              <div key={index} className="token-card">
                <div className="token-preview" style={{ 
                  backgroundColor: 'rgba(0, 0, 0, parseFloat(color.opacity))',
                  height: '60px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  {color.opacity}
                </div>
                <div className="token-name">{color.token}</div>
                <div className="token-value">rgba(0, 0, 0, {color.opacity})</div>
                <div className="token-description">
                  {elevationTokens[color.token]?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Diretrizes de Uso</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Quando Usar Cada Nível</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Low (Nível 1):</strong> Botões pressionados, elementos desabilitados, estados de repouso
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Default (Nível 2):</strong> Cards, containers, elementos padrão da interface
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ High (Nível 3):</strong> Elementos em hover/focus, dropdowns, tooltips
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Modal (Nível 4):</strong> Modais, overlays, elementos que ficam acima de tudo
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Usar muitos níveis diferentes na mesma tela
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Aplicar elevação em elementos que não precisam de destaque
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Exemplos de Aplicação</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Interface com Diferentes Elevações</h4>
            <div style={{ 
              padding: '24px',
              backgroundColor: 'var(--color-background-default)',
              borderRadius: '12px',
              position: 'relative'
            }}>
              {/* Card com elevação padrão */}
              <div style={{ 
                backgroundColor: 'var(--color-background-container)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: elevationTokens['elevation-default'].value,
                marginBottom: '20px'
              }}>
                <h5 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Card Padrão
                </h5>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-alt)', 
                  margin: '0 0 16px 0',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Este card usa elevação padrão (nível 2)
                </p>
                
                {/* Botão com elevação alta no hover */}
                <button style={{ 
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  cursor: 'pointer',
                  boxShadow: elevationTokens['elevation-high'].value,
                  marginRight: '12px'
                }}>
                  Botão Ativo
                </button>
                
                {/* Botão com elevação baixa (pressed) */}
                <button style={{ 
                  backgroundColor: 'var(--color-background-surface)',
                  color: 'var(--color-text-default)',
                  border: '1px solid var(--color-border-alt)',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  cursor: 'pointer',
                  boxShadow: elevationTokens['elevation-low'].value
                }}>
                  Botão Pressed
                </button>
              </div>
              
              {/* Simulação de modal */}
              <div style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--color-background-container)',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: elevationTokens['elevation-modal'].value,
                minWidth: '300px',
                textAlign: 'center'
              }}>
                <h5 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Modal Example
                </h5>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-alt)', 
                  margin: '0 0 16px 0',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Este modal usa elevação modal (nível 4)
                </p>
                <button style={{ 
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  cursor: 'pointer'
                }}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevationPage;