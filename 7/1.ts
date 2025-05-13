// #### Вариативность
// Ответь на несколько вопросов:
// 1. Что такое вариативность типов?
// 2. Найди проблему в коде ниже, опиши её и поправь:

//Вариативность – правила описывающие как типы могут заменятся своими надтипами или подтипами

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

export class Foo {
  test(a: B): void {
    a.sayB()
  }
}

export class Foo2 extends Foo {
  test(a: C): void {
    a.sayC()
  }
}

export class Foo3 extends Foo {
  test(a: A): void {
    a.sayA()
  }
}
new Foo().test(new C())
