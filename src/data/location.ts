import { compact, isEmpty } from 'lodash-es'
import US_STATES from './us_states'

const NO_LOCATION = '—'
const ADDRESS_DIVIDER = ' / '

export type GeoAddress = {
  id: string
  city: string
  country2: string
  state: string
}

export type GeoIps = {
  id: string
  contact: string
  geoAddress: string
}

export function formatState(stateName: string): string | null {
  if (isEmpty(stateName)) return null

  const stateResult = US_STATES.find(state => state.name === stateName)

  return stateResult ? stateResult.abbreviation : stateName
}

export function formatLocation(addresses: GeoAddress[]) {
  if (isEmpty(addresses)) return NO_LOCATION

  return addresses
    .map(({ city, state, country2 }) =>
      compact([
        city,
        formatState(state),
        country2
      ]).join(', '))
    .join(ADDRESS_DIVIDER)
}
