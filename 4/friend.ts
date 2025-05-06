// #### Дружественный класс — Система управления доступом
// Создайте систему управления доступом, где класс Employee предоставляет доступ к своим приватным данным
// (например, идентификатор, уровень доступа) дружественному классу AccessManager.
// Реализуйте функционал проверки прав доступа и изменения уровня доступа сотрудника.
// Требования:
// * Обеспечьте доступ AccessManager к приватным данным Employee.
// * Реализуйте метод проверки, возвращающий, имеет ли сотрудник доступ к определенному ресурсу.
// * Реализуйте метод изменения уровня доступа с проверкой текущих прав.
// PS: реализация важна с точки зрения типов. Фактическую реализацию можно не делать.

interface AccessEmployee {
  id: Employee['id']
  accessLevel: Employee['accessLevel']
}

const enum AccessLevel {
  low = 'low',
  medium = 'medium',
  hight = 'hight',
}

class Employee {
  private id: number
  private accessLevel: AccessLevel

  constructor(id: number, accessLevel: AccessLevel) {
    this.id = id
    this.accessLevel = accessLevel
  }

  get unsafe(): AccessEmployee {
    return this as unknown as AccessEmployee
  }

  manager = new AccessManager(this)
}

class AccessManager {
  constructor(protected emploee: Employee) {}

  set changeLevel(level: AccessLevel) {
    this.emploee.unsafe.accessLevel = level
  }

  check(level: AccessLevel) {
    return this.emploee.unsafe.accessLevel === level
  }
  changeAccessLevel(newLevel: AccessLevel) {
    if (!this.check(newLevel)) {
      this.emploee.unsafe.accessLevel = newLevel
    } else {
      console.log(`Employee already has '${newLevel}' level!`)
    }
  }
}

const worker = new Employee(1, AccessLevel.low)
const manager = new AccessManager(worker)
manager.changeAccessLevel(AccessLevel.low)
console.log(worker.unsafe.accessLevel)

manager.changeAccessLevel(AccessLevel.medium)
console.log(worker.unsafe.accessLevel)
