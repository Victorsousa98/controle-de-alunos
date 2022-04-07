const { Router } = require('express');
const NivelController = require('../controllers/NivelController');


const router = Router();

//GET:
    router.get('/niveis', NivelController.pegaTodosOsNiveis);
    router.get('/niveis/:id', NivelController.pegaNivel);

//POST: 
    router.post('/niveis', NivelController.criaNivel);
    router.post('/niveis/:id/restaura', NivelController.restauraNivel)

//PUT:
    router.put('/niveis/:id', NivelController.atualizaNivel);

//DELETE:
    router.delete('/niveis/:id', NivelController.apagaNivel);


module.exports = router;
