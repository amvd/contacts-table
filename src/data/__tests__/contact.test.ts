import { Contact, formatName, formatTags } from '../contact'

describe('Contact data', function() {
  const contact: Contact = {
    id: '46',
    deals: [],
    firstName: 'Joe',
    lastName: 'Biden',
    location: [{
      id: '1600',
      city: 'Washington',
      state: 'District of Columbia',
      country2: 'US'
    }],
    tags: [{
      id: '1',
      contact: '46',
      tag: 'president'
    }]
  }
  describe('#formatName', function() {
    it('combines first and last name', function() {
      expect(formatName(contact)).toBe('Joe Joel')
    })
  })

  describe('#formatTags', function() {
    it('returns a list of tag names', function() {
      let tags = [
        {
          id: '13',
          contact: '1',
          tag: 'customer'
        },
        {
          id: '14',
          contact: '1',
          tag: 'canada'
        },
        {
          id: '15',
          contact: '1',
          tag: 'new-deals'
        },
      ]

      expect(formatTags(tags)).toBe('customer, canada, new-deals')
    })
  })
})