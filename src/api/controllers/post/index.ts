import * as service from '../../../db/services/post'
import { CreatePostDTO, UpdatePostDTO } from '../../dto/post.dto'
import { Post } from '../../interfaces'
import * as mapper from './mapper'


export const create = async(payload: CreatePostDTO): Promise<Post> => {
    return mapper.toPost(await service.create(payload))
}

export const update = async (id: number, payload: UpdatePostDTO): Promise<Post> => {
    return mapper.toPost(await service.update(id, payload))
}

export const getAll = async(): Promise<Post[]> => {
    return (await service.getAll()).map(mapper.toPost)
}