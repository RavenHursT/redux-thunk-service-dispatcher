# redux-thunk-service-dispatcher

> A redux-thunk action that simplifies async HTTP service integration w/ Redux stores

[![NPM](https://img.shields.io/npm/v/redux-thunk-service-dispatcher.svg)](https://www.npmjs.com/package/redux-thunk-service-dispatcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-thunk-service-dispatcher
```

## Usage

Given `fetch` service thunks setup like so:
```js
export const getResourceById = (
  id
) => async () => fetch(
  `http://api.myhost.com/resource/${id}`
)
```
With a Redux store setup like so:
```js
import {createReducer} from "redux-create-reducer"
export const RESOURCE_SET_STATE = 'RESOURCE_SET_STATE'

// Reducer
const INIT_STATE = null
export const recourceReducer = createReducer(INIT_STATE,{
  [RESOURCE_SET_STATE]: (state, {item}) => item,
})

// Action
export const resourceItemSetState = item => ({
  type: RESOURCE_SET_STATE,
  item
})
```
With `redux-thunk-service-dispatcher` you can now, very simply set up your async action-thunks like so:
🎉🎉🎉
```js
import serviceDispatcher from 'redux-thunk-service-dispatcher'

export const fetchItem = (
  id
) => async dispatch =>
  dispatch(
    serviceDispatcher(
      getResourceById(id),
      resourceItemSetState
    )
  )
```

That's it!

Your action-thunk will then return either the resource that was fetched, or else, if there's either a network-level error _or_ your API returns an error response, the body of the response will automatically be parsed for you, and returned back to the caller as a `new Error(errorMessage(s))`!

This helps to keep your action-thunks [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), helping keep your code base more manageable and allows your team to move quicker.

## API

```js
serviceDispatcher(
  asyncServiceMethod,
  reduxSetStateAction,
  [serviceDispatcherOptions]
)
```
`serviceDispatcherOptions` signature:
```js
const serviceDispatchOptions = {
  responseBodyDataKey: 'data', // Key in response body that should be passed to state set action. Default is the whole parsed request body
  onServiceStartAction: () => dispatch => dispatch(startBusy()), // Action that should be dispatched before service call is dispatched.  Useful for starting busy states (i.e. sponners)
  onErrorAction: err => dispatch => dispatch(toastShow(TOAST_TYPE_ERROR, err.message)), // Action that should be dispatched if either a network or response error is detected
  onFinallyAction: () => dispatch => dispatch(stopBusy()), // Action to dispatch at the end of processing service dispatch
  generateReqError: resp => getRespError(resp) // Callback function for customizing how error object will be constructed if error is detected
}

const getRespError = async resp => {
  const respBody = await getResponseBody(resp)
  return new Error(
    respBody.errors ?
      Object.values(respBody.errors)
      .join(', ') : respBody
  )
}
```

## License

MIT © [RavenHursT](https://github.com/RavenHursT)
