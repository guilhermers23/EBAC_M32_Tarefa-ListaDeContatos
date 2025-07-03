# 📇 EBAC Módulo 32 – Lista de Contatos

## 📌 Descrição

Aplicativo de gerenciamento de contatos criado com **React**, **TypeScript** e **Vite**, desenvolvido como tarefa do Módulo 32 do curso Full Stack Python da EBAC. Permite adicionar, editar, visualizar e remover contatos com uma interface leve e moderna.

---

## ⚙️ Tecnologias Utilizadas

- **React** + **Vite** – Interface rápida com hot-reload
- **TypeScript** – Tipagem estática para maior segurança
- **Redux Toolkit** – Governança estruturada de estado
- **Styled Components** – Estilização CSS-in-JS modular
- **ESLint + Prettier** – Padronização de código
- **Vite + plugins React** – Ambiente de desenvolvimento otimizado com HMR

---

## 🎯 Funcionalidades

- Adicionar novos contatos
- Editar informações de contatos existentes
- Excluir contatos
- Listagem clara e organizada dos contatos
- Interface responsiva e intuitiva

---

## 🗂️ Estrutura do Projeto

```
├── public/             # Assets estáticos
├── src/
│   ├── components/     # Formulários e lista de contatos
│   ├── store/          # Redux slices e configuração global
│   ├── App.tsx         # Componente raiz
│   ├── main.tsx        # Entrada da aplicação
│   └── styles/         # Estilizações com Styled Components
├── index.html
├── vite.config.ts      # Configuração do Vite
└── tsconfig.json       # Configuração do TypeScript
```

---

## ⚡ Scripts Disponíveis

```bash
npm run dev      # Inicia o ambiente de desenvolvimento
npm run build    # Build para produção
npm run lint     # Checagem com ESLint
npm run preview  # Pré-visualização do build
```

---

## 🚀 Executando Localmente

1. Clone o repositório

   ```bash
   git clone https://github.com/guilhermers23/EBAC_M32_Tarefa-ListaDeContatos.git
   cd EBAC_M32_Tarefa-ListaDeContatos
   ```

2. Instale as dependências

   ```bash
   npm install
   ```

3. Inicie o modo dev

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:5173` (ou porta indicada pelo Vite)

---

## 🛠️ Sugestões de Melhoria

- Implementar filtros e busca por campo (nome, telefone, etc.)
- Adicionar paginação ou scroll infinito
- Inclusão de testes (Jest + React Testing Library)
- Controle de estados de carregamento e erros
- Integração com um back-end ou persistência (ex: Firebase, MongoDB)

---

## 📝 Licença

Licença MIT. Contribuições são bem-vindas!
