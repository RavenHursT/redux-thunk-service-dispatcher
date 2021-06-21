export const generateUrlQueryString = searchParams => searchParams ?
  `?${new URLSearchParams(searchParams)}` : "";
