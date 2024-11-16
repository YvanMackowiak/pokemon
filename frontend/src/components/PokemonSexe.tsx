import { Sexe } from "@/models/pokemonModel";
import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Female from "../assets/Female.png";
import Male from "../assets/Male.png";

interface PokemonSexeProps {
  pokemonSexe: Sexe;
}

export const PokemonSexe = ({ pokemonSexe }: PokemonSexeProps) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: 15, height: 15 }} src={Female.src} alt="femme" />
        <Typography variant="body2">{pokemonSexe?.female}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: 15, height: 15 }} src={Male.src} alt="homme" />
        <Typography variant="body2">{pokemonSexe.male}</Typography>
      </Box>
    </Box>
  );
};
