import { IInputCreateFooDto } from '@business/dtos/foo/create'
import { FooErrors } from '@business/errors/foo'
import { IUniqueIdentifierExternalServiceToken } from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import { IFooRepositoryToken } from '@business/repositories/foo/iFooRepository'
import { CreateFooService } from '@business/services/foo/createFooService'
import { container } from '@shared/ioc/container'
import { fakeFooEntity } from '@tests/mocks/entities/foo'
import { FakeUniqueIdentifierService } from '@tests/mocks/extServices/uniqueIdentifier'
import {
  FakeFooRepository,
  fakeFooRepositoryCreate,
} from '@tests/mocks/repositories/iFooRepository'

describe('Foo Use Case Tests', () => {
  beforeAll(() => {
    container
      .bind(IUniqueIdentifierExternalServiceToken)
      .to(FakeUniqueIdentifierService)
      .inSingletonScope()
    container.bind(IFooRepositoryToken).to(FakeFooRepository).inSingletonScope()
  })

  afterAll(() => {
    container.unbindAll()
  })

  describe('Create Foo', () => {
    test('Should have success to create a foo', async () => {
      const input: IInputCreateFooDto = {
        content: 'content',
        title: 'new title',
      }

      fakeFooRepositoryCreate.mockImplementationOnce(async () => ({
        ...fakeFooEntity,
        ...input,
      }))

      const sut = container.get(CreateFooService)
      const result = await sut.exec(input)

      expect(result.isLeft()).toBeFalsy()
      expect(result.isRight()).toBeTruthy()
    })

    test('Should fail to create a foo if repository fail', async () => {
      const input: IInputCreateFooDto = {
        content: 'content',
        title: 'new title',
      }

      fakeFooRepositoryCreate.mockImplementationOnce(async () => {
        throw new Error()
      })

      const sut = container.get(CreateFooService)
      const result = await sut.exec(input)

      expect(result.isLeft()).toBeTruthy()
      expect(result.isRight()).toBeFalsy()
      expect(result.value).toEqual(FooErrors.creationFailed())
    })
  })
})
