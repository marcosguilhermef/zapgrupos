
import { createSlice  } from '@reduxjs/toolkit';
export const comparadorMaisOdds = createSlice({
    name: 'comparadorMaisOdds',
    initialState:{
      dados:[],
      jogos:[],
      status: 'await'
    },
    reducers: {
      setDados: (state, action) => {
        state.dados = action.payload
      },
      setStatus: (state, action) => {
        state.status = action.payload
      },
      setJogos: (state, action) => {
        state.jogos = action.payload
      }
    }
  })

export const { setDados, setStatus, setJogos } = comparadorMaisOdds.actions
export const comparadorMaisOddsReducer = comparadorMaisOdds.reducer
