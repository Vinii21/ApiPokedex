import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const totalPokemonsSlice = createSlice({
	name: 'totalPokemons',
    initialState: 5,
    reducers: {
        settotalPokemons: (state, action) => {
            return action.payload
        }
    }
})

export const { settotalPokemons } = totalPokemonsSlice.actions;

export default totalPokemonsSlice.reducer;