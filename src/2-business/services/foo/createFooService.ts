import { inject, injectable } from 'inversify'
import {
  IInputCreateFooDto,
  IOutputCreateFooDto,
} from '@business/dtos/foo/create'
import { FooEntity, IInputFooEntity } from '@domain/entities/foo'
import {
  IUniqueIdentifierExternalService,
  IUniqueIdentifierExternalServiceToken,
} from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import {
  IFooRepository,
  IFooRepositoryToken,
} from '@business/repositories/foo/iFooRepository'
import { ITransaction } from '@business/dtos/transaction/create'
import { left, right } from '@shared/either'
import { FooErrors } from '@business/errors/foo'
import { IAbstractService } from '../abstractService'

@injectable()
export class CreateFooService
  implements IAbstractService<IInputCreateFooDto, IOutputCreateFooDto>
{
  constructor(
    @inject(IUniqueIdentifierExternalServiceToken)
    private uniqueIdentifier: IUniqueIdentifierExternalService,
    @inject(IFooRepositoryToken)
    private fooRepository: IFooRepository
  ) {}

  async exec(
    props: IInputFooEntity,
    trx?: ITransaction
  ): Promise<IOutputCreateFooDto> {
    try {
      const fooEntity = FooEntity.create(props)

      const fooResult = await this.fooRepository.create(
        {
          ...fooEntity.value.export(),
          uuid: this.uniqueIdentifier.create(),
        },
        trx
      )

      return right(fooResult)
    } catch (err) {
      console.error(err)
      return left(FooErrors.creationFailed())
    }
  }
}
