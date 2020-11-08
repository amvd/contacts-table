import { Deal } from './deal'
import { GeoAddress } from './location'

export type ContactTag = {
  id: string
  contact: string
  tag: string
}

export type Contact = {
  id: string
  deals: Deal[]
  firstName: string
  lastName: string
  location: GeoAddress[]
  contactTags: ContactTag[]
}

export function formatName({ firstName, lastName }: Contact): string {
  return `${firstName} ${lastName}`
}

export function formatTags(tags: ContactTag[]): string {
  return tags.map(({ tag }) => tag).join(', ')
}
