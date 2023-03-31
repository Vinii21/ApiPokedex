import { configureStore } from '@reduxjs/toolkit'
import trainer from "./slices/trainer.slice"
import totalPokemons from "./slices/totalPokemons.slice"
import darkMode from "./slices/darkMode.slice"

export default configureStore({
  reducer: {
        trainer, totalPokemons, darkMode
	}
})