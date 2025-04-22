// #### Объектные типы и словари
// Создайте тип `User`, который содержит:
// * `id` (число)
// * `name` (строка)
// * `email` (строка, необязательное поле)

export type User = {
  id: number
  name: string
  email?: string
}
// Затем создайте словарь `UsersDict`, где ключ — это `id` пользователя, а значение — объект типа `User`.
type UsersDict = {
  [key: User['id']]: User
}
// Напишите функцию `getUserEmail(id: number, users: UsersDict): string | undefined`,
//  которая возвращает email пользователя или `undefined`, если его нет.
function getUserEmail(id: number, users: UsersDict): string | undefined {
  const user = users[id]
  return user.email ? user.email : undefined
}
