const express  = require('express');
const session  = require('express-session');
const path     = require('path');
const db       = require('./database/db');

const app  = express();
const PORT = 80;

// ── Configurações ────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'carros-secret-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 2 } // 2 horas
}));

// ── Middleware de autenticação ───────────────────────────────────
function autenticado(req, res, next) {
  if (req.session && req.session.usuario) return next();
  res.redirect('/login');
}

// ════════════════════════════════════════════════════════════════
//  ROTAS PÚBLICAS
// ════════════════════════════════════════════════════════════════

// '/' → Projects
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'Projects.html')));

// Cadastro de usuário
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cadastro_usuario.html')));

app.post('/cadastro', (req, res) => {
  const { nome, login, senha } = req.body;
  if (!nome || !login || !senha) return res.redirect('/cadastro?erro=campos');
  try {
    db.cadastrarUsuario(nome.trim(), login.trim(), senha);
    res.redirect('/login?msg=cadastrado');
  } catch (e) {
    res.redirect('/cadastro?erro=login_existente');
  }
});

// Login
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));

app.post('/login', (req, res) => {
  const { login, senha } = req.body;
  const usuario = db.autenticarUsuario(login, senha);
  if (!usuario) return res.redirect('/login?erro=invalido');
  req.session.usuario = { id: usuario.id, nome: usuario.nome, login: usuario.login };
  res.redirect('/carros');
});

// Logout
app.get('/logout', (req, res) => { req.session.destroy(); res.redirect('/login'); });

// ════════════════════════════════════════════════════════════════
//  ROTAS PROTEGIDAS — CARROS
// ════════════════════════════════════════════════════════════════

// Listagem pública dos carros disponíveis
app.get('/carros', (req, res) => {
  const carros = db.buscarTodosCarros();
  res.render('carros_lista', { carros, usuario: req.session.usuario || null });
});

// Gerência dos carros (apenas autenticado)
app.get('/gerencia', autenticado, (req, res) => {
  const carros = db.buscarTodosCarros();
  const msg    = req.query.msg   || null;
  const erro   = req.query.erro  || null;
  res.render('gerencia', { carros, usuario: req.session.usuario, msg, erro });
});

// CREATE — cadastrar carro
app.post('/carros/criar', autenticado, (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  if (!marca || !modelo || !ano || qtde_disponivel === undefined)
    return res.redirect('/gerencia?erro=campos');
  db.cadastrarCarro(marca.trim(), modelo.trim(), parseInt(ano), parseInt(qtde_disponivel));
  res.redirect('/gerencia?msg=criado');
});

// READ — formulário de edição de um carro
app.get('/carros/editar/:id', autenticado, (req, res) => {
  const carro = db.buscarCarroPorId(req.params.id);
  if (!carro) return res.redirect('/gerencia?erro=nao_encontrado');
  res.render('editar_carro', { carro, usuario: req.session.usuario });
});

// UPDATE — atualizar carro
app.post('/carros/atualizar/:id', autenticado, (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  db.atualizarCarro(req.params.id, marca.trim(), modelo.trim(), parseInt(ano), parseInt(qtde_disponivel));
  res.redirect('/gerencia?msg=atualizado');
});

// UPDATE — vender (decrementar quantidade)
app.post('/carros/vender/:id', (req, res) => {
  const result = db.venderCarro(req.params.id);
  res.json(result);
});

// DELETE — remover carro
app.post('/carros/remover/:id', autenticado, (req, res) => {
  db.removerCarro(req.params.id);
  res.redirect('/gerencia?msg=removido');
});

// ── Start ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚗 Servidor rodando em http://localhost:${PORT}`);
  console.log('   /          → Projects');
  console.log('   /carros    → Listagem de carros');
  console.log('   /gerencia  → Gerência (login necessário)');
  console.log('   /cadastro  → Cadastro de usuário');
  console.log('   /login     → Login\n');
});
