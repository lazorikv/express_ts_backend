import * as postDal from "../dal/post"
import { PostInput, PostOutput } from '../models/post';


export const create = (payload: PostInput): Promise<PostOutput> => {
    return postDal.create(payload)
}

export const update = (id: number, payload: Partial<PostInput>): Promise<PostOutput> => {
    return postDal.update(id, payload)
}

export const getAll = (): Promise<PostOutput[]> => {
    return postDal.getAll()
}