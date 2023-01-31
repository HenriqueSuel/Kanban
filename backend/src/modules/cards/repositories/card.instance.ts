import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../db/config';

interface CardAttributes {
    id: string;
    title: string;
    content: string;
    lista: string
}

export class CardInstance extends Model<CardAttributes> {}

CardInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lista: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: sequelize,
        tableName: 'cards'
    }
)