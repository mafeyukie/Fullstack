const Database = require('better-sqlite3');
const path = require('path');

// Cria / abre o banco de dados SQLite
const db = new Database(path.join(__dirname, 'blog.db'));

// Garante que a tabela de posts existe
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo    TEXT    NOT NULL,
    resumo    TEXT    NOT NULL,
    conteudo  TEXT    NOT NULL,
    criado_em TEXT    NOT NULL DEFAULT (datetime('now','localtime'))
  )
`);

/**
 * Cadastra um novo post no banco de dados.
 * @param {string} titulo
 * @param {string} resumo
 * @param {string} conteudo
 * @returns {object} post inserido com o id gerado
 */
function cadastrarPost(titulo, resumo, conteudo) {
  const stmt = db.prepare(
    'INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)'
  );
  const info = stmt.run(titulo, resumo, conteudo);
  return { id: info.lastInsertRowid, titulo, resumo, conteudo };
}

/**
 * Busca todos os posts no banco de dados, do mais recente ao mais antigo.
 * @returns {Array} lista de posts
 */
function buscarTodosPosts() {
  const stmt = db.prepare('SELECT * FROM posts ORDER BY id DESC');
  return stmt.all();
}

module.exports = { cadastrarPost, buscarTodosPosts };
