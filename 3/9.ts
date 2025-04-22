// #### Readonly и деструктуризация
// Объявите readonly кортеж RGB с тремя числами.
type RGB = readonly [number, number, number]
// Напишите функцию:
// Возвращает инвертированный цвет (255 - r, 255 - g, 255 - b)
function invertColor([r, g, b]: RGB): RGB {
  return [255 - r, 255 - g, 255 - b]
}

//Создайте readonly кортеж RGBA на основе RGB + альфа-канал (число, опциональное).
type RGBA = readonly [...RGB, number?]
function invertColorRGBA([r, g, b, alpha]: RGBA): RGBA {
  return [255 - r, 255 - g, 255 - b, alpha]
}

console.log(invertColor([100, 50, 10]))
console.log(invertColorRGBA([200, 75, 82, 0.15]))
