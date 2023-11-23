function getMinMax(str) {
  let arr = str.split(' ');
  let numbers = arr.filter(item => !isNaN(item) && item !== '');
  let min = Number(numbers[0]);
  let max = Number(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    let num = Number(numbers[i]);
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  return { min: min, max: max };
}