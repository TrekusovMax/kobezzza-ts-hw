// #### Копирование значений обобщенных контейнеров

// Напишите класс `Wrapper<T>`, который бы сохранял значение `T` внутри публичного свойства `value`.
// Напишите полиморфную функцию `copyFrom(a: Wrapper, b: Wrapper)`, которая бы копировала из `a` в `b`,
// но с корректной проверкой типов.

export class A {
  sayA() {
    console.log('A')
  }
}

export class B extends A {
  sayB() {
    console.log('B')
  }
}

export class C extends B {
  sayC() {
    console.log('C')
  }
}

class Wrapper<T> {
  constructor(public value: T) {}
}

function copyFrom<T extends U, U>(a: Wrapper<T>, b: Wrapper<U>) {
  b.value = a.value
}
const a = new Wrapper(new A())

const b = new Wrapper(new B())

const с = new Wrapper(new C())

// @ts-expect-error
copyFrom(a, b)

copyFrom(b, a) // Все ок

copyFrom(с, b) // Все ок
