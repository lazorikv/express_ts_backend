import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'
import { PostOutput } from './post';

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'username'> {}
export interface UserOutput extends Required<UserAttributes> {}
export interface UserPost extends UserOutput {
    Posts?: PostOutput[]
}


class User extends Model<UserAttributes, UserInput> implements UserAttributes {

    public id!: number
    public username!: string
    public email!: string
    public password!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        paranoid: true
      }
)

export default User;