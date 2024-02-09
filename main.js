
// RETO 1:

// const calcArea = (figura) => {
//     // let figura = prompt("A qué figura quieres calcular su área? círculo, cuadrado o triángulo)")
//     const pi = 3.1416
//     switch (figura) {
//         case "circulo":
//             let radio = prompt("Dime el radio del círculo")
//             return `El área de un circulo de radio ${radio} es ${(pi * (radio ** 2)).toFixed(2)}`
//             break;
//         case "cuadrado":
//             let lado = prompt("Dime el lado del cuadrado")
//             return `El área de un cuadrado de lado ${lado} es ${lado ** 2}`
//             break;
//         case "triangulo":
//             let base = prompt("Dime la base del triángulo")
//             let altura = prompt("Ahora dime su altura")
//             return `El área de un triángulo de base ${base} y altura ${altura} es ${(base * altura) / 2}`
//         default:
//             return "datos incorrectos"
//     }
// }
// console.log(calcArea(prompt("A qué figura quieres calcular su área? circulo, cuadrado o triangulo)")))


// RETO 2:

// let numeros = parseInt(prompt("cuantos números quieres generar"))
// let num1 = parseInt(prompt("Desde que número"))
// let num2 = parseInt(prompt("Hasta que número"))

// const randomNumbers = () => {
//     let nums = []
//     let i = 0
//     while (i < numeros) {
//         nums.push(Math.floor((Math.random() * (num2-num1)) + num1).toFixed(2));
//         i++
//     }
//     return nums
// }

// console.log(randomNumbers(num1, num2, numeros))


// RETO 3:

// let num = prompt("Dime un número positivo y comprobaré si es un número primo")
// const numPrimo = (num) => {

//     if (num < 2) {
//         return false
//     }
//     for (i = 2; i <= num; i++) {
//         if (num % i === 0 && i !== num) {
//             return false
//         } else {
//             return true
//         }
//     }
// }
// numPrimo(num) ? console.log(`${num} es un número primo`) : console.log(`${num} NO es un número primo`)


// RETO 4:

// let num = prompt("A qué número quieres calcular su factorial?")
// let total = num
// const factorial = (num) => {
//     let i=1
//     while (i<num) {
//         total *= (num-i)
//         i++
//     }
//     return `${num}! es ${total}`
// }
// console.log(factorial(num))


// RETO 5:

// let num = parseInt(prompt("Qué número quieres convertir a binario?"))

// const numBinario = []
// const convBinario = (num) => {

//     while (num >= 1) {
//         if (num % 2 == 0) {
//             numBinario.unshift('0')
//         } else {
//             numBinario.unshift('1')
//             num = num - 1
//         }
//         num = num / 2
//     }
//     return numBinario
// }
// console.log(convBinario(num).join(""))


// RETO 6:

// let num = prompt("Escribe un número mayor que 0, y comprobamos cuantas cifras tiene?").trim()

//  if(!isNaN(num) && (num > 0) && num % parseInt(num) == 0){
//     console.log(num.length + " cifras")
//  } else {
//     console.log("No es un número entero positivo")
//  }


// RETO 7:

// let euros = parseFloat(prompt("¿Qué cantidad de euros quieres cambiar?"))
// let currencyTo = prompt("¿A qué moneda? dólar(d), yen (y) o libra (l)")

// const CurrencyConverter = (euros, currencyTo) => {
//     switch (currencyTo) {
//         case "d":
//             return "$" + (euros / 0.93).toFixed(2)
//             break;
//         case "y":
//             return (euros / 0.0062).toFixed(1) + "¥"
//             break;
//         case "l":
//             return "£" + (euros / 1.17).toFixed(2)
//             break;
//         default:
//             console.log("data is not correct")
//     }
// }

// console.log("Rates for 8/02/2024: 1$ = 0.93€ / 1¥ = 0.0062€ / 1£ = 1.17€")
// console.log("")

// console.log(`${euros}€ = ${CurrencyConverter(euros, currencyTo)}`)


// RETO 8:

// let numArray = []

// const Rellenar = () => {
//     while (numArray.length < 10) {

//         numArray.push(parseInt(prompt("Dime un número")))
//     }
// }
// Rellenar()

// const Mostrar = () => {
//     numArray.map( el =>
//         console.log(`Index: ${numArray.indexOf(el)} | Número: ${el}`)

//     )
// }
// Mostrar()


// RETO 9:

// let cantidad = parseInt(prompt("Dime cuántos números quieres"))
// let num1 = parseInt(prompt("Desde qué número"))
// let num2 = parseInt(prompt("Hasta qué número"))
// let num3 = num2 - num1
// let numArray = []


// rellena con números del 0 al 9
// const Rellenar09 = () => { 
//     while (numArray.length < cantidad) {
//         numArray.push(Math.floor(Math.random() * 10))
//     }
// }
// Rellenar09()

// rellena con números del num1 al num2
// const Rellenar = () => {
//     while (numArray.length < cantidad) {
//         numArray.push(Math.floor(Math.random() * num3 + num1))
//     }
// }
// Rellenar()

// const Mostrar = () => {
//     let total = 0
//     numArray.map(el => {
//         console.log(`Número (posición ${numArray.indexOf(el) + 1}): ${el}`)
//         total += el
//     })
//     console.log(`La suma de todos los números es: ${total}`)
// }
// Mostrar()


// RETO 10:

// let x = parseInt(prompt("Dime el largo del array"))
// let num1 = parseInt(prompt("Desde qué número"))
// let num2 = parseInt(prompt("Hasta qué número"))
//             // let x = parseInt(5)
//             // let num1 = parseInt(1)
//             // let num2 = parseInt(100)

// let arr = []


// const isPrimo = (num) => {

//     for (i = 2; i < num; i++) {
//         return (num % i !== 0) ? true : false
//     }

// }

// while (arr.length < x) {
//     let numRandom = Math.floor(Math.random() * (num2 - num1) + num1)

//     const isPrimo = (num) => {
//         for (i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     if (isPrimo(numRandom) == true) {
//         arr.push(parseInt(numRandom))
//     }
//     // console.log("Random num: "+numRandom, "| Array length: "+ arr.length)
// }

// console.log(`Array of ${x} random prime numbers between ${num1} and ${num2}: ${arr}`)
// arr.sort();

// console.log(`The biggest number from the array is: [${arr.slice(-1)}]`)


// RETO 11:

// let x = parseInt(prompt("Dime el largo de los arrays"))
// let num1 = parseInt(prompt("Desde qué número"))
// let num2 = parseInt(prompt("Hasta qué número"))
//         // let x = parseInt(5)
//         // let num1 = parseInt(1)
//         // let num2 = parseInt(100)

// let arr1 = []
// let arr2 = []
// let totalArr =[]

// for (let i = 0; i < x; i++) {
//     let numRandom1 = Math.floor(Math.random() * (num2 - num1) + num1)
//     let numRandom2 = Math.floor(Math.random() * (num2 - num1) + num1)
//     arr1.push(parseInt(numRandom1))
//     arr2.push(parseInt(numRandom2))
// }

// const MultiplyArray = arr1.map((_, index) => {
//     const arrId = arr2[index];
//     totalArr.push(arr1[index] * arrId)
// });

// console.log(`Array number 1: ${arr1}`)
// console.log(`Array number 1: ${arr2}`)
// console.log(`Result of multiplying both arrays by index: ${totalArr}`)


// RETO 12:


let x = parseInt(prompt("Dime el largo del array"))
let z = parseInt(prompt("Escoge un número del 0 al 10").trim())
let arrResult = []

while (arrResult.length < x) {
    for (let i = 0; i < x; i++) {
        let numRandom = Math.floor(Math.random() * 299 + 1)

        if (z == numRandom.toString().slice(-1)) {
            arrResult.push(parseInt(numRandom))
        }
    }
}
console.log(arrResult)