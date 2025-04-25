// #### Кортежи с rest-параметрами
// Создайте тип Coordinates:
// * Первые 2 элемента — числа (`latitude`, `longitude`).
// * Остальные элементы (если есть) — строки с названиями ориентиров (`...landmarks: string[]`).
type Coordinates = [
  latitude: number,
  longitude: number,
  ...landmarks: string[],
]
// Напишите функцию:

// Возвращает строку:
// "Широта: {lat}, Долгота: {lon}. Ориентиры: {landmarks.join(', ')}"
// Если ориентиров нет, выводит только координаты
function describeLocation(coords: Coordinates): string {
  let res = `Широта: ${coords[0]}, Долгота: ${coords[1]}.`
  const landmarks = coords.slice(2, coords.length)

  if (landmarks.length) {
    res += ` Ориентиры: ${landmarks.join(', ')}`
  }
  return res
}
console.log(describeLocation([55, 46]))
console.log(describeLocation([42, 15, 'красный клён', 'синий камень']))

