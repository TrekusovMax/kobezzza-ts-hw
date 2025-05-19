// #### Функция для добавления this аргумента функции с учетом перегрузок (до 4-х перегрузок).

function sum(a: number, b: number): number
function sum(a: bigint, b: bigint): bigint

function sum(a: any, b: any) {
  return a + b
}

type AddThisParameter<T, U> = T extends {
  (...args: infer A1): infer R1
  (...args: infer A2): infer R2
  (...args: infer A3): infer R3
  (...args: infer A4): infer R4
}
  ? {
      (this: U, ...args: A1): R1
      (this: U, ...args: A2): R2
      (this: U, ...args: A3): R3
      (this: U, ...args: A4): R4
    }
  : T extends {
      (...args: infer A1): infer R1
      (...args: infer A2): infer R2
      (...args: infer A3): infer R3
    }
  ? {
      (this: U, ...args: A1): R1
      (this: U, ...args: A2): R2
      (this: U, ...args: A3): R3
    }
  : T extends {
      (...args: infer A1): infer R1
      (...args: infer A2): infer R2
    }
  ? {
      (this: U, ...args: A1): R1
      (this: U, ...args: A2): R2
    }
  : T extends (...args: infer A1) => infer R1
  ? (this: U, ...args: A1) => R1
  : never

// { (this: object, a: number, b: number): number; (this: object, a: bigint, b: bigint): bigint }
type ThisSum = AddThisParameter<typeof sum, object>
