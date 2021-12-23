import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// get all user
export const getUsers = createAsyncThunk('users/usersFetched', async () => {
  const response = await axios.get('http://localhost:5000/users')
  return response.data
})

// delete user
// Delete user kieu moi
export const deleteUser = createAsyncThunk('users/usersDeleted', async (userId) => {
  await axios.delete(`http://localhost:5000/users/${userId}`)
  return userId
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload
    },
    [deleteUser.fulfilled]: (state, action) => {
      const userId = action.payload
      state.allUsers = state.allUsers.filter((user) => user.id !== userId)
    },
  },
})

const usersReducer = usersSlice.reducer

export const usersSelector = (state) => state.usersReducer.allUsers

export default usersReducer
