import config from "../../config";
import * as graphqlServer from "../graphql";

describe("A user", function() {
  let app;

  beforeEach(done => {
    app = graphqlServer.start(done, 4001);
  });

  afterEach(done => {
    graphqlServer.stop(app, done);
  });

  it("creacion de usuario", done => {
    const createPost = `mutation {
      saveUser(input: {
          nombre: "marcos", 
          apellido: "gonzaes", 
          edad: 55, 
          fechaNacimiento: "24-07-1229"
        }) {
        id
        nombre
        apellido
        edad
        fechaNacimiento
      }
    }
    `;

    graphqlServer
      .graphqlQuery(app, createPost)
      .then(data => {
        expect(data.saveUser.nombre).toBe("marcos");
        expect(data.saveUser.apellido).toBe("gonzaes");
        expect(data.saveUser.edad).toBe(55);
        expect(data.saveUser.fechaNacimiento).toBe("24-07-1229");
        done();
      })
      .catch(err => {
        console.log(err);
        // Se fuerza el fallo
        expect(err).toBe(null);
        done();
      });
  });
});
