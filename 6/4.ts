// #### Обобщённый метод с ограничением типа

// Создайте класс DataComparer с обобщённым методом `compare<T extends Comparable>(a: T, b: T): number`,
// который сравнивает два объекта типа `T`. Тип `T` должен быть ограничен интерфейсом `Comparable`,
// который требует наличие метода `valueOf(): number`.

// Требования:

// * Определите интерфейс `Comparable` с методом `valueOf(): number`.
// * Метод compare должен возвращать `-1`, `0` или `1` в зависимости от сравнения `a.valueOf()` и `b.valueOf()`.
// * Продемонстрируйте использование с пользовательским классом.

interface Comparable {
  valueOf(): number
}
class DataComparer {
  compare<T extends Comparable>(a: T, b: T): number {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }
}
export class Person implements Comparable {
  constructor(public age: number) {}
  valueOf() {
    return this.age
  }
}

const comparer = new DataComparer()
console.log(comparer.compare(new Person(30), new Person(25))) // 1
console.log(comparer.compare(new Person(30), new Person(42))) // -1
console.log(comparer.compare(new Person(42), new Person(42))) // 0
