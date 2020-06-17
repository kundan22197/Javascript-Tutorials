// async functions always return a promise.

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    })
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  })
  
  // Write your code below:
  async function withAsync(num) {
    if (num === 0) return 'zero';
    else return 'not zero';
  }
  
  
  withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  });


 


// -----------------------------------------------------------------------------------------------------------





// async await
// await is used to halt the execution and get the resolved value in a variable
//  if await is not used, the variable just stores the promise and not the resolved value.


// library.js

/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?')
      setTimeout(() => {
        console.log('Should I make ramen...?')
        setTimeout(() => {
          console.log('Should I make eggs...?')
          setTimeout(() => {
            console.log('Should I make chicken...?')
            resolve('beans')
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  })
  }
  
  module.exports = brainstormDinner


  // app.js

  const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}

// nativePromiseDinner();
// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();


 


// -----------------------------------------------------------------------------------------------------------






// chaining in async await just like chaining in promises

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);  
}


makeBeans();



 


// -----------------------------------------------------------------------------------------------------------




// handling errors in async await

const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`)
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();



 


// -----------------------------------------------------------------------------------------------------------





// Handling independent promises (concurrency)

// if we have completely independent promises, we need not halt for each promise.
// we can just let all the promises resolve together and use await while using the result(printing here).


let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinner() {
 let vegetablePromise = steamBroccoli();
 let starchPromise = cookRice();
 let proteinPromise = bakeChicken();
 let sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();



 


// -----------------------------------------------------------------------------------------------------------



//promises.all  (concurrency)

// await promises.all

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()





