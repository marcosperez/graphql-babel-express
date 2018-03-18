"use strict";

var _graphqlTools = require("graphql-tools");var express = require("express");var graphqlHTTP = require("express-graphql");
var glue = require("schemaglue");var _glue =

glue("src/graphql"),schema = _glue.schema,resolver = _glue.resolver;

var executableSchema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: schema,
  resolvers: resolver });


// The root provides the top-level API endpoints
var app = express();
app.use(
"/graphql",
graphqlHTTP({
  schema: executableSchema,
  graphiql: true }));


app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
//# sourceMappingURL=index.js.map