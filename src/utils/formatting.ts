export const formatAmount = (amount: number, currency: string = 'NGN', locale: string = 'en-US' ) => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
}
