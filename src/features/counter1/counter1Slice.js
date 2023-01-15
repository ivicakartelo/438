import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counter1Slice = createSlice({
  name: 'counter1',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  },
  })

export const { increment, decrement } = counter1Slice.actions

export const selectCount = (state) => state.counter1.value

export default counter1Slice.reducer