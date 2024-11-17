"use client";

import { Box, Typography } from "@mui/material";

const PokedexPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pokedex
      </Typography>
      <Typography variant="body1">
        Bienvenue dans le Pokedex. Vous pouvez explorer les informations sur
        tous les Pokémon ici !
      </Typography>
    </Box>
  );
};

export default PokedexPage;
