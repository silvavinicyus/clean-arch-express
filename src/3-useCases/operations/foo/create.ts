import { IOutputCreateFooDto } from '@business/dtos/foo/create'
import { CreateFooService } from '@business/services/foo/createFooService'
import { inject } from 'inversify'
import { InputCreateFoo } from '../../serializers/foo/inputCreate'
import { AbstractUseCase } from '../abstractOperator'

export class CreateFooUseCase extends AbstractUseCase<
  InputCreateFoo,
  IOutputCreateFooDto
> {
  constructor(
    @inject(CreateFooService)
    private createFoo: CreateFooService
  ) {
    super()
  }

  async run(input: InputCreateFoo): Promise<IOutputCreateFooDto> {
    this.exec(input)

    const foo = await this.createFoo.exec({
      ...input,
    })

    return foo
  }
}
