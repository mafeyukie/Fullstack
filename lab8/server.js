const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// ---- Configurações ----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Parsear body das requisições POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Banco de dados simples em memória
const usuarios = [
  { nome: 'Admin', usuario: 'admin', senha: '1234' } // usuário padrão para testes
];

// ---- Rotas GET ----

// '/' -> página de projetos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

// '/cadastro' -> página de cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

// '/login' -> página de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// ---- Rotas POST ----

// POST /cadastro -> cadastra usuário
app.post('/cadastro', (req, res) => {
  const { nome, usuario, senha } = req.body;

  const jaExiste = usuarios.find(u => u.usuario === usuario);
  if (jaExiste) {
    return res.send(`
      <script>
        alert('Usuário "${usuario}" já existe! Escolha outro nome de usuário.');
        history.back();
      </script>
    `);
  }

  usuarios.push({ nome, usuario, senha });
  console.log(`[CADASTRO] Novo usuário: ${usuario}`);

  res.send(`
    <script>
      alert('Cadastro realizado com sucesso! Faça login.');
      window.location.href = '/login';
    </script>
  `);
});

// POST /login -> verifica credenciais e renderiza resposta.ejs
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  const encontrado = usuarios.find(
    u => u.usuario === usuario && u.senha === senha
  );

  const agora = new Date();
  const hora = agora.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium'
  });

  if (encontrado) {
    console.log(`[LOGIN] Sucesso: ${usuario}`);
    res.render('resposta', {
      sucesso: true,
      status: 'Login bem-sucedido',
      usuario: encontrado.nome || usuario,
      hora
    });
  } else {
    console.log(`[LOGIN] Falha: ${usuario}`);
    res.render('resposta', {
      sucesso: false,
      status: 'Credenciais inválidas',
      usuario: usuario,
      hora
    });
  }
});

// ---- Iniciar servidor ----
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando na porta ${PORT}`);
  console.log(`   Acesse: http://localhost:${PORT}\n`);
  console.log(`   Usuário de teste: admin / 1234\n`);
});
