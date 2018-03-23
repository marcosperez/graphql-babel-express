export default class User {
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
