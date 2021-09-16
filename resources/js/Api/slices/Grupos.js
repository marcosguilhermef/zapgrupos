
import { createSlice  } from '@reduxjs/toolkit';
export const grupos = createSlice({
    name: 'bancas',
    initialState:{
      grupos:{
        data: []
      },
      recentes: {
        data: []
      },
      grupo: {

      },
      status: 'await',
      statusRecentes: 'await'
    },
    reducers: {
      setGrupos: (state, action) => {
        state.grupos = {...state.grupos,...action.payload, data: [ ...state.grupos.data,...action.payload.data ]}
      },
      setGrupo: (state, action) => {
        state.grupo = {...action.payload}
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

export const { setGrupos, setStatus, setGrupo } = grupos.actions
export const gruposReducer = grupos.reducer
