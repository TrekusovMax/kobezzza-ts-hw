type EventList = [string, ...unknown[]][]

type EventDict = Record<string, unknown[]>

type Head<A extends any[]> = A extends [infer H, ...any[]] ? H : never

type Tail<A extends any[]> = A extends [any, ...infer T] ? T : []

type FindEvent<N extends L[number][0], L extends EventList> = L['length'] extends 0
  ? never
  : N extends Head<L>[0]
  ? Tail<Head<L>>
  : FindEvent<N, Tail<L>>

type ResolveEvenst<L extends EventList, R extends EventDict = {}> = L['length'] extends 0
  ? R
  : ResolveEvenst<
      Tail<L>,
      R & { [k in Head<L>[0]]: FindEvent<k, L> } & {
        [k in Head<L>[0] as `on${Capitalize<Head<L>[0]>}`]: [Node, ...FindEvent<k, L>]
      }
    >

class EventEmitter<E extends EventList, Events extends EventDict = ResolveEvenst<E>> {
  declare readonly Events: Events
  #handlers = new Map<string, Set<Function>>()

  on<N extends keyof this['Events']>(event: N, handler: (...a: this['Events'][N]) => void) {
    if (typeof event !== 'string') {
      throw new TypeError('Event name must be a string!')
    }
    if (!this.#handlers.has(event)) {
      this.#handlers.set(event, new Set())
    }
    this.#handlers.get(event)!.add(handler)
  }
  off(event?: keyof this['Events'], handler?: Function) {
    if (event == null) {
      this.#handlers.clear()
      return
    }
    if (typeof event !== 'string') {
      throw new TypeError('Event name must be a string!')
    }
    const handlers = this.#handlers.get(event)

    if (handlers == null) {
      return
    }
    if (handler == null) {
      handlers.clear()
      return
    }
    handlers.delete(handler)
  }
  emit<N extends keyof this['Events']>(event: N, ...args: this['Events'][N]) {
    if (typeof event !== 'string') {
      throw new TypeError('Event name must be a string!')
    }
    if (this.#handlers.has(event)) {
      this.#handlers.get(event)!.forEach((handler) => handler(...(args as any)))
    }
  }
}
type MyEvents = [[`foo.${'click' | 'login'}`, string, { name: string }], ['bar', [number, string]]]

const ee = new EventEmitter<MyEvents>()

type MyE = typeof ee.Events
ee.on('onFoo.click', (a, b, c) => console.log(a, b, c))
