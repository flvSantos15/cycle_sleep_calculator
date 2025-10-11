## Atomic Design

Organiza componentes UI em uma hierarquia inspirada na química: átomos → moléculas → organismos → templates → páginas.

Atoms: Botões, inputs, labels (componentes básicos)
Molecules: Campo de formulário (label + input + erro)
Organisms: Header, formulário completo, card de produto
Templates: Layout de página com placeholders
Pages: Templates com dados reais

### Vantagens:

Sistema de design consistente e reutilizável
Excelente para design systems e component libraries
Facilita colaboração entre designers e desenvolvedores
Componentes testáveis em isolamento (Storybook)
Escalabilidade visual - fácil manter consistência
Ótimo para projetos com múltiplas interfaces

### Desvantagens:

Pode ser confuso decidir se algo é molécula ou organismo
Over-engineering para apps pequenos
Muita abstração pode dificultar entendimento rápido
Refatoração complexa se hierarquia mudar
Não resolve organização de lógica de negócio
Foco excessivo em UI pode negligenciar arquitetura de dados

### Estrutura tipica:

```tsx
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   └── Input/
│   ├── molecules/
│   │   └── FormField/
│   ├── organisms/
│   │   ├── Header/
│   │   └── ProductCard/
│   └── templates/
│       └── PageLayout/
└── pages/            # Next.js pages
```