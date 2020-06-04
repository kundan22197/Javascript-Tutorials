let raceNumber = Math.floor(Math.random() * 1000);

var early_registered = true;

var age = 20;

if (age > 18 && early_registered) {
  raceNumber += 1000;
}

if (age > 18 && early_registered) {
  console.log(`You will race at 9:30 am and race number is ${raceNumber}`);
} else if (age > 18 && !early_registered) {
  console.log(`You will race at 11:00 am and race number is ${raceNumber}`);
} else if (age < 18) {
  console.log(`You will run at 12:30 pm and your race number is ${raceNumber}`);
} else {
  console.log('See the registration desk');
}