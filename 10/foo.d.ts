declare module '*.png' {
  const file: {
    name: string
    size: number
    path: string
  }
  export = file
}
