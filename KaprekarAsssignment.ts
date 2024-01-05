function getUserInput(): number {
  return parseInt(prompt('Enter a four-digit number: '), 10);
}

function isValidInput(input: number): boolean {
  return !isNaN(input) && input >= 1000 && input <= 9999;
}

function kaprekarConstantIterations(input: number): number {
  const KAPREKAR_CONSTANT = 6174;
  let iterations = 0;
  let currentNumber = input;

  console.log(`Starting from ${currentNumber}:`);

  while (currentNumber !== KAPREKAR_CONSTANT) {
    const ascending = parseInt(currentNumber.toString().split('').sort().join(''), 10);
    const descending = parseInt(currentNumber.toString().split('').sort().reverse().join(''), 10);
    currentNumber = descending - ascending;
    iterations++;
    console.log(`Iteration ${iterations}: ${currentNumber}`);
  }

  return iterations;
}

const userInput = getUserInput();

if (isValidInput(userInput)) {
  const iterations = kaprekarConstantIterations(userInput);
  console.log(`It takes ${iterations} iterations to reach Kaprekar's constant.`);
} else {
  console.log('Invalid input. Please enter a valid four-digit number.');
}


//test Cases for Kaprekar constant
// kaprekarConstantIterations(4567)---->3;
// IsValid(4567)---->true;
// IsValid(12345)---->false;
// IsValid('invalid')---->false;
// IsValid(666)---->false;
// IsValid(-09999)---->false;


