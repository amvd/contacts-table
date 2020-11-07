import { isEmpty } from 'lodash-es'

export type GeoAddress = {
  id: string
  city: string
  country: string
  country2: string
  state: string
}

export type GeoIps = {
  id: string
  contact: string
  geoAddress: string
}

export function formatLocation(address: GeoAddress) {
  if (isEmpty(address)) return 'Unknown'

  const { city, state, country2 } = address

  return `${city}, ${state}, ${country2}`
}
