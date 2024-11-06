import { Pokemon } from "@/models/pokemonModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setSelectedPokemon } from "../actions/selectedPokemon.actions";

interface SelectedPokemonState {
  pokemon: Pokemon | null;
}

const initialState: SelectedPokemonState = {
  pokemon: null,
};

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSelectedPokemon,
      (state, action: PayloadAction<Pokemon>) => {
        state.pokemon = action.payload;
      }
    );
  },
});

export default selectedPokemonSlice.reducer;
