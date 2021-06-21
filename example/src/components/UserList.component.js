import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchUserList } from '../store/actions/user-list.actions'
import { List, Paper, Typography } from '@material-ui/core'
import { UserListItem } from './UserListItem.component'

export const UserList = () => {
  const dispatch = useDispatch()
  const {
    userList
  } = useSelector(
    ({ userList }) => ({ userList })
  )

  useEffect(() => {
    dispatch(
      fetchUserList({
        p: 1,
        l: 10
      })
    )
  }, [])

  return userList?.length ?
    <Paper>
      <List {...{}}>
        {
          userList.map(
            (user, key) => <UserListItem {...{
              key,
              user
            }} />
          )
        }
      </List>
    </Paper> :
    <Typography>Loading users...</Typography>
}
