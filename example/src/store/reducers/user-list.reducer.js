import {createReducer} from "redux-create-reducer"
import { USER_LIST_RESET, USER_LIST_SET_STATE } from '../actions/user-list.actions'

const INIT_STATE = []

export const userListReducer = createReducer(INIT_STATE,{
  [USER_LIST_SET_STATE]: (userList, {list}) => list,
  [USER_LIST_RESET]: () => [...INIT_STATE]
})
