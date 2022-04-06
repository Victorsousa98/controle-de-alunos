const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');


const router = Router();

//GET:
    router.get('/turmas', TurmaController.pegarTodasAsTurmas);
    router.get('/turmas/:id', TurmaController.pegarTurmaPorId);

//POST: 
    router.post('/turmas', TurmaController.criarTurma);

//PUT:
    router.put('/turmas/:id', TurmaController.atualizarTurma);

//DELETE:
    router.delete('/turmas/:id', TurmaController.deletarTurma);


module.exports = router;
