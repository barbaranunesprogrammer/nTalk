const crypto = require('crypto');

module.exports = (app) => {
    const ChatController = {
        index(req, res) {
            const { sala } = req.query;
            let hashDaSala = sala;
            // Se não houver uma sala na query string, gera um hash MD5 baseado no timestamp
            if (!hashDaSala) {
                const timestamp = Date.now().toString();
                const md5 = crypto.createHash('md5');
                hashDaSala = md5.update(timestamp).digest('hex');
            }
            // Renderiza a vista 'chat/index.ejs' e passa a variável 'sala' para ela.
            // É essencial para que o browser receba a página HTML do chat.
            res.render('chat/index', { sala: hashDaSala });
        }
    };
    return ChatController;
};
