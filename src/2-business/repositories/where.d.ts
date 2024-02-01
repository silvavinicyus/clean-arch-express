export interface IWhere<C, V> {
  column: C
  value: V
  where?: IWhere<C, V>
}
