import { map, groupBy, isEmpty } from 'lodash-es'

const DEFAULT_LANGUAGE = 'en-US'

export type Deal = {
  id: string
  value: string
  contact: string
  currency: string
}

export const NO_DEALS = 'N/A'

export function getDealCount(deals: Deal[]): number {
  return deals.length
}

export function getDealValues(deals: Deal[] | null, displayCurrency?: string): string {
  if (isEmpty(deals)) return NO_DEALS

  const currencyGroups = groupBy(deals, 'currency')

  return map(
    currencyGroups,
    (deals: Deal[], currencyCode: string) =>
      formatCurrency(sumDeals(deals), currencyCode)
    )
    .join(', ')
}

export function formatCurrency(value: number, currency: string) {
  return value.toLocaleString(
    navigator.language || DEFAULT_LANGUAGE,
    { style: 'currency', maximumFractionDigits: 0, minimumFractionDigits: 0, currency }
  )
}

function sumDeals(deals: Deal[]): number {
  return deals.reduce((sum, deal) => sum + Number(deal.value), 0)
}
