import { configureStore } from '@reduxjs/toolkit'

import timesheetsReducer from './reducers/timesheestReducer.js'
import usersReducer from './reducers/usersReducer.js'

export const store = configureStore({
  reducer: {
    timesheetsReducer: timesheetsReducer,
    usersReducer: usersReducer,
  },
})

// export
