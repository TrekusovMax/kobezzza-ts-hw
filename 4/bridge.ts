// #### Паттерн Мост — Система рендеринга графики
// Разработайте систему рендеринга графических объектов, используя паттерн Мост для разделения абстракции рендеринга
// и способа вывода (например, SVG, Canvas). Создайте абстрактный класс Renderer и интерфейс RenderImplementation.
// Реализуйте два типа рендеринга: простой (отрисовка базовых фигур) и детализированный (отрисовка с эффектами).
// Требования:
// * Реализуйте мост между абстракцией рендеринга и реализацией вывода.
// * Детализированный рендеринг должен добавлять дополнительные параметры (например, тень или градиент).
// * Обеспечьте возможность смены реализации без изменения клиентского кода.
// PS: реализация важна с точки зрения типов. Фактическую реализацию можно не делать.
interface RenderImplementation {
  shape: string
  drawSVG(): void
  drawCanvas(): void
}
interface AbstactFigure {
  renderer: RenderImplementation
}

class SimpleRender implements RenderImplementation {
  shape: string
  constructor(shape: string) {
    this.shape = shape
  }
  drawCanvas(): void {
    console.log(`Render ${this.shape} in canvas.`)
  }
  drawSVG(): void {
    console.log(`Render ${this.shape} in SVG.`)
  }
}

class DetailRender implements RenderImplementation {
  shape: string
  shadow: string
  constructor(shadow: string, shape: string) {
    this.shadow = shadow
    this.shape = shape
  }
  drawCanvas(): void {
    console.log(
      `Render ${this.shape} in canvas with shadow ${this.shadow}`,
    )
  }
  drawSVG(): void {
    console.log(`Render ${this.shape} in SVG`)
  }
}

class Renderer implements AbstactFigure {
  renderer: RenderImplementation

  constructor(renderer: RenderImplementation) {
    this.renderer = renderer
  }

  drawCanvas(): void {
    this.renderer.drawCanvas()
  }
  drawSVG(): void {
    this.renderer.drawSVG()
  }
}

export const circle = new SimpleRender('circle')
const square = new DetailRender('10', 'square')

const SVGRender = new Renderer(circle)
const CanvasRender = new Renderer(square)

SVGRender.drawSVG()
CanvasRender.drawCanvas()
