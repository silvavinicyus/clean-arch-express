type IOrder = 'DESC' | 'ASC' | 'RAND'

export interface IOrdenationColumn {
  ordenation: IOrder
  column: string
}
