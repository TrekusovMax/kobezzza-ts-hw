// #### Декораторы свойств

// Создайте декораторы для свойств `validate` и `@fromLocalStorage`.
// Декоратор `validate` проверяет значение заданного свойста используя переданную функцию.
// Если значение невалидное, то должно генерироваться исключение.
// Декоратор `fromLocalStorage` пытается загрузить данные для свойства из `localStorage` (если они там есть)
// используя ключ `${имя класса}.${имя свойства}`.

/* function validate<T>(validator: (value: T) => boolean) {
  return function<This> (
    target: undefined,
    context: ClassFieldDecoratorContext<This, T>,
  ) {
    const key = Symbol(`${String(context.name)}`)

    return {
      get(this: any) {
        return this[key]
      },
      set(this: any, value: T) {
        if (!validator(value)) {
          throw new Error(
            `Invalid value for '${String(context.name)}': ${JSON.stringify(
              value,
            )}`,
          )
        }
        this[key] = value
      },
      init(initialValue: T) {
        if (!validator(initialValue)) {
          throw new Error(
            `Invalid initial value for '${String(
              context.name,
            )}': ${JSON.stringify(initialValue)}`,
          )
        }
        return initialValue
      },
    }
  }
} */
function validate<T>(validator: (value: T) => boolean) {
  return function <This>(
    target: undefined,
    context: ClassFieldDecoratorContext<This, T>,
  ) {
    const key = Symbol(`${String(context.name)}`)

    return {
      get(this: any) {
        return this[key]
      },
      set(this: any, value: T) {
        if (!validator(value)) {
          throw new Error(
            `Invalid value for '${String(context.name)}': ${JSON.stringify(
              value,
            )}`,
          )
        }
        this[key] = value
      },
      init(initialValue: T) {
        if (!validator(initialValue)) {
          throw new Error(
            `Invalid initial value for '${String(
              context.name,
            )}': ${JSON.stringify(initialValue)}`,
          )
        }
        return initialValue
      },
    }
  }
}

function fromLocalStorage<This>(
  _target: undefined,
  ctx: ClassFieldDecoratorContext<This, unknown>,
) {
  return function (this: This) {
    const key = `${this?.constructor.name}.${String(ctx.name)}`

    /* const data = localStorage.getItem(key)

    try {
      return data ? JSON.parse(data) : { name: 'Max', age: 34 }
    } catch {
      return { name: 'Max', age: 34 }
      } */
    return { name: 'Max', age: 34 }
  }
}
class Example {
  @validate(({ age }) => typeof age === 'number')
  @fromLocalStorage
  store: { name: string; age: number } = { name: 'Max', age: 34 }
}

new Example()
