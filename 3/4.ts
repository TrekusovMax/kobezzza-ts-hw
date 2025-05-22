// #### this внутри Interface
// Создайте интерфейс User, который:
// 1. Содержит объект data с полями:
//    * `name` (строка)
//    * `age` (число)
// 2. Имеет свойства верхнего уровня:
//     * name — должно автоматически брать тип из `data.name` через `this`
//     * age — аналогично, из `data.age`

export interface User {
  get name(): this['data']['name']
  get age(): this['data']['age']

  data: {
    readonly name: string
    readonly age: number
  }
}

const user: User = {
  data: {
    name: 'Bob',
    age: 42,
  },
  get name() {
    return this.data.name
  },
  get age() {
    return this.data.age
  },
}

console.log(user.name)
console.log(user.age)
