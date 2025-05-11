// #### Обобщённый класс для обработки списков

// Реализуйте обобщённый класс `ListProcessor<T>`, который может обрабатывать списки элементов типа `T`.
// Класс должен включать метод `map<U>(callback: (item: T) => U): ListProcessor<U>`,
// который преобразует элементы списка в новый тип `U` и возвращает новый экземпляр `ListProcessor<U>`.

class ListProcessor<T> {
  private items: T[]
  constructor(items: T[]) {
    this.items = items
  }
  map<U>(callback: (item: T) => U): ListProcessor<U> {
    let elems: U[] = []
    for (const element of this.items) {
      elems.push(callback(element))
    }

    return new ListProcessor(elems)
  }
  getItems(): T[] {
    return this.items
  }
}

const numberList = new ListProcessor([1, 2, 3])
const stringList = numberList.map((num) => num.toString())
console.log(stringList.getItems()) // ["1", "2", "3"]

const newList = stringList.map((item) => item.repeat(2))
console.log(newList.getItems())

// Требования:

// * Класс должен хранить массив элементов типа `T`.
// * Метод map должен быть обобщённым и поддерживать преобразование в новый тип.
// * Добавьте метод `getItems(): T[]` для получения текущих элементов.
// * Продемонстрируйте цепочку вызовов map с разными типами.
