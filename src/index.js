import {getResponseBody} from './util/get-response-body.util'
import noop, { noopThunk } from './util/noop.util'

const DEFAULT_OPTIONS = {
  onServiceStartAction: noopThunk,
  onErrorAction: noopThunk,
  onFinallyAction: noopThunk,
  responseBodyDataKey: '',
  generateReqError: (resp) => new Error(`Request failed: ${resp.status}`)
}

export const serviceDispatcher = (
  serviceMethodThunk = noop,
  resultAction = noop,
  options = {}
) => async dispatch => {
  const {
    onServiceStartAction,
    onErrorAction,
    onFinallyAction,
    responseBodyDataKey,
    generateReqError
  } = {
    ...DEFAULT_OPTIONS,
    ...options
  }
  let error = undefined
  let setStatePromise
  dispatch(onServiceStartAction())
  try {
    const resp = await serviceMethodThunk()
    if (!resp.ok) {
      throw await generateReqError(resp)
    }
    const respBody = await getResponseBody(resp)

    setStatePromise = resultAction && await dispatch(resultAction(
      respBody[responseBodyDataKey] || respBody
    ))
  } catch (err) {
    error = err
    console.error(err)
    dispatch(onErrorAction(err))
  } finally {
    dispatch(onFinallyAction())
  }
  return error || setStatePromise
}

export default serviceDispatcher
