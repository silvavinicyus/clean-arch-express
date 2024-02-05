import { IUniqueIdentifierExternalService } from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import { injectable } from 'inversify'

@injectable()
export class FakeUniqueIdentifierService
  implements IUniqueIdentifierExternalService
{
  create(): string {
    return 'uuid-1234-rfc-4122'
  }
}
