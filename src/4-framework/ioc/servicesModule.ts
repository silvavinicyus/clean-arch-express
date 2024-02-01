import {
  IUniqueIdentifierExternalService,
  IUniqueIdentifierExternalServiceToken,
} from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import { UniqueIdentifierExternalService } from '@framework/extServices/uniqueIdentifierService'
import { ContainerModule, interfaces } from 'inversify'

export const servicesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUniqueIdentifierExternalService>(
    IUniqueIdentifierExternalServiceToken
  ).to(UniqueIdentifierExternalService)
})
