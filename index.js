//ONLY ODDS
//loop through array and return only odd numbers ezez
//input array here

//INPUT HERE IN NUMBERS
const numbers = [2, 4, 6, 8, 11, 20, 15, 22]
const newNumbers = []
//for i in array
for (let i=0; i < numbers.length; i ++) {
//if odd, add to new array
    if (numbers[i] % 2 === 1) {
        newNumbers.push(numbers[i])
    }
//if even, do nothing
}
//print new array
console.log(newNumbers)


//VOWEL VS CONSONANT
//create variables (input array (not an array), vowel, consonant)

//INPUT HERE IN INPUTARRAY
const inputArray = "hello"
let vowels = 0
let consonants = 0

//create loop
for (let i = 0; i < inputArray.length; i++) {
    //if vowel, add +1 to vowels
    //if consonant, add +1 to consonants
    if ((inputArray[i] === `a`) || (inputArray[i] === `e`) || (inputArray[i] === `i`) || (inputArray[i] === `o`) || (inputArray[i] === `u`)) {
        vowels++
    } else {
        consonants++
    }
}
//print f string `{input} has {consonants} consonants and {vowels} vowels.`
console.log(`${inputArray} has ${consonants} consonants and ${vowels} vowels`)


//REVERSE ARRAY
//input array, name it numbersArray

//INPUT HERE IN NUMBERSARRAY
numbersArray = [1, 2, 3]
//input new empty array
newArray = []
//for loop
for (let i = 0; i < numbersArray.length; i++) {
    newArray.unshift(numbersArray[i])
}
//cycle until done (for item in array)
//print new array
console.log(newArray);


//FIZZBUZZ
//print each number 1-100 on a new line.
number = 0
//loop for every number 1-100
while (number <= 100) {
    //if number/5 % === 0 and number % 3 === 0, print fizzbuzz
    if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log(`FizzBuzz`)
        //else if number/5 = 0r, print buzz
    } else if (number % 5 === 0) {
        console.log(`Buzz`)
        //else if number/3 = 0r, print fizz
    } else if (number % 3 === 0) {
        console.log(`Fizz`)
    } else {
        //else console log the number
        console.log(number)
    }
    number++
}