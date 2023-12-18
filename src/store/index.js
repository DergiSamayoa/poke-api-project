import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";
import dataPokemons from "./slices/dataPokemons";
import searchPokemon from "./slices/searchPokemon";
import pokemonNames from "./slices/pokemonNames";
import settingsPage from "./slices/settingsPage";

export default configureStore({
    reducer: {
        trainerName: trainerName,
        dataPokemons: dataPokemons,
        searchPokemon: searchPokemon,
        pokemonNames: pokemonNames,
        settingsPage: settingsPage
    }
})

//export default configureStore