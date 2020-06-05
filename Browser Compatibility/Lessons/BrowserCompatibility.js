var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;




// -------------------------------------------------------------------------------------------------------------------

// steps for transpiling


// 1) Initialize your project using npm init and create a directory called src
// 2) Install babel dependencies by running
//     npm install babel-cli -D
//     npm install babel-preset-env -D
// 3) Create a .babelrc file inside your project and add the following code inside it:
    // {
    //   "presets": ["env"]
    // }
// 4) Add the following script to your scripts object in package.json:
//      "build": "babel src -d lib"
// 5) Run "npm run build" whenever you want to transpile your code from your src to lib directories.