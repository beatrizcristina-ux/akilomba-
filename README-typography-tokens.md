# Tokens de Tipografia - Design System Majoris

Este documento descreve os tokens de tipografia extraídos do Design System Majoris no Figma e como utilizá-los no desenvolvimento.

## 📋 Tokens Criados

### Arquivos Gerados

1. **`design-tokens-typography.json`** - Tokens em formato JSON estruturado
2. **`src/data/tokens.js`** - Tokens atualizados para uso no React
3. **`src/styles/typography.css`** - Classes CSS utilitárias
4. **`src/pages/foundations/TypographyPage.jsx`** - Documentação atualizada

## 🎨 Família Tipográfica

- **Bradesco Sans**: Fonte principal do Design System Majoris
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif

## 📏 Escala Tipográfica

| Estilo | Tamanho | Peso | Line Height | Letter Spacing | Uso |
|--------|---------|------|-------------|----------------|-----|
| Number 1 | 32px | 700 | 1.2 | 1.4px | Maior hierarquia tipográfica |
| Number 2 | 28px | 700 | 1.2 | 1.4px | Segunda maior hierarquia |
| Headline 1 | 24px | 700 | 1.2 | 1.4px | Títulos principais |
| Headline 2 | 20px | 700 | 1.2 | 1.4px | Subtítulos |
| Subtitle | 16px | 700 | 1.5 | 1.4px | Subtítulos menores |
| Body 1 | 16px | 500 | 1.5 | 1.4px | Texto principal |
| Body 2 | 14px | 500 | 1.6 | 1.4px | Texto secundário |
| Button | 14px | 600 | 1.25 | 1.4px | Texto de botões |
| Caption | 12px | 500 | 1.5 | 1.4px | Legendas |
| Overline | 10px | 500 | 1.2 | 1.4px | Texto sobrescrito |

## 🎯 Variações de Estilo

Cada estilo pode ter as seguintes variações:

- **Link**: Sublinhado com cor rosa (#d6409f) e letter-spacing reduzido (0.75px)
- **Bold**: Peso 700 com cor rosa (#d6409f)
- **Italic**: Estilo itálico com cor rosa (#d6409f)
- **Strikethrough**: Texto riscado com cor rosa (#d6409f)

## 💻 Como Usar

### 1. Classes CSS

```css
/* Estilos compostos */
.typography-number-1
.typography-headline-1
.typography-body-1
/* etc... */

/* Tokens individuais */
.text-32 /* tamanho */
.font-bold /* peso */
.leading-tight /* line-height */
.tracking-normal /* letter-spacing */

/* Variações */
.text-link
.text-bold
.text-italic
.text-strikethrough
```

### 2. JavaScript/React

```javascript
import { typographyTokens } from './data/tokens';

// Usar token composto
const titleStyle = typographyTokens['typography-number-1'];

// Usar tokens individuais
const customStyle = {
  fontSize: typographyTokens['font-size-24'].value,
  fontWeight: typographyTokens['font-weight-bold'].value,
  lineHeight: typographyTokens['line-height-tight'].value
};
```

### 3. Variáveis CSS

```css
.custom-title {
  font-family: var(--font-family-bradesco);
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-normal);
}
```

## 📝 Observações Importantes

1. **Figma vs Desenvolvimento**: No Figma, as variações (bold, italic, link) são tokens separados por limitações da ferramenta. No desenvolvimento, use os modificadores CSS.

2. **Bradesco Sans**: Certifique-se de que a fonte Bradesco Sans esteja carregada no projeto. As fontes de fallback garantem funcionalidade mesmo sem a fonte principal.

3. **Consistência**: Use sempre os tokens definidos para manter consistência visual em todo o produto.

4. **Acessibilidade**: Os tamanhos e contrastes foram definidos considerando diretrizes de acessibilidade.

## 🔗 Links Relacionados

- [Figma - Design System Majoris](https://www.figma.com/design/AjiMYM7CIEd19nrwqrRVJi/Design-System---Majoris?node-id=18652-3161)
- Página de Tipografia no Design System (acessível via navegação)