// #### Декораторы свойств

// Создайте декораторы для свойств `validate` и `@fromLocalStorage`.
// Декоратор `validate` проверяет значение заданного свойста используя переданную функцию.
// Если значение невалидное, то должно генерироваться исключение.
// Декоратор `fromLocalStorage` пытается загрузить данные для свойства из `localStorage` (если они там есть)
// используя ключ `${имя класса}.${имя свойства}`.

function validate<T>(validator: (value: T) => boolean) {
  return function <This>(
    _target: undefined,
    ctx: ClassFieldDecoratorContext<This, T>,
  ) {
    const key = `${String(ctx.name)}`
    ctx.addInitializer(function (this: any) {
      if (!validator(this[key])) {
        throw new TypeError(
          `Invalid value for '${String(ctx.name)}': ${JSON.stringify(
            this[key],
          )}`,
        )
      }
    })
  }
}

function fromLocalStorage<This extends { constructor: Function }>(
  _target: undefined,
  ctx: ClassFieldDecoratorContext<This, unknown>,
) {
  return function (this: This) {
    const key = `${this.constructor.name}.${String(ctx.name)}`

    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : undefined
    } catch {
      return undefined
    }
  }
}
class Example {
  @validate(({ age }) => typeof age === 'number')
  @fromLocalStorage
  store: { name: string; age: number } = { name: 'Bob', age: 42 }
}

new Example()
