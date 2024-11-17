import { PokemonEvolutionProps } from "@/hooks/usePokemon";
import { Box } from "@mui/material";
import Image from "next/image";

interface PokemonEvoProps {
  sprit: string;
  spritEvo: PokemonEvolutionProps;
}

export const PokemonEvo = ({ sprit, spritEvo }: PokemonEvoProps) => {
  return (
    <Box display="flex" gap={1}>
      {spritEvo?.pre?.map((img) => (
        <Image
          key={img.pokedex_id}
          src={img.sprites.regular}
          alt="pikapika"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      ))}
      <Image
        src={sprit}
        alt="pikapika"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
      {spritEvo?.next?.map((img) => (
        <Image
          key={img.pokedex_id}
          src={img.sprites.regular}
          alt="pikapika"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      ))}
    </Box>
  );
};
