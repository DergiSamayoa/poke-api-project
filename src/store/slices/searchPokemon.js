import { createSlice } from "@reduxjs/toolkit";

const searchPokemonSlice = createSlice({
    name: "searchPokemon",
    initialState: "",
    reducers: {
        setSearchPokemon: (state, action) => {
            const newUrlPokemon = action.payload
            return newUrlPokemon
        }
    }
})


export const { setSearchPokemon } = searchPokemonSlice.actions

export default searchPokemonSlice.reducer