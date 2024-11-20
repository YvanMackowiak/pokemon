import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#2e2e2e",
    height: "40px",
    borderRadius: "8px",
    color: "#fff",
    "& fieldset": {
      borderColor: "#4caf50",
    },
    "&:hover fieldset": {
      borderColor: "#81c784",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1de9b6",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#81c784",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1de9b6",
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "#81c784",
  },
  "& .MuiAutocomplete-clearIndicator": {
    color: "#e57373",
  },
}));

export const SearchPokemon = () => {
  const options = [
    //TODO changer par la liste des pokemon venant de l'api ( a crée)
    { label: "Bulbizarre", id: 1 },
    { label: "Herbizarre", id: 2 },
    { label: "Florizarre", id: 3 },
  ];

  return (
    <CustomAutocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }} // Centré et avec un espace
      renderInput={(params) => (
        <TextField sx={{ p: 0.5 }} {...params} label="Rechercher un Pokémon" />
      )}
    />
  );
};
