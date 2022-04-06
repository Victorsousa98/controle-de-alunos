const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegarTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegarPessoaPorId);

module.exports = router;