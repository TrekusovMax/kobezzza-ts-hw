// #### Типизация глобальных раширений

// Типизируйте заданный код используя `.d.ts` и прямо в файле с объявлением.
export {}
declare global {
  interface Number {
    say42(): void
  }

  var foo: string
}

Number.prototype.say42 = () => {
  console.log(42)
}

globalThis.foo = 'bar'
