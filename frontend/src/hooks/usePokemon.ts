"use client";

import { Pokemon, Sprites } from "@/models/pokemonModel";
import { useEffect, useRef, useState } from "react";

interface PokemonEvolution {
  pokedex_id: number;
  sprites: Sprites;
  condition: string;
}

export interface PokemonEvolutionProps {
  pre: PokemonEvolution[];
  next: PokemonEvolution[];
}

export interface PokemonName {
  id: number;
  name: string;
}

// export const usePokemon = () => {
//   const [pokemon, setPokemon] = useState<Pokemon[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5000/api/pokemon");

//         if (!response.ok) {
//           throw new Error(
//             "Erreur lors de la récupération des données des Pokémon"
//           );
//         }

//         const data = await response.json();
//         setPokemon(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemon();
//   }, []);

//   return { pokemon, loading, error };
// };

export const usePokemonById = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonById = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/pokemon/${id}`);

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du Pokémon");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPokemonById();
    }
  }, [id]);

  return { pokemon, loading, error };
};

export const usePokemonListByIds = (ids: number[]) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const prevIdsRef = useRef<number[]>([]); // Cache les IDs déjà chargés

  useEffect(() => {
    // Évite les appels redondants si les IDs n'ont pas changé
    if (JSON.stringify(prevIdsRef.current) === JSON.stringify(ids)) {
      return;
    }

    // Fonction pour récupérer la liste des Pokémon par ID
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/pokemon/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des Pokémon");
        }

        const data = await response.json();
        setPokemonList(data); // Met à jour la liste des Pokémon récupérés
        prevIdsRef.current = ids; // Met à jour les IDs chargés pour éviter de rappeler la fonction inutilement
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (ids.length > 0 && !loading) {
      fetchPokemonList();
    }
  }, [ids, loading]);

  return { pokemonList, loading, error };
};

export const usePokemonEvolution = (id: number) => {
  const [pokemonEvo, setPokemonEvo] = useState<PokemonEvolutionProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonById = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/pokemon/${id}/evolutions`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du Pokémon");
        }

        const data = await response.json();
        setPokemonEvo(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPokemonById();
    }
  }, [id]);

  return { pokemonEvo, error, loading };
};

export const usePaginatedPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/pokemon/paginated?limit=40&offset=${offset}`
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des Pokémon");
      }

      const data = await response.json();

      setPokemonList((prev) => {
        // Ajouter uniquement les Pokémon qui ne sont pas déjà dans la liste
        const newPokemon = data.data.filter(
          (poke: Pokemon) =>
            !prev.some(
              (existingPoke) => existingPoke.pokedex_id === poke.pokedex_id
            )
        );
        return [...prev, ...newPokemon];
      });

      setHasMore(offset + data.data.length < data.total); // Vérifie s'il reste des Pokémon
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + 40); // Incrémente l'offset pour charger les suivants
    }
  };

  return { pokemonList, loading, hasMore, loadMore };
};

export const usePokemonName = () => {
  const [pokemon, setPokemon] = useState<PokemonName[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/pokemonName");

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données des Pokémon"
          );
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemon, loading, error };
};
