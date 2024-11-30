var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.get("/contagem", function (req, res) {
    votacaoController.contarVotos(req, res);
});

router.get("/contarvotos", function (req, res) {
    votacaoController.contarTotalVotos(req, res);
});

module.exports = router;