// #### Типизация модуля

// Типизируйте сторонний модуль в своём `.d.ts`

export default class User {
  constructor(name) {
    this.name = name
  }
}

export function say42() {
  console.log(42)
}
