import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Female from "../assets/Female.png";
import Male from "../assets/Male.png";
import { Pokemon } from "../interface/Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Box
      // onClick={handleBoxClick}
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
        <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
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
            <img
              src={type.image}
              alt={type.name}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        ))}
      </Box>
      {pokemon.sexe && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 15, height: 15 }} src={Female} alt="femme" />
            <Typography variant="body2">{pokemon.sexe?.female}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 15, height: 15 }} src={Male} alt="homme" />
            <Typography variant="body2">{pokemon.sexe?.male}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
