import { compact } from 'lodash-es'

import { Contact, ContactTag } from './contact'
import { Deal } from './deal'
import { GeoAddress, GeoIps } from './location'

export interface DataEntry {
  id: string
}

export type RawContact = {
  id: string
  deals: string[]
  firstName: string
  lastName: string
  geoIps: string[]
  contactTags: string[]
}

export type RawData = {
  contacts: RawContact[]
  contactTags: ContactTag[]
  deals: Deal[]
  geoAddresses: GeoAddress[]
  geoIps: GeoIps[]
}

export function processData({
  contacts,
  contactTags,
  deals,
  geoAddresses,
  geoIps
}: RawData): Contact[] {
  const populatedContacts = contacts.map(contact => ({
    ...contact,
    contactTags: mapIdsToData(contact.contactTags, contactTags),
    deals: mapIdsToData(contact.deals, deals),
    location: mapIpsToLocation(contact.geoIps, geoIps, geoAddresses)
  }))

  return populatedContacts
}

export function mapIdsToData<T extends DataEntry>(ids: string[], data: T[]): T[] {
  const dataList = ids.map(id => data.find(datum => datum.id === id) || null)

  return compact(dataList)
}

function mapIpsToLocation(
  ipIds: string[],
  geoIpData: GeoIps[],
  geoAddressData: GeoAddress[]
): GeoAddress[] {
  const ipRecords = ipIds.map(id => geoIpData.find(datum => datum.id === id))

  const locationRecords = compact(ipRecords)
    .map(({ geoAddress }) =>
      geoAddressData.find(address => address.id === geoAddress))

  return compact(locationRecords)
}