import { Pokemon } from "@/models/pokemonModel";
import { createAction } from "@reduxjs/toolkit";

export const SET_SELECTED_POKEMON = "selectedPokemon/setSelectedPokemon";

export const setSelectedPokemon = createAction<Pokemon>(SET_SELECTED_POKEMON);
