// This class implements the RandomDie GraphQL type
import userService from "../../services/user/user";
class UserInput {
  constructor(
    nombre = "marcos",
    apellido = "perez",
    edad = 0,
    fechaNacimiento = ""
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad || 999;
    this.fechaNacimiento = fechaNacimiento;
  }
}
let users = [];

exports.resolver = {
  Query: {
    getUser: function(root, { id }, context) {
      return userService.getUser(id);
    },
    getUsers(root, { id }, context) {
      return userService.getUsers();
    }
  },
  Mutation: {
    saveUser: function(root, { input }, context) {
      const { nombre, apellido, edad, fechaNacimiento } = input;
      const user = userService.createUser(
        nombre,
        apellido,
        edad,
        fechaNacimiento
      );

      return user;
    }
  }
};
