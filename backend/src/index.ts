import cors from "cors";
import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes";

const app = express();
const PORT = 5000;

app.use(cors()); // Activer CORS pour toutes les requêtes

// Route de test
app.get("/", (req, res) => {
  res.send("Serveur Node.js en fonctionnement ou pas !");
});

// Utilisation de la route Pokémon
app.use("/api", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
