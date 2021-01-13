'use strict'
/*
let hasDeiversLicense = false
const passTest = true

if (passTest) hasDeiversLicense = true
if (hasDeiversLicense) console.log('I can drive')

// const interface = 'Audio'
// const private = 543
// const if = 23;
*/

// function logger() {
//   console.log('My name is Jonas')
// }

// // calling / running / invoking function
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

// // Juice 需要建立一個變數來儲存
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// // console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear
}

const age1 = calcAge1(1991)

// Function expression : function is value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirmnet = 65 - age
  // return retirmnet
  return `${firstName} retires in ${retirmnet} years`
}
console.log(yearsUntilRetirement(1991, 'Jonas'))
*/

/*
function cutFruitPieces (fruit) {
  return fruit * 4
}

function fruitProcessor (apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges. `
  return juice
}

console.log(fruitProcessor(2, 3))
*/

// Object
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas)

const nameKey = 'Name'
console.log('first' + nameKey)
console.log('last' + nameKey)

// console.log(jonas. 'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName,age,job,and friends')

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log('Wrong request! Choose between firstName, lastName,age,job,and friends')
}

jonas.location = 'Portugal'
jonas.twitter = '@jonasschmedtman'
console.log(jonas)

// Challenge
// "Jonas has 3 friends, and his best friend is called Micel"
jonas.bestFriend = 'Mical'
console.log(`${jonas.fristName} has${jonas.friends.length} friends ,and his best friend is called${jonas.friends[0]}`)
