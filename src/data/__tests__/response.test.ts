import { RawData, processData } from '../response'
import { Contact } from '../contact'

describe('Response', function() {
  describe('#processData', function() {
    it('associates multiple arrays of data into a single array of nested contact data', function() {
      const rawData: RawData = {
        contacts: [
          {
            id: '1',
            deals: [],
            firstName: 'A',
            lastName: 'B',
            geoIps: ['1'],
            contactTags: ['2','3']
          },
          {
            id: '2',
            deals: ['11', '22'],
            firstName: 'C',
            lastName: 'D',
            geoIps: [],
            contactTags: ['1']
          }
        ],
        contactTags: [
          {
            id: '1',
            contact: '2',
            tag: 'AAA'
          },
          {
            id: '2',
            contact: '1',
            tag: 'BBB'
          },
          {
            id: '3',
            contact: '1',
            tag: 'CCC'
          }
        ],
        geoIps: [
          {
            id: '1',
            contact: '1',
            geoAddress: '9'
          }
        ],
        geoAddresses: [
          {
            id: '9',
            city: 'Chicago',
            state: 'Illinois',
            country2: 'US'
          }
        ],
        deals: [
          {
            id: '11',
            contact: '2',
            value: '1000',
            currency: 'usd'
          },
          {
            id: '22',
            contact: '2',
            value: '4000',
            currency: 'usd'
          }
        ]
      }

      const formattedResults: Contact[] = [
        {
          id: '1',
          deals: [],
          firstName: 'A',
          lastName: 'B',
          contactTags: [
            {
              id: '2',
              contact: '1',
              tag: 'BBB'
            },
            {
              id: '3',
              contact: '1',
              tag: 'CCC'
            }
          ],
          location: [
            {
              id: '9',
              city: 'Chicago',
              state: 'Illinois',
              country2: 'US'
            }
          ]
        },
        {
          id: '2',
          deals: [
            {
              id: '11',
              contact: '2',
              value: '1000',
              currency: 'usd'
            },
            {
              id: '22',
              contact: '2',
              value: '4000',
              currency: 'usd'
            }
          ],
          firstName: 'C',
          lastName: 'D',
          location: [],
          contactTags: [
            {
              id: '1',
              contact: '2',
              tag: 'AAA'
            }
          ]
        }
      ]

      expect(processData(rawData)).toBe(formattedResults)
    })
  })
})
