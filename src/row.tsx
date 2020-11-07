import React from 'react';

import { Contact, ContactTag } from './data/contact'
import { Deal, getDealValues } from './data/deal'
import { formatLocation } from './data/location';


type Props = {
  contact: Contact
}

function formatName({ firstName, lastName }: Contact): string {
  return `${firstName} ${lastName}`
}

function formatTags(tags: [ContactTag]): string {
  return tags.join(', ')
}

function formatDeals(deals: [Deal]): number {
  return deals.length
}

function Row({ contact }: Props) {
  return (
    <div className="contact-row">
      <div className="checkbox">
        x
      </div>
      <div className="name">
        {formatName(contact)}
      </div>
      <div className="tags">
        {formatTags(contact.tags)}
      </div>
      <div className="deals">
        {formatDeals(contact.deals)}
      </div>
      <div className="total-value">
        {getDealValues(contact.deals)}
      </div>
      <div className="location">
        {formatLocation(contact.location)}
      </div>
    </div>
  )
}

export default Row;
