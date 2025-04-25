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
    color: 'green',
    radius,
    area() {
      return Math.PI * Math.pow(radius, 2)
    },
  }
}
function createRectangle(width: number, height: number): Rectangle {
  return {
    color: 'red',
    height,
    width,
    area() {
      return width * height
    },
  }
}
function calcArea(shape: Shape): number {
  return shape.area()
}

const circle: Circle = createCircle(5)
const rectangle: Rectangle = createRectangle(20, 30)
console.log(calcArea(circle))
console.log(calcArea(rectangle))
