const TAX_SIZE = 0.13
const MAX_TAX = TAX_SIZE * 2_000_000

export const getPaymentsByYear = ({ salary, flat }) => {
  salary = +salary
  flat = +flat
  const taxPaymentInYear = salary * 12 * TAX_SIZE
  const fullPayment = Math.min(flat * TAX_SIZE, MAX_TAX)
  const yearWithFullPayment = ~~(fullPayment / taxPaymentInYear)
  const payments = Array(yearWithFullPayment)
    .fill('')
    .map((_, i) => ({
      payment: taxPaymentInYear,
      year: i + 1,
    }))
  const paymentLastYear = fullPayment % taxPaymentInYear
  if (paymentLastYear) {
    payments.push({
      payment: paymentLastYear,
      year: yearWithFullPayment + 1,
    })
  }
  return payments
}
