function isEmpty(obj) {

  let keyCount = null;

  for (let key in obj) {
    keyCount += 1
  }

  if (keyCount !== null) {
    return false
  }
  return true
}



