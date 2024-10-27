import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Route pour obtenir tous les Pokémon
router.get("/pokemon", (req, res) => {
  const filePath = path.join(__dirname, "../../data/pokemon.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la lecture des données");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

export default router;
