import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerSlice = createSlice({
		name: 'trainer',
    initialState: {
        name: "",
        gender: null
    },
    reducers: {
        setTrainer: (state, action) => {
            return action.payload
        }
    }
})

export const { setTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;