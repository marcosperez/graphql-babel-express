var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = importSchema("./src/schemas/User.graphql");
import userResolver from "./src/resolvers/User";

const schema = makeExecutableSchema({ typeDefs });

// The root provides the top-level API endpoints
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: userResolver,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
