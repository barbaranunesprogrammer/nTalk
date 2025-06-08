// app/controllers/home.js
module.exports = function () {
    var HomeController = {
        index: function (req, res) { // Esta função 'index' está definida aqui.
            res.render('home/index');
        }
    };
    return HomeController; // E o objeto HomeController é retornado.
};