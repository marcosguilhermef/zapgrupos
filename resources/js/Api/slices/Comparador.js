
import { createSlice  } from '@reduxjs/toolkit';
export const comparador = createSlice({
    name: 'comparador',
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

export const { setDados, setStatus, setJogos } = comparador.actions
export const comparadorReducer = comparador.reducer
