
import { createSlice  } from '@reduxjs/toolkit';
export const bancas = createSlice({
    name: 'bancas',
    initialState:{
      bancas:[],
      select:[],
      status: 'await'
    },
    reducers: {
      setBancas: (state, action) => {
        state.bancas = action.payload
      },
      setSelect: (state, action) => {
        state.select = [...action.payload]
      },
      setStatus: (state, action) => {
        state.status = action.payload
      }
    }
  })

export const { setBancas, setStatus, setSelect } = bancas.actions
export const bancasReducer = bancas.reducer
