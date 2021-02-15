import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { gameReducer } from '../Reducer/gameReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer
  },
})
