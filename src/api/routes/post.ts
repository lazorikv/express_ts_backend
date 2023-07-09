import { Router, Request, Response } from 'express'
import { CreatePostDTO } from '../dto/post.dto'
import * as postController from '../controllers/post'
import { checkCache } from '../../lib/check-cache'

const postRouter = Router()

postRouter.get('/', checkCache, async (req: Request, res: Response) => {
    const results = await postController.getAll()
    return res.status(200).send(results)
})

postRouter.put('/:id', () => {

})

postRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreatePostDTO = req.body
    const result = await postController.create(payload)
    return res.status(200).send(result)
})

export default postRouter