const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing it? ', (answer3) => {
      rl.question('What is your favorite food? ', (answer4) => {
        rl.question('What is your favorite restaurant eat said food? ', (answer5) => {
          rl.question('What is your favorite team sport? ', (answer6) => {
            rl.question('Who do you think will win that sports major championship? ', (answer7) => {
  console.log(`${answer1} listens to ${answer3} while doing ${answer2}. ${answer1}'s favorite food is ${answer4} which he likes to get at ${answer5}. Their favorite sport is ${answer6} and they believe ${answer7} will win the championship.`);

  rl.close();
            });
          });
        });
      });
    });
  });
});





//Output : (q1) loves listening to (q3) while doing (q2). (q1)s favorite food is (q4) which he likes to get at (q5). 
//          Their favorite sport is (q6) and they believe (q7) will win the championship.

// 1: What is your name?
// 2: What is an activity you like doing?
// 3: What do you listen to while doing it?
// 4: What is your favorite food
// 5: What is your favorite restaurant eat said food?
// 6: What is your favorite team sport?
// 7: Who do you think will win that sports major championship?

