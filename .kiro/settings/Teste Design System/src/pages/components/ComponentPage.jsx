import React from 'react';

const ComponentPage = ({ title, type, id }) => {
  const getComponentInfo = (id) => {
    const components = {
      // Foundations
      elevation: {
        title: 'Elevação',
        description: 'Sistema de sombras e profundidade para criar hierarquia visual',
        sections: ['Níveis de Elevação', 'Tokens de Sombra', 'Aplicações', 'Diretrizes']
      },
      grid: {
        title: 'Grid & Layout',
        description: 'Sistema de grid responsivo e estruturas de layout',
        sections: ['Grid de 12 Colunas', 'Breakpoints', 'Containers', 'Layouts Comuns']
      },
      icons: {
        title: 'Ícones',
        description: 'Biblioteca de ícones e diretrizes de uso',
        sections: ['Biblioteca de Ícones', 'Tamanhos', 'Estados', 'Customização']
      },
      motion: {
        title: 'Motion',
        description: 'Animações e transições para melhorar a experiência',
        sections: ['Princípios de Motion', 'Durações', 'Easings', 'Padrões de Animação']
      },
      accessibility: {
        title: 'Acessibilidade',
        description: 'Diretrizes e práticas para interfaces inclusivas',
        sections: ['Princípios WCAG', 'Contraste', 'Navegação por Teclado', 'Screen Readers']
      },
      // Components
      button: {
        title: 'Button',
        description: 'Componente de botão com suas variações e estados',
        sections: ['Overview', 'Anatomia', 'Variantes', 'Estados', 'Acessibilidade', 'Exemplo de Uso']
      },
      input: {
        title: 'Input',
        description: 'Campos de entrada de dados e formulários',
        sections: ['Overview', 'Anatomia', 'Variantes', 'Estados', 'Validação', 'Exemplo de Uso']
      },
      card: {
        title: 'Card',
        description: 'Container flexível para agrupamento de conteúdo',
        sections: ['Overview', 'Anatomia', 'Variantes', 'Layouts', 'Interações', 'Exemplo de Uso']
      },
      modal: {
        title: 'Modal',
        description: 'Janelas modais e overlays para conteúdo contextual',
        sections: ['Overview', 'Anatomia', 'Tamanhos', 'Comportamento', 'Acessibilidade', 'Exemplo de Uso']
      },
      navigation: {
        title: 'Navigation',
        description: 'Componentes de navegação e menu',
        sections: ['Overview', 'Tipos de Navegação', 'Estados', 'Responsividade', 'Acessibilidade', 'Exemplo de Uso']
      },
      feedback: {
        title: 'Feedback',
        description: 'Componentes para comunicar status e feedback',
        sections: ['Overview', 'Tipos de Feedback', 'Alerts', 'Toasts', 'Loading States', 'Exemplo de Uso']
      },
      'data-display': {
        title: 'Data Display',
        description: 'Componentes para exibição de dados e informações',
        sections: ['Overview', 'Tabelas', 'Listas', 'Charts', 'Badges', 'Exemplo de Uso']
      }
    };

    return components[id] || {
      title: id,
      description: 'Componente em desenvolvimento',
      sections: ['Overview', 'Anatomia', 'Variantes', 'Estados', 'Acessibilidade', 'Exemplo de Uso']
    };
  };

  const componentInfo = getComponentInfo(id);

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">{componentInfo.title}</h1>
        <p className="content-subtitle">{componentInfo.description}</p>
      </div>

      {componentInfo.sections.map((section, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{section}</h2>
          <div className="section-content">
            <div className="placeholder-content">
              <p>📋 Conteúdo de "{section}" será adicionado na próxima fase</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>
                Esta seção incluirá exemplos visuais, código de implementação e diretrizes específicas.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="section">
        <h2 className="section-title">Status de Desenvolvimento</h2>
        <div className="section-content">
          <div className="component-preview">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-status-warning)' 
              }}></div>
              <span><strong>Em Desenvolvimento</strong> - Componente planejado para próximas iterações</span>
            </div>
            <p style={{ marginTop: '12px', color: 'var(--color-text-alt)' }}>
              Este componente está no roadmap do Design System e será implementado seguindo 
              nossos princípios de design e padrões de qualidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;