import {
  IFooRepository,
  IFooRepositoryToken,
} from '@business/repositories/foo/iFooRepository'
import { FooRepository } from '@framework/repositories/fooRepository'
import { ContainerModule, interfaces } from 'inversify'

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IFooRepository>(IFooRepositoryToken).to(FooRepository)
})
