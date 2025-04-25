//#### Тип для идентификатора
//Создайте тип Identifier, который может быть строкой или числом.
type Identifier = string | number

//#### Тип для доступных операций
//Создайте тип Operations, который бы описывался уникальными символами `Symbol("Read")`, `Symbol("Write")` и `Symbol("Update")`.

const read = Symbol('Read')
const write = Symbol('Write')
const update = Symbol('Update')

type Operations = typeof read | typeof write | typeof update

//#### Тип для массива оценок
//Создайте тип Grades, который описывает массив чисел (оценок).
// Также создайте тип GradeStatus, который может быть `"pass"` или `"fail"`.

type Grades = number[]
type GradeStatus = 'pass' | 'fail'

// #### Тип для функции с перегрузкой
// Создайте тип функции CalculateArea, который описывает функцию, вычисляющую площадь геометрической фигуры в зависимости от переданных параметров:
// * Для круга – принимает один параметр `(radius: number)` и возвращает площадь круга (`number`).
// * Для прямоугольника – принимает два параметра `(width: number, height: number)` и возвращает площадь прямоугольника (`number`).
// * Для треугольника – принимает три параметра `(a: number, b: number, c: number)` и возвращает площадь по формуле Герона (`number`).

function CalculateArea(radius: number): number
function CalculateArea(width: number, height: number): number
function CalculateArea(a: number, b: number, c: number): number

function CalculateArea(a: number, b?: number, c?: number) {
  if (b != undefined && c != undefined) {
    const p = (a + b + c) / 2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
  } else if (b != undefined) {
    return a * b
  } else return Math.PI * a ** 2
}

// #### Тип по строковому шаблону
// Опишите тип, который бы соответствовал шаблону `${любое целое число}${px или %}`.
type Template = `${bigint}${'px' | '%'}`
