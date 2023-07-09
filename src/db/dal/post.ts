import Post, { PostInput, PostOutput } from '../models/post'


export const create = async (payload: PostInput): Promise<PostOutput> => {
    const post = await Post.create(payload)
    return post
}


export const update = async (id: number, payload: Partial<PostInput>): Promise<PostOutput> => {
    const post = await Post.findByPk(id)
    if (!post) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedPost = await (post as Post).update(payload)
    return updatedPost
}

export const getAll = async (): Promise<PostOutput[]> => {
    return Post.findAll()
}