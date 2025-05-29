declare module 'myModule' {
  export default class User {
    constructor(name: string)
    readonly name: string
  }

  export function say42(): void
}
