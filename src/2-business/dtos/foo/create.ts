import { IFooEntity, IInputFooEntity } from '@domain/entities/foo'
import { IError } from '@shared/IError'
import { Either } from '@shared/either'

export type IInputCreateFooDto = IInputFooEntity

export type IOutputCreateFooDto = Either<IError, IFooEntity>
