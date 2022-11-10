function sumSalary(salaries) {
  let result = 0

  for(let key in salaries) {
    result += Number.isFinite(salaries[key]) ? salaries[key] : 0
  }

  return result
}