// selectedPokemonSlice.ts
import { Pokemon } from "@/models/pokemonModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SelectedPokemonState {
  pokemon: Pokemon | null;
}

const initialState: SelectedPokemonState = {
  pokemon: null,
};

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
    clearSelectedPokemon: (state) => {
      state.pokemon = null;
    },
  },
});

export const { setSelectedPokemon, clearSelectedPokemon } =
  selectedPokemonSlice.actions;

// Sélecteur pour récupérer le Pokémon sélectionné
export const selectSelectedPokemon = (state: RootState) =>
  state.selectedPokemon.pokemon;

export default selectedPokemonSlice.reducer;
