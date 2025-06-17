module.exports = (app) => {
  const { home } = app.controllers;
  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
}; const autenticar = require('../middlewares/autenticador'); // Adicione esta linha

module.exports = (app) => {
  const { home } = app.controllers;

  // Rotas que você já tinha:
  app.get('/', home.index);
  app.post('/entrar', home.login); // Seu login (via POST)
  app.get('/sair', home.logout);   // Seu logout (via GET)

  // --- ADICIONE ESTAS DUAS ROTAS PARA O CHAT ---
  // Rota POST para entrar no chat (usada por formulários)
  app.post('/chat', autenticar, home.chat);

  // Rota GET para acessar a página do chat diretamente (o que resolve "página não existe")
  app.get('/chat', autenticar, home.chat);
  // --- FIM DAS NOVAS ROTAS DO CHAT ---
};