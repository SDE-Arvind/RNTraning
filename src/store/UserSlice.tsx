import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  users: string[]
}

const initialState: UserState = {
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,action) => {
      state.users = [...state.users,action?.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer