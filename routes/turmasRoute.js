const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');


const router = Router();

//GET:
    router.get('/turmas', TurmaController.pegaTodasAsTurmas);
    router.get('/turmas/:id', TurmaController.pegaTurma);

//POST: 
    router.post('/turmas', TurmaController.criaTurma);
    router.post('/turmas/:id/restaura', TurmaController.restauraTurma)  

//PUT:
    router.put('/turmas/:id', TurmaController.atualizaTurma);

//DELETE:
    router.delete('/turmas/:id', TurmaController.apagaTurma);


module.exports = router;
