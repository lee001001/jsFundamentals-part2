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

/*
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

*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDeiversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear
  // }

  // calcAge: function (birthYear) {
  //   console.log(this)
  //   return 2037 - this.birthYear
  // }

  calcAge: function (birthYear) {
    this.age = 2037 - this.birthYear
    console.log(this.age)
    return this.age
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDeiversLicense ? 'a' : 'no'} deiver's license`
  }
}

console.log(jonas.calcAge())
console.log(jonas.age)
console.log(jonas.getSummary())

// Challenge
// 'Jonas is a 46-year old teacher, and he has a  driver's license'
// if (jonas.hasDeiversLicense) {
//   console.log(`Jonas is a ${jonas}-year old teacher, and he has a driver's license`) else {
//     console.log(`Jonas is a ${jonas}-year old teacher, and he has no driver's license`)
//   }
// }
*/
// Codeing Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time , let's use objects to implement the calculatons! Remeber: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name , mass m and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).Store the BMI value to a peoperty, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Exampele: "John's BMI (28.3) is higher than Mark's (23.9)"

Test Data: Mark weights 78 kg and is 1.69m tall, John weights 98 kg and is 1.95m tall

*/
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height)
    return this.BMI
  }
}

const john = {
  fullName: 'John Smith',
  mass: 98,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height)
    return this.BMI
  }
}
mark.calcBMI()
john.calcBMI()

console.log(mark.BMI, john.BMI)

if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than  Joan's (${john.BMI})`)
} else {
  console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than  Mark's (${mark.BMI})`)
}
