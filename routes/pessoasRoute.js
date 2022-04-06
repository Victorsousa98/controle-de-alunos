const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

//GET:
    router.get('/pessoas', PessoaController.pegarTodasAsPessoas);
    router.get('/pessoas/:id', PessoaController.pegarPessoaPorId);

//POST: 
    router.post('/pessoas', PessoaController.criarPessoa);

//PUT:
    router.put('/pessoas/:id', PessoaController.atualizarPessoa);

//DELETE:
    router.delete('/pessoas/:id', PessoaController.deletarPessoa);


module.exports = router;