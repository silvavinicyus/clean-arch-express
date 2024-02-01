import '@framework/ioc/inversify.config'
import { CreateFooUseCase } from '@root/src/3-useCases/operations/foo/create'
import { InputCreateFoo } from '@root/src/3-useCases/serializers/foo/inputCreate'
import { IError } from '@shared/IError'
import { container } from '@shared/ioc/container'
import { Request, Response } from 'express'

export class CreateFooController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const useCase = container.get(CreateFooUseCase)

      const input = new InputCreateFoo({
        content: request.body.content,
        title: request.body.title,
      })

      const foo = await useCase.run(input)

      if (foo.isLeft()) {
        throw foo.value
      }

      return response.status(201).json(foo.value)
    } catch (err) {
      console.error(err)

      if (err instanceof IError) {
        return response.status(err.statusCode).json(err.body)
      }

      return response.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
