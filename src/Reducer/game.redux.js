import cardData from '../helpers/data'

const actions = {
  SET_NAME: 'SET_NAME',
  SET_STAKE: 'SET_STAKE',
  FETCH_CARD_DATA: 'FETCH_CARD_DATA',
  SET_SCORE: 'SET_SCORE',
}

const initialState = {
  betRate: 2.57,
  playerName: '',
  betStake: 0,
  cardData: cardData,
  currentBalance: 10,
  gameWin: false
}

const setName = (name) =>
({
  type: actions.SET_NAME,
  playerName: name
})

const setStake = (stake) =>
({
  type: actions.SET_STAKE,
  betStake: parseInt(stake)
})

const fetchCardData = () =>
// This is the place to fetch data using rest API and promises for sync actions
({
  type: actions.FETCH_CARD_DATA,
  cardData: cardData
})

const setScore = (win) => (dispatch, getState) => {
  const { game: { currentBalance, betRate, betStake } } = getState()
  let newBalance
  if (win) {
    newBalance = currentBalance + (betStake * betRate)
  } else {
    newBalance = currentBalance - betStake
  }
  console.log(newBalance)
  dispatch({
    type: actions.SET_SCORE,
    newBalance: newBalance.toFixed(2)
  })
}


const gameReducer = (state = initialState, action) => {
  const { playerName, betStake, cardData, newBalance } = action
  switch (action.type) {
    case actions.SET_NAME:
      return {
        ...state,
        playerName
      }
    case actions.SET_STAKE:
      return {
        ...state,
        betStake
      }
    case actions.FETCH_CARD_DATA:
      return {
        ...state,
        cardData
      }
    case actions.SET_SCORE:
      return {
        ...state,
        currentBalance: newBalance
      }
    default:
      return state
  }
}

export {
  setName,
  setStake,
  fetchCardData,
  setScore,
  gameReducer
}
