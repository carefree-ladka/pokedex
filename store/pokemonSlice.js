/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getAllPokemons,
  getGenderData,
  getPokemonDescription,
  getPokemonDisabilities,
  getPokemonGender,
} from "services/pokemonService"

export const fetchAllPokemons = createAsyncThunk(
  "pokemon/fetchAllPokemons",
  () => getAllPokemons()
)

export const fetchGender = createAsyncThunk("pokemon/fetchGender", (pokemon) =>
  getPokemonGender(pokemon)
)

export const fetchDisabilities = createAsyncThunk(
  "pokemon/fetchDisabilities",
  (id) => getPokemonDisabilities(id)
)

export const fetchDescription = createAsyncThunk(
  "pokemon/fetchDescription",
  (id) => getPokemonDescription(id)
)
export const fetchGenderData = createAsyncThunk("pokemon/fetchGenderData", () =>
  getGenderData()
)

const initialState = {
  allPokemons: [],
  gender: null,
  disables: null,
  description: null,
  genderData: [],
  selectedPokemon: {},
  searchedPokemons: null,
  filterData: [],
  loading: false,
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectedPokemon: (state, { payload }) => {
      state.selectedPokemon = state.allPokemons.filter(
        (pokemon) => pokemon.id === payload
      )[0]
    },
    searchPokemon: (state, { payload }) => {
      state.searchedPokemons = state.allPokemons.filter((pokemon) => {
        const res =
          pokemon.id.toString().includes(payload) ||
          pokemon.name.toLowerCase().includes(payload.toLowerCase())
        if (res) {
          return pokemon
        }
      })
    },

    filteredData: (state, action) => {
      state.filterData = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPokemons.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAllPokemons.fulfilled, (state, { payload }) => {
        state.allPokemons = payload
        state.loading = false
      })
      .addCase(fetchAllPokemons.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchGender.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.gender = action.payload
        state.loading = false
      })
      .addCase(fetchGender.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchDisabilities.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDisabilities.fulfilled, (state, action) => {
        state.disables = action.payload
        state.loading = false
      })
      .addCase(fetchDisabilities.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchDescription.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDescription.fulfilled, (state, action) => {
        state.description = action.payload
        state.loading = false
      })
      .addCase(fetchDescription.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchGenderData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchGenderData.fulfilled, (state, action) => {
        state.genderData = action.payload
        state.loading = false
      })
      .addCase(fetchGenderData.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { selectedPokemon, searchPokemon, filteredData } =
  pokemonSlice.actions

export const selector = (state) => state.pokemon.allPokemons
export const AllDataSelector = (state) => state.pokemon

export default pokemonSlice.reducer
