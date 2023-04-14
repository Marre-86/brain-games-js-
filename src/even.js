import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const iteration = () => {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return (userAnswer === 'yes' && randomNum % 2 === 0) || (userAnswer === 'no' && randomNum % 2 !== 0);
};

const gameProcess = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const answer = iteration();
    if (answer === false) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
