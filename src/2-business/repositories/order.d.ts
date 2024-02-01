export interface IOrder<C = string, O = 'DESC' | 'ASC' | 'RAND'> {
  column?: C
  ordenation: O
}
