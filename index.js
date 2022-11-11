const express = require("express");
const server = express();
const db = require("./src/queries");

server.use(express.json());

server.listen(7000, () => {
  console.log("Server online na porta 7000");
});

server.get("/carros", db.getCarros);
server.get("/carro/:id", db.getCarroById);
server.post("/carro", db.createCarro);
server.put("/carro/:id", db.updateCarro);
server.delete("/carro/:id", db.deleteCarro);

server.get("/", (req, res) => {
  return res.json({ info: "Node.js, Express, and Postgres API" });
});
