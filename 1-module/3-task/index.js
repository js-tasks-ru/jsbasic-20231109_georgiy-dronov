function ucFirst(str) {
  const zero = ''
  if (str) {
    let upperCaseString = str[0].toUpperCase() + str.slice(1)
    return upperCaseString
  }
  return zero

}
