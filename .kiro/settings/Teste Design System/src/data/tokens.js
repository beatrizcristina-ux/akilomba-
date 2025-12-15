// Tokens importados do arquivo JSON
export const colorTokens = {
  "color-brand-primary": {
    "value": "#cc092f",
    "description": "Cor primária da marca, utilizada em elementos ativos e principais da interface",
    "category": "brand"
  },
  "color-brand-primary-alt": {
    "value": "#fce7ec",
    "description": "Variação alternativa da cor primária, utilizada em estados pressed/hover",
    "category": "brand"
  },
  "color-brand-secondary": {
    "value": "#3b69ff",
    "description": "Cor secundária da marca, utilizada em elementos ativos secundários",
    "category": "brand"
  },
  "color-brand-secondary-alt": {
    "value": "#dae2ff",
    "description": "Variação alternativa da cor secundária, utilizada em estados pressed/hover",
    "category": "brand"
  },
  "color-background-default": {
    "value": "#f0f0f0",
    "description": "Cor de fundo padrão da tela",
    "category": "background"
  },
  "color-background-container": {
    "value": "#fcfcfc",
    "description": "Cor de fundo para containers e modais",
    "category": "background"
  },
  "color-background-surface": {
    "value": "#dddddd",
    "description": "Cor para elementos não interativos acima de containers e modais, e elementos interativos desabilitados",
    "category": "background"
  },
  "color-background-field": {
    "value": "#eef0f5",
    "description": "Cor de fundo para elementos interativos como cards, inputs, droplists e calendar",
    "category": "background"
  },
  "color-background-field-disabled": {
    "value": "#d2d2d2",
    "description": "Cor de fundo para campos desabilitados",
    "category": "background"
  },
  "color-text-default": {
    "value": "#1f1f1f",
    "description": "Cor padrão para textos principais",
    "category": "text"
  },
  "color-text-alt": {
    "value": "#7a7a7a",
    "description": "Cor para legendas e textos secundários",
    "category": "text"
  },
  "color-text-disabled": {
    "value": "#909090",
    "description": "Cor para conteúdo desabilitado",
    "category": "text"
  },
  "color-text-on-primary": {
    "value": "#fbfbfb",
    "description": "Cor de texto aplicada sobre a cor primária",
    "category": "text"
  },
  "color-text-on-secondary": {
    "value": "#3b69ff",
    "description": "Cor de texto aplicada sobre a cor secundária",
    "category": "text"
  },
  "color-text-on-alt": {
    "value": "#f6f6f6",
    "description": "Cor de texto aplicada sobre cores sólidas",
    "category": "text"
  },
  "color-text-primary": {
    "value": "#cc092f",
    "description": "Cor para links e conteúdos que utilizam a cor primária",
    "category": "text"
  },
  "color-text-secondary": {
    "value": "#3b69ff",
    "description": "Cor de texto secundária (ainda sem uso definido)",
    "category": "text"
  },
  "color-border-default": {
    "value": "#666666",
    "description": "Cor padrão para bordas e linhas",
    "category": "border"
  },
  "color-border-alt": {
    "value": "#e0e0e0",
    "description": "Cor para bordas desabilitadas e linhas separadoras",
    "category": "border"
  },
  "color-status-positive": {
    "value": "#09ab47",
    "description": "Cor para status positivo - texto e elementos ativos",
    "category": "status"
  },
  "color-status-positive-alt": {
    "value": "#e6faee",
    "description": "Cor de fundo para status positivo",
    "category": "status"
  },
  "color-status-negative": {
    "value": "#e1173f",
    "description": "Cor para status negativo - texto e elementos ativos",
    "category": "status"
  },
  "color-status-negative-alt": {
    "value": "#fce7ec",
    "description": "Cor de fundo para status negativo",
    "category": "status"
  },
  "color-status-warning": {
    "value": "#e2a320",
    "description": "Cor para status de aviso - texto e elementos ativos",
    "category": "status"
  },
  "color-status-warning-alt": {
    "value": "#fefbd5",
    "description": "Cor de fundo para status de aviso",
    "category": "status"
  },
  "color-status-info": {
    "value": "#3b69ff",
    "description": "Cor para status informativo - texto e elementos ativos",
    "category": "status"
  },
  "color-status-info-alt": {
    "value": "#ebf0ff",
    "description": "Cor de fundo para status informativo",
    "category": "status"
  }
};

export const spacingTokens = {
  // Tokens baseados no Design System Majoris (Figma)
  // Sistema baseado em múltiplos de 4px para garantir alinhamento perfeito
  "spacing-xs": { 
    value: "4px", 
    description: "Espaçamento mínimo - 4px",
    usage: "Espaçamento mínimo entre elementos relacionados"
  },
  "spacing-sm": { 
    value: "8px", 
    description: "Espaçamento pequeno - 8px",
    usage: "Padding interno de componentes pequenos"
  },
  "spacing-md": { 
    value: "12px", 
    description: "Espaçamento médio pequeno - 12px",
    usage: "Espaçamento entre elementos próximos"
  },
  "spacing-lg": { 
    value: "16px", 
    description: "Espaçamento médio - 16px",
    usage: "Espaçamento padrão entre elementos"
  },
  "spacing-xl": { 
    value: "20px", 
    description: "Espaçamento médio grande - 20px",
    usage: "Separação entre elementos relacionados"
  },
  "spacing-2xl": { 
    value: "24px", 
    description: "Espaçamento grande - 24px",
    usage: "Separação entre seções relacionadas"
  },
  "spacing-3xl": { 
    value: "28px", 
    description: "Espaçamento grande plus - 28px",
    usage: "Espaçamento entre grupos de elementos"
  },
  "spacing-4xl": { 
    value: "32px", 
    description: "Espaçamento extra grande - 32px",
    usage: "Espaçamento entre seções principais"
  },
  "spacing-5xl": { 
    value: "36px", 
    description: "Espaçamento extra grande plus - 36px",
    usage: "Separação entre blocos de conteúdo"
  },
  "spacing-6xl": { 
    value: "40px", 
    description: "Espaçamento extra extra grande - 40px",
    usage: "Espaçamento entre seções principais grandes"
  },
  "spacing-7xl": { 
    value: "44px", 
    description: "Espaçamento máximo médio - 44px",
    usage: "Separação entre grandes blocos de conteúdo"
  },
  "spacing-8xl": { 
    value: "48px", 
    description: "Espaçamento máximo - 48px",
    usage: "Separação entre seções principais da página"
  }
};

export const typographyTokens = {
  // Família tipográfica
  "font-family-primary": { 
    value: "'Bradesco Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif", 
    description: "Família tipográfica principal - Bradesco Sans" 
  },
  "font-family-mono": { 
    value: "'Monaco', 'Menlo', monospace", 
    description: "Família tipográfica monoespaçada" 
  },

  // Tamanhos de fonte (baseados no design do Figma)
  "font-size-10": { value: "10px", description: "Overline" },
  "font-size-12": { value: "12px", description: "Caption" },
  "font-size-14": { value: "14px", description: "Body 2, Button" },
  "font-size-16": { value: "16px", description: "Body 1, Subtitle" },
  "font-size-20": { value: "20px", description: "Headline 2" },
  "font-size-24": { value: "24px", description: "Headline 1" },
  "font-size-28": { value: "28px", description: "Number 2" },
  "font-size-32": { value: "32px", description: "Number 1" },

  // Pesos de fonte
  "font-weight-regular": { value: "400", description: "Peso regular (Italic)" },
  "font-weight-medium": { value: "500", description: "Peso médio (Medium)" },
  "font-weight-semibold": { value: "600", description: "Peso semi-negrito (SemiBold - Button)" },
  "font-weight-bold": { value: "700", description: "Peso negrito (Bold)" },

  // Line heights
  "line-height-tight": { value: "1.2", description: "Altura de linha compacta - títulos" },
  "line-height-normal": { value: "1.25", description: "Altura de linha normal - botões" },
  "line-height-relaxed": { value: "1.5", description: "Altura de linha relaxada - texto corrido" },
  "line-height-loose": { value: "1.6", description: "Altura de linha solta - Body 2" },

  // Letter spacing
  "letter-spacing-tight": { value: "0.75px", description: "Espaçamento de letra compacto" },
  "letter-spacing-normal": { value: "1.4px", description: "Espaçamento de letra normal" },

  // Tokens compostos para cada estilo tipográfico
  "typography-number-1": {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Number 1 - maior hierarquia"
  },
  "typography-number-2": {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Number 2"
  },
  "typography-headline-1": {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Headline 1"
  },
  "typography-headline-2": {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Headline 2"
  },
  "typography-subtitle": {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.5",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Subtitle"
  },
  "typography-body-1": {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Body 1 - texto principal"
  },
  "typography-body-2": {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Body 2 - texto secundário"
  },
  "typography-button": {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1.25",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Button"
  },
  "typography-caption": {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Caption - legendas"
  },
  "typography-overline": {
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "1.4px",
    fontFamily: "'Bradesco Sans', sans-serif",
    description: "Estilo Overline - texto sobrescrito"
  }
};

export const elevationTokens = {
  // Elevações baseadas no Design System Majoris (Figma)
  "elevation-low": {
    value: "0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.2)",
    description: "Elevação baixa - Pressed / '0' / Floor",
    usage: "Estados pressed, elementos no nível do chão",
    level: 1
  },
  "elevation-default": {
    value: "0px 2px 3px 0px rgba(0, 0, 0, 0.08), 0px 1px 3px -4px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.08)",
    description: "Elevação padrão - Default",
    usage: "Cards, containers e elementos padrão da interface",
    level: 2
  },
  "elevation-high": {
    value: "0px 8px 8px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 5px 5px 0px rgba(0, 0, 0, 0.12)",
    description: "Elevação alta - Active",
    usage: "Estados ativos, elementos em foco, dropdowns",
    level: 3
  },
  "elevation-modal": {
    value: "0px 16px 24px 0px rgba(0, 0, 0, 0.14), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.2)",
    description: "Elevação modal - Modal",
    usage: "Modais, overlays e elementos que ficam acima de tudo",
    level: 4
  },

  // Tokens individuais para customização
  "shadow-color-primary": {
    value: "rgba(0, 0, 0, 0.08)",
    description: "Cor de sombra primária - baixa opacidade"
  },
  "shadow-color-secondary": {
    value: "rgba(0, 0, 0, 0.12)",
    description: "Cor de sombra secundária - média opacidade"
  },
  "shadow-color-tertiary": {
    value: "rgba(0, 0, 0, 0.14)",
    description: "Cor de sombra terciária - alta opacidade"
  },
  "shadow-color-accent": {
    value: "rgba(0, 0, 0, 0.16)",
    description: "Cor de sombra de destaque"
  },
  "shadow-color-strong": {
    value: "rgba(0, 0, 0, 0.2)",
    description: "Cor de sombra forte - máxima opacidade"
  }
};