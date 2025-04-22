// #### Наследование интерфейсов
// Создайте базовый интерфейс `Shape`:
// * `color` (строка)
// * `area` (метод, возвращает число)
interface Shape {
  color: string
  area: () => number
}
// Наследуйте от него два интерфейса:
// * `Circle` с дополнительным полем `radius`
// * `Rectangle` с полями `width` и `height`
interface Circle extends Shape {
  radius: number
}
interface Rectangle extends Shape {
  width: number
  height: number
}

// Реализуйте функции:

function createCircle(radius: number): Circle {
  return {
    radius,
    color: 'red',
    area: () => Math.PI * radius ** 2,
  }
}
function createRectangle(width: number, height: number): Rectangle {
  return {
    height,
    width,
    color: 'green',
    area: () => height * width,
  }
}
function calcArea(shape: Shape): number {
  return shape.area()
}
const rect = createRectangle(5, 3)
const circ = createCircle(2)
console.log(calcArea(rect))
console.log(calcArea(circ))
