import { ICreateTransaction } from '@business/repositories/transaction/iTransactionRepository'
import { Either } from '@shared/either'
import { IError } from '@shared/IError'
import { IServiceOptions } from '@business/dtos/serviceOptions'

export type IOutputCreateTransactionDto = Either<IError, ICreateTransaction>

export type ITransaction = IServiceOptions['transaction']
