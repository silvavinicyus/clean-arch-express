import { IUniqueIdentifierExternalService } from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import { v4 } from 'uuid'
import { injectable } from 'inversify'

@injectable()
export class UniqueIdentifierExternalService
  implements IUniqueIdentifierExternalService
{
  create(): string {
    return v4()
  }
}
