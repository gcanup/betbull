import { combineReducers } from 'redux'
import { gameReducer } from '../Reducer/game.redux'

export default combineReducers({
    game: gameReducer
})