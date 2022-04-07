const dataBase = require('../models');
const Sequelize = require('sequelize');

class PessoaController {

    static async pegarTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await dataBase.Pessoas.scope('todos').findAll();//usa findAll para buscar todos os registros
            return res.status(200).json(todasAsPessoas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async pegarTodasPessoasAtivas(req, res) {
        try{
            const PessoasAtivas = await dataBase.Pessoas.findAll();//usa findAll para buscar todos os registros
            return res.status(200).json(PessoasAtivas);
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

    static async atualizarPessoa(req, res) {
        try{
            const pessoa = await dataBase.Pessoas.update(req.body, {//usa update para atualizar um registro
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

    static async deletarPessoa(req, res) {
        try{
            const pessoa = await dataBase.Pessoas.destroy({//usa destroy para deletar um registro
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

    static async restauraPessoa(req, res) {
        const { id } = req.params;
        try{
            const pessoa = await dataBase.Pessoas.restore({
                where: {
                    id
                }
            });
            return res.status(200).json(pessoa);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    //matricula:
    static async pegaMatriculas(req, res) {
        try{
            const estudanteId = req.params.estudanteId;
            const pessoa = await dataBase.Pessoas.findOne({where: {id: estudanteId}});
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try{
            const matriculas = await dataBase.Matriculas.findAndCountAll({
                where: {
                    turma_id: turmaId,
                    status: 'confirmado'
                },
                limit: 10,
                order: [['estudante_id', 'ASC']]
            });
            return res.status(200).json(matriculas);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2
        try{
            const turmasLotadas = await dataBase.Matriculas.findAndCountAll({
                where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`COUNT(*) >= ${lotacaoTurma}`)
            })
            return res.status(200).json(turmasLotadas.count);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params;
        try{
            dataBase.sequelize.transaction(async (t) => {
                const matricula = await dataBase.Pessoas
                .update({ativo: false}, 
                    {where: {id: estudanteId}},
                    {transaction: t});
            const matriculas = await dataBase.Matriculas
                .update({status: 'cancelado'}, 
                    {where: {estudante_id: estudanteId}},
                    {transaction: t});
    
            return res.status(200).json({message: 'Pessoa cancelada com sucesso'});
            });
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }


    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try{
            const matricula = await dataBase.Matriculas.findOne({
                where: {
                    estudante_id: estudanteId,
                    id: matriculaId
                }
            });
            return res.status(200).json(matricula);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        try{
            const matricula = await dataBase.Matriculas.create({
                estudante_id: estudanteId,
                ...req.body
            });
            return res.status(201).json(matricula);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try{
            const matricula = await dataBase.Matriculas.update(req.body, {
                where: {
                    estudante_id: estudanteId,
                    id: matriculaId
                }
            });
            return res.status(200).json(matricula);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }

    static async deletarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try{
            const matricula = await dataBase.Matriculas.destroy({
                where: {
                    estudante_id: estudanteId,
                    id: matriculaId
                }
            });
            return res.status(200).json(matricula);
        }catch(err){
            return res.status(500).json(
                err.message
            );
        }
    }
}

module.exports = PessoaController;