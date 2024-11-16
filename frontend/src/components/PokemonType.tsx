import { Type } from "@/models/pokemonModel";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Image from "next/image";

interface PokemonTypeProps {
  pokemonTypes: Type[];
}

export const PokemonType = ({ pokemonTypes }: PokemonTypeProps) => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Typography>Types :</Typography>
      {pokemonTypes.map((type) => (
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
  );
};
