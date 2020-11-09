import React from 'react';
import { shallow } from 'enzyme'
import { Contact } from '../data/contact'
import Row from '.';

describe('<Row>', function() {
  const contact: Contact = {
    id: '46',
    deals: [
      {
        id: '111',
        value: '10000',
        contact: '1',
        currency: 'usd'
      },
      {
        id: '222',
        value: '40000',
        contact: '1',
        currency: 'usd'
      }
    ],
    firstName: 'Joe',
    lastName: 'Biden',
    location: [{
      id: '1600',
      city: 'Washington',
      state: 'District Of Columbia',
      country2: 'US'
    }],
    contactTags: [
      {
        id: '1',
        contact: '46',
        tag: 'president'
      },
      {
        id: '2',
        contact: '46',
        tag: 'president-elect'
      }
    ]
  }

  it('displays the correct information', function() {
    const wrapper = shallow(<Row contact={contact} toggleRow={() => null} />)

    expect(wrapper.find('.name').text()).toBe('Joe Biden')
    expect(wrapper.find('.deals-value').text()).toBe('$50,000')
    expect(wrapper.find('.location').text()).toBe('Washington, DC, US')
    expect(wrapper.find('.deals-count').text()).toBe('2')
    expect(wrapper.find('.tags').text()).toBe('president, president-elect')
  })

  it('calls `toggleRow` function prop when checkbox is checked', function() {
    const toggleRow = jest.fn()

    const wrapper = shallow(<Row contact={contact} toggleRow={toggleRow} />)

    expect(toggleRow).not.toBeCalled();

    wrapper.find('.checkbox input').simulate('change')

    expect(toggleRow).toBeCalled();
  })
})