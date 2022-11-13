function getMinMax(str) {
  const number = str.split(' ').map(num => Number(num)).filter(num => !isNaN(num))
  const min = Math.min(...number)
  const max = Math.max(...number)
  return { min, max }
}
