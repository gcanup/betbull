import { createSelector } from 'reselect'

const listState = state => state.game

export const listSelector = createSelector(
  [listState],
  (list) => {
    return ({
      ...list
    })
  })