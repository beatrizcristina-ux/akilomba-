# Tokens de Elevação - Design System Majoris

Este documento descreve os tokens de elevação extraídos do Design System Majoris no Figma e como utilizá-los no desenvolvimento.

## 📋 Tokens Criados

### Arquivos Gerados

1. **`design-tokens-elevation.json`** - Tokens em formato JSON estruturado
2. **`src/data/tokens.js`** - Tokens atualizados para uso no React
3. **`src/styles/elevation.css`** - Classes CSS utilitárias
4. **`src/pages/foundations/ElevationPage.jsx`** - Página de documentação completa

## 🏔️ Níveis de Elevação

O Design System Majoris define 4 níveis de elevação, cada um com propósito específico:

### Level 1 - Low
- **Uso**: Pressed / "0" / Floor
- **Contexto**: Estados pressed, elementos desabilitados, elementos no nível do chão
- **Shadow**: `0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.2)`

### Level 2 - Default
- **Uso**: Default
- **Contexto**: Cards, containers e elementos padrão da interface
- **Shadow**: `0px 2px 3px 0px rgba(0, 0, 0, 0.08), 0px 1px 3px -4px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.08)`

### Level 3 - High
- **Uso**: Active
- **Contexto**: Estados ativos, elementos em foco, dropdowns, tooltips
- **Shadow**: `0px 8px 8px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 5px 5px 0px rgba(0, 0, 0, 0.12)`

### Level 4 - Modal
- **Uso**: Modal
- **Contexto**: Modais, overlays e elementos que ficam acima de tudo
- **Shadow**: `0px 16px 24px 0px rgba(0, 0, 0, 0.14), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.2)`

## 🎨 Cores de Sombra

| Token | Valor | Opacidade | Uso |
|-------|-------|-----------|-----|
| shadow-color-primary | rgba(0, 0, 0, 0.08) | 8% | Sombras sutis |
| shadow-color-secondary | rgba(0, 0, 0, 0.12) | 12% | Sombras médias |
| shadow-color-tertiary | rgba(0, 0, 0, 0.14) | 14% | Sombras pronunciadas |
| shadow-color-accent | rgba(0, 0, 0, 0.16) | 16% | Sombras de destaque |
| shadow-color-strong | rgba(0, 0, 0, 0.2) | 20% | Sombras fortes |

## 💻 Como Usar

### 1. Classes CSS

```css
/* Elevações diretas */
.elevation-low
.elevation-default
.elevation-high
.elevation-modal

/* Classes para componentes específicos */
.card
.button-pressed
.dropdown
.tooltip
.modal
.overlay

/* Classes interativas */
.elevation-interactive
.elevation-transition
```

### 2. JavaScript/React

```javascript
import { elevationTokens } from './data/tokens';

// Usar token de elevação
const cardStyle = {
  boxShadow: elevationTokens['elevation-default'].value
};

// Usar cor de sombra individual
const customShadow = {
  boxShadow: `0px 4px 8px ${elevationTokens['shadow-color-secondary'].value}`
};
```

### 3. Variáveis CSS

```css
.custom-card {
  box-shadow: var(--elevation-default);
  transition: box-shadow 0.2s ease-in-out;
}

.custom-card:hover {
  box-shadow: var(--elevation-high);
}
```

## 🎯 Diretrizes de Uso

### ✅ Faça

- Use **Low** para estados pressed e elementos desabilitados
- Use **Default** para cards e containers padrão
- Use **High** para elementos em hover/focus e dropdowns
- Use **Modal** apenas para modais e overlays
- Adicione transições suaves entre estados de elevação

### ❌ Evite

- Usar muitos níveis diferentes na mesma tela
- Aplicar elevação em elementos que não precisam de destaque
- Criar novos níveis sem necessidade real
- Usar elevação modal em elementos que não são overlays

## 🔄 Estados Interativos

```css
/* Exemplo de botão com estados */
.interactive-button {
  box-shadow: var(--elevation-default);
  transition: box-shadow 0.2s ease-in-out;
}

.interactive-button:hover {
  box-shadow: var(--elevation-high);
}

.interactive-button:active {
  box-shadow: var(--elevation-low);
}
```

## 📱 Responsividade

As elevações são consistentes em todos os breakpoints, mas considere:

- Em dispositivos móveis, use elevações mais sutis
- Em telas grandes, as elevações podem ser mais pronunciadas
- Mantenha a hierarquia visual independente do dispositivo

## 🔗 Links Relacionados

- [Figma - Design System Majoris](https://www.figma.com/design/AjiMYM7CIEd19nrwqrRVJi/Design-System---Majoris?node-id=11478-163286)
- Página de Elevação no Design System (acessível via navegação)
- Documentação de Cores e Tipografia