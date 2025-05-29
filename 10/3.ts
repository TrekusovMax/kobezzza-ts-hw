// #### Типизация модулей по Wildcard
// Типизируйте все модулю с расширением `png`.
import('foo.png').then(({ name, size, path }) => {
  console.log(name, size, path)
})
