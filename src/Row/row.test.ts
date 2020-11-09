import React from 'react';
import { render } from '@testing-library/react'
import { Contact } from '../data/contact'

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('<Row>', function() {
  it('displays the correct information', function() {
    const contact: Contact = {
      id: '46',
      deals: [
        {
          id: '111',
          value: '10000',
          contact: '1',
          currency: 'aud'
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
        state: 'District of Columbia',
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
  })
})