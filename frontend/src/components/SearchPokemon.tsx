import { PokemonName } from "@/hooks/usePokemon";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchPokemonProps {
  pokemon: PokemonName[];
}

export const SearchPokemon = ({ pokemon }: SearchPokemonProps) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handlePokemonSelect = (value: PokemonName | null) => {
    if (value) {
      router.push(`/pokemon/${value.id}`);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 200, mx: "auto", my: 2 }}>
      <Autocomplete
        options={pokemon}
        getOptionLabel={(option) => option.name}
        value={null}
        onChange={(_, value) => handlePokemonSelect(value)}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
          "& .MuiAutocomplete-popupIndicator": {
            color: "white",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Rechercher"
            variant="outlined"
            fullWidth
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name}
          </Box>
        )}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
    </Box>
  );
};
