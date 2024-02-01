import { IOrdenationColumn } from '@shared/utils/order'

export interface IInputPaginatedProps<C> {
  paginate?: boolean
  count: number
  page: number
  contains: C
  orders: IOrdenationColumn[]
}
