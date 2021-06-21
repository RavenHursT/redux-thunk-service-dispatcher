import React from 'react'
import 'redux-thunk-service-dispatcher/dist/index.css'
import { UserList } from './components/UserList.component'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedUser } from './store/actions/selected-user.actions'

const SelectedUser = () => {
  const dispatch = useDispatch()
  const {
    selectedUser: {
      id,
      avatar,
      email,
      fullName,
      birthDate,
      streetAddress,
      streetSuffix,
      city,
      state,
      zip,
    }
  } = useSelector(
    ({selectedUser}) => ({
      selectedUser
    })
  )

  const getAddressLine1 = () => `${streetAddress} ${streetSuffix}`
  const getAddressLine2 = () => `${city} ${state} ${zip}`

  const handleCloseOnClick = () =>
    dispatch(clearSelectedUser())

  const calculateAge = birthday => {
    const ageDifMs = Date.now() - birthday
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return id ? <Card>
    <CardHeader {...{
      avatar: <Avatar {...{
        alt: fullName,
        src: avatar
      }} />,
      title: fullName,
      subheader: <Link {...{
        href:`mailto:${email}`
      }}>{email}</Link>,
      action: <IconButton {...{
        'aria-label': 'close',
        onClick: handleCloseOnClick
      }}>
        <CloseIcon />
      </IconButton>
    }} />
    <CardContent>
      <Typography {...{
        component: 'strong'
      }}>Age:</Typography>
      <Typography {...{
      }}>{calculateAge(new Date(birthDate))}</Typography>
      <Typography {...{
        component: 'strong',
        fontWeight: 'bold'
      }}>Address:</Typography>
      <Typography>
        {getAddressLine1()}
      </Typography>
      <Typography>
        {getAddressLine2()}
      </Typography>
    </CardContent>
  </Card> :
  <Typography>Please select a user...</Typography>
}

const useAppStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}))

const App = () => {
  const classes = useAppStyles()
  return <Box {...{
    className: classes.root
  }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography {...{
          variant: 'h5'
        }}>Basic Usage:</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <UserList />
      </Grid>
      <Grid item sm={6} xs={12}>
        <SelectedUser />
      </Grid>
    </Grid>
  </Box>
}

export default App
