import { IError } from '@shared/IError'

export class FooErrors extends IError {
  public static creationFailed(): IError {
    return new FooErrors({
      statusCode: 500,
      body: {
        code: 'FOO-001',
        message: 'Foo creation error',
        shortMessage: 'fooCreationFailed',
      },
    })
  }
}
