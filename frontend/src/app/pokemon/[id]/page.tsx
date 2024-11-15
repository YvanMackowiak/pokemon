"use client";

import { StatsPoke } from "@/components/StatsPoke";
import { selectSelectedPokemon } from "@/store/reducers/selectedPokemonSlice";
import { useAppSelector } from "@/store/store";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Image from "next/image";

export default function PokemonDetailPage() {
  const selectedPokemon = useAppSelector(selectSelectedPokemon);

  if (!selectedPokemon) return <></>;
  console.log(selectedPokemon);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        src={selectedPokemon.sprites.regular}
        alt="pikapika"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">{selectedPokemon.name.fr}</Typography>
        <Typography variant="h3">{selectedPokemon.name.jp}</Typography>
      </Box>
      {selectedPokemon.stats && (
        <Box width="500px" height="500px">
          <StatsPoke
            stats={selectedPokemon.stats}
            name={selectedPokemon.name.fr}
          />
        </Box>
      )}
    </Box>
  );
}
