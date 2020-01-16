const FizzBuzz = number1 => {
  if (number1 % 3 === 0 && number1 % 5 === 0) {
    return 'FizzBuzz';
  }
  if (number1 % 3 === 0) {
    return 'Fizz';
  }
  if (number1 % 5 === 0) {
    return 'Buzz';
  }

  return number1;
};
export default FizzBuzz;
