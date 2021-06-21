import { DEFAULT_SERVICE_HEADERS, SERVICES_BASE_URI } from "./services.config";
import { generateUrlQueryString } from "./generate-url-query-string.util";

const serviceBaseUri = `${SERVICES_BASE_URI}/users`

export const getUsers = (
  searchParams = {}
) => async () => fetch(
  `${serviceBaseUri}${generateUrlQueryString(searchParams)}`,
  {
    headers: DEFAULT_SERVICE_HEADERS
  }
)

export const getUserById = (
  id,
  searchParams = {}
) => async () => fetch(
  `${serviceBaseUri}/${id}${generateUrlQueryString(searchParams)}`,
  {
    headers: DEFAULT_SERVICE_HEADERS
  }
)
