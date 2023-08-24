import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from './index';
import DeckModel from './DeckModel';
import CardModel from './CardModel';

class CardInDeckModel extends Model<InferAttributes<CardInDeckModel>, InferCreationAttributes<CardInDeckModel>> {
  declare cardId: number;
  declare deckId: number;
}

CardInDeckModel.init(
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
    modelName: 'cardInDecks',
    timestamps: false,
  }
);

CardInDeckModel.belongsTo(CardModel, { foreignKey: 'cardId' });
CardInDeckModel.belongsTo(DeckModel, { foreignKey: 'deckId'});

export default CardInDeckModel;
