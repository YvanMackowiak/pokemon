import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import selectedPokemonReducer from "./reducers/selectedPokemonSlice";

export const store = configureStore({
  reducer: {
    selectedPokemon: selectedPokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
