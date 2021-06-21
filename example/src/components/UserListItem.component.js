import { Avatar, Link, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSelectedUser } from '../store/actions/selected-user.actions'

export const UserListItem = ({
  user = {}
}) => {
  const dispatch = useDispatch()
  const {
    avatar,
    fullName,
    email,
    id
  } = user

  const onClick = id => ev => {
    ev.preventDefault()
    dispatch(fetchSelectedUser(id))
  }

  return <ListItem {...{}}>
    <ListItemAvatar {...{}}>
      <Avatar {...{
        alt: fullName,
        src: avatar
      }} />
    </ListItemAvatar>
    <ListItemText {...{
      primary: <Link {...{
        href: '',
        onClick: onClick(id)
      }}>{fullName}</Link>,
      secondary: <Typography {...{
        component: 'span',
        variant: 'body2'
      }}>
        {email}
      </Typography>
    }} />
  </ListItem>
}
