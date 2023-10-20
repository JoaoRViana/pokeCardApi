import { Sequelize } from 'sequelize';
import createdbConfig from './createdbConfig';

const sequelize = new Sequelize(createdbConfig);

async function createDatabase() {
  try {
    await sequelize.query('CREATE DATABASE IF NOT EXISTS pokecard');
    console.log('Banco de dados "pokecard" criado com sucesso.');
  } catch (err) {
    console.error('Erro ao criar o banco de dados "pokecard":', err);
  } finally {
    sequelize.close(); // Feche a conexão do Sequelize
  }
}

createDatabase();
