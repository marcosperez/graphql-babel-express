// This class implements the RandomDie GraphQL type
class User {
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
  id() {
    return `${this.nombre}-${this.apellido}`;
  }
}

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
      return users[id];
    },
    getUsers(root, { id }, context) {
      return users;
    }
  },
  Mutation: {
    saveUser: function(root, { input }, context) {
      console.log(input);
      const { nombre, apellido, edad, fechaNacimiento } = input;
      const user = new User(nombre, apellido, edad, fechaNacimiento);
      users.push(user);
      console.log(JSON.stringify(users));
      return user;
    }
  }
};
