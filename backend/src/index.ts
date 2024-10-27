import cors from "cors";
import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes"; // Importe ton fichier de routes Pokémon

const app = express();
const PORT = 5000;

app.use(cors()); // Autorise les requêtes Cross-Origin
app.use(express.json()); // Middleware pour parser le JSON

// Route pour les API Pokémon
app.use("/api", pokemonRoutes); // Préfixe "/api" pour toutes les routes de `pokemonRoutes`

app.get("/", (req, res) => {
  res.send("Serveur Node.js en fonctionnement !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
