import { Request, Response, Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const filePath = path.join(__dirname, "../../data/pokemon.json");

router.get("/test", (req: Request, res: Response) => {
  res.send("Route de test fonctionnelle");
});

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

// route pour la pagination
router.get("/pokemon/paginated", (req, res) => {
  const { limit = 40, offset = 0 } = req.query;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erreur lors de la lecture des données");
    }

    const pokemonData = JSON.parse(data);
    const startIndex = parseInt(offset as string, 10);
    const endIndex = startIndex + parseInt(limit as string, 10);

    if (startIndex >= pokemonData.length) {
      return res
        .status(404)
        .json({ error: "Pas de Pokémon disponibles à cette page" });
    }

    const paginatedData = pokemonData.slice(startIndex, endIndex);

    res.json({
      data: paginatedData,
      total: pokemonData.length,
      offset: startIndex,
      limit: parseInt(limit as string, 10),
    });
  });
});

// Route pour obtenir les evolution et pre evolution du pokemon
router.get("/pokemon/:id/evolutions", (req: Request, res: Response) => {
  const { id } = req.params;
  const pokemonId = parseInt(id, 10);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Erreur lors de la lecture des données");
    }

    const pokemonData = JSON.parse(data);

    const pokemon = pokemonData.find(
      (poke: { pokedex_id: number }) => poke.pokedex_id === pokemonId
    );

    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon non trouvé" });
    }

    const evolutions = {
      pre: (pokemon.evolution?.pre || [])
        .map((evo: { pokedex_id: number; condition: string }) => {
          const prePokemon = pokemonData.find(
            (poke: { pokedex_id: number }) => poke.pokedex_id === evo.pokedex_id
          );
          return prePokemon
            ? {
                pokedex_id: prePokemon.pokedex_id,
                sprites: prePokemon.sprites,
                condition: evo.condition,
              }
            : null;
        })
        .filter(Boolean),

      next: (pokemon.evolution?.next || [])
        .map((evo: { pokedex_id: number; condition: string }) => {
          const nextPokemon = pokemonData.find(
            (poke: { pokedex_id: number }) => poke.pokedex_id === evo.pokedex_id
          );
          return nextPokemon
            ? {
                pokedex_id: nextPokemon.pokedex_id,
                sprites: nextPokemon.sprites,
                condition: evo.condition,
              }
            : null;
        })
        .filter(Boolean),
    };

    res.json(evolutions);
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

      const pokemon = pokemonData.find(
        (poke: { pokedex_id: number }) => poke.pokedex_id === parseInt(id, 10)
      );

      if (!pokemon) {
        return res.status(404).json({ error: "Pokémon non trouvé déso" });
      }

      res.json(pokemon);
    }
  });
});

// Route pour obtenir une list de pokemon
router.post("/pokemon/list", (req, res) => {
  const { ids } = req.body;
  // if (!Array.isArray(ids)) {
  //   return res
  //     .status(400)
  //     .json({ error: "Le paramètre 'ids' doit être un tableau" });
  // }
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la lecture des données");
    } else {
      const pokemonData = JSON.parse(data);
      const pokemonList = pokemonData.filter((poke: { pokedex_id: number }) =>
        ids.includes(poke.pokedex_id)
      );
      if (pokemonList.length === 0) {
        return res
          .status(404)
          .json({ error: "Aucun Pokémon trouvé pour les IDs fournis" });
      }
      res.json(pokemonList);
    }
  });
});

// Route pour les id et name
router.get("/pokemonName", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erreur lors de la lecture des données");
    }

    const pokemonData = JSON.parse(data);

    const idsAndNames = pokemonData.map(
      (pokemon: { pokedex_id: number; name: { fr: string } }) => ({
        id: pokemon.pokedex_id,
        name: pokemon.name.fr,
      })
    );

    res.json(idsAndNames);
  });
});

export default router;
