"use client";

import { StatsPoke } from "@/components/StatsPoke";
import { usePokemonById } from "@/hooks/usePokemon";
import {
  selectSelectedPokemon,
  setSelectedPokemon,
} from "@/store/reducers/selectedPokemonSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PokemonDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const numericId = id && typeof id === "string" ? Number(id) : 0;

  const selectedPokemon = useAppSelector(selectSelectedPokemon);
  const { pokemon } = usePokemonById(numericId);

  useEffect(() => {
    if (
      pokemon &&
      (!selectedPokemon || selectedPokemon.pokedex_id !== numericId)
    ) {
      dispatch(setSelectedPokemon(pokemon));
    }
  }, [pokemon, selectedPokemon, numericId, dispatch]);

  if (!selectedPokemon) return <></>;

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
        <Typography variant="h2">
          {selectedPokemon.name.fr} N°{selectedPokemon.pokedex_id}
        </Typography>
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
