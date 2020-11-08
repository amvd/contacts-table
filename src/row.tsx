import React from 'react';

import {
  Contact,
  formatName,
  formatTags
} from './data/contact'
import { getDealCount, getDealValues } from './data/deal'
import { formatLocation } from './data/location';


type Props = {
  contact: Contact
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
        {formatTags(contact.contactTags)}
      </div>
      <div className="deals">
        {getDealCount(contact.deals)}
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
