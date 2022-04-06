'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {//hasmany é um relacionamento de 1 para muitos
        foreignKey: 'docente_id',
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true
  });
  return Pessoas;
};

//usar npx sequelize-cli db:migrate para criar a tabela
//as associações são feitas no models/