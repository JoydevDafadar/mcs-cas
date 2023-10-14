import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllCa } from './caAPI'

const initialState = {
status: 'idle',
  cas: [],
}
export const fetchCa = createAsyncThunk(
    'ca/fetchAllCa',
    async() =>{
        const res = await fetchAllCa();
        // console.log(res.data);
        return res.data;
    } 
)

export const counterSlice = createSlice({
  name: 'ca',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCa.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCa.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cas = action.payload;
      })
  },
})


export const selectCa = ( state ) => state.Ca.cas;

export default counterSlice.reducer;