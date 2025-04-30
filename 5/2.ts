// #### Отображения объектов
// Сойздайте тип RenamedForm на основе заданного интерфейса:

// Требования:

// * Переименовывает свойства интерфейса Form в новые имена с префиксом form (например, name → formName).
// * Ограничивает значения свойств, чтобы они были либо строками, либо undefined, используя extends.
// * Уберите модификатор `readonly`.

interface Form {
  readonly name: string
  readonly email: string
  readonly age: number
}

type RenamedForm = {
  -readonly [K in keyof Form as `form${Capitalize<K>}`]: Form[K] extends
    | string
    | undefined
    ? Form[K]
    : string | undefined
}
