// #### Паттерн Слуга — Управление задачами
// Разработайте систему управления задачами в проекте, используя паттерн Слуга для выполнения операций над задачами
//  (например, установка приоритета, завершение задачи). Создайте класс Task с приватными полями
// (идентификатор, описание, статус, приоритет) и класс TaskServant, который выполняет операции над задачами,
// такие как изменение статуса или приоритета.
// Требования:
// * Реализуйте TaskServant как слугу, выполняющего операции над объектами Task.
// * Обеспечьте возможность массовой обработки задач (например, завершение всех задач с определенным приоритетом).
// * Используйте инкапсуляцию для защиты данных задачи.
// PS: реализация важна с точки зрения типов. Фактическую реализацию можно не делать.

type TaskPriority = 'low' | 'medium' | 'higth'
type TaskStatus = 'new' | 'in process' | 'closed'

interface NewTask {
  id: number
  description: string
  priority: TaskPriority
}
class Task {
  private id: number
  private description: string
  private status: TaskStatus
  private priority: TaskPriority
  operator = new TaskServant(this)

  getId(): number {
    return this.id
  }

  getDescription(): string {
    return this.description
  }

  getStatus(): TaskStatus {
    return this.status
  }

  getPriority(): TaskPriority {
    return this.priority
  }

  _setStatus(status: TaskStatus): void {
    this.status = status
  }
  _setPriority(priority: TaskPriority): void {
    this.priority = priority
  }

  constructor({ id, description, priority }: NewTask) {
    this.id = id
    this.description = description
    this.status = 'new'
    this.priority = priority
  }
}

class TaskServant {
  constructor(public task: Task) {}

  set setPriority(priority: TaskPriority) {
    this.task._setPriority(priority)
  }
  set setStatus(status: TaskStatus) {
    this.task._setStatus(status)
  }
}
class TaskManager {
  static info(tasksList: Task[]) {
    tasksList.forEach((item) =>
      console.log(`id: ${item.getId()};
      description: ${item.getDescription()};
      status: ${item.getStatus()};
      priority: ${item.getPriority()}`),
    )
  }
  static closeAll(tasksList: Task[]) {
    tasksList.map((item) => {
      item.operator.setStatus = 'closed'
    })
  }
  static closeByPriority(tasksList: Task[], priority: TaskPriority) {
    for (const task of tasksList) {
      if (task.getPriority() === priority) {
        task.operator.setStatus = 'closed'
      }
    }
  }
}

const task1 = new Task({
  id: 1,
  description: 'Задача #1',
  priority: 'low',
})
const task2 = new Task({
  id: 2,
  description: 'Задача #2',
  priority: 'higth',
})
const task3 = new Task({
  id: 3,
  description: 'Задача #3',
  priority: 'medium',
})
const tasksList: Task[] = [task1, task2, task3]

TaskManager.info(tasksList)

task1.operator.setPriority = 'higth'
task1.operator.setStatus = 'in process'
TaskManager.info([task1])

TaskManager.closeByPriority(tasksList, 'higth')
TaskManager.info(tasksList)
