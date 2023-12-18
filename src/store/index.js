import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";
import dataPokemons from "./slices/dataPokemons";
import searchPokemon from "./slices/searchPokemon";

export default configureStore({
    reducer: {
        trainerName: trainerName,
        dataPokemons: dataPokemons,
        searchPokemon: searchPokemon,
    }
})

//export default configureStore