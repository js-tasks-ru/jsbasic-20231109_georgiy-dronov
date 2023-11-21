function filterRange(arr, a, b) {
  function inRange(value){
    if(value >= a && value <= b) {
      return value
    }
  }
  return filtered = arr.filter(inRange)
}

