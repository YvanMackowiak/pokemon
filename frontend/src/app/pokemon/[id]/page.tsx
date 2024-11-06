import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Détails du Pokémon N°{id}</Typography>
    </Box>
  );
}
