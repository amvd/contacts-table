import { map, groupBy } from 'lodash-es'
import currencyTable from './currencies'

export type Deal = {
  id: string
  value: string
  contact: string
  currency: string
}

export function getCurrencySymbol(currencyCode: string): string {
  const code = currencyCode.toUpperCase()

  return currencyTable[currencyCode] || code
}

export function getDealCount(deals: [Deal]): number {
  return deals.length
}

export function getDealValues(deals: [Deal], displayCurrency?: string): string {
  const currencyGroups = groupBy(deals, 'currency')

  return map(
    currencyGroups,
    (deals: [Deal], currencyCode: string) =>
      `${getCurrencySymbol(currencyCode)}${sumDeals(deals)}`
    )
    .join(', ')
}

function sumDeals(deals: [Deal]): number {
  return deals.reduce((sum, deal) => sum + Number(deal.value), 0)
}
