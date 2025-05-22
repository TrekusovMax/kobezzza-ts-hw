// #### Декоратор класса: логирование создания экземпляров

// Создайте декоратор для классов `LogClass`, который будет выводить в консоль
// информацию о создании каждого экземпляра класса (имя класса и переданные в конструктор аргументы).
function LogClass<T extends new (...a: any) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      console.log(
        `Creating instance of ${constructor.name} with arguments:`,
        JSON.stringify(args),
      )
      super(...args)
    }
  }
}

@LogClass
class User {
  constructor(public name: string, public age: number) {}
}

const user1 = new User('Alice', 25) // Должно вывести: Creating instance of User with arguments: ["Alice", 25]
const user2 = new User('Bob', 30) // Должно вывести: Creating instance of User with arguments: ["Bob", 30]
