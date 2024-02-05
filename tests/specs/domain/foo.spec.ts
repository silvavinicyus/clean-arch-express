import { FooEntity } from '@domain/entities/foo'
import { fakeFooEntity } from '@tests/mocks/entities/foo'

describe('Foo Entity', () => {
  describe('Create', () => {
    test('Should have success to create an entity', () => {
      const fooEntity = FooEntity.create(fakeFooEntity)

      expect(fooEntity.isLeft()).toBeFalsy()
      expect(fooEntity.isRight()).toBeTruthy()
    })
  })

  describe('Update', () => {
    test('Should have success to update an entity', () => {
      const updateFields = {
        ...fakeFooEntity,
        title: 'New Title Update',
        updated_at: new Date(),
      }

      const fooEntity = FooEntity.update(updateFields)

      expect(fooEntity.isLeft()).toBeFalsy()
      expect(fooEntity.isRight()).toBeTruthy()
      expect(fooEntity.value.export().title).toEqual('New Title Update')
    })
  })
})
