// #### this внутри Interface
// Создайте интерфейс User, который:
// 1. Содержит объект data с полями:
//    * `name` (строка)
//    * `age` (число)
// 2. Имеет свойства верхнего уровня:
//     * name — должно автоматически брать тип из `data.name` через `this`
//     * age — аналогично, из `data.age`

interface User {
  name: this['data']['name']
  age: this['data']['age']

  readonly data: {
    name: string
    age: number
  }
}

const user: User = {
  data: {
    name: 'Bob',
    age: 42,
  },
  name: 'Max',
  age: 34,
}

console.log(user.name)
console.log(user.age)
