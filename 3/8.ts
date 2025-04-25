// #### Базовые операции с кортежами
// Объявите кортеж `Person` с именованными полями:
// * `name` (строка, обязательное)
// * `age` (число, обязательное)
// * `email` (строка, опциональное)
// Создайте функцию:

type Person = [name: string, age: number, email?: string]

// // Возвращает строку вида "Привет, {name}! Тебе {age} лет."
// // Если есть email, добавляет " Контакты: {email}"
function greet(person: Person): string {
  let res = `Привет, ${person[0]}! Тебе ${person[1]} лет.`
  person[2]?.length ? (res += ` Контакты: ${person[2]}`) : ''

  return res
}

console.log(greet(['Max', 34, 'max@mail.ru']))
console.log(greet(['Bob', 42]))
