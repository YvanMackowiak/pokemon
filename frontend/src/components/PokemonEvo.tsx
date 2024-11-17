import { PokemonEvolutionProps } from "@/hooks/usePokemon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PokemonEvoProps {
  sprit: string;
  spritEvo: PokemonEvolutionProps;
}

export const PokemonEvo = ({ sprit, spritEvo }: PokemonEvoProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      {spritEvo?.pre?.map((img) => (
        <>
          <Image
            onClick={() => handleClick(img.pokedex_id)}
            key={img.pokedex_id}
            src={img.sprites.regular}
            alt="pikapika"
            width={200}
            height={200}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
          <ArrowForwardIosIcon />
        </>
      ))}
      <Image
        src={sprit}
        alt="pikapika"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
      {spritEvo?.next?.map((img) => (
        <>
          <ArrowForwardIosIcon />
          <Image
            onClick={() => handleClick(img.pokedex_id)}
            key={img.pokedex_id}
            src={img.sprites.regular}
            alt="pikapika"
            width={200}
            height={200}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </>
      ))}
    </Box>
  );
};
