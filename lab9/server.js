const express = require('express');
const path    = require('path');
const { cadastrarPost, buscarTodosPosts } = require('./database/db');

const app  = express();
const PORT = 80;

// ── Configurações ───────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── Rotas GET ───────────────────────────────────────────────────────

// '/' → página de projetos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

// '/blog' → blog dinâmico com EJS
app.get('/blog', (req, res) => {
  const posts = buscarTodosPosts();
  res.render('blog', { posts });
});

// '/cadastrar_post' → formulário de novo post
app.get('/cadastrar_post', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

// ── Rotas POST ──────────────────────────────────────────────────────

// POST /cadastrar_post → salva post no banco e redireciona para o blog
app.post('/cadastrar_post', (req, res) => {
  const { titulo, resumo, conteudo } = req.body;

  if (!titulo || !resumo || !conteudo) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  cadastrarPost(titulo.trim(), resumo.trim(), conteudo.trim());
  console.log(`[BD] Post cadastrado: "${titulo}"`);

  res.redirect('/blog');
});

// ── Inicialização ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`   /         → Projects`);
  console.log(`   /blog     → Blog (EJS)`);
  console.log(`   /cadastrar_post → Novo post\n`);
});
