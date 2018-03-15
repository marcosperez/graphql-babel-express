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
let users = [];

export default {
  getUser: function({ index }) {
    return users[index];
  },
  saveUser: function({ input }) {
    console.log(input);
    const { nombre, apellido, edad, fechaNacimiento } = input;
    const user = new User(nombre, apellido, edad, fechaNacimiento);
    users.push(user);
    console.log(JSON.stringify(users));
    return user;
  },
  getUsers({ index }) {
    return users;
  }
};
