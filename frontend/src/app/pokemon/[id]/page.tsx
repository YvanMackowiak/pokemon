import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

// Cette fonction récupère l'ID depuis les paramètres de l'URL
export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Utilisez await pour récupérer l'id de manière asynchrone
  const { id } = await params;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Contenu de la page avec l'ID du Pokémon */}
      <Typography variant="body1">Détails du Pokémon N°{id}</Typography>
      {/* Ici vous pouvez ajouter plus de contenu */}
    </Box>
  );
}
