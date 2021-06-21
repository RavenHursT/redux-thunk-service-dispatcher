import serviceDispatcher from 'redux-thunk-service-dispatcher'
import { getUsers } from '../../services/users.service'
export const USER_LIST_SET_STATE = 'USER_LIST_SET_STATE'
export const USER_LIST_RESET = 'USER_LIST_RESET'

export const userListSetState = list => ({
  type: USER_LIST_SET_STATE,
  list
})

export const userListResetState = () => ({
  type: USER_LIST_RESET
})

export const fetchUserList = (
  searchParams = {}
) => async dispatch =>
  dispatch(
    serviceDispatcher(
      getUsers(searchParams),
      userListSetState
    )
  )
