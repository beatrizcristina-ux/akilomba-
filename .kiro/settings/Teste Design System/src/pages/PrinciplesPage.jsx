import React from 'react';

const PrinciplesPage = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Princípios de Design</h1>
        <p className="content-subtitle">Os valores fundamentais que guiam nossas decisões de design</p>
      </div>

      <div className="section">
        <h2 className="section-title">Nossos Princípios</h2>
        <div className="section-content">
          <p>
            Estes princípios servem como norte para todas as decisões de design e desenvolvimento, 
            garantindo que nossos produtos sejam consistentes com nossa visão e valores.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="token-grid">
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-brand-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-on-primary)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 className="token-name">Simplicidade</h3>
            <p className="token-description">
              Priorizamos interfaces limpas e intuitivas. Removemos complexidade desnecessária 
              para focar no que realmente importa para o usuário.
            </p>
          </div>
          
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-brand-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-on-primary)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 className="token-name">Consistência</h3>
            <p className="token-description">
              Mantemos padrões visuais e comportamentais uniformes em toda a experiência, 
              criando familiaridade e previsibilidade.
            </p>
          </div>
          
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-status-positive)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-on-primary)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 className="token-name">Acessibilidade</h3>
            <p className="token-description">
              Projetamos para todos os usuários, considerando diferentes habilidades, 
              dispositivos e contextos de uso desde o início.
            </p>
          </div>
          
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-status-info)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-on-primary)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              4
            </div>
            <h3 className="token-name">Flexibilidade</h3>
            <p className="token-description">
              Criamos componentes adaptáveis que funcionam em diferentes contextos 
              sem perder sua identidade e funcionalidade.
            </p>
          </div>
          
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-status-warning)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-default)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              5
            </div>
            <h3 className="token-name">Performance</h3>
            <p className="token-description">
              Otimizamos cada elemento para garantir carregamento rápido e 
              interações fluidas em todos os dispositivos.
            </p>
          </div>
          
          <div className="token-card">
            <div className="token-preview" style={{ 
              backgroundColor: 'var(--color-text-alt)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-text-on-primary)',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              6
            </div>
            <h3 className="token-name">Evolução</h3>
            <p className="token-description">
              Mantemos o sistema vivo e adaptável, incorporando feedback e 
              evoluindo com as necessidades dos usuários e da tecnologia.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Aplicação dos Princípios</h2>
        <div className="section-content">
          <div className="component-preview">
            <h4 style={{ marginBottom: '16px' }}>Como aplicamos estes princípios:</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ padding: '16px', backgroundColor: 'var(--color-background-field)', borderRadius: '8px' }}>
                <strong>No Design:</strong> Cada decisão visual é avaliada contra nossos princípios, 
                priorizando clareza e usabilidade sobre tendências passageiras.
              </div>
              <div style={{ padding: '16px', backgroundColor: 'var(--color-background-field)', borderRadius: '8px' }}>
                <strong>No Desenvolvimento:</strong> Componentes são construídos com acessibilidade nativa, 
                performance otimizada e APIs consistentes.
              </div>
              <div style={{ padding: '16px', backgroundColor: 'var(--color-background-field)', borderRadius: '8px' }}>
                <strong>Na Documentação:</strong> Mantemos exemplos claros, diretrizes práticas e 
                justificativas baseadas em nossos princípios.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tomada de Decisões</h2>
        <div className="section-content">
          <p>
            Quando enfrentamos decisões de design, usamos nossos princípios como critério de avaliação:
          </p>
          <ol style={{ marginLeft: '20px', marginTop: '16px' }}>
            <li>A solução é simples e intuitiva?</li>
            <li>Mantém consistência com o resto do sistema?</li>
            <li>É acessível para todos os usuários?</li>
            <li>Oferece flexibilidade necessária?</li>
            <li>Impacta positivamente a performance?</li>
            <li>Permite evolução futura?</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesPage;