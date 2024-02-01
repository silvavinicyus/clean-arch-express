import { IOrder } from '@business/repositories/order'
import { IRelation } from '@business/repositories/relation'
import { IWhere } from '@business/repositories/where'

export interface IPagination {
  count: number
  page: number
}

export interface IContainsOptions<C, V> {
  column: C
  value: V
}

export interface IFilter<C = unknown, V = string> {
  contains?: IContainsOptions<C, V>[]
  containsLike?: IContainsOptions<C, V>[]
  where?: IWhere<C, V>[]
}

export interface IServiceOptions<FC = unknown, FV = string> {
  transaction?: unknown
  pagination?: IPagination | null
  filters?: IFilter<FC, FV>
  relations?: IRelation<string, unknown>[]
  orders?: IOrder[]
}

export interface IPaginatedResponse<T = unknown> {
  count: number
  page: number
  perPage: number
  items: T[]
}
