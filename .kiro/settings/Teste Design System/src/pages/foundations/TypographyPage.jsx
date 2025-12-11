import React from 'react';
import { typographyTokens } from '../../data/tokens';

const TypographyPage = () => {
  const typographyScale = [
    { name: 'Display Large', size: '48px', weight: '700', usage: 'Títulos principais de páginas' },
    { name: 'Display Medium', size: '40px', weight: '700', usage: 'Títulos de seções importantes' },
    { name: 'Display Small', size: '32px', weight: '600', usage: 'Títulos de conteúdo' },
    { name: 'Heading Large', size: '24px', weight: '600', usage: 'Subtítulos principais' },
    { name: 'Heading Medium', size: '20px', weight: '600', usage: 'Subtítulos de seção' },
    { name: 'Heading Small', size: '18px', weight: '500', usage: 'Subtítulos menores' },
    { name: 'Body Large', size: '16px', weight: '400', usage: 'Texto principal de conteúdo' },
    { name: 'Body Medium', size: '14px', weight: '400', usage: 'Texto padrão da interface' },
    { name: 'Body Small', size: '12px', weight: '400', usage: 'Legendas e textos auxiliares' },
    { name: 'Caption', size: '11px', weight: '400', usage: 'Textos muito pequenos e metadados' }
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
                fontSize: '24px',
                fontFamily: 'var(--font-family-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif)'
              }}>
                Aa
              </div>
              <h3 className="token-name">Sistema (Primary)</h3>
              <div className="token-value">{typographyTokens['font-family-primary']?.value}</div>
              <p className="token-description">
                Fonte principal para toda a interface. Otimizada para legibilidade em telas.
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
            Nossa escala tipográfica segue uma progressão harmônica que garante hierarquia visual clara.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {typographyScale.map((type, index) => (
              <div key={index} className="component-preview">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '8px' }}>
                  <div style={{ 
                    fontSize: type.size, 
                    fontWeight: type.weight,
                    color: 'var(--color-text-default)',
                    lineHeight: '1.2'
                  }}>
                    {type.name}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'var(--color-text-alt)',
                    fontFamily: 'Monaco, Menlo, monospace'
                  }}>
                    {type.size} / {type.weight}
                  </div>
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-alt)', 
                  margin: 0 
                }}>
                  {type.usage}
                </p>
              </div>
            ))}
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
          <div className="token-grid">
            {Object.entries(typographyTokens).map(([key, token]) => (
              <div key={key} className="token-card">
                <div className="token-name">{key}</div>
                <div className="token-value">{token.value}</div>
                <div className="token-description">{token.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Exemplos de Aplicação</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Estrutura de Conteúdo</h4>
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ 
                fontSize: '32px', 
                fontWeight: '600', 
                color: 'var(--color-text-default)',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                Título Principal da Página
              </h1>
              <p style={{ 
                fontSize: '18px', 
                color: 'var(--color-text-alt)',
                marginBottom: '24px',
                lineHeight: '1.5'
              }}>
                Subtítulo ou descrição que complementa o título principal
              </p>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: 'var(--color-text-default)',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>
                Seção de Conteúdo
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: 'var(--color-text-default)',
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                Este é um exemplo de texto corrido usando nossa tipografia padrão. 
                O espaçamento entre linhas e o tamanho da fonte foram otimizados 
                para garantir boa legibilidade em diferentes dispositivos.
              </p>
              <p style={{ 
                fontSize: '12px', 
                color: 'var(--color-text-alt)',
                margin: 0,
                lineHeight: '1.4'
              }}>
                Texto auxiliar ou legenda com informações complementares
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;