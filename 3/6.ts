// Перепишите `UserRole` и `AccountStatus` как `const enum`.
// Напишите функцию `checkPermission(role: UserRole, status: AccountStatus): boolean`, которая возвращает:
// * `true`, если роль не `Viewer` и статус не `Banned`
// * `false` во всех остальных случаях
// Прокомментируйте, как `const enum` влияет на итоговый JavaScript-код.

const enum UserRole {
  'Admin',
  'Editor',
  'Viewer',
}

const enum AccountStatus {
  'Active',
  'Suspended',
  'Banned',
}
function checkPermission(role: UserRole, status: AccountStatus): boolean {
  if (role !== UserRole.Viewer && status !== AccountStatus.Banned) {
    return true
  }
  return false
}

console.log(checkPermission(UserRole.Admin, AccountStatus.Active))
console.log(checkPermission(UserRole.Viewer, AccountStatus.Banned))

//const enum уменьшает общее количество кода после компиляции, заменяет значения на константы и при этом
//не создаётся отдельный объект для перечисления
