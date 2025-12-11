import React from 'react';

const ResourcePage = ({ id }) => {
  const getResourceInfo = (id) => {
    const resources = {
      'design-tokens': {
        title: 'Design Tokens',
        description: 'Tokens completos e ferramentas para implementação',
        sections: [
          'Tokens JSON',
          'Integração com Figma',
          'Ferramentas de Build',
          'Versionamento',
          'Migração de Tokens'
        ]
      },
      downloads: {
        title: 'Downloads',
        description: 'Recursos, assets e ferramentas para download',
        sections: [
          'Biblioteca de Ícones',
          'Figma UI Kit',
          'Sketch Library',
          'Fonts e Tipografia',
          'Templates e Boilerplates'
        ]
      },
      'best-practices': {
        title: 'Boas Práticas',
        description: 'Diretrizes e recomendações para uso eficiente do Design System',
        sections: [
          'Implementação Técnica',
          'Processo de Design',
          'Colaboração',
          'Performance',
          'Acessibilidade',
          'Manutenção'
        ]
      }
    };

    return resources[id] || {
      title: id,
      description: 'Recurso em desenvolvimento',
      sections: ['Overview', 'Como Usar', 'Exemplos', 'Suporte']
    };
  };

  const resourceInfo = getResourceInfo(id);

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">{resourceInfo.title}</h1>
        <p className="content-subtitle">{resourceInfo.description}</p>
      </div>

      {id === 'design-tokens' && (
        <div className="section">
          <h2 className="section-title">Tokens Disponíveis</h2>
          <div className="section-content">
            <div className="component-preview">
              <h4 style={{ marginBottom: '16px' }}>Formato JSON</h4>
              <pre style={{ 
                backgroundColor: 'var(--color-background-field)', 
                padding: '16px', 
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: 'Monaco, Menlo, monospace',
                overflow: 'auto'
              }}>
{`{
  "color-brand-primary": {
    "value": "#cc092f",
    "description": "Cor primária da marca",
    "category": "brand"
  },
  "spacing-md": {
    "value": "16px",
    "description": "Espaçamento médio"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {id === 'downloads' && (
        <div className="section">
          <h2 className="section-title">Assets Disponíveis</h2>
          <div className="section-content">
            <div className="token-grid">
              <div className="token-card">
                <div className="token-preview" style={{ 
                  backgroundColor: 'var(--color-brand-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-on-primary)',
                  fontSize: '20px'
                }}>
                  📦
                </div>
                <h3 className="token-name">Figma UI Kit</h3>
                <p className="token-description">
                  Biblioteca completa de componentes para Figma
                </p>
              </div>
              
              <div className="token-card">
                <div className="token-preview" style={{ 
                  backgroundColor: 'var(--color-brand-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-on-primary)',
                  fontSize: '20px'
                }}>
                  🎨
                </div>
                <h3 className="token-name">Ícones SVG</h3>
                <p className="token-description">
                  Biblioteca de ícones em formato SVG otimizado
                </p>
              </div>
              
              <div className="token-card">
                <div className="token-preview" style={{ 
                  backgroundColor: 'var(--color-status-info)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-on-primary)',
                  fontSize: '20px'
                }}>
                  💻
                </div>
                <h3 className="token-name">Code Templates</h3>
                <p className="token-description">
                  Templates e boilerplates para diferentes frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {resourceInfo.sections.map((section, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{section}</h2>
          <div className="section-content">
            <div className="placeholder-content">
              <p>📚 Conteúdo de "{section}" será adicionado na próxima fase</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>
                Esta seção incluirá recursos detalhados, links de download e 
                instruções específicas para implementação.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="section">
        <h2 className="section-title">Suporte e Comunidade</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <h3 className="token-name">GitHub</h3>
              <p className="token-description">
                Repositório oficial com código-fonte e issues
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Slack</h3>
              <p className="token-description">
                Canal da comunidade para dúvidas e discussões
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Office Hours</h3>
              <p className="token-description">
                Sessões semanais de suporte com a equipe
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Status</h2>
        <div className="section-content">
          <div className="component-preview">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-status-warning)' 
              }}></div>
              <span><strong>Em Desenvolvimento</strong> - Recursos sendo preparados para disponibilização</span>
            </div>
            <p style={{ marginTop: '12px', color: 'var(--color-text-alt)' }}>
              Os recursos estão sendo organizados e documentados para facilitar 
              o acesso e uso pela comunidade de desenvolvedores e designers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;