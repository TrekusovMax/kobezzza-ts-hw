// #### Декораторы: декларативная обработка событий и ленивые свойства

// Создайте декоратор для методов `on`, который вызывает заданный метод
// при срабатывании некоторого события у геттера `ee` этого же объекта.
// Создайте также геттер `cache` для кеширования значения геттера `ee`.

import { EventEmitter } from 'node:events'

function cache<This, G extends (this: This) => V, V>(
  taget: G,
  ctx: ClassGetterDecoratorContext<This, V>,
) {
  const link = Symbol()
  return function (this: any) {
    return (this[link] ??= taget.call(this))
  }
}

function on(event: string) {
  return function <This, M extends (this: This, ...args: any) => void>(
    m: M,
    ctx: ClassMethodDecoratorContext<This, M>,
  ) {
    ctx.addInitializer(function (this: any) {
      const emitter = this.ee
      emitter.on(event, m.bind(this))
    })

    return m
  }
}

class Example {
  @cache get ee() {
    return new EventEmitter()
  }

  constructor() {
    this.ee.emit('boom')
  }

  @on('boom')
  doSomething() {
    console.log('gotcha!')
  }
}

new Example() // gotcha!
