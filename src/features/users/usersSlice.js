import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', username: 'Tianna Jenkins' },
  { id: '1', username: 'Kevin Grant' },
  { id: '2', username: 'Madison Price' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(username) {
        return {
          payload: {
            id: nanoid(),
            username,
          },
        }
      },
    },
  },
})

export const { userAdded } = usersSlice.actions
export default usersSlice.reducer