/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "./pokemonSlice"

const commonReducer = () => ({
  pokemon: pokemonReducer,
})

export const rootReducer = combineReducers(commonReducer())

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})

export default store
