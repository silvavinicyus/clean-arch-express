import { FooErrors } from '@business/errors/foo'
import { IUniqueIdentifierExternalServiceToken } from '@business/extServices/uniqueIdentifier/iUniqueIdentifier'
import { IFooRepositoryToken } from '@business/repositories/foo/iFooRepository'
import { CreateFooService } from '@business/services/foo/createFooService'
import { CreateFooUseCase } from '@root/src/3-useCases/operations/foo/create'
import { InputCreateFoo } from '@root/src/3-useCases/serializers/foo/inputCreate'
import { left, right } from '@shared/either'
import { container } from '@shared/ioc/container'
import { fakeFooEntity } from '@tests/mocks/entities/foo'
import { FakeUniqueIdentifierService } from '@tests/mocks/extServices/uniqueIdentifier'
import { FakeFooRepository } from '@tests/mocks/repositories/iFooRepository'

describe('Create Foo Use Case', () => {
  beforeAll(() => {
    container
      .bind(IUniqueIdentifierExternalServiceToken)
      .to(FakeUniqueIdentifierService)
      .inSingletonScope()
    container.bind(IFooRepositoryToken).to(FakeFooRepository).inSingletonScope()
    container.bind(CreateFooService).toSelf().inSingletonScope()
  })

  afterAll(() => {
    container.unbindAll()
  })

  test('Should fail to create a foo if service failed', async () => {
    const input = new InputCreateFoo({
      content: 'new content',
      title: 'new title',
    })

    const service = container.get(CreateFooService)
    jest
      .spyOn(service, 'exec')
      .mockReturnValueOnce(
        Promise.resolve(right({ ...fakeFooEntity, ...input }))
      )

    const sut = container.get(CreateFooUseCase)
    const result = await sut.run(input)

    expect(result.isLeft()).toBeFalsy()
    expect(result.isRight()).toBeTruthy()
  })

  test('Should create a foo', async () => {
    const input = new InputCreateFoo({
      content: 'new content',
      title: 'new title',
    })

    const service = container.get(CreateFooService)
    jest
      .spyOn(service, 'exec')
      .mockReturnValueOnce(Promise.resolve(left(FooErrors.creationFailed())))

    const sut = container.get(CreateFooUseCase)
    const result = await sut.run(input)

    expect(result.isLeft()).toBeTruthy()
    expect(result.isRight()).toBeFalsy()
    expect(result.value).toEqual(FooErrors.creationFailed())
  })
})
