
import { createSlice  } from '@reduxjs/toolkit';
export const grupos = createSlice({
    name: 'bancas',
    initialState:{
      grupos:{
        
      },
      recentes: {

      },
      status: 'await',
      statusRecentes: 'await'
    },
    reducers: {
      setGrupos: (state, action) => {
        state.grupos = {...state.grupos,...action.payload}
      },
      setGruposRecentes: (state, action) => {
        state.recentes = {...state.recentes,...action.payload}
      },
      setStatus: (state, action) => {
        state.status = action.payload
      },
      setStatusRecentes: (state, action) => {
        state.statusRecentes = action.payload
      }
    }
  })

export const { setGrupos, setStatus } = grupos.actions
export const gruposReducer = grupos.reducer
