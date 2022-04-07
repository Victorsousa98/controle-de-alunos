const dataBase = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TurmaController{
    static async pegarTodasAsTurmas(req, res) {
        const {data_inicial, data_final} = req.query;
        const where = {};
        data_inicial || data_final ? where.data_inicio = {[Op.between]: [data_inicial, data_final]} : null;
        
        try{
            const todasAsTurmas = await dataBase.Turmas.findAll({where});//usa findAll para buscar todos os registros
            return res.status(200).json(todasAsTurmas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

 

    static async pegarTurmaPorId(req, res) {
        try{
            const turma = await dataBase.Turmas.findOne({//usar findONe para buscar apenas um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(turma);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async criarTurma(req, res) {
        try{
            const turma = await dataBase.Turmas.create(req.body);//usa create para criar um registro
            return res.status(201).json(turma);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async atualizarTurma(req, res) {
        try{
            const turma = await dataBase.Turmas.update(req.body, {//usa update para atualizar um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(turma);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async deletarTurma(req, res) {
        try{
            const turma = await dataBase.Turmas.destroy({//usa destroy para deletar um registro
                where: {
                    id: req.params.id//busca o id passado na url
                }
            });
            return res.status(200).json(turma);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }
}

module.exports = TurmaController;