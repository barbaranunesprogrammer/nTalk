// ntalk capitulo 6/controllers/home.js

module.exports = (app) => {
    const HomeController = {
        index: (req, res) => {
            const { usuario } = req.session;
            res.render('home/index', { usuario });
        },

        login: (req, res) => {
            // ... (seu código existente para a função login)
            const { usuario } = req.body;
            if (usuario.nome && usuario.senha) {
                if (usuario.nome === usuario.senha) {
                    req.session.usuario = usuario;
                    res.redirect('/contatos');
                } else {
                    res.redirect('/');
                }
            } else {
                res.redirect('/');
            }
        },

        logout: (req, res) => {
            // ... (seu código existente para a função logout)
            req.session.destroy();
            res.redirect('/');
        },

        // !!! ADICIONE ESTA FUNÇÃO para lidar com a página do chat !!!
        chat: (req, res) => {
            const { usuario } = req.session;
            // Esta função agora será chamada tanto pelo POST (entrar na sala) quanto pelo novo GET (acesso direto)
            res.render('chat/index', { usuario });
        }
    };
    return HomeController;
};