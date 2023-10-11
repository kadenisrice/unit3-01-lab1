"use strict"


// THE DEETS
const fullName = "Kaden Rice";
let age = 19;
const birthday = "July 9th";
let pineapplePizza = false;
const lifeEvents = ["I was born in Bellevue, Washington", "I went to Olympic College in Bremerton, WA", "I moved to Michigan October 22nd, 2022", "I make music"];

// IF ELSE VIBES
if(pineapplePizza === false){
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`)
} else {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`)
}

// LOOP CORE
// "i" is referenced to the index!
for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0
while (true){
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    if(randomNumber !== 5) {
        counter++
        console.log(`${randomNumber} is not five, ur bad lololololol`)
    } else {
        // means that random number is exactly 5
        counter++
        console.log(`yay! 5 === 5. it took ${counter} iterations to randomly generate the number 5!`)
        break;
    };

}

const hours = 40
const wage = 20
let paycheck = hours * wage;

if(hours <= 40){

} else {
    const extraHours = hours - 40;
    const overTimeWage =  (wage * 1.5) * extraHours 
    paycheck = (40 * wage) + overTimeWage
}
console.log("paycheck: $" + paycheck)
