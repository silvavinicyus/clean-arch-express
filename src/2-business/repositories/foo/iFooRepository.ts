import { ITransaction } from '@business/dtos/transaction/create'
import { IFooEntity } from '@domain/entities/foo'

export const IFooRepositoryToken = Symbol.for('IFooRepositoryToken')

export interface IFooRepository {
  create(input: IFooEntity, trx?: ITransaction): Promise<IFooEntity>
}
