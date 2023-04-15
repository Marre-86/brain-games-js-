import readlineSync from 'readline-sync';

const evenIteration = () => {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const answerBoolean = (userAnswer === 'yes' && randomNum % 2 === 0) || (userAnswer === 'no' && randomNum % 2 !== 0);
  if (answerBoolean === false) {
    const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
  return answerBoolean;
};

export default evenIteration;
