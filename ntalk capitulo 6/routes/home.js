// ntalk capitulo 6/routes/home.js

const autenticar = require('../middlewares/autenticador'); // Esta linha deve estar APENAS aqui no topo

module.exports = (app) => {
  const { home } = app.controllers;

  // Suas rotas principais:
  app.get('/', home.index);
  app.post('/entrar', home.login); // Seu login (via POST)
  app.get('/sair', home.logout);   // Seu logout (via GET)

  // As rotas do CHAT que adicionamos:
  app.post('/chat', autenticar, home.chat); // Rota POST para entrar no chat
  app.get('/chat', autenticar, home.chat);  // Rota GET para acessar a página do chat diretamente
};