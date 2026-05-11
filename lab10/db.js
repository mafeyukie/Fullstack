const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = new Database(path.join(__dirname, 'carros.db'));

// ── Criação das tabelas ───────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    nome   TEXT NOT NULL,
    login  TEXT NOT NULL UNIQUE,
    senha  TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS carros (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    marca           TEXT NOT NULL,
    modelo          TEXT NOT NULL,
    ano             INTEGER NOT NULL,
    qtde_disponivel INTEGER NOT NULL DEFAULT 0
  );
`);

// ══════════════════════════════════════════════════════════════════
//  USUÁRIOS
// ══════════════════════════════════════════════════════════════════

/** CREATE — cadastra novo usuário (senha com hash bcrypt) */
function cadastrarUsuario(nome, login, senha) {
  const hash = bcrypt.hashSync(senha, 10);
  const stmt = db.prepare(
    'INSERT INTO usuarios (nome, login, senha) VALUES (?, ?, ?)'
  );
  return stmt.run(nome, login, hash);
}

/** READ — busca usuário pelo login */
function buscarUsuarioPorLogin(login) {
  return db.prepare('SELECT * FROM usuarios WHERE login = ?').get(login);
}

/** READ — todos os usuários */
function buscarTodosUsuarios() {
  return db.prepare('SELECT id, nome, login FROM usuarios ORDER BY id DESC').all();
}

/** Verifica credenciais; retorna o usuário ou null */
function autenticarUsuario(login, senha) {
  const usuario = buscarUsuarioPorLogin(login);
  if (!usuario) return null;
  return bcrypt.compareSync(senha, usuario.senha) ? usuario : null;
}

// ══════════════════════════════════════════════════════════════════
//  CARROS
// ══════════════════════════════════════════════════════════════════

/** CREATE — cadastra novo carro */
function cadastrarCarro(marca, modelo, ano, qtde_disponivel) {
  const stmt = db.prepare(
    'INSERT INTO carros (marca, modelo, ano, qtde_disponivel) VALUES (?, ?, ?, ?)'
  );
  return stmt.run(marca, modelo, ano, qtde_disponivel);
}

/** READ — todos os carros */
function buscarTodosCarros() {
  return db.prepare('SELECT * FROM carros ORDER BY id DESC').all();
}

/** READ — carro por id */
function buscarCarroPorId(id) {
  return db.prepare('SELECT * FROM carros WHERE id = ?').get(id);
}

/** UPDATE — atualiza dados do carro */
function atualizarCarro(id, marca, modelo, ano, qtde_disponivel) {
  const stmt = db.prepare(
    'UPDATE carros SET marca = ?, modelo = ?, ano = ?, qtde_disponivel = ? WHERE id = ?'
  );
  return stmt.run(marca, modelo, ano, qtde_disponivel, id);
}

/** UPDATE — decrementa quantidade (venda) */
function venderCarro(id) {
  const carro = buscarCarroPorId(id);
  if (!carro || carro.qtde_disponivel <= 0) return { ok: false, msg: 'Estoque esgotado.' };
  db.prepare('UPDATE carros SET qtde_disponivel = qtde_disponivel - 1 WHERE id = ?').run(id);
  return { ok: true };
}

/** DELETE — remove carro */
function removerCarro(id) {
  return db.prepare('DELETE FROM carros WHERE id = ?').run(id);
}

module.exports = {
  cadastrarUsuario, buscarUsuarioPorLogin, buscarTodosUsuarios, autenticarUsuario,
  cadastrarCarro, buscarTodosCarros, buscarCarroPorId, atualizarCarro, venderCarro, removerCarro,
};
