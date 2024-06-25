# Backoffice Frontend

Esse é um projeto Angular,  gerado com Angular CLI 17.3.4. Utiliza Sass e TypeScript, e atualmente está em desenvolvimento. A intenção é de ser o frontend para interagir com o backend do repositório [`prodMngmtBackend`](https://github.com/thisd92/prodMngmtBackend).

## Funcionalidades

- **Login**: Permite que os usuários façam login no sistema.
- **Signup**: Permite que novos usuários se registrem no sistema.

## Instalação e Execução

### Pré-requisitos

Tenha certeza de ter instalado Node.js e AngularCLI em sua máquina.
- Node.js: [Download and install Node.js](https://nodejs.org/)
- Angular CLI: Install Angular CLI globally using npm:
```bash
  npm install -g @angular/cli
```
### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/backoffice-front.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd backoffice-front
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

### Execução:

    ```bash
    ng serve
    ```

5. Abra o navegador e acesse `http://localhost:4200`.

## Configuração

Certifique-se de que o backend (repositório `prodMngmtBackend`) esteja em execução e devidamente configurado para que este frontend possa consumir suas APIs.

## Estrutura de Diretórios

```plaintext
backoffice-front/
│
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── login/
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.ts
│   │   │   │   └── login.module.ts
│   │   │   │
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.html
│   │   │   │   ├── signup.component.scss
│   │   │   │   ├── signup.component.ts
│   │   │   │   └── signup.module.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.ts
│   │   │   │   └── login.module.ts
│   │   │   │
│   │   │   ├── user-register/
│   │   │   │   ├── user-register.component.html
│   │   │   │   ├── user-register.component.scss
│   │   │   │   ├── user-register.component.ts
│   │   │   │   └── user-register.module.ts
│   │   │
│   │   └── app.module.ts
│   │
│   ├── assets/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (git checkout -b feature/MinhaFeature).
3. Comite suas alterações (git commit -m 'Adiciona minha feature').
4. Faça um push para a branch (git push origin feature/MinhaFeature).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a MIT License.
