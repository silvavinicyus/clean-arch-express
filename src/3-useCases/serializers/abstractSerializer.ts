import { validateSync as exec } from 'class-validator'

export abstract class AbstractSerializer<I> {
  constructor(value: Partial<I>) {
    Object.assign(this, value)
  }

  validate(): void {
    const errors = exec(this)
    if (errors.length > 0) {
      throw errors
    }
  }

  trim(): void {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this || {})) {
      if (typeof value === 'string') {
        Object.defineProperty(this, key, {
          value: value.trim(),
          enumerable: true,
        })
      }
    }
  }
}
