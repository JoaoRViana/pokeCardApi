import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from './index';
import UserModel from './UserModel';

class CardModel extends Model<InferAttributes<CardModel>,
InferCreationAttributes<CardModel>> {
  declare id: CreationOptional<number>;
  declare name :string;
  declare userId :number;
  declare attack :number;
  declare hp :number;
  declare spriteOnBoard:string;
  declare spriteOnCard:string;
  declare types:string;
}
CardModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  attack: {
    type: DataTypes.INTEGER,
  },
  hp: {
    type: DataTypes.INTEGER,
  },
  spriteOnBoard: {
    type: DataTypes.STRING
  },
  spriteOnCard: {
    type: DataTypes.STRING
  },
  types:{
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'cards',
  timestamps: false,
});

CardModel.belongsTo(UserModel,{foreignKey:'user_id'})

export default CardModel;