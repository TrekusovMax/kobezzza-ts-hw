// #### Ковариантный контейнер

// Сделайте контейнер `Wrapper` из прошлого задания ковариантным.

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

class C extends B {
  sayC() {
    console.log('C')
  }
}

let a = new Wrapper(new A())

let b = new Wrapper(new B())

let c = new Wrapper(new C())

a = b // Все ок

// @ts-expect-error
c = b
