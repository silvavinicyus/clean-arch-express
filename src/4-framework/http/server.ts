import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { router } from './router/routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(3333, () => {
  console.log('Server started at port 3333!')
})
