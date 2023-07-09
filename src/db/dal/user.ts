import User, { UserInput, UserOutput, UserPost } from '../models/user'
import Post from '../models/post'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload)
    return user
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        throw new Error('not found')
    }
    const updatedIngredient = await (user as User).update(payload)
    return updatedIngredient
}

export const getAll = async (): Promise<UserPost[]> => {
    return User.findAll({include: [Post]})
}