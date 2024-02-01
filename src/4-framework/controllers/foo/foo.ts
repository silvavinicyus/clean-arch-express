import { Router } from 'express'
import { CreateFooController } from './create'

const fooRoutes = Router()

const fooController = new CreateFooController()

fooRoutes.post('/', fooController.handle)

export { fooRoutes }
