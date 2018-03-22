var express = require("express");
var graphqlHTTP = require("express-graphql");
import { makeExecutableSchema } from "graphql-tools";
import bodyParser from "body-parser";
import { request } from "graphql-request";
const glue = require("schemaglue");
const { schema, resolver } = glue("src/graphql", { ignore: ["**/*.test.js"] });

export function start(done, appPort) {
  const PORT = appPort || 4000;

  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver
  });

  // The root provides the top-level API endpoints
  var app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text({ type: "application/graphql" }));
  app.use(bodyParser.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: executableSchema,
      graphiql: true
    })
  );

  return app.listen(PORT, () => {
    console.log(
      "Server started at port [%s]",
      `http://localhost:${PORT}/graphql`
    );
    if (done) done();
  });
}

export function stop(app, done) {
  console.log("deteniendo servidor GRAPHQL");
  app.close();
  if (done) done();
}

// Funcion para enviar request al server
export function graphqlQuery(app, query) {
  //   return request({
  //     baseUrl: "http://localhost:4000",
  //     uri: "/graphql",
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/graphql"
  //     },
  //     body: {
  //       query: {
  //         query: query
  //       }
  //     },
  //     resolveWithFullResponse: true,
  //     json: true
  //   });

  return request("http://localhost:4000/graphql", query);
}
