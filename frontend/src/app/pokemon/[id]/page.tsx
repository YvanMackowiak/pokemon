"use client";

import { selectSelectedPokemon } from "@/store/reducers/selectedPokemonSlice";
import { useAppSelector } from "@/store/store";
import Box from "@mui/material/Box/Box";

export default function PokemonDetailPage() {
  const selectedPokemon = useAppSelector(selectSelectedPokemon);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {selectedPokemon?.generation}
    </Box>
  );
}
