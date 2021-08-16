const format = (number, prefix, suffix) => `${prefix} ${number}-${suffix}`

export const formatNumberIntoAdjective = (number) => {
  const formatNum = format.bind(null, number)
  const lastNum = number % 10
  const tens = ~~(number / 10) % 10
  if (number === 0) {
    return formatNum('в', 'ой')
  }
  if (lastNum === 2 && tens !== 1) {
    const prefix = number === 2 ? 'во' : 'в'
    return formatNum(prefix, 'ой')
  }
  if (lastNum === 3 && tens !== 1) {
    return formatNum('в', 'ий')
  }
  if (lastNum >= 6 && lastNum <= 8 && tens !== 1) {
    return formatNum('в', 'ой')
  }
  return formatNum('в', 'ый')
}
