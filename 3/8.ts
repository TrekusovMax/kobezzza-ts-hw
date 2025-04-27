// #### Базовые операции с кортежами
// Объявите кортеж `Person` с именованными полями:
// * `name` (строка, обязательное)
// * `age` (число, обязательное)
// * `email` (строка, опциональное)

type Person = [name: string, age: number, email?: string]

// Создайте функцию:
// // Возвращает строку вида "Привет, {name}! Тебе {age} лет."
// // Если есть email, добавляет " Контакты: {email}"

function greet([name, age, email]: Person): string {
  let res = `Привет, ${name}! Тебе ${age} лет.`
  email ? (res += ` Контакты: ${email}`) : ''

  return res
}

console.log(greet(['Max', 34, 'max@mail.ru']))
console.log(greet(['Bob', 42]))

