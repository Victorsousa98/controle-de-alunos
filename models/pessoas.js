'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {//hasmany é um relacionamento de 1 para muitos
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: {status: 'confirmado'},
        as: 'aulasMatriculadas'
      })
    }
  }


  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (value) {
          if (value.length < 3) {
            throw new Error('O nome deve ter pelo menos 3 caracteres');
          }
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email invalido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: {ativo: true}
    },
    scopes: {
      todos: {
        where: {}
      }
    }
  });
  return Pessoas;
};

//usar npx sequelize-cli db:migrate para criar a tabela
//as associações são feitas no models/