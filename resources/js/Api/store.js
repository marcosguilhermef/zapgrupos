import { configureStore } from '@reduxjs/toolkit';
import { comparadorReducer } from './slices/Comparador'
import { bancasReducer } from './slices/Bancas'
import { comparadorMaisOddsReducer } from './slices/ComparadorMiasOdds'

export default configureStore({
  reducer: {
    comparador: comparadorReducer,
    maisOdds: comparadorMaisOddsReducer,
    bancas: bancasReducer
  },
});
