// #### Пересечение типов
// Создайте два типа:
// * `Employee` (с полями `id: number` и `department: string`)
// * `Manager` (с полями `teamSize: number` и `role: string`)
type Employee = {
  id: number
  department: string
}
type Manager = {
  teamSize: number
  role: string
}

// Создайте тип `TeamLead`, который является пересечением Employee и Manager. Затем создайте объект этого типа.
type TeamLead = Employee & Manager

const lead: TeamLead = {
  id: 100,
  role: 'TeamLead',
  department: 'Development',
  teamSize: 10,
}
