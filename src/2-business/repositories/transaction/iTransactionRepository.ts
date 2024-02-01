export const ITransactionRepositoryToken = Symbol.for(
  'ITransactionRepositoryToken'
)

export interface ICreateTransaction {
  trx: unknown
  commit: () => Promise<void>
  rollback: () => Promise<void>
}

export interface ITransactionRepository {
  create(): Promise<ICreateTransaction>
}
