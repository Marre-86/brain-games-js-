import readlineSync from 'readline-sync';
import _ from 'lodash';

const progressionIteration = () => {
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const hiddenKey = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2));
  const row = [];
  let rightAnswer = 0;

  for (let i = 1; i <= 10; i += 1) {
    if (i !== hiddenKey) {
      row.push(start + step * (i - 1));
    } else {
      row.push('..');
      rightAnswer = start + step * (i - 1);
    }
  }

  console.log(`Question: ${row.join(' ')}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const answerBoolean = (parseInt(userAnswer, 10) === rightAnswer);

  if (answerBoolean === false) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answerBoolean;
};

export default progressionIteration;
