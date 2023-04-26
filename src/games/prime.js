import readlineSync from 'readline-sync';

const isPrime = (num) => {
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeIteration = () => {
  const num = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(2)) + Math.ceil(2));

  console.log(`Question: ${num}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const answerBoolean = (userAnswer === 'yes' && isPrime(num)) || (userAnswer === 'no' && !isPrime(num));
  if (answerBoolean === false) {
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answerBoolean;
};

export default primeIteration;
