import { PokemonName } from "@/hooks/usePokemon";
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

interface SearchPokemonProps {
  pokemon: PokemonName[];
}
export const SearchPokemon = ({ pokemon }: SearchPokemonProps) => {
  //TODO corriger les any

  return (
    <CustomAutocomplete
      disablePortal
      options={pokemon}
      getOptionLabel={(option: any) => option.name}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          (option: any) =>
            option?.name?.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.id.toString().includes(inputValue)
        )
      }
      isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField sx={{ p: 0.5 }} {...params} label="Rechercher un Pokémon" />
      )}
    />
  );
};
