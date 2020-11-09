import React from 'react'
import './row.css'

import {
  Contact,
  formatName,
  formatTags
} from '../data/contact'
import { getDealCount, getDealValues } from '../data/deal'
import { formatLocation } from '../data/location'


type Props = {
  contact: Contact
  selected?: boolean
  toggleRow: () => void
}

function Row({ contact, selected, toggleRow }: Props) {
  return (
    <div className={`contact-row ${selected ? 'selected' : ''}`}>
      <div className="column checkbox">
        <input type="checkbox" checked={selected} onChange={toggleRow} />
      </div>
      <div className="column text name">
        {formatName(contact)}
      </div>
      <div className="column text deals-value">
        {getDealValues(contact.deals)}
      </div>
      <div className="column text location">
        {formatLocation(contact.location)}
      </div>
      <div className="column text deals-count">
        {getDealCount(contact.deals)}
      </div>
      <div className="column text tags">
        {formatTags(contact.contactTags)}
      </div>
    </div>
  )
}

export default Row;
