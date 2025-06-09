module.exports = function (app) {
    var ContatoController = {
        index: function (req, res) {
            var usuario = req.session.usuario,
                contatos = usuario.contatos
            var params = { // Removido o 's' extra e adicionei 'var' para clareza
                usuario: usuario,
                contatos: contatos
            };
            res.render('contatos/index', params); // Adicionado ponto e vírgula
        },

        create: function (req, res) {
            var contato = req.body.contato,
                usuario = req.session.usuario;
            usuario.contatos.push(contato); // CORRIGIDO: de 'contatos' para 'contato'
            res.redirect('/contatos');
        },
        show: function (req, res) { // Adicionado 'function' para consistência
            var id = req.params.id,
                contato = req.session.usuario.contatos[id],
                params = { contato: contato, id: id };
            res.render('contatos/show', params);
        },
        edit: function (req, res) {
            var id = req.params.id,
                usuario = req.session.usuario,
                contato = usuario.contatos[id], // CORRIGIDO: de 'contato.contatos' para 'usuario.contatos'
                params = {
                    usuario: usuario,
                    contato: contato,
                    id: id
                };
            res.render('contatos/edit', params);
        },
        // FUNÇÃO UPDATE ADICIONADA
        update: function (req, res) {
            var id = req.params.id,
                contato = req.body.contato, // Novo contato do formulário
                usuario = req.session.usuario;

            usuario.contatos[id] = contato; // Atualiza o contato existente
            res.redirect('/contatos');
        },
        destroy: function (req, res) {
            var usuario = req.session.usuario,
                id = req.params.id;
            usuario.contatos.splice(id, 1);
            res.redirect('/contatos');
        }
    };

    return ContatoController;
};