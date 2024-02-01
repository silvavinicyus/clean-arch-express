import { injectable } from 'inversify'
import { ValidationError } from 'class-validator'
import { validationError } from '@business/errors/validationErrors'
import { AbstractSerializer } from '../serializers/abstractSerializer'

@injectable()
export abstract class AbstractUseCase<I, O> {
  abstract run(input: I, ...args: unknown[]): Promise<O>

  protected exec(input: AbstractSerializer<I>, trim = true): void {
    try {
      if (trim) {
        input.trim()
      }
      input.validate()
    } catch (error) {
      if (
        error instanceof Array &&
        error.length &&
        error[0] instanceof ValidationError
      ) {
        const validationErrors = error as ValidationError[]

        const constraints = this.getErrorConstrainsts(validationErrors)

        const details = validationErrors.map((err) => ({
          property: err.property,
          value: err.value,
          errors: Object.entries(constraints).map(
            ([, errorMessage]) => errorMessage
          ),
        }))

        console.log(JSON.stringify(details, null, 2))
        throw validationError(details)
      }
      throw error
    }
  }

  private getErrorConstrainsts(errors: ValidationError[]): {
    [type: string]: string
  }[] {
    function getNestedConstraint(error: ValidationError): {
      [type: string]: string
    } {
      return error.constraints
        ? error.constraints
        : getNestedConstraint(error.children[0])
    }
    return errors.map((error) => getNestedConstraint(error))
  }
}
