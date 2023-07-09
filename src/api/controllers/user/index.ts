import { UserPost } from '../../../db/models/user'
import * as service from '../../../db/services/user'
import { CreateUserDTO, UpdateUserDTO } from '../../dto/user.dto'
import { User } from '../../interfaces'
import * as mapper from './mapper'


export const create = async(payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.create(payload))
}

export const update = async (id: number, payload: UpdateUserDTO): Promise<User> => {
    return mapper.toUser(await service.update(id, payload))
}

export const getAll = async(): Promise<UserPost[]> => {
    return (await service.getAll()).map(mapper.toUserPost)
}