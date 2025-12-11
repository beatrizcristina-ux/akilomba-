# Design System Documentation

Uma documentação navegável completa do Design System, construída com React + Vite, seguindo o padrão Storybook.

## 🚀 Funcionalidades

### Arquitetura Principal
- **Home**: Introdução e visão geral do sistema
- **Introdução ao DS**: Conceitos fundamentais e objetivos
- **Princípios**: Valores que guiam as decisões de design
- **Governança**: Processos e responsabilidades
- **Tokens Disponíveis**: Catálogo completo de design tokens

### Foundations
- **Cores**: Sistema de cores e paleta cromática
- **Tipografia**: Escala tipográfica e hierarquia
- **Espaçamentos**: Sistema de grid e espaçamentos
- **Elevação**: Sombras e profundidade (placeholder)
- **Grid & Layout**: Sistema de grid responsivo (placeholder)
- **Ícones**: Biblioteca de ícones (placeholder)
- **Motion**: Animações e transições (placeholder)
- **Acessibilidade**: Diretrizes inclusivas (placeholder)

### Componentes
Estrutura preparada para cada componente com:
- Overview
- Anatomia
- Variantes
- Estados
- Acessibilidade
- Exemplo de uso

### Patterns
Padrões de interface para:
- Formulários
- Navegação
- Feedback
- Listas

### Recursos
- Tokens de design
- Downloads e assets
- Boas práticas

## 🛠️ Tecnologias

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **CSS Custom Properties**: Para implementação dos design tokens
- **Modular Architecture**: Componentes organizados por funcionalidade

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Sidebar.jsx          # Navegação lateral
│   └── MainContent.jsx      # Container principal
├── data/
│   ├── navigation.js        # Estrutura de navegação
│   └── tokens.js           # Design tokens importados
├── pages/
│   ├── HomePage.jsx         # Página inicial
│   ├── IntroductionPage.jsx # Introdução ao DS
│   ├── PrinciplesPage.jsx   # Princípios de design
│   ├── GovernancePage.jsx   # Governança
│   ├── TokensPage.jsx       # Catálogo de tokens
│   ├── foundations/         # Páginas de foundations
│   ├── components/          # Páginas de componentes
│   ├── patterns/           # Páginas de patterns
│   └── resources/          # Páginas de recursos
├── App.jsx                 # Componente principal
└── App.css                # Estilos globais com tokens
```

## 🎨 Design Tokens

Os tokens são importados do arquivo `design-tokens-colors.json` e organizados por categorias:

- **Brand**: Cores da marca
- **Background**: Cores de fundo
- **Text**: Cores de texto
- **Border**: Cores de bordas
- **Status**: Cores de feedback
- **Chart**: Cores para gráficos
- **Support**: Cores decorativas
- **Platform**: Cores específicas da plataforma

## 🚀 Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Executar em desenvolvimento:
```bash
npm run dev
```

3. Acessar: http://localhost:5174

## 📋 Status de Desenvolvimento

### ✅ Implementado
- Estrutura base da aplicação
- Navegação lateral estilo Storybook
- Páginas principais (Home, Introdução, Princípios, Governança, Tokens)
- Foundations: Cores, Tipografia, Espaçamentos
- Sistema de design tokens
- Estilos responsivos

### 🚧 Em Desenvolvimento (Placeholders)
- Foundations: Elevação, Grid, Ícones, Motion, Acessibilidade
- Todos os componentes (Button, Input, Card, Modal, etc.)
- Todos os patterns (Formulários, Navegação, Feedback, Listas)
- Recursos (Downloads, Boas Práticas)

### 🎯 Próximos Passos
1. Implementar componentes reais com exemplos visuais
2. Adicionar código de exemplo para cada componente
3. Criar sistema de busca na documentação
4. Implementar tema escuro
5. Adicionar testes visuais

## 🔧 Customização

Para adicionar novos tokens:
1. Editar `src/data/tokens.js`
2. Adicionar CSS custom properties em `src/App.css`
3. Usar os tokens nos componentes: `var(--token-name)`

Para adicionar novas páginas:
1. Criar componente em `src/pages/`
2. Adicionar rota em `src/data/navigation.js`
3. Incluir no switch de `src/components/MainContent.jsx`

## 📖 Documentação Paralela

Este projeto serve como base para espelhar a documentação no Notion, mantendo:
- Mesma estrutura hierárquica
- Conteúdo consistente entre plataformas
- Placeholders claramente identificados
- Status de desenvolvimento transparente