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

function logger() {
  console.log('My name is Jonas')
}

// calling / running / invoking function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

// Juice 需要建立一個變數來儲存
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
// console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)
