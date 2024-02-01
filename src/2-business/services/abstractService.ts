export interface IAbstractService<I, O> {
  exec(props: I, ...args: unknown[]): Promise<O>
}
