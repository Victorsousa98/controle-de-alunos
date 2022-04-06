const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

//GET:
    router.get('/pessoas', PessoaController.pegarTodasAsPessoas);
    router.get('/pessoas/:id', PessoaController.pegarPessoaPorId);
//POST: 
    router.post('/pessoas', PessoaController.criarPessoa);


module.exports = router;