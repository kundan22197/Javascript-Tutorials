// Write your function here:
const canIVote = age => {
    if (age >= 18) return true;
    return false;
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(canIVote(19)) // Should print true
  
  // We encourage you to add more function calls of your own to test your code!

  

  

  //-----------------------------------------------------------------------------------------------------------------------







  // Write your function here:

const agreeOrDisagree = (st1, st2) => st1 === st2 ? 'You agree!' : 'You disagree!'




// Uncomment the line below when you're ready to try out your function
// console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!


  

  

  //-----------------------------------------------------------------------------------------------------------------------






// Write your function here:

function lifePhase(age) {
    if (age >= 0 && age <= 3) return 'baby';
    if (age >= 4 && age <= 12) return 'child';
    if (age >= 13 && age <= 19) return 'teen';
    if (age >= 20 && age <= 64) return 'adult';
    if (age >= 65 && age <= 140) return 'senior citizen';
    if (age < 0 || age > 140) return 'This is not a valid age';
  }
  
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(lifePhase(5)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!




  

  //-----------------------------------------------------------------------------------------------------------------------




// Write your function here:

const finalGrade = (num1, num2, num3) => {
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) return 'You have entered an invalid grade.';
    var avg = (num1 + num2 + num3)/3;
    if (avg >= 0 && avg <= 59) return 'F';
    if (avg >= 60 && avg <= 69) return 'D';
    if (avg >= 70 && avg <= 79) return 'C';
    if (avg >= 80 && avg <= 89) return 'B';
    if (avg >= 90 && avg <= 100) return 'A';
  }
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!






  //-----------------------------------------------------------------------------------------------------------------------





  // Write your function here:

function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
  }
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!





  //-----------------------------------------------------------------------------------------------------------------------



  const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6) + 1
      let die2 = Math.floor(Math.random() * 6) + 1
      return die1 + die2
  }





  //-----------------------------------------------------------------------------------------------------------------------






  // Write your function here:


function calculateWeight(earthWeight, planet) {
    switch(planet) {
      case 'Mercury':
        return earthWeight * 0.378;
        break;
      case 'Venus':
        return earthWeight * 0.907;
        break;
      case 'Mars':
        return earthWeight * 0.377;
        break;
      case 'Jupiter':
        return earthWeight * 2.36;
        break;
      case 'Saturn':
        return earthWeight * 0.916;
        break;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
        break;
    }
  }

  
  // Uncomment the line below when you're ready to try out your function
  // console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!





  //-----------------------------------------------------------------------------------------------------------------------




// Write your function here:

const truthyOrFalsy = val => val ? true : false; 





// Uncomment the line below when you're ready to try out your function
// console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!





  //-----------------------------------------------------------------------------------------------------------------------




// Write your function here:

const numImaginaryFriends = friends => Math.round(friends*0.33);




// Uncomment the line below when you're ready to try out your function
// console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!





  //-----------------------------------------------------------------------------------------------------------------------




  // Write your function here:

const sillySentence = (st1, st2, st3) => `I am so ${st1} because I ${st2} coding! Time to write some more awesome ${st3}!`;




// Uncomment the line below when you're ready to try out your function
// console.log(sillySentence('excited', 'love', 'functions')) 

// We encourage you to add more function calls of your own to test your code!





  //-----------------------------------------------------------------------------------------------------------------------





  // Write your function here:

function howOld(age, year) {
    var birth_year = 2020 - age;
  
    if (year > 2020) return `You will be ${year-birth_year} in the year ${year}`;
    if (year < 2020 && year < birth_year) return `The year ${year} was ${birth_year-year} years before you were born`;
    if (year < 2020 && year >= birth_year) return `You were ${year-birth_year} in the year ${year}`;
  }
  
  
  
  // Once your function is written, write function calls to test your code!




  //-----------------------------------------------------------------------------------------------------------------------




  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

  



  //-----------------------------------------------------------------------------------------------------------------------





  // Write your function here:

const tipCalculator = (quality, total) => {
    switch(quality) {
      case 'bad':
        return 0.05*total;
        break;
      case 'ok':
        return 0.15*total;
        break;
      case 'good':
        return 0.20*total;
        break;
      case 'excellent':
        return 0.30*total;
        break;
      default:
        return 0.18*total;
        break;
    }
  }
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  



  //-----------------------------------------------------------------------------------------------------------------------





// Write your function here:

const toEmoticon = st => {
    switch (st) {
      case 'shrug':
        return '|_{"}_|';
        break;
      case 'smiley face':
        return ':)';
        break;
      case 'frowny face':
        return ':(';
        break;
      case 'winky face':
        return ';)';
        break;
      case 'heart':
        return '<3';
        break;
      default:
        return '|_(* ~ *)_|';
        break;
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  


