const dataBase = require('../models/index.js');

class PessoaController {
    static async pegarTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await dataBase.Pessoas.findAll();//usa findAll para buscar todos os registros
            return res.status(200).json(todasAsPessoas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async pegarPessoaPorId(req, res) {
        try{
            const pessoa = await dataBase.Pessoas.findOne({//usar findONe para buscar apenas um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(pessoa);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async criarPessoa(req, res) {
        try{
            const pessoa = await dataBase.Pessoas.create(req.body);//usa create para criar um registro
            return res.status(201).json(pessoa);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }
}

module.exports = PessoaController;