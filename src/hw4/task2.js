// Создайте объект user, содержащий поле name со значением ‘John’.
// 2. Создать копию объекта user с именем admin. Добавить новому объекту
// поле role со значением ‘admin’.

const user = {
  name: "John",
};

function deepCopy(obj, role) {
  // eslint-disable-next-line no-param-reassign
  const objAdmin = { ...obj };
  objAdmin.role = role;
  return objAdmin;
}

deepCopy(user, "admin");

module.exports = { deepCopy };
