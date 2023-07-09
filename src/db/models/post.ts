import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface PostAttributes {
    id: number,
    title: string,
    content: string,
    userId: number
}

export interface PostInput extends Optional<PostAttributes, 'id'> {}
export interface PostOutput extends Required<PostAttributes> {}

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {

    public id!: number
    public title!: string
    public content!: string
    public userId!: number

}


Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
    sequelize: sequelize,
    paranoid: true
  }
)

export default Post;