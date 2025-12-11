import React from 'react';

const PatternPage = ({ id }) => {
  const getPatternInfo = (id) => {
    const patterns = {
      forms: {
        title: 'Formulários',
        description: 'Padrões para criação de formulários eficientes e acessíveis',
        sections: [
          'Estrutura de Formulários',
          'Validação e Feedback',
          'Layouts Responsivos',
          'Campos Obrigatórios',
          'Agrupamento de Campos',
          'Ações e Navegação'
        ]
      },
      'navigation-patterns': {
        title: 'Navegação',
        description: 'Padrões de navegação para diferentes contextos e hierarquias',
        sections: [
          'Navegação Principal',
          'Breadcrumbs',
          'Paginação',
          'Filtros e Busca',
          'Navegação Contextual',
          'Mobile Navigation'
        ]
      },
      'feedback-patterns': {
        title: 'Feedback',
        description: 'Padrões para comunicação de status, erros e confirmações',
        sections: [
          'Estados de Loading',
          'Mensagens de Erro',
          'Confirmações',
          'Notificações',
          'Estados Vazios',
          'Feedback de Ações'
        ]
      },
      lists: {
        title: 'Listas',
        description: 'Padrões para exibição e organização de dados em listas',
        sections: [
          'Listas Simples',
          'Listas com Ações',
          'Listas Hierárquicas',
          'Ordenação e Filtros',
          'Seleção Múltipla',
          'Paginação de Listas'
        ]
      }
    };

    return patterns[id] || {
      title: id,
      description: 'Pattern em desenvolvimento',
      sections: ['Overview', 'Casos de Uso', 'Implementação', 'Boas Práticas']
    };
  };

  const patternInfo = getPatternInfo(id);

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">{patternInfo.title}</h1>
        <p className="content-subtitle">{patternInfo.description}</p>
        <p className="content-description">
          Patterns são soluções reutilizáveis que combinam múltiplos componentes 
          para resolver problemas específicos de interface e experiência do usuário.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Sobre este Pattern</h2>
        <div className="section-content">
          <div className="component-preview">
            <p>
              Este pattern fornece diretrizes e exemplos para implementar {patternInfo.title.toLowerCase()} 
              de forma consistente e eficiente em diferentes contextos da aplicação.
            </p>
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--color-status-info-alt)', borderRadius: '4px' }}>
              <strong>💡 Dica:</strong> Patterns ajudam a manter consistência ao resolver problemas comuns de UX/UI.
            </div>
          </div>
        </div>
      </div>

      {patternInfo.sections.map((section, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{section}</h2>
          <div className="section-content">
            <div className="placeholder-content">
              <p>🎨 Conteúdo de "{section}" será adicionado na próxima fase</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>
                Esta seção incluirá exemplos práticos, wireframes, código de implementação 
                e diretrizes específicas para este pattern.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="section">
        <h2 className="section-title">Componentes Relacionados</h2>
        <div className="section-content">
          <div className="token-grid">
            <div className="token-card">
              <h3 className="token-name">Button</h3>
              <p className="token-description">
                Ações primárias e secundárias dentro do pattern
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Input</h3>
              <p className="token-description">
                Campos de entrada quando aplicável ao pattern
              </p>
            </div>
            
            <div className="token-card">
              <h3 className="token-name">Feedback</h3>
              <p className="token-description">
                Componentes de status e comunicação
              </p>
            </div>
          </div>
        </div>
      </div>

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
              <span><strong>Em Planejamento</strong> - Pattern será documentado nas próximas iterações</span>
            </div>
            <p style={{ marginTop: '12px', color: 'var(--color-text-alt)' }}>
              Este pattern está sendo analisado e documentado pela equipe do Design System. 
              A implementação seguirá nossos princípios de usabilidade e acessibilidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternPage;