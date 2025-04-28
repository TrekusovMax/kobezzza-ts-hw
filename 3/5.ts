// #### Создание и объединение перечислений
// Объявите два перечисления:
// * `UserRole` с вариантами: `Admin`, `Editor`, `Viewer`;
// * `AccountStatus` с вариантами: `Active`, `Suspended`, `Banned`.
enum UserRole {
  'Admin',
  'Editor',
  'Viewer',
}
enum AccountStatus {
  'Active',
  'Suspended',
  'Banned',
}
// Создайте новый объект `AllRolesAndStatuses`, который объединяет оба перечисления
// с помощью spread-оператора (`...`) и `as const`
// (подсказка: помните про возможность конфликта дискрименанта при объединении).
const AllRolesAndStatuses = {
  ...UserRole,
  ...AccountStatus,
} as const

// На основе этого объекта создайте тип `RoleOrStatus` (подсказка: используйте `keyof typeof`).
type RoleOrStatus = keyof typeof AllRolesAndStatuses
// Напишите функцию `getAccessLevel(value: RoleOrStatus): string`, которая возвращает:
// * `"Full access"` для `Admin` и `Active`;
// * `"Limited access"` для `Editor`;
// * `"No access"` для `Viewer`, `Suspended` и `Banned`.
function getAccessLevel(value: RoleOrStatus): string {
  if (value == 'Active' || value == 'Admin') {
    return 'Full access'
  }
  if (value == 'Editor') {
    return 'Limited access'
  }
  return 'No access'
}

console.log(getAccessLevel('Active'))
console.log(getAccessLevel('Editor'))
console.log(getAccessLevel('Viewer'))
