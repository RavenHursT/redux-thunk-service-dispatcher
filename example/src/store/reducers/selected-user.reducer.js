import { createReducer } from 'redux-create-reducer'
import { SELECTED_USER_CLEAR, SELECTED_USER_SET } from '../actions/selected-user.actions'

const INIT_STATE = {}

export const selectedUserReducer = createReducer(
  {...INIT_STATE},
  {
    [SELECTED_USER_SET]: (selectedUser, {user}) => ({
      ...user
    }),
    [SELECTED_USER_CLEAR]: () => ({
      ...INIT_STATE
    })
  }
)
