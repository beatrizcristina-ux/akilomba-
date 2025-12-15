# Tokens de Spacing - Design System Majoris

## Visão Geral

Os tokens de spacing do Design System Majoris seguem um sistema baseado em múltiplos de 4px, garantindo consistência visual e alinhamento perfeito em toda a interface. Este sistema proporciona flexibilidade e harmonia visual entre os elementos.

## Filosofia do Sistema

### Base 4px
- **Flexibilidade**: Permite ajustes mais granulares que o sistema tradicional de 8px
- **Alinhamento**: Garante que todos os elementos se alinhem perfeitamente
- **Consistência**: Cria um ritmo visual harmonioso em toda a aplicação
- **Escalabilidade**: Facilita a criação de novos componentes mantendo a consistência

## Tokens Disponíveis

| Token | Valor | Uso Recomendado |
|-------|-------|-----------------|
| `spacing-xs` | 4px | Espaçamento mínimo entre elementos relacionados |
| `spacing-sm` | 8px | Padding interno de componentes pequenos |
| `spacing-md` | 12px | Espaçamento entre elementos próximos |
| `spacing-lg` | 16px | Espaçamento padrão entre elementos |
| `spacing-xl` | 20px | Separação entre elementos relacionados |
| `spacing-2xl` | 24px | Separação entre seções relacionadas |
| `spacing-3xl` | 28px | Espaçamento entre grupos de elementos |
| `spacing-4xl` | 32px | Espaçamento entre seções principais |
| `spacing-5xl` | 36px | Separação entre blocos de conteúdo |
| `spacing-6xl` | 40px | Espaçamento entre seções principais grandes |
| `spacing-7xl` | 44px | Separação entre grandes blocos de conteúdo |
| `spacing-8xl` | 48px | Separação entre seções principais da página |

## Implementação

### CSS Custom Properties
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;
  --spacing-3xl: 28px;
  --spacing-4xl: 32px;
  --spacing-5xl: 36px;
  --spacing-6xl: 40px;
  --spacing-7xl: 44px;
  --spacing-8xl: 48px;
}
```

### JavaScript/React
```javascript
import { spacingTokens } from './tokens';

// Uso direto
const cardStyle = {
  padding: spacingTokens['spacing-lg'].value, // 16px
  marginBottom: spacingTokens['spacing-2xl'].value // 24px
};

// Com CSS-in-JS
const StyledCard = styled.div`
  padding: ${spacingTokens['spacing-lg'].value};
  margin-bottom: ${spacingTokens['spacing-2xl'].value};
`;
```

## Diretrizes de Uso

### ✅ Boas Práticas

1. **Use sempre os tokens definidos** ao invés de valores arbitrários
2. **Mantenha consistência** no espaçamento entre elementos similares
3. **Considere a hierarquia** - elementos mais importantes podem ter mais espaço
4. **Teste em diferentes tamanhos** de tela para garantir responsividade

### ❌ Evite

1. **Criar espaçamentos customizados** sem justificativa técnica
2. **Usar valores que não sejam múltiplos de 4px** fora do sistema
3. **Espaçamentos muito pequenos** que prejudiquem a legibilidade
4. **Inconsistência** entre componentes similares

## Exemplos Práticos

### Card Básico
```css
.card {
  padding: var(--spacing-2xl); /* 24px */
  margin-bottom: var(--spacing-lg); /* 16px */
  border-radius: var(--spacing-sm); /* 8px */
}

.card-title {
  margin-bottom: var(--spacing-sm); /* 8px */
}

.card-content {
  margin-bottom: var(--spacing-lg); /* 16px */
}

.card-actions {
  gap: var(--spacing-sm); /* 8px */
}
```

### Layout de Página
```css
.page-container {
  padding: var(--spacing-4xl); /* 32px */
}

.section {
  margin-bottom: var(--spacing-6xl); /* 40px */
}

.section-title {
  margin-bottom: var(--spacing-xl); /* 20px */
}

.content-block {
  margin-bottom: var(--spacing-2xl); /* 24px */
}
```

### Formulários
```css
.form-field {
  margin-bottom: var(--spacing-lg); /* 16px */
}

.form-label {
  margin-bottom: var(--spacing-xs); /* 4px */
}

.form-input {
  padding: var(--spacing-md) var(--spacing-lg); /* 12px 16px */
}

.form-actions {
  margin-top: var(--spacing-4xl); /* 32px */
  gap: var(--spacing-sm); /* 8px */
}
```

## Grid System

O sistema de spacing se integra perfeitamente com nosso grid de 12 colunas:

- **Gutters**: `spacing-lg` (16px) entre colunas
- **Margins**: `spacing-4xl` (32px) nas laterais em desktop
- **Sections**: `spacing-6xl` (40px) entre seções principais

## Responsividade

Os tokens de spacing são fixos, mas podem ser adaptados para diferentes breakpoints:

```css
/* Mobile */
@media (max-width: 768px) {
  .page-container {
    padding: var(--spacing-lg); /* 16px ao invés de 32px */
  }
  
  .section {
    margin-bottom: var(--spacing-4xl); /* 32px ao invés de 40px */
  }
}
```

## Acessibilidade

- **Área de toque**: Elementos interativos devem ter pelo menos `spacing-6xl` (40px) de área clicável
- **Espaçamento de texto**: Use `spacing-lg` (16px) ou maior entre parágrafos para melhor legibilidade
- **Separação visual**: Use espaçamento adequado para criar hierarquia visual clara

## Manutenção

Para adicionar novos tokens de spacing:

1. Certifique-se de que o valor é múltiplo de 4px
2. Adicione ao arquivo `design-tokens-spacing.json`
3. Atualize o arquivo `tokens.js`
4. Documente o uso recomendado
5. Teste em diferentes contextos

## Ferramentas de Desenvolvimento

### Extensão do Navegador
Recomendamos usar extensões que mostram o grid de 4px para facilitar o desenvolvimento e verificação do alinhamento.

### Linting
Configure seu linter para alertar sobre valores de spacing que não sejam múltiplos de 4px ou que não usem os tokens definidos.