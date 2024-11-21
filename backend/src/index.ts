import cors from "cors";
import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route pour les API Pokémon
app.use("/api", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Serveur Node.js en fonctionnement !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
