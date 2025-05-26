// #### Декораторы свойств

// Создайте декораторы для свойств `validate` и `@fromLocalStorage`.
// Декоратор `validate` проверяет значение заданного свойста используя переданную функцию.
// Если значение невалидное, то должно генерироваться исключение.
// Декоратор `fromLocalStorage` пытается загрузить данные для свойства из `localStorage` (если они там есть)
// используя ключ `${имя класса}.${имя свойства}`.

function validate() {}
function fromLocalStorage<This>(
  target: This,
  ctx: ClassFieldDecoratorContext<This>,
) {
  ctx.addInitializer(function () {
    console.log(target)
  })
  return function (
    this: This,
    value: Record<PropertyKey, any>,
  ): { name: string; age: 27 } {
    return { name: 'string', age: 27 }
  }
}

class Example {
  //@validate(({ age }) => typeof age === 'number')
  @fromLocalStorage
  //@ts-ignore
  store: { name: string; age: 27 } = {}
}

new Example()
