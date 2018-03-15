var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = importSchema("./src/schemas/User.graphql");
const resolvers = {};

const schema = makeExecutableSchema({ typeDefs, resolvers });

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
// The root provides the top-level API endpoints
var root = {
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

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
