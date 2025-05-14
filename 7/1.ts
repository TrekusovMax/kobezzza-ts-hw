// #### Вариативность
// Ответь на несколько вопросов:
// 1. Что такое вариативность типов?
// 2. Найди проблему в коде ниже, опиши её и поправь:

// Вариативность – правила описывающие как типы могут заменятся своими надтипами или подтипами
// Проблема в том, что в типах методов аргументы бивариантны. Лечится в TS с помощью интерфейсов,
// которые реализуют классы. И на этом этапе можно увидеть потенциальную ошибку в типах аргуметов.

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
// для проверки типов методов напишем интерфейс Test
interface Test {
  readonly test: (a: B) => void
}

class Foo implements Test {
  test(a: B): void {
    a.sayB()
  }
}

class Foo2 extends Foo implements Test {
  // если не реализовывать интерфейс Test, то вылезет потенциальная ошибка
  // т.к. функция test() контрвариантна по аргументам

  //@ts-expect-error
  test(a: C): void {
    a.sayC()
  }
}

class Foo3 extends Foo implements Test {
  test(a: A): void {
    a.sayA()
  }
}

function foo(a: Foo) {
  a.test(new B())
}

foo(new Foo()) //ошибки нет, в консоли выведет B
foo(new Foo3()) //ошибки нет, в консоли выведет A
foo(new Foo2()) //будет ошибка при запуске
