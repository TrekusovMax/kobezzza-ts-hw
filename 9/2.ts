// #### Декоратор метода: мемоизация

// Создайте декоратор для методов `once`, который будет кешировать первичный вызов метода,
// а далее всегда отдавать его как результат.
export function once<This, T extends (...a: any) => any>(
  target: T,
  ctx: ClassMethodDecoratorContext<This, T>,
) {
  const link = Symbol()

  return function (this: any) {
    return (this[link] ??= target.call(this))
  }
}
export class User {
  @once
  getHashCode() {
    return Math.random()
  }
}

const bob = new User()

console.log(bob.getHashCode()) // Везде одно и тоже значение
console.log(bob.getHashCode())
console.log(bob.getHashCode())
console.log(bob.getHashCode())
