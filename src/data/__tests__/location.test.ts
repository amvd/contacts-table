import { formatState, formatLocation, GeoAddress } from '../location'

describe('Location data', function() {
  describe('#formatState', function() {
    it('returns a US State abbreviation for a full state name', function() {
      expect(formatState('Illinois')).toBe('IL')
      expect(formatState('Colorado')).toBe('CO')
    })

    it('returns the given value if no abbreviation is found', function() {
      expect(formatState('Quebec')).toBe('Quebec')
    })
  })

  describe('#formatLocation', function() {
    it('returns a string with the formatted location', function() {
      const addresses: GeoAddress[] = [
        {
          id: '1',
          city: 'Chicago',
          state: 'Illinois',
          country2: 'US'
        }
      ]

      expect(formatLocation(addresses)).toBe('Chicago, IL, US')
    })

    it('lists multiple locations if present', function() {
      const addresses: GeoAddress[] = [
        {
          id: '1',
          city: 'Chicago',
          state: 'Illinois',
          country2: 'US'
        },
        {
          id: '2',
          city: 'Montreal',
          state: 'QC',
          country2: 'CA'
        }
      ]

      expect(formatLocation(addresses)).toBe('Chicago, IL, US / Montreal, QC, CA')
    })
  })
})