import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from './index';
import DeckModel from './DeckModel';
import CardModel from './CardModel';

class cardInDeckModel extends Model<InferAttributes<cardInDeckModel>, InferCreationAttributes<cardInDeckModel>> {
  declare cardId: number;
  declare deckId: number;
}

cardInDeckModel.init(
  {
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    deckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    underscored: true,
    modelName: 'cardInDeck',
    timestamps: false,
  }
);

cardInDeckModel.belongsTo(CardModel, { foreignKey: 'cardId', as: 'card' });
cardInDeckModel.belongsTo(DeckModel, { foreignKey: 'deckId', as: 'deck' });

export default cardInDeckModel;
