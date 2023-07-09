import { Router, Request, Response } from 'express'
import { CreatePostDTO, UpdatePostDTO } from '../dto/post.dto'
import * as postController from '../controllers/post'
import { checkCache } from '../../lib/check-cache'

const postRouter = Router()

postRouter.get('/', checkCache, async (req: Request, res: Response) => {
    const results = await postController.getAll()
    return res.status(200).send(results)
})

postRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload: UpdatePostDTO = req.body

    const result = await postController.update(id, payload)

    return res.status(200).send(result)
})

postRouter.get(':/id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await postController.getById(id)
    return res.status(200).send(result)
})

postRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreatePostDTO = req.body
    const result = await postController.create(payload)
    return res.status(200).send(result)
})

export default postRouter