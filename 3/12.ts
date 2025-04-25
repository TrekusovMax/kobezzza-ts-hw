// #### Тип never
// Напишите функцию `throwError(message: string): never`, которая выбрасывает ошибку с переданным сообщением.
function throwError(message: string): never {
  throw new Error(message)
}
