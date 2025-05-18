// #### Функция выведения типа внутри Iterable

// Напишите функции для выведения типов внутри контенера Iterable, AsyncIterable и любого Iterable объекта.

async function* gen() {
  yield* [1, 'Foo', 3, 4]
}

// AnyIterableType<ReturnType<typeof gen>> даст number | string
// AnyIterableType<"foo"> даст string
type AnyIterableType<T> = T extends AsyncIterable<infer V>
  ? V
  : T extends Iterable<infer V>
  ? V
  : never

const anyIter1: AnyIterableType<ReturnType<typeof gen>> = ''
const anyIter2: AnyIterableType<ReturnType<typeof gen>> = 3
const anyIter3: AnyIterableType<'foo'> = ''

// AsyncIterableType<ReturnType<typeof gen>> даст number | string
type AsyncIterableType<T> = T extends AsyncIterable<infer V> ? V : never

const asyncIter1: AsyncIterableType<ReturnType<typeof gen>> = 'Foo'
const asyncIter2: AsyncIterableType<ReturnType<typeof gen>> = 1

// IterableType<Set<boolean>> даст boolean
type IterableType<T> = T extends Iterable<infer V> ? V : never
let iter: IterableType<Set<boolean>> = true
