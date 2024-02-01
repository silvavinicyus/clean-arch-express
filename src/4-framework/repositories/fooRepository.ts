import { IFooRepository } from '@business/repositories/foo/iFooRepository'
import { IFooEntity } from '@domain/entities/foo'
import { injectable } from 'inversify'
import { FooModel } from '@framework/models/foo'
import { ITransaction } from './TransactionRepository'

@injectable()
export class FooRepository implements IFooRepository {
  async create(input: IFooEntity, trx?: ITransaction): Promise<IFooEntity> {
    const fooResult = await FooModel.create(input, {
      transaction: trx,
    })

    return fooResult.get({
      plain: true,
    })
  }
}
