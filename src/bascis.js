var varibale1 = 42
const variable2 = "Hello"
let varibale3 = true

// Datatypen
const number = 42
const string = "Hello World"
const boolean = true
const object = { key : "value"}
const nullExample = null
let undefinedExample // undefined
undefinedExample = "string"
const listen = ["hello", "world"]

// Arithmetische Operatoren

const addition = 5 + 3
const substraktion = 10 - 4
const multi = 3 * 3
const div = 20 / 4

// Vergleichsoperatoren

const isEqual = 5 === "5" // false (strict)
const isEqual2 = 5 == "5" // true (loose equaltiy)
const isLessThan = 10 < 20 // true
const isGreaterThan = 15 > 5 // true

// Logische Operatoren

const andOpertator = true && false // false (beide werten müssen true sein für true ergebnis)
const orOperator = true || false // true
const notOperator = !true // false

// Zuweisungsoperatoren
let x = 10
x += 5
x -= 5

// Kontroll

// if & else

let condition = true

if (condition) {
    console.log("Bedingung ist wahr")
} else {
    console.log("Bedingung ist falsch")
}


// switch

let option = "B"

switch (option) {
    case "A":
        console.log("option A ausgewählt")
        break
    case "B":
        console.log("option B ausgewählt")
        break
    default:
         console.log("Das ist nicht erlaubt")
}

// for
for (let i = 0; i < 5; i++) {
    console.log("Scheifendurchgang # " + i)
}

// while

let j = 0;
while (j > 3) {
    console.log("Scheifendurchgang #" + j)
    j++
}

// truthy/falsy
// falsy is false, 0, "", null, undefined, or NaN
// everything else is truthy