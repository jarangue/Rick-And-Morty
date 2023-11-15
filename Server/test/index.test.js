
const app = require("../Src/App");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
   
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
  });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
  
    const response = (await agent.get("/rickandmorty/character/1")).body;
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("name");
    expect(response).toHaveProperty("species");
    expect(response).toHaveProperty("gender");
    expect(response).toHaveProperty("status");
    expect(response).toHaveProperty("origin");
    expect(response).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
   
    await agent.get("/rickandmorty/character/999999").expect(500);
    });

  describe("GET /rickandmorty/login", () => {
   
    it("La informacion del login es correcta", async () => {
      const response = (
        await agent.get(
          `/rickandmorty/login?email=ejemplo@gmail.com&password=javier123`
        )
      ).body;
      expect(response.access).toEqual(true);
    });
    
    it("La informacion del login es incorrecta", async () => {
      const response = (
        await agent.get(
          `/rickandmorty/login?email=sdasdjlajs&password=nkjsdkfnsjnlas`
        )
      ).body;
      expect(response.access).toEqual(false);
    });

  
    describe("POST /rickandmorty/fav", () => {
      const char1 = { id: "1", name: "Javier" };
      const char2 = { id: "2", name: "Lucas" };

      it("Devuelve el elemento arreglo", async () => {
        const response = (await agent.post("/rickandmorty/fav").send(char1))
        
        expect(response.body).toContainEqual(char1);
      });
      it("Devuelve un elemento enviado previamente enviado.", async () => {
        const response = (await agent.post("/rickandmorty/fav").send(char2));
        expect(response.body).toContainEqual(char1);
        expect(response.body).toContainEqual(char2);
      });
    });
   

    describe("DELETE /rickandmorty/fav/:id", () => {
      const char1 = { id: "1", name: "Javier" };   
      const char2 = { id: "2", name: "Lucas" };

      it("Devuelve el arreglo si no se elimina ningun persona", async () => {
        const response = (await agent.delete("/rickandmorty/fav/98").send(char1))
        expect(response.body).toContainEqual(char1);
        expect(response.body).toContainEqual(char2);
      });
      it("Elimina correctamente un personaje pasado por ID", async () => {
        const response = (await agent.delete("/rickandmorty/fav/1"));
        expect(response.body).not.toContainEqual(char1);
        // expect(response.body).toContainEqual(char2);
      });
    });
  });
});