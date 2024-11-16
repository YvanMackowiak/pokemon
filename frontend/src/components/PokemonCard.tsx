import { Pokemon } from "@/models/pokemonModel";
import { setSelectedPokemon } from "@/store/actions/selectedPokemon.actions";
import { useAppDispatch } from "@/store/store";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Pika from "../assets/pikapika.gif";
import { PokemonSexe } from "./PokemonSexe";

interface PokemonCardProps {
  pokemon: Pokemon | null;
  loading?: boolean;
}

export const PokemonCard = ({ pokemon, loading }: PokemonCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (pokemon) {
      dispatch(setSelectedPokemon(pokemon));
      router.push(`/pokemon/${pokemon.pokedex_id}`);
    }
  };

  if (loading)
    return (
      <Box
        sx={{
          width: 200,
          height: 200,
        }}
      >
        <Image
          src={Pika}
          alt="pikapika"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </Box>
    );

  if (pokemon)
    return (
      <Box
        onClick={handleClick}
        sx={(t) => ({
          border: 1,
          borderColor: "grey.500",
          borderRadius: 4,
          width: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          backgroundColor: t.palette.background.paper,
          ":hover": {
            cursor: "pointer",
            backgroundColor: t.palette.background.default,
          },
        })}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
          }}
        >
          <Image
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography variant="body1">
          N°{pokemon.pokedex_id} {pokemon.name.fr}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography>Types :</Typography>
          {pokemon.types?.map((type) => (
            <Box
              key={type.name}
              sx={{ width: 20, height: 20, position: "relative" }}
            >
              <Image
                src={type.image}
                alt={type.name}
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
        {pokemon.sexe && <PokemonSexe pokemonSexe={pokemon.sexe} />}
      </Box>
    );

  return <></>;
};
