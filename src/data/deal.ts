import { map, groupBy, isEmpty } from 'lodash-es'
import currencyTable from './currencies'

export type Deal = {
  id: string
  value: string
  contact: string
  currency: string
}

export const NO_DEALS = 'N/A'

export function getCurrencySymbol(currencyCode: string): string {
  const code = currencyCode.toUpperCase()

  return currencyTable[code] || code
}

export function getDealCount(deals: Deal[]): number {
  return deals.length
}

export function getDealValues(deals: Deal[] | null, displayCurrency?: string): string {
  if (isEmpty(deals)) return NO_DEALS

  const currencyGroups = groupBy(deals, 'currency')

  return map(
    currencyGroups,
    (deals: Deal[], currencyCode: string) =>
      `${getCurrencySymbol(currencyCode)}${sumDeals(deals)}`
    )
    .join(', ')
}

function sumDeals(deals: Deal[]): number {
  return deals.reduce((sum, deal) => sum + Number(deal.value), 0)
}
