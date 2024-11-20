"use client";

import { usePaginatedPokemon } from "@/hooks/usePokemon";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PokedexPage = () => {
  const router = useRouter();
  const { pokemonList, loading, hasMore, loadMore } = usePaginatedPokemon();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  useEffect(() => {
    if (!loading && pokemonList.length > 0) {
      const container = document.querySelector("#scrollable-container");
      if (container && container.scrollHeight <= container.clientHeight) {
        console.log("Contenu insuffisant, chargement automatique...");
        loadMore();
      }
    }
  }, [pokemonList, loading, hasMore]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

    // Si l'utilisateur atteint le bas, charger plus de Pokémon
    if (scrollHeight - scrollTop <= clientHeight + 10 && hasMore) {
      console.log("Chargement de plus de Pokémon...");
      loadMore();
    }
  };

  return (
    <Box
      id="scrollable-container"
      sx={{ height: "calc(100vh - 64px)", overflow: "auto", padding: 2 }}
      onScroll={handleScroll}
    >
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-around">
        {pokemonList.map((pokemon, i) => (
          <Box
            tabIndex={0}
            role="button"
            key={pokemon.pokedex_id + i}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleClick(pokemon.pokedex_id);
            }}
            sx={{
              width: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleClick(pokemon.pokedex_id)}
          >
            <Image
              src={pokemon.sprites.regular}
              alt={pokemon.name.fr}
              width={200}
              layout="intrinsic"
              height={200}
              style={{ objectFit: "contain" }}
            />
            <Typography>
              N°{pokemon.pokedex_id} {pokemon.name.fr}
            </Typography>
          </Box>
        ))}
      </Box>
      {loading && <Typography>Chargement...</Typography>}
    </Box>
  );
};

export default PokedexPage;
