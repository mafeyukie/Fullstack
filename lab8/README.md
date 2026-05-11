# Get - Post - Template

Projeto Node.js com Express e EJS para cadastro e login de usuários.

## 📦 Instalação

```bash
npm install
```

## ▶️ Executar

```bash
# Produção (requer permissão para porta 80)
sudo node server.js

# Desenvolvimento com hot-reload
npm run dev
```

## 🗂️ Estrutura

```
projeto/
├── server.js           # Servidor Express (porta 80)
├── package.json
├── views/
│   └── resposta.ejs    # Página dinâmica de status do login
└── public/
    ├── Projects.html   # Página de projetos (rota '/')
    ├── Login.html      # Página de login (rota '/login')
    ├── Cadastro.html   # Página de cadastro (rota '/cadastro')
    └── css/
        └── style.css   # Estilos globais
```

## 🔀 Rotas

| Método | Rota        | Descrição                            |
|--------|-------------|--------------------------------------|
| GET    | `/`         | Página de projetos (Projects.html)   |
| GET    | `/login`    | Página de login                      |
| GET    | `/cadastro` | Página de cadastro                   |
| POST   | `/login`    | Processa login → renderiza resposta.ejs |
| POST   | `/cadastro` | Processa cadastro e redireciona      |

## 🔑 Usuário padrão para teste

- **Usuário:** `admin`
- **Senha:** `1234`
