export const IUniqueIdentifierExternalServiceToken = Symbol.for(
  'IUniqueIdentifierExternalServiceToken'
)

export interface IUniqueIdentifierExternalService {
  create(): string
}
