import React from 'react';
import { typographyTokens } from '../../data/tokens';

const TypographyPage = () => {
  // Escala tipográfica baseada no Design System Majoris (Figma)
  const typographyScale = [
    { 
      name: 'Number 1', 
      size: '32px', 
      weight: '700', 
      lineHeight: '1.2',
      letterSpacing: '1.4px',
      usage: 'Maior hierarquia tipográfica - títulos principais de páginas',
      token: 'typography-number-1'
    },
    { 
      name: 'Number 2', 
      size: '28px', 
      weight: '700', 
      lineHeight: '1.2',
      letterSpacing: '1.4px',
      usage: 'Segunda maior hierarquia - títulos de seções importantes',
      token: 'typography-number-2'
    },
    { 
      name: 'Headline 1', 
      size: '24px', 
      weight: '700', 
      lineHeight: '1.2',
      letterSpacing: '1.4px',
      usage: 'Títulos principais de conteúdo',
      token: 'typography-headline-1'
    },
    { 
      name: 'Headline 2', 
      size: '20px', 
      weight: '700', 
      lineHeight: '1.2',
      letterSpacing: '1.4px',
      usage: 'Subtítulos de seção',
      token: 'typography-headline-2'
    },
    { 
      name: 'Subtitle', 
      size: '16px', 
      weight: '700', 
      lineHeight: '1.5',
      letterSpacing: '1.4px',
      usage: 'Subtítulos menores e destaques',
      token: 'typography-subtitle'
    },
    { 
      name: 'Body 1', 
      size: '16px', 
      weight: '500', 
      lineHeight: '1.5',
      letterSpacing: '1.4px',
      usage: 'Texto principal de conteúdo e parágrafos',
      token: 'typography-body-1'
    },
    { 
      name: 'Body 2', 
      size: '14px', 
      weight: '500', 
      lineHeight: '1.6',
      letterSpacing: '1.4px',
      usage: 'Texto secundário e descrições',
      token: 'typography-body-2'
    },
    { 
      name: 'Button', 
      size: '14px', 
      weight: '600', 
      lineHeight: '1.25',
      letterSpacing: '1.4px',
      usage: 'Texto de botões e elementos interativos',
      token: 'typography-button'
    },
    { 
      name: 'Caption', 
      size: '12px', 
      weight: '500', 
      lineHeight: '1.5',
      letterSpacing: '1.4px',
      usage: 'Legendas e textos auxiliares',
      token: 'typography-caption'
    },
    { 
      name: 'Overline', 
      size: '10px', 
      weight: '500', 
      lineHeight: '1.2',
      letterSpacing: '1.4px',
      usage: 'Textos sobrescritos e metadados',
      token: 'typography-overline'
    }
  ];

  // Variações de estilo disponíveis
  const styleVariations = [
    { name: 'Link', style: { textDecoration: 'underline', color: '#d6409f' }, description: 'Para links e elementos clicáveis' },
    { name: 'Bold', style: { fontWeight: '700', color: '#d6409f' }, description: 'Para dar ênfase ao texto' },
    { name: 'Italic', style: { fontStyle: 'italic', color: '#d6409f' }, description: 'Para citações e destaques' },
    { name: 'Strikethrough', style: { textDecoration: 'line-through', color: '#d6409f' }, description: 'Para texto riscado' }
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Tipografia</h1>
        <p className="content-subtitle">Sistema tipográfico e hierarquia textual</p>
        <p className="content-description">
          Nossa tipografia foi projetada para garantir legibilidade, hierarquia clara e 
          consistência em todos os dispositivos e contextos de uso.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Família Tipográfica</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <div className="token-preview" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '32px',
                fontFamily: "'Bradesco Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
                fontWeight: '700',
                color: '#cc092f',
                backgroundColor: '#ddd',
                padding: '20px',
                borderRadius: '8px'
              }}>
                Aa
              </div>
              <h3 className="token-name">Bradesco Sans</h3>
              <div className="token-value">{typographyTokens['font-family-primary']?.value}</div>
              <p className="token-description">
                Fonte principal do Design System Majoris. Desenvolvida especificamente para o Bradesco, 
                garantindo identidade visual única e legibilidade otimizada.
              </p>
            </div>
            
            <div className="token-card">
              <div className="token-preview" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '20px',
                fontFamily: 'Monaco, Menlo, monospace'
              }}>
                &lt;/&gt;
              </div>
              <h3 className="token-name">Monoespaçada</h3>
              <div className="token-value">{typographyTokens['font-family-mono']?.value}</div>
              <p className="token-description">
                Fonte para código, dados técnicos e elementos que requerem alinhamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Escala Tipográfica</h2>
        <div className="section-content">
          <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
            Nossa escala tipográfica do Design System Majoris foi desenvolvida para garantir hierarquia visual clara 
            e consistência em todos os produtos Bradesco.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {typographyScale.map((type, index) => (
              <div key={index} className="component-preview" style={{ 
                borderBottom: '1px dashed rgba(31,31,31,0.4)', 
                paddingBottom: '24px' 
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '8px' }}>
                  <div style={{ 
                    fontSize: type.size, 
                    fontWeight: type.weight,
                    lineHeight: type.lineHeight,
                    letterSpacing: type.letterSpacing,
                    color: 'var(--color-text-default)',
                    fontFamily: "'Bradesco Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
                  }}>
                    {type.name}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'var(--color-text-alt)',
                    fontFamily: 'Monaco, Menlo, monospace'
                  }}>
                    {type.size} / {type.weight} / {type.lineHeight} / {type.letterSpacing}
                  </div>
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-alt)', 
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  {type.usage}
                </p>
                <code style={{ 
                  fontSize: '12px', 
                  color: 'var(--color-brand-primary)',
                  backgroundColor: 'var(--color-background-field)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontFamily: 'Monaco, Menlo, monospace'
                }}>
                  {type.token}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Variações de Estilo</h2>
        <div className="section-content">
          <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
            Cada estilo tipográfico pode ter variações para diferentes contextos de uso. 
            Estas variações são aplicadas através de modificadores CSS.
          </p>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            {/* Exemplo com Body 1 */}
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '700' }}>Body 1 - Variações</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'baseline' }}>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: 'var(--color-text-default)',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Body 1
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '0.75px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  textDecoration: 'underline'
                }}>
                  Body 1 (link)
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '700',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Body 1 (bold)
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '400',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  fontStyle: 'italic'
                }}>
                  Body 1 (italic)
                </div>
              </div>
            </div>

            {/* Exemplo com Body 2 */}
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '700' }}>Body 2 - Variações</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'baseline' }}>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '500',
                  lineHeight: '1.6',
                  letterSpacing: '1.4px',
                  color: 'var(--color-text-default)',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Body 2
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  textDecoration: 'underline'
                }}>
                  Body 2 (link)
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '700',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif"
                }}>
                  Body 2 (bold)
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '400',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  fontStyle: 'italic'
                }}>
                  Body 2 (italic)
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '500',
                  lineHeight: '1.5',
                  letterSpacing: '1.4px',
                  color: '#d6409f',
                  fontFamily: "'Bradesco Sans', sans-serif",
                  textDecoration: 'line-through'
                }}>
                  Body 2 (strike)
                </div>
              </div>
            </div>

            {/* Legenda explicativa */}
            <div style={{ 
              backgroundColor: 'var(--color-status-info-alt)', 
              padding: '16px', 
              borderRadius: '8px',
              borderLeft: '4px solid #d6409f'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#d6409f', 
                  borderRadius: '4px',
                  flexShrink: 0,
                  marginTop: '2px'
                }}></div>
                <div>
                  <p style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: '#d6409f',
                    margin: '0 0 8px 0',
                    fontFamily: "'Bradesco Sans', sans-serif"
                  }}>
                    Nota sobre variações no Figma
                  </p>
                  <p style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    lineHeight: '1.5',
                    color: '#d6409f',
                    margin: 0,
                    fontFamily: "'Bradesco Sans', sans-serif"
                  }}>
                    No Figma não é possível aplicar token + bold ou itálico ou underline (link). 
                    Por isto, temos estas variações de tokens criados no Figma para aplicação destes usos. 
                    Não são tokens necessários em desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Diretrizes de Uso</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Hierarquia e Legibilidade</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Faça:</strong> Use a escala tipográfica para criar hierarquia clara
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-positive-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-positive)'
              }}>
                <strong>✓ Faça:</strong> Mantenha line-height adequado para legibilidade (1.4-1.6 para texto corrido)
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Usar muitos tamanhos diferentes na mesma tela
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-status-negative-alt)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--color-status-negative)'
              }}>
                <strong>✗ Evite:</strong> Textos muito longos em tamanhos pequenos
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tokens Tipográficos</h2>
        <div className="section-content">
          <p style={{ marginBottom: '24px', color: 'var(--color-text-alt)' }}>
            Tokens individuais que compõem nosso sistema tipográfico. Estes podem ser combinados 
            para criar estilos personalizados quando necessário.
          </p>
          
          {/* Tokens de Tamanho de Fonte */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Tamanhos de Fonte</h3>
            <div className="token-grid">
              {Object.entries(typographyTokens)
                .filter(([key]) => key.startsWith('font-size-'))
                .map(([key, token]) => (
                <div key={key} className="token-card">
                  <div className="token-preview" style={{ 
                    fontSize: token.value || '16px',
                    fontFamily: "'Bradesco Sans', sans-serif",
                    textAlign: 'center',
                    padding: '8px'
                  }}>
                    Aa
                  </div>
                  <div className="token-name">{key}</div>
                  <div className="token-value">{token.value}</div>
                  <div className="token-description">{token.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tokens de Peso de Fonte */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Pesos de Fonte</h3>
            <div className="token-grid">
              {Object.entries(typographyTokens)
                .filter(([key]) => key.startsWith('font-weight-'))
                .map(([key, token]) => (
                <div key={key} className="token-card">
                  <div className="token-preview" style={{ 
                    fontSize: '20px',
                    fontWeight: token.value || '400',
                    fontFamily: "'Bradesco Sans', sans-serif",
                    textAlign: 'center',
                    padding: '8px'
                  }}>
                    Aa
                  </div>
                  <div className="token-name">{key}</div>
                  <div className="token-value">{token.value}</div>
                  <div className="token-description">{token.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tokens de Line Height */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Altura de Linha</h3>
            <div className="token-grid">
              {Object.entries(typographyTokens)
                .filter(([key]) => key.startsWith('line-height-'))
                .map(([key, token]) => (
                <div key={key} className="token-card">
                  <div className="token-name">{key}</div>
                  <div className="token-value">{token.value}</div>
                  <div className="token-description">{token.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tokens Compostos */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Estilos Compostos</h3>
            <div className="token-grid">
              {Object.entries(typographyTokens)
                .filter(([key]) => key.startsWith('typography-'))
                .map(([key, token]) => (
                <div key={key} className="token-card">
                  <div className="token-preview" style={{ 
                    fontSize: token.fontSize || '16px',
                    fontWeight: token.fontWeight || '400',
                    lineHeight: token.lineHeight || '1.5',
                    letterSpacing: token.letterSpacing || 'normal',
                    fontFamily: "'Bradesco Sans', sans-serif",
                    textAlign: 'center',
                    padding: '12px'
                  }}>
                    Aa
                  </div>
                  <div className="token-name">{key}</div>
                  <div className="token-value" style={{ fontSize: '12px', fontFamily: 'Monaco, Menlo, monospace' }}>
                    {token.fontSize} / {token.fontWeight} / {token.lineHeight}
                  </div>
                  <div className="token-description">{token.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Exemplos de Aplicação</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Estrutura de Conteúdo - Design System Majoris</h4>
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#cc092f',
                marginBottom: '8px',
                lineHeight: '1.2',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Título Principal da Página
              </h1>
              <p style={{ 
                fontSize: '16px', 
                fontWeight: '700',
                color: 'var(--color-text-alt)',
                marginBottom: '24px',
                lineHeight: '1.5',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Subtítulo que complementa o título principal
              </p>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'var(--color-text-default)',
                marginBottom: '12px',
                lineHeight: '1.2',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Seção de Conteúdo
              </h2>
              <p style={{ 
                fontSize: '16px', 
                fontWeight: '500',
                color: 'var(--color-text-default)',
                marginBottom: '16px',
                lineHeight: '1.5',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Este é um exemplo de texto corrido usando nossa tipografia Bradesco Sans. 
                O espaçamento entre linhas e o tamanho da fonte foram otimizados 
                para garantir boa legibilidade em diferentes dispositivos. 
                <a href="#" style={{ 
                  color: '#d6409f', 
                  textDecoration: 'underline',
                  letterSpacing: '0.75px'
                }}>
                  Links aparecem assim
                </a> e texto em <strong style={{ 
                  fontWeight: '700', 
                  color: '#d6409f' 
                }}>
                  negrito fica destacado
                </strong>.
              </p>
              <p style={{ 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--color-text-default)',
                marginBottom: '16px',
                lineHeight: '1.6',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Este é um exemplo de Body 2, usado para textos secundários e descrições 
                mais detalhadas que complementam o conteúdo principal.
              </p>
              <p style={{ 
                fontSize: '12px', 
                fontWeight: '500',
                color: 'var(--color-text-alt)',
                margin: 0,
                lineHeight: '1.5',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Caption: Texto auxiliar ou legenda com informações complementares
              </p>
            </div>
          </div>

          <div className="component-preview" style={{ marginTop: '24px' }}>
            <h4 style={{ marginBottom: '16px' }}>Exemplo de Interface</h4>
            <div style={{ 
              border: '1px solid var(--color-border-alt)', 
              borderRadius: '8px', 
              padding: '24px',
              backgroundColor: 'var(--color-background-container)'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                color: 'var(--color-text-default)',
                marginBottom: '8px',
                lineHeight: '1.2',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Configurações da Conta
              </h3>
              <p style={{ 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--color-text-alt)',
                marginBottom: '20px',
                lineHeight: '1.6',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                Gerencie suas preferências e informações pessoais
              </p>
              
              <button style={{ 
                fontSize: '14px', 
                fontWeight: '600',
                lineHeight: '1.25',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif",
                backgroundColor: '#cc092f',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginRight: '12px'
              }}>
                Salvar Alterações
              </button>
              
              <button style={{ 
                fontSize: '14px', 
                fontWeight: '600',
                lineHeight: '1.25',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif",
                backgroundColor: 'transparent',
                color: '#cc092f',
                border: '1px solid #cc092f',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Cancelar
              </button>
              
              <p style={{ 
                fontSize: '10px', 
                fontWeight: '500',
                color: 'var(--color-text-alt)',
                marginTop: '16px',
                margin: 0,
                lineHeight: '1.2',
                letterSpacing: '1.4px',
                fontFamily: "'Bradesco Sans', sans-serif"
              }}>
                ÚLTIMA ATUALIZAÇÃO: 10 DE DEZEMBRO, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;