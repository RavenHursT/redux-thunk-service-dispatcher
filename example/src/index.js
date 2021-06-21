import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

ReactDOM.render(
  <Provider {...{store}}>
    <ThemeProvider theme={darkTheme} >
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
