import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Chemin vers le fichier JSON des Pokémon
const filePath = path.join(__dirname, "../../data/pokemon.json");

// Route pour obtenir tous les Pokémon
router.get("/pokemon", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la lecture des données");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Nouvelle route pour obtenir un Pokémon spécifique par son id
router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la lecture des données");
    } else {
      const pokemonData = JSON.parse(data);

      // Recherche du Pokémon par son id
      const pokemon = pokemonData.find(
        (poke: { pokedex_id: number }) => poke.pokedex_id === parseInt(id, 10)
      );

      // Vérifie si le Pokémon a été trouvé
      if (!pokemon) {
        return res.status(404).json({ error: "Pokémon non trouvé" });
      }

      // Renvoie le Pokémon trouvé
      res.json(pokemon);
    }
  });
});

export default router;