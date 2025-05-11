// #### Обобщённый интерфейс и класс с условными типами

// Создайте обобщённый интерфейс `Mapper<T, U>` для преобразования данных из типа `T` в тип `U`.
// Реализуйте класс `DataTransformer<T, U>` с методом `transform(data: T): U`,
// который использует переданную функцию преобразования. Добавьте поддержку условных типов,
// чтобы метод `transform` возвращал `null`, если `U` является `null`.

interface Mapper<T, U> {
  transform(data: T): U | null
}
class DataTransformer<T, U> implements Mapper<T, U> {
  constructor(private callback: (data: T) => U) {}

  transform(data: T): U | null {
    if (typeof data === null) {
      return null
    } else return this.callback(data)
  }
}

const toStringTransformer = new DataTransformer<number, string>((num) =>
  num.toString(),
)
console.log(toStringTransformer.transform(42)) // "42"

const toNumberTransformer = new DataTransformer<string, number>((str) =>
  Number(str),
)
console.log(toNumberTransformer.transform('123456'))

const toNullTransformer = new DataTransformer<number, null>(() => null)
console.log(toNullTransformer.transform(42)) // null

// Требования:

// * Интерфейс `Mapper<T, U>` должен определять метод `transform(data: T): U`.
// * Класс `DataTransformer` должен принимать функцию преобразования в конструкторе.
// * Если `U` — `null`, метод `transform` должен возвращать `null`.
// * Продемонстрируйте использование с разными типами, включая случай с `null`.
