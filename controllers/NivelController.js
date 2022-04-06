const dataBase = require('../models');

class NivelController{
    static async pegarTodosOsNiveis(req, res) {
        try{
            const todosOsNiveis = await dataBase.Niveis.findAll();//usa findAll para buscar todos os registros
            return res.status(200).json(todosOsNiveis);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async pegarNivelPorId(req, res) {
        try{
            const nivel = await dataBase.Niveis.findOne({//usar findONe para buscar apenas um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(nivel);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async criarNivel(req, res) {
        try{
            const nivel = await dataBase.Niveis.create(req.body);//usa create para criar um registro
            return res.status(201).json(nivel);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async atualizarNivel(req, res) {
        try{
            const nivel = await dataBase.Niveis.update(req.body, {//usa update para atualizar um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(nivel);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async deletarNivel(req, res) {
        try{
            const nivel = await dataBase.Niveis.destroy({//usa destroy para deletar um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(nivel);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }
}

module.exports = NivelController;