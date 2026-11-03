# Atividade Prática 2 — Automação E2E com Playwright

## Sobre o projeto

Este projeto foi desenvolvido como parte da Atividade Prática 2, com o objetivo de aplicar conceitos de automação de testes E2E (End-to-End) utilizando Playwright e TypeScript.

A aplicação utilizada para os testes é o [SauceDemo](https://www.saucedemo.com/).

O projeto utiliza três conceitos principais:

- Page Object Model (POM);
- Fixtures para gerenciamento de sessão autenticada;
- Data-Driven Testing para execução de cenários com diferentes dados.

## Descrição da estrutura do projeto

### Estrutura de pastas e arquivos

```text
Atividade-Pratica-2-SauceDemo/
├── data/
│   └── usuarios.data.ts
├── fixtures/
│   └── auth.fixture.ts
├── pages/
│   ├── DashboardPage.ts
│   └── LoginPage.ts
├── tests/
│   ├── dashboard-sessao.spec.ts
│   └── login-data-driven.spec.ts
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

### Descrição das pastas

- `data/`: contém `usuarios.data.ts`, responsável por armazenar os dados dos cenários de teste.
- `fixtures/`: contém `auth.fixture.ts`, responsável por preparar a sessão autenticada.
- `pages/`: contém `LoginPage.ts` e `DashboardPage.ts`, classes que representam as páginas do sistema e aplicam o padrão Page Object Model (POM).
- `tests/`: contém `dashboard-sessao.spec.ts`, responsável por testar a sessão autenticada e o logout, e `login-data-driven.spec.ts`, responsável pelos cenários de login utilizando Data-Driven Testing.

### Arquivos de configuração e documentação

- `package.json`: registra informações do projeto, dependências e comandos de execução.
- `package-lock.json`: registra as versões específicas das dependências instaladas.
- `playwright.config.ts`: concentra as configurações do Playwright.
- `tsconfig.json`: define as configurações do TypeScript.
- `README.md`: apresenta o projeto e orienta sobre sua instalação e execução.

## Instalação e execução

### Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js;
- npm (gerenciador de pacotes do Node.js).

### Instalação das dependências

Na pasta raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências necessárias, conforme as versões registradas no arquivo `package-lock.json`.

### Instalação do navegador

Para instalar o Chromium utilizado nos testes, execute:

```bash
npx playwright install chromium
```

### Execução dos testes

Para executar todos os testes automatizados:

```bash
npx playwright test
```

Para visualizar o relatório HTML:

```bash
npx playwright show-report
```

Para executar somente os testes de login:

```bash
npx playwright test tests/login-data-driven.spec.ts
```

Para executar somente o teste de sessão autenticada:

```bash
npx playwright test tests/dashboard-sessao.spec.ts
```

## Aplicação utilizada

**SauceDemo:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

### Observação sobre a identificação da sessão autenticada

Na aplicação SauceDemo, a página de produtos (`inventory.html`) não apresenta um indicador explícito com o nome ou perfil do usuário autenticado.

Por esse motivo, a validação da sessão neste projeto utiliza elementos que caracterizam a área autenticada:

- **Título "Products":** confirma a exibição da página de produtos.
- **Lista de produtos (`inventory-list`):** confirma o carregamento do conteúdo da área autenticada.
- **Opção "Logout":** permite verificar a disponibilidade da funcionalidade de encerramento da sessão.

Essa abordagem respeita a estrutura da aplicação utilizada como ambiente de testes, sem depender de elementos de identificação que não estão disponíveis na interface.

### Credenciais de teste

| Usuário | Senha | Resultado esperado |
|---|---|---|
| `standard_user` | `secret_sauce` | Login realizado com sucesso |
| `locked_out_user` | `secret_sauce` | Acesso bloqueado |
| `standard_user` | `senha_errada` | Mensagem de credenciais inválidas |

As credenciais são disponibilizadas publicamente pelo SauceDemo para fins de demonstração e testes.