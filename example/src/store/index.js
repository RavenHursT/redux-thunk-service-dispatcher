import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/root.reducer'
import logger from 'redux-logger'

const middlewares = [logger, thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
