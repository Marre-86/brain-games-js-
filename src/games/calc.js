import readlineSync from 'readline-sync';

const calcIteration = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 20);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];

  console.log(`Question: ${num1} ${sign} ${num2}`);

  const userAnswer = readlineSync.question('Your answer: ');

  let rightAnswer = 0;

  switch (sign) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    default:
      rightAnswer = num1 * num2;
  }

  const answerBoolean = (parseInt(userAnswer, 10) === rightAnswer);

  if (answerBoolean === false) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answerBoolean;
};

export default calcIteration;
