import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from './index';
import UserModel from './UserModel';

class DeckModel extends Model<InferAttributes<DeckModel>,
InferCreationAttributes<DeckModel>> {
  declare id: CreationOptional<number>;
  declare name :string;
  declare userId :number;

}
DeckModel.init({
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
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'decks',
  timestamps: false,
});

DeckModel.belongsTo(UserModel,{foreignKey:'user_id'})

export default DeckModel;