import serviceDispatcher from 'redux-thunk-service-dispatcher'
import { getUserById } from '../../services/users.service'

export const SELECTED_USER_SET = 'SELECTED_USER_SET'
export const SELECTED_USER_CLEAR = 'SELECTED_USER_CLEAR'

export const setSelectedUser = user => ({
  type: SELECTED_USER_SET,
  user
})

export const clearSelectedUser = () => ({
  type: SELECTED_USER_CLEAR
})

export const fetchSelectedUser = id => async dispatch =>
  dispatch(
    serviceDispatcher(
      getUserById(id),
      setSelectedUser
    )
  )
