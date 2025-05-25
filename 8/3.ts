// #### Суммирование и вычитание отрицательных чисел

// Доработает функции Add и Sub из лекции, чтобы они могли принимать отрицательные числа.
type Length<A extends any[]> = A['length'] extends number
  ? A['length']
  : never

type IsNegative<T extends number> = `${T}` extends `-${number}`
  ? true
  : false

type BuildTuple<
  L extends number,
  R extends any[] = [],
> = Length<R> extends L ? R : BuildTuple<L, [...R, any]>

type Negate<N extends number> = N extends 0
  ? 0
  : `-${N}` extends `${infer V extends number}`
  ? V
  : `${N}` extends `-${infer V extends number}`
  ? V
  : never

// модуль числа
type Abs<T extends number> = `${T}` extends `-${infer U extends number}`
  ? U
  : T

type Sub<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...infer R,
]
  ? Length<R>
  : BuildTuple<B> extends [...BuildTuple<A>, ...infer R]
  ? Negate<Length<R>>
  : 0

type Add<A extends number, B extends number> = Negate<A> extends B
  ? 0
  : IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? Negate<Length<[...BuildTuple<Abs<A>>, ...BuildTuple<Abs<B>>]>>
    : never
  : Length<[...BuildTuple<A>, ...BuildTuple<B>]>

export const a1: Add<-5, -3> = -8
export const a2: Add<5, -5> = 0

export const a3: Sub<-5, -3> = -2
export const a4: Sub<-5, 3> = -8
