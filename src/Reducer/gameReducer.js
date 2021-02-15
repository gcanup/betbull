
const actions = {
  SET_PAGE: 'SET_PAGE'
}

const initialState = {
  page: 'initial'
}

const setPage = (page) =>
  ({
    type: actions.SET_PAGE,
    page
  })



const gameReducer = (state = initialState, action) => {
  const { page } = action
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        page
      }
    default:
      return state
  }
}

export {
  setPage,
  gameReducer
}
