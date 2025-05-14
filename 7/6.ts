// #### Вариантный контейнер

// Сделайте контейнер `Wrapper2<T1, T2>`, который инвариантен по T1 и ковариантен по T2.

class A {
  sayA() {
    console.log('A')
  }
}

class B extends A {
  sayB() {
    console.log('B')
  }
}

export class C extends B {
  sayC() {
    console.log('C')
  }
}

class Wrapper<in out T1, out T2> {
  constructor(public value1: T1, public value2: T2) {}
}

let a = new Wrapper(new A(), new A())

let b = new Wrapper(new A(), new B())

let c = new Wrapper(new B(), new B())

a = b // Все ок

// @ts-expect-error
a = c
