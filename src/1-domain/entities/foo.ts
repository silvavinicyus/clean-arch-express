import { AbstractEntity } from '@domain/abstractEntity'
import { ITimestamps } from '@domain/timestamps'
import { Right, right } from '@shared/either'

interface IFooRelations {}

export interface IFooEntity extends ITimestamps, Partial<IFooRelations> {
  id: number
  uuid: string
  title: string
  content: string
}

export type IInputFooEntity = Pick<IFooEntity, 'title' | 'content'>
export type IFooEntityKeys = Pick<IFooEntity, 'title' | 'id' | 'uuid'>

export class FooEntity extends AbstractEntity<IFooEntity> {
  static create(props: IInputFooEntity): Right<void, FooEntity> {
    const currentDate = new Date()

    const fooEntity = new FooEntity({
      id: undefined,
      uuid: undefined,
      created_at: currentDate,
      updated_at: currentDate,
      ...props,
    })

    return right(fooEntity)
  }

  static update(props: Partial<IFooEntity>): Right<void, FooEntity> {
    const currentDate = new Date()

    const fooEntity = new FooEntity({
      ...props,
      updated_at: currentDate,
    } as IFooEntity)

    return right(fooEntity)
  }
}
