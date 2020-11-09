import {
  Deal,
  NO_DEALS,
  getDealCount,
  getDealValues
} from '../deal'

describe('Deal data', function() {
  describe('#getDealCount', function() {
    it('counts deals', function() {
      const deals = [
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
      ]

      expect(getDealCount(deals)).toBe(2)
    })
  })

  describe('#getDealValues', function() {
    describe('when there are no deals', function() {
      it(`returns empty value "${NO_DEALS}"`, function() {
        let deals: Deal[] | null = null

        expect(getDealValues(deals)).toBe(NO_DEALS)

        deals = []

        expect(getDealValues(deals)).toBe(NO_DEALS)
      })
    })

    describe('when all deals are in a single currency', function() {
      it('returns the total value of all deals with the proper currency symbol', function() {
        let deals = [
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
        ]

        expect(getDealValues(deals)).toBe('$50,000')

        deals = [
          {
            id: '111',
            value: '10000',
            contact: '1',
            currency: 'aud'
          },
          {
            id: '222',
            value: '4000',
            contact: '1',
            currency: 'aud'
          }
        ]

        expect(getDealValues(deals)).toBe('A$14,000')
      })
    })

    describe('when deals are in various currencies', function() {
      it('returns a string listing the total in each currency', function() {
        let deals = [
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
          },
          {
            id: '333',
            value: '10000',
            contact: '1',
            currency: 'aud'
          },
          {
            id: '444',
            value: '90000',
            contact: '1',
            currency: 'usd'
          }
        ]

        expect(getDealValues(deals)).toBe('A$20,000, $130,000')

        deals = [
          {
            id: '111',
            value: '1',
            contact: '1',
            currency: 'aud'
          },
          {
            id: '222',
            value: '4',
            contact: '1',
            currency: 'usd'
          },
          {
            id: '333',
            value: '10',
            contact: '1',
            currency: 'cad'
          },
          {
            id: '444',
            value: '9',
            contact: '1',
            currency: 'usd'
          },
          {
            id: '111',
            value: '4',
            contact: '1',
            currency: 'aud'
          },
          {
            id: '222',
            value: '8',
            contact: '1',
            currency: 'usd'
          },
          {
            id: '333',
            value: '7',
            contact: '1',
            currency: 'aud'
          },
          {
            id: '444',
            value: '2',
            contact: '1',
            currency: 'cad'
          }
        ]

        expect(getDealValues(deals)).toBe('A$12, $21, CA$12')
      })
    })
  })
})