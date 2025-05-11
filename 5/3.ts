// #### Приведение типов
// В этом задании вам предстоит поработать с различными способами приведения типов в TypeScript,
// используя `as`, `satisfies` и, для демонстрации, двойной каст через `any`.
//  Цель - понять особенности и риски каждого подхода.

// 1. Определите интерфейсы и классы:

// Создайте интерфейс `Shape` со свойством `type: "circle" | "rectangle"`.
// Создайте интерфейс `Circle` (наследуется от Shape) с дополнительными свойствами:
// `radius: number` и `type: "circle"`.
// Создайте интерфейс `Rectangle` (наследуется от Shape) с дополнительными свойствами:
// `width: number` и `height: number`, `type: "rectangle"`.
// Создайте типы литералов для `ShapeType = "circle" | "rectangle"`.
type ShapeType = 'circle' | 'rectangle'

interface Shape extends Record<PropertyKey, unknown> {
  type: ShapeType
}

interface Circle extends Shape {
  type: 'circle'
  radius: number
}

interface Rectangle extends Shape {
  type: 'rectangle'
  height: number
  width: number
}

// 2. Создайте литеральный объект с satisfies:

// Создайте литеральный объект `myShape` со свойствами, соответствующими `Shape`.
// Используйте `satisfies` для проверки, что объект соответствует `Shape`.
// Постарайтесь создать объект, который должен соответствовать типу `Circle`,
// например, со свойствами, `type: "circle", radius: 5`.
const myShape = {
  type: 'circle',
  radius: 5,
} satisfies Shape

// 3. Ап-каст:
// Создайте переменную `shape: Shape` и присвойте ей значение `myShape`. Это ап-каст (upcasting).
//  Проверьте, что присваивание прошло успешно. Объясните, почему это работает.
const shape: Shape = myShape

// 4. Даун-каст (с as):
// Попробуйте даун-каст (downcasting), присвоив `myShape as Circle` переменной `circle: Circle`.
// Проверьте тип. Объясните, почему даункаст может быть опасен.
let circle: Circle = myShape as Circle

// 5. Даун-каст (с as и проверкой типа):

// Создайте функцию `isCircle(shape: Shape): shape is Circle`, которая возвращает true, если `shape.type === "circle"`.
// Используйте эту функцию, чтобы безопасно произвести даун-каст `shape` к `Circle`, если это возможно.
// Внутри if блока, присвойте `shape` к `circle`.
// Проверьте типы.
function isCircle(shape: Shape): shape is Circle {
  return shape.type === 'circle'
}

if (isCircle(shape)) {
  circle = shape
}

// 6. Двойной каст через `any`:

// Cоздайте переменную `unsafeCircle: Circle` и присвойте ей значение `shape as any as Circle`.
// Поэкспериментируйте с `unsafeCircle`: попытайтесь получить доступ к свойствам `Circle`.
// Объясните, почему использование двойного каста через `any` является плохой практикой.
const unsafeCircle: Circle = shape as any as Circle
