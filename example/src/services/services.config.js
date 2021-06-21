import {Headers, MimeTypes} from 'http-headers-js'
const {CONTENT_TYPE, ACCEPT} = Headers
const {Application: {JSON: APPLICATION_JSON}} = MimeTypes

export const SERVICES_BASE_URI = 'https://60cbec2a21337e0017e45845.mockapi.io'
export const DEFAULT_SERVICE_HEADERS = {
  [ACCEPT]: APPLICATION_JSON,
  [CONTENT_TYPE]: APPLICATION_JSON,
}
