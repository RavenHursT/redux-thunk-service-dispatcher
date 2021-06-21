import {Headers, MimeTypes} from 'http-headers-js'

export const getResponseBody = async resp => resp
  .headers
  .get(Headers.CONTENT_TYPE)
  .includes(MimeTypes.Application.JSON) ?
    await resp.json() : await resp.text()
