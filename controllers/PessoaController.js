const dataBase = require('../models/index.js');

class PessoaController {
    static async pegarTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await dataBase.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }
}

module.exports = PessoaController;