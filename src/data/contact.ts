import { Deal } from './deal'
import { GeoAddress } from './location'

export type ContactTag = {
  id: string
  contact: string
  tag: string
}

export type Contact = {
  id: string
  deals: [Deal]
  firstName: string
  lastName: string
  location: GeoAddress
  scoreValues: [number]
  tags: [ContactTag]
}
