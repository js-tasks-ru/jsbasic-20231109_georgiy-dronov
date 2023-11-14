function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let cutString = str.slice(0, (maxlength - 1)) + '…'
    return cutString
  }
  return str
}
