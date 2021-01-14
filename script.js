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
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 98,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   }
// }
// mark.calcBMI()
// john.calcBMI()

// console.log(mark.BMI, john.BMI)

// if (mark.BMI > john.BMI) {
//   console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than  Joan's (${john.BMI})`)
// } else {
//   console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than  Mark's (${mark.BMI})`)
// }

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
// }

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  1991,
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]
const types = []

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i])

  // types[i] = typeof jonas[i]
  types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}

console.log(ages)

// continure and break
console.log('--ONLY STRINGS=--')
for (let i = 0; i < years.length; i++) {
  if (typeof jonas[i] !== 'string') continue
  console.log(jonas[i], typeof jonas[i])
}

console.log('--Break WITH NUMBER---')
for (let i = 0; i < years.length; i++) {
  if (typeof jonas[i] !== 'number') break
  console.log(jonas[i], typeof jonas[i])
}
*/

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  1991,
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

// 0,1....4
// 4,3,...0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}--------`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`)
  }
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`)
}
let rep = 1
while (rep <= 10) {
  console.log(`While: Lifting weight repetition ${rep} 🏋️‍♀️`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end...')
}
*/
/*
Let's improve Steven's trip calcculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill valuse
2. Create empty arrays for  the tips and the totals ('tips and 'total')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values(bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculation!

Test DATA: 22, 295, 176, 440, 37, 105, 10, 1100,86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' with takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge(we haven't done this befoe)! Here si how to solve it:
  4.1: First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have ask values added together.
  4.2: To calculate the average, divide the sum you calculated before the length of the array(because that's the number of element)
  4.3 Call the function with the 'totals' array
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1110, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const calcSum = function (tips, bill) {
  return tips + bill
}
const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

for (let i = 0; i < bills.length; i++) {
  // const tips = []
  // const totals = []
  tips.push(calcTip(bills[i]))
  totals.push(calcSum(bills[i], tips[i]))

  // for (let i = 0; i < bills.length; i++) {
  //   totals[i] = totals.push(tips[i] + bills[i])
  // }
  console.log(`tips ${i} is ${tips} bills ${i} is ${bills[i]}, and total(${i}) is ${totals[i]} and the Average is （${calcAverage(totals)}）`)
}

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// console.log(`You total value is ${bill + tip}`)
console.log(`the Average is （${calcAverage(totals)}）`)
