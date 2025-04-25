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

/*
function checkPermission(role, status) {
   if (role !== 2  && status !== 2 ) {
        return true;
    }
    return false;
}
 вместо

 var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (exports.UserRole = UserRole = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["Active"] = 0] = "Active";
    AccountStatus[AccountStatus["Suspended"] = 1] = "Suspended";
    AccountStatus[AccountStatus["Banned"] = 2] = "Banned";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
*/
