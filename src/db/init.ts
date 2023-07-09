import Post from "./models/post";
import User from "./models/user";



 // Определение связей между моделями User и Post
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => Promise.all( [
  User.sync({ alter: isDev }),
  Post.sync({ alter: isDev })
])
export default dbInit 