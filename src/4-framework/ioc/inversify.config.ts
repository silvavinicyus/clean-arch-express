import { container } from '@shared/ioc/container'
import { sequelize } from '@framework/utils/database'
import { repositoryModule } from './repositoryModule'
import { servicesModule } from './servicesModule'

container.bind('sequelize').toConstantValue(sequelize)

container.load(repositoryModule)
container.load(servicesModule)
