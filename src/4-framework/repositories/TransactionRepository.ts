import { injectable } from 'inversify'
import {
  ITransactionRepository,
  ICreateTransaction,
} from '@business/repositories/transaction/iTransactionRepository'
import { sequelize } from '@framework/utils/database'
import { Transaction } from 'sequelize'

export type ITransaction = Transaction

@injectable()
export class TransactionRepository implements ITransactionRepository {
  async create(): Promise<ICreateTransaction> {
    const trx = await sequelize.transaction()

    return {
      trx,
      commit: () => trx.commit(),
      rollback: () => trx.rollback(),
    }
  }
}
