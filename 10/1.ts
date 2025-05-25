// #### Брендированные типы

// Создайте систему типов для задания метров и километров.
// Типы не должны иметь цены в Runtime, а также быть защищены от неявного приведения из простых типов.
// Создайте фабрики и гуарды для работы с этими типами.

declare const KmTag: unique symbol
type Km = number & { [KmTag]: void }

function setDistance(km: Km) {
  console.log(km)
}
function km(distance: number): Km {
  if (distance < 0) {
    throw new TypeError('Invalid distance')
  }
  return distance as Km
}
setDistance(km(100))
