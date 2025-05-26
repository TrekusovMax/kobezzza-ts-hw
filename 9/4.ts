// #### Декораторы аксесоров: валидация значений

// Создайте декоратор для аксесоров `validate`, который проверяет значение заданного аксессора
// используя переданную функцию. При попытке установить неверное значение должно генерироваться исключение.

function validate<This, ValueType>(
  validator: (value: ValueType) => boolean,
) {
  return function (
    target: ClassAccessorDecoratorTarget<This, ValueType>,
    ctx: ClassAccessorDecoratorContext<This, ValueType>,
  ): ClassAccessorDecoratorResult<This, ValueType> {
    return {
      get(this: This) {
        return target.get.call(this)
      },
      set(this: This, value: ValueType) {
        if (!validator(value)) {
          throw new Error(
            `Invalid value for '${String(ctx.name)}': ${value}`,
          )
        }
        target.set.call(this, value)
      },
    }
  }
}

function PositiveIngeger(n: number): boolean {
  return Number.isInteger(n) && n > 0
}

export class Example {
  @validate(PositiveIngeger) accessor lvl: number = 1
  //accessor lvl: number = 0 //; вот так тоже ошибка
}

const a = new Example()

a.lvl = 0 // Ошибка
a.lvl = -1 // Ошибка
a.lvl = 2.343 // Ошибка
a.lvl = 3 // Все ок
