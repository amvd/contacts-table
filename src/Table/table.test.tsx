import React from 'react'
import { shallow } from 'enzyme'
import { Contact } from '../data/contact'
import Table from '.'
import Row from '../Row'

describe('<Table>', function() {
  const contacts: Contact[] = [
    {
      id: '1',
      deals: [],
      firstName: 'A',
      lastName: 'B',
      location: [],
      contactTags: []
    },
    {
      id: '2',
      deals: [],
      firstName: 'C',
      lastName: 'D',
      location: [],
      contactTags: []
    },
    {
      id: '3',
      deals: [],
      firstName: 'E',
      lastName: 'F',
      location: [],
      contactTags: []
    }
  ]

  it('renders the headers', function() {
    const wrapper = shallow(<Table data={contacts} />)

    expect(wrapper.find('.header .name').text()).toBe('Contact')
    expect(wrapper.find('.header .deals-value').text()).toBe('Total Value')
    expect(wrapper.find('.header .location').text()).toBe('Location')
    expect(wrapper.find('.header .deals-count').text()).toBe('Deals')
    expect(wrapper.find('.header .tags').text()).toBe('Tags')
  })

  it('renders a Row for each contact', function() {
    const wrapper = shallow(<Table data={contacts} />)

    const rows = wrapper.find(Row)

    expect(rows.length).toBe(3)
    expect(rows.at(0).key()).toBe('1')
    expect(rows.at(1).key()).toBe('2')
    expect(rows.at(2).key()).toBe('3')
  })
})