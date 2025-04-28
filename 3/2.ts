// #### Объединение интерфейсов
// Объявите интерфейс `User` с полями:
// * `id` (число)
// * `name` (строка)
interface User {
  id: number
  name: string
}
// Дополните этот же интерфейс (новым объявлением):
// * `email` (строка, необязательное поле)
// * `logIn` (метод, возвращает void)
interface User {
  email?: string
  logIn: () => void
}
// Создайте объект, соответствующий полному интерфейсу `User`, и напишите функцию:
const user: User = {
  id: 1,
  name: 'Max',
  email: 'max@mail.ru',
  logIn: () => {
    console.log(`Login!`)
  },
}
// Выводит информацию о пользователе
// Если email есть - включает его в вывод
// Вызывает user.logIn()
function printUser(user: User): void {
  console.log(
    `Name: ${user.name}. Id: ${user.id}. ${
      user.email ? 'Email: ' + user.email : ''
    }`,
  )
  user.logIn()
}
printUser(user)
