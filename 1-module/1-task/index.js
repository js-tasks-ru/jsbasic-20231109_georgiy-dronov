function factorial(n) {
  // ваш код...
  let numberFactorial = n;
  let result = n;
  let count = --numberFactorial;

  if (n === 1 || n === 0) {
    return result = 1;
  } else {
    for (i = count; i > 1; i--) {
      result *= i;
      console.log(result);
    }
    return result;
  }
}