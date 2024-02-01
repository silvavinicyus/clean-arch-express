import { fooRoutes } from '@framework/controllers/foo/foo'
import { Router } from 'express'

const router = Router()

router.use('/foo', fooRoutes)

export { router }
