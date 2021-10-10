var readline = require('readline-sync');

var name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");


const callOut = () => {
    console.log("Hi " + name + ", nice to meet you.");
}




callOut()