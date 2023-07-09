import { Router, Request, Response } from 'express'
import { CreateUserDTO } from '../dto/user.dto'
import * as userController from '../controllers/user'
import { checkCache } from '../../lib/check-cache'

const userRouter = Router()

userRouter.get('/', checkCache, async (req: Request, res: Response) => {
    const results = await userController.getAll()
    return res.status(200).send(results)
})

userRouter.put('/:id', () => {

})

userRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateUserDTO = req.body
    const result = await userController.create(payload)
    return res.status(200).send(result)
})

export default userRouter