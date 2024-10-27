import { useEffect, useState } from "react";

interface Pokemon {
  pokedex_id: number;
  name: {
    fr: string;
    en: string;
  };
}

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/pokemon");

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

export default usePokemon;
