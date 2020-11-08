import { includes, xor } from 'lodash-es'
import React, { useState } from 'react'
import { Contact } from '../data/contact'
import Row from '../Row'
import './table.css'

type Props = {
  data: Contact[]
}

function Table({ data }: Props) {
  const [selectionState, setSelection] = useState<string[]>([])

  const allSelected = selectionState.length === data.length

  const toggleAll = () => {
    if (!allSelected) {
      setSelection(data.map(({ id }) => id))
    } else {
      setSelection([])
    }
  }

  const toggleRow = (itemId: string) => {
    const newState = xor(selectionState, [itemId])

    setSelection(newState)
  }

  return (
    <div className="table">
      <div className="header">
        <div className="column checkbox">
          <input type="checkbox" onChange={toggleAll} checked={allSelected} />
        </div>
        <div className="column text name">
          Contact
        </div>
        <div className="column text deals-value">
          Total Value
        </div>
        <div className="column text location">
          Location
        </div>
        <div className="column text deals-count">
          Deals
        </div>
        <div className="column text tags">
          Tags
        </div>
      </div>
      <div className="body">
        {data.map((contact: Contact) =>
          <Row
            key={contact.id}
            selected={includes(selectionState, contact.id)}
            toggleRow={() => { toggleRow(contact.id) }}
            contact={contact}
          />)}
      </div>
    </div>
  )
}

export default Table