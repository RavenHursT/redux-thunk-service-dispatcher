import { combineReducers } from 'redux'
import { userListReducer } from './user-list.reducer'
import { selectedUserReducer } from './selected-user.reducer'

export default combineReducers({
  userList: userListReducer,
  selectedUser: selectedUserReducer
})
