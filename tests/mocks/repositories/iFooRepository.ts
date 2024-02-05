import { IFooRepository } from '@business/repositories/foo/iFooRepository'
import { IFooEntity } from '@domain/entities/foo'
import { injectable } from 'inversify'

@injectable()
export class FakeFooRepository implements IFooRepository {
  async create(_input: IFooEntity): Promise<IFooEntity> {
    return void 0
  }
}

export const fakeFooRepositoryCreate = jest.spyOn(
  FakeFooRepository.prototype,
  'create'
)
