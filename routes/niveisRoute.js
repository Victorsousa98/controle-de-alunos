const { Router } = require('express');
const NivelController = require('../controllers/NivelController');


const router = Router();

//GET:
    router.get('/niveis', NivelController.pegarTodosOsNiveis);
    router.get('/niveis/:id', NivelController.pegarNivelPorId);

//POST: 
    router.post('/niveis', NivelController.criarNivel);

//PUT:
    router.put('/niveis/:id', NivelController.atualizarNivel);

//DELETE:
    router.delete('/niveis/:id', NivelController.deletarNivel);


module.exports = router;
