var express = require("express");
var graphqlHTTP = require("express-graphql");
import { makeExecutableSchema } from "graphql-tools";
const glue = require("schemaglue");

const { schema, resolver } = glue("src/graphql");

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver
});

// The root provides the top-level API endpoints
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
