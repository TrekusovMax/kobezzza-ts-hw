// #### Гибридные кортежи
// Создайте кортеж Order:
// * Первый элемент — `id` (строка).
// * Второй — массив товаров (`string[]`).
// * Третий — опциональный статус (`"pending" | "completed"`).
// * Четвертый и далее — дополнительные метаданные `(...meta: [string, any][])`.
type Order = [
  id: string,
  string[],
  status?: 'pending' | 'completed',
  ...meta: [string, any][],
]
// Напишите функцию:
function processOrder(order: Order): string {
  const [id, items, status, ...meta] = order

  let res = `Заказ #${id}. Товары: ${items.join(', ')}. Статус: ${
    status || 'не указан'
  }.`

  if (meta.length) {
    res += ' Meta: '
    const metaInfo = meta.map((m) => m.join(': '))
    res += ` ${metaInfo.join(', ')}`
  }

  return res
}
const order1 = processOrder([
  '1',
  ['Товар 1', 'Товар 2', 'Товар 3'],
  'pending',
])
const order2 = processOrder([
  '2',
  ['Товар 4', 'Товар 5', 'Товар 6'],
  'completed',
  ['Доставка', 'самовывоз'],
  ['Форма оплаты', 'безналичный расчёт'],
])
// Возвращает строку:
// "Заказ #{id}. Товары: {items.join(', ')}. Статус: {status || 'не указан'}"
// Если есть метаданные, добавляет их в конец
console.log(order1)
console.log(order2)
