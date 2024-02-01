import { IWhere } from '@business/repositories/where'

export interface IUpdate<K, V, E> {
  updateWhere: IWhere<keyof K, V>[]
  newData: Partial<E>
}
