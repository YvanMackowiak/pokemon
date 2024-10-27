import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Serveur Node.js en fonctionnement !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
