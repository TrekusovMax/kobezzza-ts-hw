// #### Обобщённый интерфейс для хранения данных

// Создайте обобщённый интерфейс `Storage<T>` для представления хранилища,
// которое может содержать элементы типа `T`. Интерфейс должен включать метод `add(item: T): void`
// для добавления элемента и метод `getAll(): T[]` для получения всех элементов.
// Реализуйте класс `MemoryStorage<T>`, который реализует этот интерфейс.

export interface Storage<T> {
  add(item: T): void
  getAll(): T[]
}

class MemoryStorage<T> implements Storage<T> {
  private items: T[]
  constructor() {
    this.items = []
  }
  add(item: T): void {
    this.items.push(item)
  }
  getAll(): T[] {
    return this.items
  }
}

const stringStorage = new MemoryStorage<string>()
stringStorage.add('apple')
stringStorage.add('banana')
console.log(stringStorage.getAll()) // ["apple", "banana"]

const numberStorage = new MemoryStorage<number>()
numberStorage.add(42)
numberStorage.add(24)
console.log(numberStorage.getAll()) // ["apple", "banana"]

// Требования:

// * Интерфейс должен использовать типовой параметр `T`.
// * Класс `MemoryStorage` должен поддерживать добавление и получение элементов указанного типа.
// * Продемонстрируйте использование с разными типами данных.
