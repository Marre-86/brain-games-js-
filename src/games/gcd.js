import readlineSync from 'readline-sync';

const gcdIteration = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 20);

  console.log(`Question: ${num1} ${num2}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const smallNum = (num1 > num2) ? num2 : num1;
  const bigNum = (num1 > num2) ? num1 : num2;

  let rightAnswer = 0;

  for (let i = smallNum; i >= 1; i -= 1) {
    if ((smallNum % i === 0) && (bigNum % i === 0)) {
      rightAnswer = i;
      break;
    }
  }

  const answerBoolean = (parseInt(userAnswer, 10) === rightAnswer);

  if (answerBoolean === false) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answerBoolean;
};

export default gcdIteration;
