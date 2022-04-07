const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

//GET:
    router.get('/pessoas', PessoaController.pegarTodasPessoasAtivas);
    router.get('/pessoas/todas', PessoaController.pegarTodasAsPessoas);
    router.get('/pessoas/:id', PessoaController.pegarPessoaPorId);
    //matricula:
        router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
        router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
        router.get('/pessoas/matricula/:turmaId/confirmados', PessoaController.pegaMatriculasPorTurma);

//POST: 
router.post('/pessoas', PessoaController.criarPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
    //matricula:
        router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);

//PUT:
    router.put('/pessoas/:id', PessoaController.atualizarPessoa);
    //matricula:
        router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula);

//DELETE:
    router.delete('/pessoas/:id', PessoaController.deletarPessoa);
    //matricula:
        router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula);   


module.exports = router;