import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const darkModeSlice = createSlice({
	name: 'darkMode',
    initialState: false,
    reducers: {
        setdarkMode: (state, action) => {
            return action.payload
        }
    }
})

export const { setdarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;