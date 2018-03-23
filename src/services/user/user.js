import User from "../../models/user/user";

let users = [];

export default {
  getUser: id => {
    return users[id];
  },
  getUsers: () => {
    return users;
  },
  createUser: (nombre, apellido, edad, fechaNacimiento) => {
    const user = new User(nombre, apellido, edad, fechaNacimiento);
    users.push(user);
    return user;
  }
};
