import { configureStore } from '@reduxjs/toolkit'
import caReducer from './features/caSlice'


export const store = configureStore({
  reducer: {
    Ca : caReducer,
  },
})