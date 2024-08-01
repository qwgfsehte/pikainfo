import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllPokemons } from 'src/interfaces/interface';

export const initialState: {
  pokemonPage: AllPokemons[];
  nameSelectedPokemon: string;
  selectedPokemons: string[];
  searchValue: string;
} = {
  pokemonPage: [],
  nameSelectedPokemon: '',
  selectedPokemons: [],
  searchValue: '',
};

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: initialState,
  reducers: {
    setPokemonPage: (state, action: PayloadAction<AllPokemons[]>) => {
      state.pokemonPage = action.payload;
    },
    setNameSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.nameSelectedPokemon = action.payload;
    },
    addItem: (state, action: PayloadAction<string>) => {
      state.selectedPokemons.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.selectedPokemons.indexOf(action.payload);
      if (index !== -1) {
        state.selectedPokemons.splice(index, 1);
      }
    },
    clearItems: (state, action: PayloadAction<string[]>) => {
      state.selectedPokemons = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setPokemonPage,
  setNameSelectedPokemon,
  addItem,
  removeItem,
  clearItems,
  setSearchValue,
} = pokemonListSlice.actions;
export default pokemonListSlice.reducer;