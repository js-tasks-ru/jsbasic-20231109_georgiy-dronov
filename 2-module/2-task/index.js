function isEmpty(obj) {

  let keyCount = 0;

  for (let key in obj) {
    keyCount += 1
  }

  return keyCount === 0
}



